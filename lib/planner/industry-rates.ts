import { ARCHETYPES } from './constants'

interface RecoveryRateEntry {
  range: [number, number]
  rationale: string
  sources: string[]
  confidence: string
}

interface IndustryData {
  industry: string
  label: string
  recoveryRates: Record<string, RecoveryRateEntry>
  strategicConsiderations: unknown[]
}

/**
 * Archetype ID → YAML key mapping.
 * The YAML files use different keys from the TypeScript archetype IDs.
 * Keep this in sync with the yamlKey comments on each ARCHETYPES entry.
 */
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

/**
 * Firm type → YAML filename mapping.
 * "internal-services" and "other" both fall back to generic.yaml.
 */
const FIRM_TYPE_TO_FILENAME: Record<string, string> = {
  accounting: 'accounting',
  agency: 'agency',
  consulting: 'consulting',
  law: 'law',
  technical: 'technical',
  'internal-services': 'generic',
  other: 'generic',
}

// Module-level cache — intentionally persists across warm invocations.
// YAML files are static assets that do not change between requests.
const yamlCache = new Map<string, IndustryData | null>()

/**
 * Load and parse a YAML industry context file.
 * Returns null if the file does not exist or cannot be parsed.
 */
async function loadYamlFile(filename: string): Promise<IndustryData | null> {
  if (yamlCache.has(filename)) {
    return yamlCache.get(filename) ?? null
  }

  try {
    const fs = await import('fs/promises')
    const path = await import('path')
    const yaml = await import('js-yaml')
    const filePath = path.join(process.cwd(), 'lib', 'planner', 'industry-context', `${filename}.yaml`)
    const content = await fs.readFile(filePath, 'utf-8')
    const data = yaml.load(content) as IndustryData
    yamlCache.set(filename, data)
    return data
  } catch {
    yamlCache.set(filename, null)
    return null
  }
}

/**
 * Load the industry context YAML for a given firm type.
 * Returns the parsed data or null if no file exists.
 */
export async function loadIndustryRates(firmType: string): Promise<IndustryData | null> {
  const filename = FIRM_TYPE_TO_FILENAME[firmType]
  if (!filename) return null
  return loadYamlFile(filename)
}

/**
 * Resolve recovery rates for a given firm type.
 * Returns a Record mapping archetype ID → midpoint of the industry-specific range.
 * Falls back to the archetype's default recoveryRate when no industry entry exists.
 */
export async function resolveRecoveryRates(firmType: string): Promise<Record<string, number>> {
  const industryData = await loadIndustryRates(firmType)
  const rates: Record<string, number> = {}

  for (const archetype of ARCHETYPES) {
    const yamlKey = ARCHETYPE_TO_YAML_KEY[archetype.id]
    const industryEntry = yamlKey ? industryData?.recoveryRates?.[yamlKey] : undefined

    if (industryEntry?.range) {
      // Use midpoint of the industry-specific range
      rates[archetype.id] = (industryEntry.range[0] + industryEntry.range[1]) / 2
    } else {
      // Fall back to archetype default
      rates[archetype.id] = archetype.recoveryRate
    }
  }

  return rates
}

/**
 * Load strategic considerations from the industry YAML.
 * Returns formatted text for use as RAG context in the LLM prompt,
 * or undefined if no industry data exists.
 */
export async function loadStrategicConsiderations(firmType: string): Promise<string | undefined> {
  const industryData = await loadIndustryRates(firmType)
  if (!industryData?.strategicConsiderations?.length) return undefined

  const considerations = industryData.strategicConsiderations as Array<{
    id: string
    observation: string
    implication: string
    tags?: string[]
  }>

  return considerations
    .map(c => `[${c.id}] ${c.observation}\nImplication: ${c.implication}`)
    .join('\n\n')
}
