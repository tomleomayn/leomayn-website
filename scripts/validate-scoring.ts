/**
 * Validates the TypeScript scoring engine against the Python simulator's expected results.
 * Run: npx tsx scripts/validate-scoring.ts
 */

import { scoreArchetypes } from '../lib/planner/scoring'
import type { DiagnosticData } from '../lib/planner/types'

// Archetype ID mapping (Python short codes → TypeScript IDs)
const ID_MAP: Record<string, string> = {
  CO: 'client-onboarding',
  MI: 'meeting-intelligence',
  PS: 'proposal-scoping',
  TI: 'time-invoicing',
  MR: 'management-reporting',
  PD: 'project-delivery',
  DP: 'document-processing',
  CC: 'client-communications',
  RA: 'research-analysis',
}

const REVERSE_ID_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(ID_MAP).map(([k, v]) => [v, k])
)

interface PersonaTest {
  name: string
  diagnostic: DiagnosticData
  expectedTop3: { code: string; composite: number }[]
}

const PERSONAS: PersonaTest[] = [
  {
    name: 'Drowning Agency COO',
    diagnostic: {
      firmType: 'agency',
      teamSize: '51-200',
      strategicFocus: { primary: 'capacity', secondary: 'speed' },
      painPoints: [
        { area: 'project-delivery', symptom: 'scope-creep' },
        { area: 'communications', symptom: 'handoff-friction' },
      ],
      processKnowledge: 'partially-documented',
      dataFoundations: 'mixed',
      aiAdoption: 'experimenting',
      techEnvironment: 'disconnected',
      billableSplit: 50,
    },
    expectedTop3: [
      { code: 'MI', composite: 20 },
      { code: 'PD', composite: 16 },
      { code: 'PS', composite: 15 },
    ],
  },
  {
    name: 'Law Firm Ops Director',
    diagnostic: {
      firmType: 'law',
      teamSize: '201-500',
      strategicFocus: { primary: 'costs', secondary: 'quality' },
      painPoints: [
        { area: 'invoicing', symptom: 'work-about-work' },
        { area: 'reporting', symptom: 'tool-limitation' },
      ],
      processKnowledge: 'partially-documented',
      dataFoundations: 'mixed',
      aiAdoption: 'not-started',
      techEnvironment: 'connected',
      billableSplit: 50,
    },
    expectedTop3: [
      { code: 'MR', composite: 21 },
      { code: 'TI', composite: 18 },
      { code: 'DP', composite: 13 },
    ],
  },
  {
    name: 'Consulting Knowledge Problem',
    diagnostic: {
      firmType: 'consultancy',
      teamSize: '11-50',
      strategicFocus: { primary: 'capacity', secondary: 'capability' },
      painPoints: [
        { area: 'proposals', symptom: 'rework' },
        { area: 'research', symptom: 'inconsistency' },
      ],
      processKnowledge: 'mostly-undocumented',
      dataFoundations: 'mixed',
      aiAdoption: 'early-adopters',
      techEnvironment: 'mix',
      billableSplit: 50,
    },
    expectedTop3: [
      { code: 'DP', composite: 23 },
      { code: 'RA', composite: 22 },
      { code: 'PS', composite: 17 },
    ],
  },
  {
    name: 'Scaling Accountancy',
    diagnostic: {
      firmType: 'accountancy',
      teamSize: '51-200',
      strategicFocus: { primary: 'speed', secondary: 'costs' },
      painPoints: [
        { area: 'onboarding', symptom: 'handoff-friction' },
        { area: 'invoicing', symptom: 'inconsistency' },
      ],
      processKnowledge: 'partially-documented',
      dataFoundations: 'strong',
      aiAdoption: 'experimenting',
      techEnvironment: 'connected',
      billableSplit: 50,
    },
    expectedTop3: [
      { code: 'CO', composite: 25 },
      { code: 'DP', composite: 19 },
      { code: 'TI', composite: 15 },
    ],
  },
  {
    name: 'Tech-Forward PR Agency',
    diagnostic: {
      firmType: 'agency',
      teamSize: '11-50',
      strategicFocus: { primary: 'capability', secondary: 'capacity' },
      painPoints: [
        { area: 'research', symptom: 'work-about-work' },
        { area: 'communications', symptom: 'rework' },
      ],
      processKnowledge: 'well-documented',
      dataFoundations: 'strong',
      aiAdoption: 'actively-using',
      techEnvironment: 'well-connected',
      billableSplit: 50,
    },
    expectedTop3: [
      { code: 'RA', composite: 26 },
      { code: 'CC', composite: 20 },
      { code: 'DP', composite: 16 },
    ],
  },
  {
    name: 'Overwhelmed Dept Head',
    diagnostic: {
      firmType: 'other',
      teamSize: '201-500',
      strategicFocus: { primary: 'quality', secondary: 'costs' },
      painPoints: [
        { area: 'project-delivery', symptom: 'inconsistency' },
        { area: 'knowledge', symptom: 'decision-bottleneck' },
      ],
      processKnowledge: 'mostly-undocumented',
      dataFoundations: 'weak',
      aiAdoption: 'not-started',
      techEnvironment: 'disconnected',
      billableSplit: 50,
    },
    expectedTop3: [
      { code: 'PD', composite: 14 },
      { code: 'DP', composite: 11 },
      { code: 'MI', composite: 10 },
    ],
  },
  {
    name: 'Invoice-Drowning Services',
    diagnostic: {
      firmType: 'other',
      teamSize: '51-200',
      strategicFocus: { primary: 'costs', secondary: 'speed' },
      painPoints: [
        { area: 'invoicing', symptom: 'tool-limitation' },
        { area: 'reporting', symptom: 'work-about-work' },
      ],
      processKnowledge: 'partially-documented',
      dataFoundations: 'weak',
      aiAdoption: 'not-started',
      techEnvironment: 'disconnected',
      billableSplit: 50,
    },
    expectedTop3: [
      { code: 'MR', composite: 18 },
      { code: 'DP', composite: 14 },
      { code: 'TI', composite: 13 },
    ],
  },
  {
    name: 'Proposal Bottleneck Consultancy',
    diagnostic: {
      firmType: 'consultancy',
      teamSize: '11-50',
      strategicFocus: { primary: 'speed', secondary: 'capacity' },
      painPoints: [
        { area: 'proposals', symptom: 'decision-bottleneck' },
        { area: 'onboarding', symptom: 'work-about-work' },
      ],
      processKnowledge: 'partially-documented',
      dataFoundations: 'mixed',
      aiAdoption: 'early-adopters',
      techEnvironment: 'mix',
      billableSplit: 50,
    },
    expectedTop3: [
      { code: 'PS', composite: 25 },
      { code: 'CO', composite: 24 },
      { code: 'DP', composite: 18 },
    ],
  },
  {
    name: 'Quality-Obsessed Agency',
    diagnostic: {
      firmType: 'agency',
      teamSize: '51-200',
      strategicFocus: { primary: 'quality', secondary: 'capability' },
      painPoints: [
        { area: 'project-delivery', symptom: 'rework' },
        { area: 'communications', symptom: 'inconsistency' },
      ],
      processKnowledge: 'well-documented',
      dataFoundations: 'strong',
      aiAdoption: 'actively-using',
      techEnvironment: 'well-connected',
      billableSplit: 50,
    },
    expectedTop3: [
      { code: 'DP', composite: 23 },
      { code: 'CC', composite: 20 },
      { code: 'PD', composite: 18 },
    ],
  },
  {
    name: 'Data-Blind Ops Leader',
    diagnostic: {
      firmType: 'consultancy',
      teamSize: '51-200',
      strategicFocus: { primary: 'capacity', secondary: 'quality' },
      painPoints: [
        { area: 'reporting', symptom: 'decision-bottleneck' },
        { area: 'knowledge', symptom: 'work-about-work' },
      ],
      processKnowledge: 'mostly-undocumented',
      dataFoundations: 'weak',
      aiAdoption: 'experimenting',
      techEnvironment: 'disconnected',
      billableSplit: 50,
    },
    expectedTop3: [
      { code: 'MR', composite: 13 },
      { code: 'DP', composite: 12 },
      { code: 'MI', composite: 12 },
    ],
  },
]

// Run validation
let passed = 0
let failed = 0

for (const persona of PERSONAS) {
  const result = scoreArchetypes(persona.diagnostic)
  const top3 = result.topArchetypes.slice(0, 3)

  let match = true
  const details: string[] = []

  for (let i = 0; i < 3; i++) {
    const expected = persona.expectedTop3[i]
    const actual = top3[i]
    const expectedId = ID_MAP[expected.code]
    const actualCode = REVERSE_ID_MAP[actual.id] ?? actual.id

    if (actual.id !== expectedId) {
      match = false
      details.push(`  #${i + 1}: expected ${expected.code}(${expected.composite}) got ${actualCode}(${actual.compositeScore})`)
    } else if (actual.compositeScore !== expected.composite) {
      match = false
      details.push(`  #${i + 1}: ${actualCode} score mismatch — expected ${expected.composite} got ${actual.compositeScore}`)
    }
  }

  if (match) {
    console.log(`PASS  ${persona.name}: ${top3.map(a => `${REVERSE_ID_MAP[a.id]}(${a.compositeScore})`).join(' | ')}`)
    passed++
  } else {
    console.log(`FAIL  ${persona.name}:`)
    console.log(`  Expected: ${persona.expectedTop3.map(e => `${e.code}(${e.composite})`).join(' | ')}`)
    console.log(`  Got:      ${top3.map(a => `${REVERSE_ID_MAP[a.id]}(${a.compositeScore})`).join(' | ')}`)
    for (const d of details) console.log(d)
    failed++
  }
}

console.log(`\n${passed} passed, ${failed} failed out of ${PERSONAS.length} personas`)
process.exit(failed > 0 ? 1 : 0)
