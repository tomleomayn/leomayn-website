import { NextResponse } from 'next/server'
import { qualificationSchema } from '@/lib/planner/types'

function escapeHtml(text: string): string {
  const htmlEntities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (char) => htmlEntities[char])
}

const ALLOWED_ORIGINS = [
  'https://leomayn.com',
  'https://www.leomayn.com',
  'http://localhost:3000',
  'http://localhost:3001',
]

export async function POST(request: Request) {
  try {
    // Origin validation
    const origin = request.headers.get('origin')
    if (origin && !ALLOWED_ORIGINS.includes(origin)) {
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

    const { name, email, company, role, roleOther, turnover, consentGiven } = result.data
    const qualified = turnover !== 'under-1m'

    // Attio lead creation — fire-and-forget
    if (process.env.ATTIO_API_KEY && process.env.ATTIO_WEBSITE_LEADS_LIST_ID) {
      try {
        const displayRole = roleOther || role
        const consentTimestamp = new Date().toISOString()

        await fetch(
          `https://api.attio.com/v2/lists/${process.env.ATTIO_WEBSITE_LEADS_LIST_ID}/entries`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${process.env.ATTIO_API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              data: {
                values: {
                  name: [{ value: escapeHtml(name) }],
                  email_addresses: [{ email_address: email }],
                  company: [{ value: escapeHtml(company) }],
                  notes: [
                    {
                      value: `Role: ${escapeHtml(displayRole)}\nTurnover: ${turnover}\nConsent: ${consentGiven} at ${consentTimestamp}\nQualified: ${qualified}`,
                    },
                  ],
                  source: [{ value: 'AI Deployment Planner' }],
                },
              },
            }),
          }
        )
      } catch (attioError) {
        console.error('Attio integration error:', attioError)
      }
    }

    return NextResponse.json({ qualified }, { status: 200 })
  } catch (error) {
    console.error('Qualify route error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
