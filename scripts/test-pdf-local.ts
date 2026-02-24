/**
 * Local test: build HTML template from fixture data and render to PDF.
 *
 * Usage:
 *   npx tsx scripts/test-pdf-local.ts
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join } from 'path'
import { buildPdfHtml, type PdfTemplateData } from '../lib/planner/pdf-html-template'
import { renderPdfWithPuppeteer } from '../lib/planner/pdf-renderer'

const FIXTURES_DIR = join(__dirname, 'test-fixtures')

// Find the latest output fixture
const outputFiles = readdirSync(FIXTURES_DIR)
  .filter(f => f.startsWith('output-'))
  .sort()
  .reverse()

if (outputFiles.length === 0) {
  console.error('No output fixtures found. Run test-generate.py first.')
  process.exit(1)
}

const outputPath = join(FIXTURES_DIR, outputFiles[0])
console.log(`Loading fixture: ${outputPath}`)
const output = JSON.parse(readFileSync(outputPath, 'utf-8'))

// Find latest input fixture for qualification/diagnostic
const inputFiles = readdirSync(FIXTURES_DIR)
  .filter(f => f.startsWith('input-') && !f.includes('default'))
  .sort()
  .reverse()

let inputData: Record<string, unknown> = {}
if (inputFiles.length > 0) {
  const inputPath = join(FIXTURES_DIR, inputFiles[0])
  console.log(`Loading input: ${inputPath}`)
  inputData = JSON.parse(readFileSync(inputPath, 'utf-8'))
}

const report = output.report

const qualification = (inputData.qualification ?? {
  name: 'Sarah Mitchell',
  email: 'test@leomayn.com',
  company: 'Meridian Consulting',
  role: 'director-vp',
  turnover: '5m-10m',
  consentGiven: true,
}) as PdfTemplateData['qualification']

const diagnostic = (inputData.diagnostic ?? undefined) as PdfTemplateData['diagnostic']

const topArchetypes = output.topArchetypes ?? report.workflows?.map(
  (wf: { archetypeId: string; name: string }, i: number) => ({
    id: wf.archetypeId,
    name: wf.name,
    compositeScore: 20 - i * 3,
    signalScore: 12 - i * 2,
    goalScore: 5,
    feasibilityModifier: 2,
    foundationModifier: 1,
    matchedSignals: [],
  })
)

const templateData: PdfTemplateData = {
  report,
  companyName: output.company ?? qualification?.company ?? 'Test Company',
  recipientName: output.name ?? qualification?.name ?? 'Test User',
  qualification,
  diagnostic,
  topArchetypes,
  companyContext: output.companyContext,
}

console.log('Building HTML...')
const html = buildPdfHtml(templateData)

const htmlPath = join(__dirname, 'test-output.html')
writeFileSync(htmlPath, html)
console.log(`HTML saved to: ${htmlPath}`)

async function main() {
  console.log('Rendering PDF...')
  const pdfBuffer = await renderPdfWithPuppeteer(html)

  const pdfPath = join(__dirname, 'test-output.pdf')
  writeFileSync(pdfPath, pdfBuffer)
  console.log(`PDF saved to: ${pdfPath}`)
}

main().catch(err => {
  console.error('PDF render failed:', err)
  process.exit(1)
})
