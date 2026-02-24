import type { Browser } from 'puppeteer-core'
import { existsSync } from 'fs'
import { platform } from 'os'
import { LOGO_DATA_URI } from './pdf-assets'

const PDF_TIMEOUT_MS = 30_000

const IS_LOCAL = platform() === 'darwin' || platform() === 'win32'

// macOS Chrome paths for local development
const LOCAL_CHROME_PATHS = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
]

async function getExecutablePath(): Promise<string> {
  if (IS_LOCAL) {
    for (const p of LOCAL_CHROME_PATHS) {
      if (existsSync(p)) return p
    }
    throw new Error('No Chrome/Chromium found. Install Google Chrome.')
  }
  const chromium = await import('@sparticuz/chromium')
  return await chromium.default.executablePath()
}

async function getLaunchArgs(): Promise<string[]> {
  if (IS_LOCAL) {
    return ['--no-sandbox', '--disable-setuid-sandbox']
  }
  const chromium = await import('@sparticuz/chromium')
  return chromium.default.args
}

// Puppeteer footer template — rendered by Chrome outside the page content area
const footerTemplate = `
  <div style="width:100%;padding:0 18mm;font-family:Manrope,sans-serif;font-size:7pt;display:flex;justify-content:space-between;align-items:center;border-top:1px solid #f7c9c0;padding-top:4px">
    <img src="${LOGO_DATA_URI}" style="width:60px;height:auto" />
    <span style="color:#9da7b0;flex:1;text-align:center">leomayn.com</span>
    <span style="color:#9da7b0">Page <span class="pageNumber"></span> of <span class="totalPages"></span></span>
  </div>
`

export async function renderPdfWithPuppeteer(html: string): Promise<Buffer> {
  const puppeteer = await import('puppeteer-core')

  let browser: Browser | null = null
  try {
    browser = await puppeteer.default.launch({
      args: await getLaunchArgs(),
      defaultViewport: { width: 794, height: 1123 },
      executablePath: await getExecutablePath(),
      headless: true,
    })

    const page = await browser.newPage()
    await page.setContent(html, { waitUntil: 'load' })

    const pdfBuffer = await Promise.race([
      page.pdf({
        format: 'A4',
        printBackground: true,
        displayHeaderFooter: true,
        headerTemplate: '<span></span>',
        footerTemplate,
        margin: { top: '20mm', bottom: '24mm', left: '18mm', right: '18mm' },
      }),
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error('PDF generation timed out')), PDF_TIMEOUT_MS)
      ),
    ])

    await page.close()
    return Buffer.from(pdfBuffer)
  } finally {
    if (browser) await browser.close()
  }
}
