import { NextResponse } from 'next/server'
import { qualificationSchema } from '@/lib/planner/types'
import { upsertAttioPerson } from '@/lib/attio'
import { insertPlannerLead } from '@/lib/supabase'

const ALLOWED_ORIGINS = [
  'https://leomayn.com',
  'https://www.leomayn.com',
  'http://localhost:3000',
  'http://localhost:3001',
]

function isOriginAllowed(origin: string): boolean {
  if (ALLOWED_ORIGINS.includes(origin)) return true
  if (origin.endsWith('.vercel.app') && origin.includes('leomayn-website')) return true
  return false
}

export async function POST(request: Request) {
  try {
    // Origin validation
    const origin = request.headers.get('origin')
    if (origin && !isOriginAllowed(origin)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const body = await request.json()
    const result = qualificationSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: result.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const { name, email, company, companyWebsite, role, roleOther, turnover, consentGiven } = result.data
    const qualified = turnover !== 'under-1m'
    const displayRole = roleOther || role
    const consentTimestamp = new Date().toISOString()

    // Attio person upsert — fire-and-forget
    const attioPromise = upsertAttioPerson({
      email,
      name,
      company,
      description: `Role: ${displayRole}\nTurnover: ${turnover}\nConsent: ${consentGiven} at ${consentTimestamp}\nQualified: ${qualified}\nSource: AI Deployment Planner`,
    }).catch((err) => {
      console.error('Attio upsert error:', err)
      return { success: false, recordId: undefined }
    })

    // Supabase lead insert — fire-and-forget
    const supabasePromise = insertPlannerLead({
      email,
      name,
      company,
      company_website: companyWebsite || undefined,
      role: displayRole,
      turnover,
      qualified,
      attio_record_id: undefined,
    }).catch((err) => {
      console.error('Supabase insert error:', err)
      return null
    })

    // Wait for both in parallel (best-effort — don't block response on failure)
    const [attioResult] = await Promise.all([attioPromise, supabasePromise])

    // If we got an Attio record ID, update the Supabase row (best-effort)
    if (attioResult?.recordId) {
      // Non-blocking — don't await
      import('@/lib/supabase').then(({ updatePlannerLead }) =>
        updatePlannerLead(email, { attio_record_id: attioResult.recordId }).catch(() => {})
      )
    }

    return NextResponse.json({ qualified }, { status: 200 })
  } catch (error) {
    console.error('Qualify route error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
