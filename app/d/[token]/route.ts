/**
 * Secure document serving route.
 * Validates a UUID token against Supabase, logs access, returns HTML.
 * URL: /d/{token}
 */

const SUPABASE_URL = process.env.SUPABASE_URL?.trim()
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim()

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

const SECURITY_HEADERS = {
  'X-Robots-Tag': 'noindex, nofollow',
  'Cache-Control': 'no-store, no-cache, must-revalidate, private',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'no-referrer',
}

const ERROR_PAGE = (title: string, message: string) => `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8">
<meta name="robots" content="noindex, nofollow">
<meta name="referrer" content="no-referrer">
<title>${title}</title>
<style>body{font-family:system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;background:#fffcfa;color:#1a3d56}div{text-align:center;max-width:400px}h1{font-size:20px;font-weight:600;margin-bottom:8px}p{font-size:15px;color:#7fa3bc}</style>
</head><body><div><h1>${title}</h1><p>${message}</p></div></body></html>`

async function supabaseFetch(path: string, options: RequestInit = {}) {
  return fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: SUPABASE_SERVICE_ROLE_KEY!,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return new Response(ERROR_PAGE('Unavailable', 'Service not configured.'), {
      status: 500,
      headers: { 'Content-Type': 'text/html; charset=utf-8', ...SECURITY_HEADERS },
    })
  }

  if (!UUID_RE.test(token)) {
    return new Response(ERROR_PAGE('Access denied', 'This link is not valid.'), {
      status: 403,
      headers: { 'Content-Type': 'text/html; charset=utf-8', ...SECURITY_HEADERS },
    })
  }

  // Look up token + joined document
  const tokenRes = await supabaseFetch(
    `document_tokens?token=eq.${token}&select=id,expires_at,revoked_at,client_documents(html_content)`
  )

  if (!tokenRes.ok) {
    return new Response(ERROR_PAGE('Unavailable', 'Something went wrong.'), {
      status: 500,
      headers: { 'Content-Type': 'text/html; charset=utf-8', ...SECURITY_HEADERS },
    })
  }

  const rows = await tokenRes.json()
  const row = rows?.[0]

  if (!row) {
    return new Response(ERROR_PAGE('Access denied', 'This link is not valid. Please check the URL or contact the sender.'), {
      status: 403,
      headers: { 'Content-Type': 'text/html; charset=utf-8', ...SECURITY_HEADERS },
    })
  }

  if (row.revoked_at) {
    return new Response(ERROR_PAGE('Link revoked', 'This link has been revoked. Please contact the sender for an updated link.'), {
      status: 403,
      headers: { 'Content-Type': 'text/html; charset=utf-8', ...SECURITY_HEADERS },
    })
  }

  if (row.expires_at && new Date(row.expires_at) < new Date()) {
    return new Response(ERROR_PAGE('Link expired', 'This link has expired. Please contact the sender for an updated link.'), {
      status: 403,
      headers: { 'Content-Type': 'text/html; charset=utf-8', ...SECURITY_HEADERS },
    })
  }

  const htmlContent = row.client_documents?.html_content
  if (!htmlContent) {
    return new Response(ERROR_PAGE('Unavailable', 'Document not found.'), {
      status: 500,
      headers: { 'Content-Type': 'text/html; charset=utf-8', ...SECURITY_HEADERS },
    })
  }

  // Log access (fire and forget)
  const userAgent = _request.headers.get('user-agent') || 'unknown'
  const ip = _request.headers.get('x-forwarded-for') || 'unknown'
  supabaseFetch('document_access_log', {
    method: 'POST',
    headers: { Prefer: 'return=minimal' },
    body: JSON.stringify({ token_id: row.id, user_agent: userAgent, ip_address: ip }),
  }).catch(() => {})

  return new Response(htmlContent, {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8', ...SECURITY_HEADERS },
  })
}
