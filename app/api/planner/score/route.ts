import { NextResponse } from 'next/server'
import { diagnosticSchema } from '@/lib/planner/types'
import { scoreArchetypes } from '@/lib/planner/scoring'

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
    const result = diagnosticSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: result.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const scoringResult = scoreArchetypes(result.data)

    return NextResponse.json(scoringResult, { status: 200 })
  } catch (error) {
    console.error('Score route error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
