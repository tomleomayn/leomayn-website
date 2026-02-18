import { NextResponse } from 'next/server'
import { after } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { kv } from '@vercel/kv'
import { v4 as uuidv4 } from 'uuid'
import {
  qualificationSchema,
  diagnosticSchema,
  sizingSchema,
  type GeneratedReport,
} from '@/lib/planner/types'
import { scoreArchetypes } from '@/lib/planner/scoring'
import { calculateBusinessCase } from '@/lib/planner/business-case'
import { buildSystemPrompt, buildUserPrompt, loadFirmTypeContent } from '@/lib/planner/prompt'
import { validateReportSchema, escapeHtml } from '@/lib/planner/sanitise'
import { scrapeCompanyContext } from '@/lib/planner/scrape-company'

export const maxDuration = 300

const ALLOWED_ORIGINS = [
  'https://leomayn.com',
  'https://www.leomayn.com',
  'http://localhost:3000',
  'http://localhost:3001',
]

const KV_REPORT_TTL = 60 * 60 * 24 * 30 // 30 days in seconds
const KV_DAILY_CAP_KEY = 'planner:daily-cap'
const DAILY_GENERATION_LIMIT = 50
const PER_EMAIL_DAILY_LIMIT = 3
const ANTHROPIC_TIMEOUT = 45_000 // 45 seconds

async function checkRateLimits(email: string): Promise<{ allowed: boolean; reason?: string }> {
  try {
    // Global daily cap
    const today = new Date().toISOString().slice(0, 10)
    const dailyKey = `${KV_DAILY_CAP_KEY}:${today}`
    const dailyCount = (await kv.get<number>(dailyKey)) ?? 0

    if (dailyCount >= DAILY_GENERATION_LIMIT) {
      return { allowed: false, reason: 'Daily generation limit reached. Please try again tomorrow.' }
    }

    // Per-email limit
    const emailKey = `planner:email:${email}:${today}`
    const emailCount = (await kv.get<number>(emailKey)) ?? 0

    if (emailCount >= PER_EMAIL_DAILY_LIMIT) {
      return { allowed: false, reason: 'You have reached the maximum reports per day. Please try again tomorrow.' }
    }

    // Increment counters
    await kv.incr(dailyKey)
    await kv.expire(dailyKey, 60 * 60 * 24) // 24 hour TTL
    await kv.incr(emailKey)
    await kv.expire(emailKey, 60 * 60 * 24)

    return { allowed: true }
  } catch {
    // If KV is unavailable, allow the request (fail open for availability)
    return { allowed: true }
  }
}

export async function POST(request: Request) {
  try {
    // Origin validation
    const origin = request.headers.get('origin')
    if (origin && !ALLOWED_ORIGINS.includes(origin)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    // Derive base URL for email links (use origin if available, fall back to production)
    const baseUrl = origin && ALLOWED_ORIGINS.includes(origin)
      ? origin
      : 'https://leomayn.com'

    // Parse and validate all inputs
    const body = await request.json()

    // Dev-mode input capture for test replay
    if (process.env.NODE_ENV === 'development') {
      try {
        const fs = await import('fs/promises')
        const path = await import('path')
        const fixturePath = path.join(process.cwd(), 'scripts', 'test-fixtures')
        await fs.mkdir(fixturePath, { recursive: true })
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
        await fs.writeFile(
          path.join(fixturePath, `input-${timestamp}.json`),
          JSON.stringify(body, null, 2)
        )
      } catch {
        // Non-blocking — don't fail the request if capture fails
      }
    }

    const qualResult = qualificationSchema.safeParse(body.qualification)
    if (!qualResult.success) {
      return NextResponse.json({ error: 'Invalid qualification data' }, { status: 400 })
    }

    const diagResult = diagnosticSchema.safeParse(body.diagnostic)
    if (!diagResult.success) {
      return NextResponse.json({ error: 'Invalid diagnostic data' }, { status: 400 })
    }

    const sizingResult = sizingSchema.safeParse(body.sizing)
    if (!sizingResult.success) {
      return NextResponse.json({ error: 'Invalid sizing data' }, { status: 400 })
    }

    const qualification = qualResult.data
    const diagnostic = diagResult.data
    const sizing = sizingResult.data

    // Rate limiting (per-email + global)
    const rateLimitCheck = await checkRateLimits(qualification.email)
    if (!rateLimitCheck.allowed) {
      return NextResponse.json({ error: rateLimitCheck.reason }, { status: 429 })
    }

    // Company website scrape (non-blocking — undefined on failure)
    let companyContext: string | undefined
    if (qualification.companyWebsite) {
      companyContext = await scrapeCompanyContext(qualification.companyWebsite)
    }

    // Deterministic scoring
    const scoringResult = scoreArchetypes(diagnostic)
    const topArchetypes = scoringResult.topArchetypes

    // Business case calculation
    const businessCase = calculateBusinessCase(sizing, diagnostic)

    // Load firm-type RAG content (graceful fallback)
    const firmTypeContent = await loadFirmTypeContent(diagnostic.firmType)

    // Build AI prompts
    const systemPrompt = buildSystemPrompt(topArchetypes, firmTypeContent, companyContext)
    const userPrompt = buildUserPrompt(
      qualification,
      diagnostic,
      sizing,
      topArchetypes,
      businessCase,
      scoringResult.allScores,
      companyContext
    )

    // Call Anthropic
    const anthropic = new Anthropic()
    const reportId = uuidv4()
    let report: GeneratedReport

    try {
      report = await callAnthropicWithRetry(
        anthropic,
        systemPrompt,
        userPrompt,
        reportId,
        businessCase
      )
    } catch (aiError) {
      console.error('AI generation failed:', aiError)

      // Store inputs in KV for retry
      const retryToken = uuidv4()
      try {
        await kv.set(
          `planner:retry:${retryToken}`,
          {
            qualification,
            diagnostic,
            sizing,
            status: 'pending',
            createdAt: new Date().toISOString(),
          },
          { ex: 60 * 60 * 24 } // 24 hour TTL
        )
      } catch {
        // KV unavailable — can't store for retry
      }

      return NextResponse.json(
        { status: 'failed', retryToken, error: 'Report generation failed. You can retry using the button below.' },
        { status: 500 }
      )
    }

    // Store report in KV BEFORE returning response (teardown fix)
    try {
      await kv.set(
        `planner:report:${reportId}`,
        {
          report,
          email: qualification.email,
          company: qualification.company,
          name: qualification.name,
          qualification,
          diagnostic,
          companyContext,
          createdAt: new Date().toISOString(),
        },
        { ex: KV_REPORT_TTL }
      )
    } catch (kvError) {
      console.error('KV store failed:', kvError)
      // Continue — the report is still returned to the client
    }

    // Async work via after() — PDF email, Attio enrichment
    after(async () => {
      // Priority 1: Email with PDF
      try {
        if (process.env.RESEND_API_KEY) {
          const { Resend } = await import('resend')
          const resend = new Resend(process.env.RESEND_API_KEY)

          await resend.emails.send({
            from: 'Leomayn <website@leomayn.com>',
            to: qualification.email,
            subject: `Your AI Deployment Planner: ${escapeHtml(qualification.company)}`,
            html: buildEmailHtml(qualification.name, qualification.company, reportId, baseUrl),
          })
        }
      } catch (emailError) {
        console.error('Email delivery failed:', emailError)
      }

      // Priority 2: Attio enrichment
      try {
        if (process.env.ATTIO_API_KEY && process.env.ATTIO_WEBSITE_LEADS_LIST_ID) {
          await enrichAttio(qualification, diagnostic, topArchetypes, businessCase)
        }
      } catch (attioError) {
        console.error('Attio enrichment failed:', attioError)
      }
    })

    return NextResponse.json({
      status: 'success',
      report,
      reportId,
    })
  } catch (error) {
    console.error('Generate route error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}

async function callAnthropicWithRetry(
  anthropic: Anthropic,
  systemPrompt: string,
  userPrompt: string,
  reportId: string,
  businessCase: import('@/lib/planner/types').BusinessCase,
  attempt = 1
): Promise<GeneratedReport> {
  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-5-20250929',
    max_tokens: 4000,
    temperature: 0.3,
    system: systemPrompt,
    messages: [{ role: 'user', content: userPrompt }],
  })

  const textBlock = response.content.find(c => c.type === 'text')
  if (!textBlock || textBlock.type !== 'text') {
    throw new Error('No text response from AI')
  }

  // Extract JSON — handle potential markdown code fences
  let jsonText = textBlock.text.trim()
  if (jsonText.startsWith('```')) {
    jsonText = jsonText.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '')
  }

  let parsed: unknown
  try {
    parsed = JSON.parse(jsonText)
  } catch {
    if (attempt < 2) {
      // Retry with error feedback
      const retryPrompt = `${userPrompt}\n\nIMPORTANT: Your previous response was not valid JSON. Return ONLY valid JSON with no markdown formatting, no code fences, no commentary. The response must be parseable by JSON.parse().`
      return callAnthropicWithRetry(anthropic, systemPrompt, retryPrompt, reportId, businessCase, 2)
    }
    throw new Error('AI output was not valid JSON after retry')
  }

  // Inject report metadata
  const withMeta = {
    ...(parsed as Record<string, unknown>),
    id: reportId,
    businessCase,
    generatedAt: new Date().toISOString(),
  }

  try {
    return validateReportSchema(withMeta)
  } catch (validationError) {
    if (attempt < 2) {
      const retryPrompt = `${userPrompt}\n\nIMPORTANT: Your previous response had schema validation errors. Ensure: workflows array has exactly 3 items, each with all required fields (archetypeId, name, whyThisMatters, impactPotential, implementationComplexity, threeConditionsCheck, currentState, futureState, considerations, prerequisites, pitfalls). impactPotential and implementationComplexity must be "high", "medium", or "low". threeConditionsCheck values (impact, complexity, learning) must be "green", "amber", or "red" — NOT booleans. Include a priorityMapIntro string (2 sentences).`
      return callAnthropicWithRetry(anthropic, systemPrompt, retryPrompt, reportId, businessCase, 2)
    }
    throw validationError
  }
}

function buildEmailHtml(name: string, company: string, reportId: string, baseUrl: string): string {
  const safeName = escapeHtml(name)
  const safeCompany = escapeHtml(company)
  const pdfUrl = `${baseUrl}/api/planner/pdf/${reportId}`

  return `
    <div style="font-family: Manrope, sans-serif; max-width: 600px; margin: 0 auto; color: #1a3d56;">
      <div style="padding: 32px 0; border-bottom: 3px solid #f7c9c0;">
        <strong style="font-size: 18px; letter-spacing: 0.12em;">LEOMAYN</strong>
      </div>
      <div style="padding: 32px 0;">
        <p>Hello ${safeName},</p>
        <p>Your AI Deployment Planner report for ${safeCompany} is ready.</p>
        <p><a href="${pdfUrl}" style="display: inline-block; background: #1a3d56; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600;">Download your PDF report</a></p>
        <p style="color: #9da7b0; font-size: 14px;">This link will be available for 30 days.</p>
        <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 24px 0;" />
        <p>Want to go deeper? Our Diagnose engagement applies this same methodology with full access to your team and data.</p>
        <p><a href="https://calendly.com/tom-leomayn/30min" style="color: #1a3d56; font-weight: 600;">Book a discovery call</a></p>
      </div>
      <div style="padding: 16px 0; border-top: 1px solid #e5e5e5; font-size: 12px; color: #9da7b0;">
        <p>Leomayn Limited | leomayn.com</p>
      </div>
    </div>
  `
}

async function enrichAttio(
  qualification: import('@/lib/planner/types').QualificationData,
  diagnostic: import('@/lib/planner/types').DiagnosticData,
  topArchetypes: import('@/lib/planner/types').RankedArchetype[],
  businessCase: import('@/lib/planner/types').BusinessCase
) {
  const enrichmentNotes = [
    `Diagnostic completed: ${new Date().toISOString()}`,
    `Firm type: ${diagnostic.firmType}`,
    `Team size: ${diagnostic.teamSize}`,
    `Strategic focus: ${diagnostic.strategicFocus.primary} (primary), ${diagnostic.strategicFocus.secondary} (secondary)`,
    `Pain points: ${diagnostic.painPoints.map(p => `${p.area}:${p.symptom}`).join(', ')}`,
    `Process knowledge: ${diagnostic.processKnowledge}`,
    `Data foundations: ${diagnostic.dataFoundations}`,
    `AI adoption: ${diagnostic.aiAdoption}`,
    `Top archetypes: ${topArchetypes.map(a => `${a.name} (${a.compositeScore})`).join(', ')}`,
    `Annual cost: ${new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(businessCase.totalAnnualCost)}`,
    `Recovery range: ${new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(businessCase.conservativeRecovery.low)} - ${new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(businessCase.conservativeRecovery.high)}`,
  ].join('\n')

  // Search for existing lead by email, then update
  const searchResponse = await fetch('https://api.attio.com/v2/objects/people/records/query', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.ATTIO_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      filter: {
        email_addresses: { contains: qualification.email },
      },
    }),
  })

  if (searchResponse.ok) {
    const searchData = await searchResponse.json()
    if (searchData.data?.length > 0) {
      const personId = searchData.data[0].id.record_id
      await fetch(`https://api.attio.com/v2/objects/people/records/${personId}`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${process.env.ATTIO_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            values: {
              description: [{ value: enrichmentNotes }],
            },
          },
        }),
      })
    }
  }
}
