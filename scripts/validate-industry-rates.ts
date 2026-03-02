/**
 * Validates the industry YAML wiring for the planner.
 * Covers: YAML parsing, archetype mapping, recovery rate resolution,
 * business case overrides, and strategic considerations loading.
 *
 * Run: npx tsx scripts/validate-industry-rates.ts
 */

import * as fs from 'fs/promises'
import * as path from 'path'
import * as yaml from 'js-yaml'
import { ARCHETYPES } from '../lib/planner/constants'
import { resolveRecoveryRates, loadStrategicConsiderations } from '../lib/planner/industry-rates'
import { calculateBusinessCase } from '../lib/planner/business-case'
import type { SizingEntry, DiagnosticData } from '../lib/planner/types'

const YAML_DIR = path.join(process.cwd(), 'lib', 'planner', 'industry-context')

const INDUSTRY_FILES = ['generic', 'accounting', 'agency', 'consulting', 'law', 'technical']

const FIRM_TYPES = ['accounting', 'agency', 'consulting', 'law', 'technical', 'internal-services', 'other']

// Archetypes that have YAML entries in industry files
const ARCHETYPES_WITH_YAML = [
  'client-onboarding', 'proposal-production', 'management-reporting',
  'project-delivery', 'document-processing', 'client-communications',
  'research-and-analysis', 'sales-pipeline', 'compliance-qa',
  'marketing-operations', 'people-operations', 'resource-allocation',
  'knowledge-management',
]

// Archetypes that intentionally have no YAML entry (use archetype defaults)
const ARCHETYPES_WITHOUT_YAML = ['meeting-intelligence', 'time-invoicing']

// Mapping from archetype ID to YAML key (must match industry-rates.ts)
const ARCHETYPE_TO_YAML_KEY: Record<string, string> = {
  'client-onboarding': 'client-onboarding',
  'meeting-intelligence': 'meeting-intelligence',
  'proposal-scoping': 'proposal-production',
  'time-invoicing': 'time-invoicing',
  'management-reporting': 'management-reporting',
  'project-delivery': 'project-delivery',
  'document-processing': 'document-processing',
  'client-communications': 'client-communications',
  'research-analysis': 'research-and-analysis',
  'sales-pipeline': 'sales-pipeline',
  'compliance-qa': 'compliance-qa',
  'marketing-ops': 'marketing-operations',
  'people-ops': 'people-operations',
  'resource-planning': 'resource-allocation',
}

interface TestResult {
  name: string
  passed: boolean
  detail: string
}

const results: TestResult[] = []

function pass(name: string, detail = '') {
  results.push({ name, passed: true, detail })
}

function fail(name: string, detail: string) {
  results.push({ name, passed: false, detail })
}

// ── Test 1a: YAML parse ──────────────────────────────────────

async function testYamlParse() {
  for (const file of [...INDUSTRY_FILES, 'sources']) {
    const filePath = path.join(YAML_DIR, `${file}.yaml`)
    try {
      const content = await fs.readFile(filePath, 'utf-8')
      const data = yaml.load(content) as Record<string, unknown>
      if (!data || typeof data !== 'object') {
        fail(`1a. YAML parse: ${file}`, 'Parsed to null or non-object')
        continue
      }
      pass(`1a. YAML parse: ${file}`)
    } catch (e) {
      fail(`1a. YAML parse: ${file}`, String(e))
    }
  }
}

// ── Test 1b: Archetype mapping coverage ──────────────────────

function testArchetypeMappingCoverage() {
  const archetypeIds = ARCHETYPES.map(a => a.id)
  const mappedIds = Object.keys(ARCHETYPE_TO_YAML_KEY)

  for (const id of archetypeIds) {
    if (mappedIds.includes(id)) {
      pass(`1b. Mapping exists: ${id}`)
    } else {
      fail(`1b. Mapping exists: ${id}`, `No YAML key mapping for archetype "${id}"`)
    }
  }

  // Check for stale mappings (keys in mapping that are not in ARCHETYPES)
  for (const id of mappedIds) {
    if (!archetypeIds.includes(id)) {
      fail(`1b. Stale mapping: ${id}`, `Mapping exists but no archetype with id "${id}"`)
    }
  }
}

// ── Test 1c: YAML key coverage per industry ──────────────────

async function testYamlKeyCoverage() {
  for (const file of INDUSTRY_FILES) {
    const filePath = path.join(YAML_DIR, `${file}.yaml`)
    const content = await fs.readFile(filePath, 'utf-8')
    const data = yaml.load(content) as { recoveryRates?: Record<string, unknown> }
    const rates = data?.recoveryRates ?? {}
    const yamlKeys = Object.keys(rates)

    // Check that all expected keys exist
    for (const expectedKey of ARCHETYPES_WITH_YAML) {
      if (yamlKeys.includes(expectedKey)) {
        pass(`1c. ${file} has ${expectedKey}`)
      } else {
        fail(`1c. ${file} has ${expectedKey}`, `Missing recovery rate entry`)
      }
    }

    // Verify archetypes without YAML are genuinely absent
    for (const absentKey of ARCHETYPES_WITHOUT_YAML) {
      if (yamlKeys.includes(absentKey)) {
        fail(`1c. ${file} lacks ${absentKey}`, `Unexpected entry — should use archetype default`)
      }
    }
  }
}

// ── Test 1d: Recovery rate resolution ────────────────────────

async function testRecoveryRateResolution() {
  for (const firmType of FIRM_TYPES) {
    const rates = await resolveRecoveryRates(firmType)

    // Every archetype should have a rate
    for (const archetype of ARCHETYPES) {
      const rate = rates[archetype.id]
      if (rate === undefined) {
        fail(`1d. ${firmType}/${archetype.id}`, 'No rate returned')
        continue
      }
      if (rate < 0 || rate > 1) {
        fail(`1d. ${firmType}/${archetype.id}`, `Rate ${rate} out of range [0,1]`)
        continue
      }
      pass(`1d. ${firmType}/${archetype.id}: ${(rate * 100).toFixed(0)}%`)
    }
  }

  // Specific checks: industry rates should differ from archetype defaults
  const agencyRates = await resolveRecoveryRates('agency')
  const genericRates = await resolveRecoveryRates('other') // falls back to generic.yaml

  // Marketing ops: agency should have a different rate from generic
  const agencyMktDefault = ARCHETYPES.find(a => a.id === 'marketing-ops')?.recoveryRate ?? 0
  const agencyMktRate = agencyRates['marketing-ops']
  if (agencyMktRate !== agencyMktDefault) {
    pass(`1d. Agency marketing-ops differs from default (${(agencyMktRate * 100).toFixed(0)}% vs ${(agencyMktDefault * 100).toFixed(0)}%)`)
  } else {
    fail(`1d. Agency marketing-ops differs from default`, `Rate ${agencyMktRate} equals archetype default — YAML not loading?`)
  }

  // Management reporting: generic should use generic.yaml midpoint, not archetype default
  const genericMrDefault = ARCHETYPES.find(a => a.id === 'management-reporting')?.recoveryRate ?? 0
  const genericMrRate = genericRates['management-reporting']
  if (genericMrRate !== genericMrDefault) {
    pass(`1d. Generic mgmt-reporting differs from archetype default (${(genericMrRate * 100).toFixed(0)}% vs ${(genericMrDefault * 100).toFixed(0)}%)`)
  } else {
    fail(`1d. Generic mgmt-reporting differs from archetype default`, `Rate matches — YAML may not be loading`)
  }

  // meeting-intelligence and time-invoicing should use archetype defaults everywhere
  for (const noYamlId of ['meeting-intelligence', 'time-invoicing']) {
    const defaultRate = ARCHETYPES.find(a => a.id === noYamlId)?.recoveryRate ?? 0
    for (const firmType of FIRM_TYPES) {
      const rates = await resolveRecoveryRates(firmType)
      if (rates[noYamlId] !== defaultRate) {
        fail(`1d. ${firmType}/${noYamlId} fallback`, `Expected default ${defaultRate}, got ${rates[noYamlId]}`)
      }
    }
    pass(`1d. ${noYamlId} uses archetype default across all firm types`)
  }
}

// ── Test 1e: Scoring regression ──────────────────────────────
// (Delegates to existing validate-scoring.ts — tested separately)

// ── Test 1f: Business case with overrides ────────────────────

function testBusinessCaseOverrides() {
  const diagnostic: DiagnosticData = {
    firmType: 'agency',
    teamSize: '51-200',
    strategicFocus: { primary: 'capacity', secondary: 'speed' },
    painPoints: [
      { area: 'project-delivery', symptom: 'scope-creep' },
      { area: 'communications', symptom: 'handoff-friction' },
    ],
    processKnowledge: 'partially-documented',
    dataFoundations: 'mixed',
    aiAdoption: 'individual',
    techEnvironment: 'disconnected',
    billableSplit: 50,
  }

  const sizing: SizingEntry[] = [
    { archetypeId: 'management-reporting', peopleInvolved: '4-8', weeklyHours: '5-15', costPerPerson: 'tier-2', freeText: '' },
  ]

  // Without overrides — uses archetype default (0.55)
  const caseDefault = calculateBusinessCase(sizing, diagnostic)
  const defaultRecovery = caseDefault.perArea[0].recoveryRange

  // With overrides — use a clearly different rate to avoid rounding ambiguity
  const overrides = { 'management-reporting': 0.25 }
  const caseOverridden = calculateBusinessCase(sizing, diagnostic, overrides)
  const overriddenRecovery = caseOverridden.perArea[0].recoveryRange

  if (defaultRecovery.low !== overriddenRecovery.low || defaultRecovery.high !== overriddenRecovery.high) {
    pass(`1f. Business case overrides change recovery: default £${defaultRecovery.low}-${defaultRecovery.high} vs override £${overriddenRecovery.low}-${overriddenRecovery.high}`)
  } else {
    fail(`1f. Business case overrides change recovery`, `Recovery unchanged — overrides not applied`)
  }
}

// ── Test 1g: Strategic considerations loading ────────────────

async function testStrategicConsiderations() {
  for (const firmType of FIRM_TYPES) {
    const content = await loadStrategicConsiderations(firmType)
    if (content && content.length > 100) {
      pass(`1g. Strategic considerations: ${firmType} (${content.length} chars)`)
    } else if (content) {
      fail(`1g. Strategic considerations: ${firmType}`, `Content suspiciously short (${content?.length} chars)`)
    } else {
      fail(`1g. Strategic considerations: ${firmType}`, 'Returned undefined')
    }
  }
}

// ── Test 1h: Recovery rate range validation ──────────────────

async function testRecoveryRateRanges() {
  for (const file of INDUSTRY_FILES) {
    const filePath = path.join(YAML_DIR, `${file}.yaml`)
    const content = await fs.readFile(filePath, 'utf-8')
    const data = yaml.load(content) as { recoveryRates?: Record<string, { range: [number, number] }> }
    const rates = data?.recoveryRates ?? {}

    for (const [key, entry] of Object.entries(rates)) {
      const [low, high] = entry.range
      if (low >= high) {
        fail(`1h. ${file}/${key} range`, `Low ${low} >= high ${high}`)
      } else if (low < 0.1 || high > 0.9) {
        fail(`1h. ${file}/${key} range`, `Extreme values: ${low}-${high}`)
      } else {
        pass(`1h. ${file}/${key} range: ${(low * 100).toFixed(0)}-${(high * 100).toFixed(0)}%`)
      }
    }
  }
}

// ── Run all tests ────────────────────────────────────────────

async function main() {
  console.log('Planner Industry Rates — Validation Suite\n')

  await testYamlParse()
  testArchetypeMappingCoverage()
  await testYamlKeyCoverage()
  await testRecoveryRateResolution()
  testBusinessCaseOverrides()
  await testStrategicConsiderations()
  await testRecoveryRateRanges()

  // Summary
  const passed = results.filter(r => r.passed).length
  const failed = results.filter(r => !r.passed).length

  console.log('\n── Results ──────────────────────────────────\n')

  // Print failures first
  for (const r of results.filter(r => !r.passed)) {
    console.log(`FAIL  ${r.name}`)
    if (r.detail) console.log(`      ${r.detail}`)
  }

  if (failed > 0) console.log('')

  // Print pass count per test group
  const groups = new Map<string, { pass: number; fail: number }>()
  for (const r of results) {
    const group = r.name.slice(0, 2)
    const g = groups.get(group) ?? { pass: 0, fail: 0 }
    if (r.passed) g.pass++
    else g.fail++
    groups.set(group, g)
  }

  const groupLabels: Record<string, string> = {
    '1a': 'YAML parse',
    '1b': 'Archetype mapping',
    '1c': 'YAML key coverage',
    '1d': 'Recovery rate resolution',
    '1f': 'Business case overrides',
    '1g': 'Strategic considerations',
    '1h': 'Recovery rate ranges',
  }

  for (const [group, counts] of groups) {
    const label = groupLabels[group] ?? group
    const status = counts.fail === 0 ? 'PASS' : 'FAIL'
    console.log(`${status}  ${label}: ${counts.pass} passed${counts.fail > 0 ? `, ${counts.fail} failed` : ''}`)
  }

  console.log(`\nTotal: ${passed} passed, ${failed} failed`)
  process.exit(failed > 0 ? 1 : 0)
}

main().catch(e => {
  console.error('Fatal error:', e)
  process.exit(2)
})
