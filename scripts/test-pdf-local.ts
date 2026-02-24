/**
 * Local test: build HTML template from fixture data and render to PDF.
 *
 * Usage:
 *   npx tsx scripts/test-pdf-local.ts [fixture-name]
 *
 * Examples:
 *   npx tsx scripts/test-pdf-local.ts              # uses latest fixtures
 *   npx tsx scripts/test-pdf-local.ts emsere-v2    # uses input-emsere-v2 + output-emsere-v2
 *   npx tsx scripts/test-pdf-local.ts everybody    # uses input-everybody + output matching
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs'
import { join } from 'path'
import { buildPdfHtml, type PdfTemplateData } from '../lib/planner/pdf-html-template'
import { renderPdfWithPuppeteer } from '../lib/planner/pdf-renderer'

const FIXTURES_DIR = join(__dirname, 'test-fixtures')
const fixtureName = process.argv[2]

let outputPath: string
let inputPath: string | null = null

if (fixtureName) {
  // Named fixture — look for exact match
  const namedOutput = join(FIXTURES_DIR, `output-${fixtureName}.json`)
  const namedInput = join(FIXTURES_DIR, `input-${fixtureName}.json`)
  if (!existsSync(namedOutput)) {
    console.error(`Output fixture not found: output-${fixtureName}.json`)
    process.exit(1)
  }
  outputPath = namedOutput
  inputPath = existsSync(namedInput) ? namedInput : null
} else {
  // No name — pick latest output, then find matching input by timestamp prefix
  const outputFiles = readdirSync(FIXTURES_DIR)
    .filter(f => f.startsWith('output-'))
    .sort()
    .reverse()

  if (outputFiles.length === 0) {
    console.error('No output fixtures found. Run test-generate.py first.')
    process.exit(1)
  }
  outputPath = join(FIXTURES_DIR, outputFiles[0])

  // Try to match input by same timestamp or name
  const outputBase = outputFiles[0].replace('output-', '').replace('.json', '')
  const matchingInput = `input-${outputBase}.json`
  if (existsSync(join(FIXTURES_DIR, matchingInput))) {
    inputPath = join(FIXTURES_DIR, matchingInput)
  }
}

console.log(`Loading fixture: ${outputPath}`)
const output = JSON.parse(readFileSync(outputPath, 'utf-8'))

// Find input fixture — use matched path or fall back to latest
const inputFiles = !inputPath ? readdirSync(FIXTURES_DIR)
  .filter(f => f.startsWith('input-') && !f.includes('default'))
  .sort()
  .reverse() : []

let inputData: Record<string, unknown> = {}
if (inputPath) {
  console.log(`Loading input: ${inputPath}`)
  inputData = JSON.parse(readFileSync(inputPath, 'utf-8'))
} else if (inputFiles.length > 0) {
  const fallbackInput = join(FIXTURES_DIR, inputFiles[0])
  console.log(`Loading input (fallback): ${fallbackInput}`)
  inputData = JSON.parse(readFileSync(fallbackInput, 'utf-8'))
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
  jobTitle: qualification?.jobTitle,
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
