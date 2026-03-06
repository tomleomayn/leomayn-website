/**
 * Supabase REST helpers for planner_leads table.
 * Uses raw fetch against PostgREST — no SDK needed.
 */

const SUPABASE_URL = process.env.SUPABASE_URL?.trim()
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY?.trim()
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim()

interface PlannerLeadInsert {
  email: string
  name: string
  company: string
  company_website?: string
  role?: string
  turnover: string
  qualified: boolean
  source?: string
  attio_record_id?: string
}

interface PlannerLeadUpdate {
  firm_type?: string
  team_size?: string
  strategic_focus?: unknown
  pain_points?: unknown
  process_knowledge?: string
  data_foundations?: string
  ai_adoption?: string
  top_archetypes?: unknown
  business_case?: unknown
  report_id?: string
  attio_record_id?: string
  report_generated_at?: string
}

export async function insertPlannerLead(data: PlannerLeadInsert): Promise<string | null> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error('Supabase not configured — missing SUPABASE_URL or SUPABASE_ANON_KEY')
    return null
  }

  const response = await fetch(`${SUPABASE_URL}/rest/v1/planner_leads`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    console.error('Supabase insert failed:', response.status, await response.text().catch(() => ''))
    return null
  }

  const rows = await response.json()
  return rows?.[0]?.id ?? null
}

// --- Resource leads ---

interface ResourceLeadInsert {
  email: string
  name: string
  resource_slug: string
}

interface ResourceDownloadResult {
  success: boolean
  signedUrl?: string
}

export async function insertResourceLeadAndSign(
  data: ResourceLeadInsert,
  storagePath: string
): Promise<ResourceDownloadResult> {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    console.error('Supabase not configured')
    return { success: false }
  }

  // Upsert lead (unique on email + slug)
  const insertRes = await fetch(`${SUPABASE_URL}/rest/v1/resource_leads`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'resolution=merge-duplicates,return=minimal',
    },
    body: JSON.stringify(data),
  })

  if (!insertRes.ok) {
    console.error('Resource lead insert failed:', insertRes.status, await insertRes.text().catch(() => ''))
    return { success: false }
  }

  // Generate signed URL (valid for 1 hour)
  const signRes = await fetch(
    `${SUPABASE_URL}/storage/v1/object/sign/${storagePath}`,
    {
      method: 'POST',
      headers: {
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ expiresIn: 3600 }),
    }
  )

  if (!signRes.ok) {
    console.error('Signed URL failed:', signRes.status, await signRes.text().catch(() => ''))
    return { success: false }
  }

  const signData = await signRes.json()
  const signedUrl = `${SUPABASE_URL}/storage/v1${signData.signedURL}`

  return { success: true, signedUrl }
}

export async function updatePlannerLead(email: string, data: PlannerLeadUpdate): Promise<boolean> {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    console.error('Supabase not configured — missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY')
    return false
  }

  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/planner_leads?email=eq.${encodeURIComponent(email)}&order=created_at.desc&limit=1`,
    {
      method: 'PATCH',
      headers: {
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(data),
    }
  )

  if (!response.ok) {
    console.error('Supabase update failed:', response.status, await response.text().catch(() => ''))
    return false
  }

  return true
}
