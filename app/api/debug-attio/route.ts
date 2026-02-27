import { NextResponse } from 'next/server'

// Temporary debug endpoint — remove after diagnosis
export async function POST(request: Request) {
  const apiKey = process.env.ATTIO_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'No ATTIO_API_KEY' })
  }

  const { email, name } = await request.json()
  const firstName = name.split(' ')[0]
  const lastName = name.split(' ').slice(1).join(' ') || ''

  const values = {
    email_addresses: [{ email_address: email }],
    name: [{ first_name: firstName, last_name: lastName, full_name: name }],
    description: [{ value: 'Debug test from production' }],
  }

  const body = JSON.stringify({ data: { values } })

  const response = await fetch('https://api.attio.com/v2/objects/people/records?matching_attribute=email_addresses', {
    method: 'PUT',
    cache: 'no-store',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body,
  })

  const responseText = await response.text()
  let parsed
  try { parsed = JSON.parse(responseText) } catch { parsed = responseText }

  return NextResponse.json({
    sentBody: body,
    status: response.status,
    attioResponse: parsed,
    apiKeyPrefix: apiKey.slice(0, 8) + '...',
  })
}
