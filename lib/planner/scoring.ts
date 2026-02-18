import type { DiagnosticData, ScoringResult, MatchedSignal } from './types'
import type { ArchetypeDefinition } from './constants'
import {
  ARCHETYPES,
  AI_ADOPTION_OPTIONS,
  TECH_ENVIRONMENT_OPTIONS,
  PROCESS_KNOWLEDGE_OPTIONS,
  DATA_FOUNDATIONS_OPTIONS,
  GOAL_PRIMARY_WEIGHT,
  GOAL_SECONDARY_WEIGHT,
  FEASIBILITY_BONUS,
  FEASIBILITY_PENALTY,
  FOUNDATION_PENALTY_WEIGHT,
} from './constants'

function getAiAdoptionLevel(value: string): number {
  const option = AI_ADOPTION_OPTIONS.find(o => o.value === value)
  return option?.level ?? 0
}

function getTechLevel(value: string): number {
  const option = TECH_ENVIRONMENT_OPTIONS.find(o => o.value === value)
  return option?.level ?? 0
}

function getProcessKnowledgeLevel(value: string): number {
  const option = PROCESS_KNOWLEDGE_OPTIONS.find(o => o.value === value)
  return option?.level ?? 1
}

function getDataFoundationsLevel(value: string): number {
  const option = DATA_FOUNDATIONS_OPTIONS.find(o => o.value === value)
  return option?.level ?? 1
}

const DEPENDENCY_LEVELS: Record<string, number> = {
  'Low': 1,
  'Medium': 2,
  'High': 3,
}

// 5a. Signal score — sum of weights for matched (area, symptom) pairs
// Second symptom per area is dampened to 50% to preserve scoring balance
function calculateSignalScore(
  userPairs: { area: string; symptom: string }[],
  archetype: ArchetypeDefinition
): { score: number; matched: MatchedSignal[] } {
  const matched: MatchedSignal[] = []

  // Group matches by area so we can dampen the second symptom
  const byArea = new Map<string, { symptom: string; weight: number }[]>()

  for (const pair of userPairs) {
    const match = archetype.signalMatrix.find(
      s => s.area === pair.area && s.symptom === pair.symptom
    )
    if (match) {
      const existing = byArea.get(pair.area) ?? []
      existing.push({ symptom: pair.symptom, weight: match.weight })
      byArea.set(pair.area, existing)
    }
  }

  let score = 0
  for (const [area, symptoms] of byArea) {
    // Sort descending so the strongest signal gets full weight
    symptoms.sort((a, b) => b.weight - a.weight)
    symptoms.forEach((s, i) => {
      const effectiveWeight = i === 0 ? s.weight : s.weight * 0.5
      score += effectiveWeight
      matched.push({ area, symptom: s.symptom, weight: effectiveWeight })
    })
  }

  return { score, matched }
}

// 5b. Goal score — primary × 2, secondary × 1
function calculateGoalScore(
  focus: { primary: string; secondary: string },
  archetype: ArchetypeDefinition
): number {
  const goalMap = archetype.goalAlignment as Record<string, number>
  const primaryScore = goalMap[focus.primary] ?? 0
  const secondaryScore = goalMap[focus.secondary] ?? 0
  return (primaryScore * GOAL_PRIMARY_WEIGHT) + (secondaryScore * GOAL_SECONDARY_WEIGHT)
}

// 5c. Feasibility modifier — unchanged from v1
function calculateFeasibility(
  userAiLevel: number,
  userTechLevel: number,
  archetype: ArchetypeDefinition
): number {
  const meetsAi = userAiLevel >= archetype.feasibilityRequirements.minAiAdoption
  const meetsTech = userTechLevel >= archetype.feasibilityRequirements.minTechLevel
  if (meetsAi && meetsTech) return FEASIBILITY_BONUS
  return FEASIBILITY_PENALTY
}

// 5d. Foundation modifier — penalises high-dependency workflows when foundations are weak
function calculateFoundationModifier(
  processKnowledge: string,
  dataFoundations: string,
  archetype: ArchetypeDefinition
): number {
  const knowledgeReadiness = getProcessKnowledgeLevel(processKnowledge)
  const dataReadiness = getDataFoundationsLevel(dataFoundations)

  const knowledgeDep = DEPENDENCY_LEVELS[archetype.foundationProfile.knowledgeDependency]
  const dataDep = DEPENDENCY_LEVELS[archetype.foundationProfile.dataDependency]

  const knowledgeGap = Math.max(0, knowledgeDep - knowledgeReadiness)
  const dataGap = Math.max(0, dataDep - dataReadiness)

  return -(knowledgeGap + dataGap) * FOUNDATION_PENALTY_WEIGHT
}

export function scoreArchetypes(diagnostic: DiagnosticData): ScoringResult {
  const userAiLevel = getAiAdoptionLevel(diagnostic.aiAdoption)
  const userTechLevel = getTechLevel(diagnostic.techEnvironment)

  const allScores: Record<string, number> = {}

  const scored = ARCHETYPES.map(archetype => {
    const { score: signalScore, matched: matchedSignals } = calculateSignalScore(
      diagnostic.painPoints,
      archetype
    )
    const goalScore = calculateGoalScore(diagnostic.strategicFocus, archetype)
    const feasibilityModifier = calculateFeasibility(userAiLevel, userTechLevel, archetype)
    const foundationModifier = calculateFoundationModifier(
      diagnostic.processKnowledge,
      diagnostic.dataFoundations,
      archetype
    )

    const compositeScore = signalScore + goalScore + feasibilityModifier + foundationModifier

    allScores[archetype.id] = compositeScore

    return {
      id: archetype.id,
      name: archetype.name,
      description: archetype.description,
      compositeScore,
      signalScore,
      goalScore,
      feasibilityModifier,
      foundationModifier,
      matchedSignals,
    }
  })

  scored.sort((a, b) => b.compositeScore - a.compositeScore)
  const topArchetypes = scored.slice(0, 3)

  return { topArchetypes, allScores }
}
