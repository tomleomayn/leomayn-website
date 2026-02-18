/**
 * Lightweight company website scraper for report personalisation.
 * Extracts title, meta description, and leading paragraph text.
 * Runs server-side in the Next.js API route.
 */

const SCRAPE_TIMEOUT_MS = 5_000

function normaliseUrl(url: string): string {
  let normalised = url.trim()
  if (!/^https?:\/\//i.test(normalised)) {
    normalised = `https://${normalised}`
  }
  return normalised
}

function extractTitle(html: string): string {
  const match = html.match(/<title[^>]*>([^<]+)<\/title>/i)
  return match?.[1]?.trim() ?? ''
}

function extractMetaDescription(html: string): string {
  const match = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i)
    ?? html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["']/i)
  return match?.[1]?.trim() ?? ''
}

function extractLeadingText(html: string): string {
  // Strip script/style tags first
  const cleaned = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<nav[\s\S]*?<\/nav>/gi, '')
    .replace(/<header[\s\S]*?<\/header>/gi, '')
    .replace(/<footer[\s\S]*?<\/footer>/gi, '')

  // Extract <p> tag content
  const paragraphs: string[] = []
  const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi
  let match
  while ((match = pRegex.exec(cleaned)) !== null && paragraphs.length < 6) {
    const text = match[1].replace(/<[^>]+>/g, '').trim()
    if (text.length > 20) {
      paragraphs.push(text)
    }
  }

  return paragraphs.join(' ').slice(0, 600)
}

async function fetchPage(url: string): Promise<string | null> {
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), SCRAPE_TIMEOUT_MS)

    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Leomayn-Report-Bot/1.0',
        Accept: 'text/html',
      },
    })

    clearTimeout(timeout)

    if (!response.ok) return null
    return await response.text()
  } catch {
    return null
  }
}

export async function scrapeCompanyContext(websiteUrl: string): Promise<string | undefined> {
  try {
    const url = normaliseUrl(websiteUrl)

    // Fetch homepage
    const html = await fetchPage(url)
    if (!html) return undefined

    const title = extractTitle(html)
    const description = extractMetaDescription(html)
    const leadText = extractLeadingText(html)

    // Also try /about if it exists (non-blocking, short timeout)
    let aboutText = ''
    try {
      const aboutUrl = new URL('/about', url).toString()
      const aboutHtml = await fetchPage(aboutUrl)
      if (aboutHtml) {
        aboutText = extractLeadingText(aboutHtml)
      }
    } catch {
      // Ignore — about page is optional
    }

    const parts: string[] = []
    if (title) parts.push(`Company: ${title}`)
    if (description) parts.push(`Description: ${description}`)
    if (leadText) parts.push(`Homepage: ${leadText}`)
    if (aboutText) parts.push(`About: ${aboutText}`)

    if (parts.length === 0) return undefined

    return parts.join('. ')
  } catch {
    return undefined
  }
}
