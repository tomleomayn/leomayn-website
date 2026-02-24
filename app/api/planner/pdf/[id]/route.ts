import { NextResponse } from 'next/server'
import { kv } from '@vercel/kv'
import { buildPdfHtml } from '@/lib/planner/pdf-html-template'
import { renderPdfWithPuppeteer } from '@/lib/planner/pdf-renderer'
import type { GeneratedReport, QualificationData, DiagnosticData, RankedArchetype } from '@/lib/planner/types'

export const maxDuration = 120

interface StoredReport {
  report: GeneratedReport
  email: string
  company: string
  name: string
  qualification?: QualificationData
  diagnostic?: DiagnosticData
  topArchetypes?: RankedArchetype[]
  companyContext?: string
  createdAt: string
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    // Validate UUID format
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id)) {
      return NextResponse.json({ error: 'Invalid report ID' }, { status: 400 })
    }

    // Fetch from KV
    const stored = await kv.get<StoredReport>(`planner:report:${id}`)

    if (!stored) {
      return NextResponse.json(
        { error: 'Report not found or has expired' },
        { status: 404 }
      )
    }

    // Validate required fields
    if (!stored.report || !stored.company || !stored.name) {
      return NextResponse.json(
        { error: 'Stored report data is incomplete' },
        { status: 500 }
      )
    }

    // Generate PDF via Puppeteer
    const html = buildPdfHtml({
      report: stored.report,
      companyName: stored.company,
      recipientName: stored.name,
      jobTitle: stored.qualification?.jobTitle,
      qualification: stored.qualification,
      diagnostic: stored.diagnostic,
      topArchetypes: stored.topArchetypes,
      companyContext: stored.companyContext,
    })

    const pdfBuffer = await renderPdfWithPuppeteer(html)

    return new Response(new Uint8Array(pdfBuffer), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="AI-Deployment-Report-${stored.company.replace(/[^a-zA-Z0-9]/g, '-')}.pdf"`,
        'Cache-Control': 'private, max-age=3600',
      },
    })
  } catch (error) {
    console.error('PDF generation error:', error)
    const message = error instanceof Error ? error.message : String(error)
    const stack = error instanceof Error ? error.stack?.split('\n').slice(0, 5).join('\n') : ''
    return NextResponse.json({ error: 'PDF generation failed', detail: message, stack }, { status: 500 })
  }
}
