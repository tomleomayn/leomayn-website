/**
 * Shared Attio CRM helper.
 * Uses PUT /v2/objects/people/records with matching_attribute to
 * create-or-update a person record idempotently by email.
 */

interface AttioPersonData {
  email: string
  name: string
  company?: string
  description?: string
}

interface AttioUpsertResult {
  success: boolean
  recordId?: string
}

export async function upsertAttioPerson(data: AttioPersonData): Promise<AttioUpsertResult> {
  const apiKey = process.env.ATTIO_API_KEY
  if (!apiKey) {
    console.error('[Attio] ATTIO_API_KEY not set, skipping upsert')
    return { success: false }
  }
  const firstName = data.name.split(' ')[0]
  const lastName = data.name.split(' ').slice(1).join(' ') || ''

  // Build description with company name included (company is a record reference
  // in Attio People, not a text field — so we capture it in the description)
  const descParts: string[] = []
  if (data.company) descParts.push(`Company: ${data.company}`)
  if (data.description) descParts.push(data.description)
  const description = descParts.join('\n')

  const values: Record<string, unknown[]> = {
    email_addresses: [{ email_address: data.email }],
    name: [{ first_name: firstName, last_name: lastName, full_name: data.name }],
  }

  if (description) {
    values.description = [{ value: description }]
  }

  const response = await fetch('https://api.attio.com/v2/objects/people/records?matching_attribute=email_addresses', {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: {
        values,
      },
    }),
  })

  if (!response.ok) {
    const body = await response.text().catch(() => '')
    console.error('[Attio] Upsert failed:', response.status, body)
    return { success: false }
  }

  const result = await response.json()
  const recordId = result?.data?.id?.record_id
  console.log('[Attio] Upsert success, record:', recordId)
  return { success: true, recordId }
}
