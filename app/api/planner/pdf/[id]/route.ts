import { NextResponse } from 'next/server'
import { kv } from '@vercel/kv'
import { renderToBuffer } from '@react-pdf/renderer'
import type { DocumentProps } from '@react-pdf/renderer'
import React from 'react'
import { PlannerPdfDocument } from '@/lib/planner/pdf-template'
import type { GeneratedReport, QualificationData, DiagnosticData } from '@/lib/planner/types'

export const maxDuration = 60

interface StoredReport {
  report: GeneratedReport
  email: string
  company: string
  name: string
  qualification?: QualificationData
  diagnostic?: DiagnosticData
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

    // Generate PDF on-demand
    // Type assertion: PlannerPdfDocument returns <Document> but TS can't infer through the wrapper
    const pdfBuffer = await renderToBuffer(
      React.createElement(PlannerPdfDocument, {
        report: stored.report,
        companyName: stored.company,
        recipientName: stored.name,
        qualification: stored.qualification,
        diagnostic: stored.diagnostic,
        companyContext: stored.companyContext,
      }) as unknown as React.ReactElement<DocumentProps>
    )

    // Return PDF (convert Buffer to Uint8Array for Response compatibility)
    return new Response(new Uint8Array(pdfBuffer), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="AI-Deployment-Plan-${stored.company.replace(/[^a-zA-Z0-9]/g, '-')}.pdf"`,
        'Cache-Control': 'private, max-age=3600',
      },
    })
  } catch (error) {
    console.error('PDF generation error:', error)
    return NextResponse.json({ error: 'PDF generation failed' }, { status: 500 })
  }
}
