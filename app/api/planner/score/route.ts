import { NextResponse } from 'next/server'
import { diagnosticSchema } from '@/lib/planner/types'
import { scoreArchetypes } from '@/lib/planner/scoring'

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
    // Internal API key bypass — skip origin validation
    const authHeader = request.headers.get('authorization')
    const isInternal = authHeader?.startsWith('Bearer ')
      && process.env.PLANNER_INTERNAL_KEY
      && authHeader.slice(7) === process.env.PLANNER_INTERNAL_KEY

    // Origin validation (skip for internal calls)
    if (!isInternal) {
      const origin = request.headers.get('origin')
      if (origin && !isOriginAllowed(origin)) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
      }
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
