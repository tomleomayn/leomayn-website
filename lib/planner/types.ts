import { z } from 'zod'

// ============================================
// Zod Schemas (source of truth — types derived)
// ============================================

export const qualificationSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(1, 'Company name is required').max(100),
  companyWebsite: z.string().max(200).optional(),
  role: z.string().min(1, 'Please select your role'),
  roleOther: z.string().max(100).optional(),
  turnover: z.string().min(1, 'Please select your turnover range'),
  consentGiven: z.literal(true, {
    error: 'Please accept the privacy notice to continue',
  }),
})

export const diagnosticSchema = z.object({
  firmType: z.string().min(1, 'Please select your firm type'),
  teamSize: z.string().min(1, 'Please select your team size'),
  strategicFocus: z.object({
    primary: z.string().min(1, 'Please select your primary focus'),
    secondary: z.string().min(1, 'Please select your secondary focus'),
  }),
  painPoints: z
    .array(z.object({
      area: z.string().min(1),
      symptom: z.string().min(1, 'Please select at least one symptom for each area'),
    }))
    .min(2, 'Please select at least two areas')
    .max(6)
    .refine(
      (points) => {
        const areas = new Set(points.map(p => p.area))
        return areas.size >= 2 && areas.size <= 3
      },
      'Please select two or three areas'
    ),
  aiAdoption: z.string().min(1, 'Please select your AI adoption level'),
  techEnvironment: z.string().min(1, 'Please select your tech environment'),
  processKnowledge: z.string().min(1, 'Please select how well documented your processes are'),
  dataFoundations: z.string().min(1, 'Please select your data quality level'),
  billableSplit: z.number().min(0).max(100),
})

export const sizingEntrySchema = z.object({
  archetypeId: z.string(),
  peopleInvolved: z.string().min(1, 'Please select'),
  weeklyHours: z.string().min(1, 'Please select'),
  costPerPerson: z.string().min(1, 'Please select'),
  freeText: z.string().max(500).optional(),
})

export const sizingSchema = z.array(sizingEntrySchema).length(3)

// ============================================
// Derived TypeScript types
// ============================================

export type QualificationData = z.infer<typeof qualificationSchema>
export type DiagnosticData = z.infer<typeof diagnosticSchema>
export type SizingEntry = z.infer<typeof sizingEntrySchema>

// ============================================
// Scoring types
// ============================================

export interface MatchedSignal {
  area: string
  symptom: string
  weight: number
}

export interface RankedArchetype {
  id: string
  name: string
  description: string
  compositeScore: number
  signalScore: number
  goalScore: number
  feasibilityModifier: number
  foundationModifier: number
  matchedSignals: MatchedSignal[]
}

export interface ScoringResult {
  topArchetypes: RankedArchetype[]
  allScores: Record<string, number>
}

// ============================================
// Business case types
// ============================================

export interface AreaBusinessCase {
  archetypeId: string
  annualHours: number
  annualCost: number
  recoveryRange: { low: number; high: number }
}

export interface BusinessCase {
  perArea: AreaBusinessCase[]
  totalAnnualHours: number
  totalAnnualCost: number
  conservativeRecovery: { low: number; high: number }
  weeklyHoursRecovered: { low: number; high: number }
  revenueFraming: boolean
}

// ============================================
// AI output types
// ============================================

export type ConditionLevel = 'green' | 'amber' | 'red'

export interface WorkflowReport {
  archetypeId: string
  name: string
  whyThisMatters: string
  impactPotential: 'high' | 'medium' | 'low'
  implementationComplexity: 'high' | 'medium' | 'low'
  threeConditionsCheck: { impact: ConditionLevel; complexity: ConditionLevel; learning: ConditionLevel }
  currentState: string
  futureState: string
  considerations: string
  prerequisites: string[]
  pitfalls: string[]
}

export interface GeneratedReport {
  id: string
  situationSummary: string
  priorityMapIntro?: string
  workflows: WorkflowReport[]
  businessCase: BusinessCase
  maturityAssessment?: { strengths: string[]; development: string[] }
  quickWins?: string[]
  readiness: { strengths: string[]; gaps: string[] }
  nextSteps: string[]
  companyContext?: string
  generatedAt: string
}

// Zod schema for validating AI output
const conditionLevelSchema = z.enum(['green', 'amber', 'red'])

export const workflowReportSchema = z.object({
  archetypeId: z.string(),
  name: z.string(),
  whyThisMatters: z.string(),
  impactPotential: z.enum(['high', 'medium', 'low']),
  implementationComplexity: z.enum(['high', 'medium', 'low']),
  threeConditionsCheck: z.object({
    impact: conditionLevelSchema,
    complexity: conditionLevelSchema,
    learning: conditionLevelSchema,
  }),
  currentState: z.string(),
  futureState: z.string(),
  considerations: z.string(),
  prerequisites: z.array(z.string()),
  pitfalls: z.array(z.string()),
})

export const generatedReportSchema = z.object({
  id: z.string(),
  situationSummary: z.string(),
  priorityMapIntro: z.string().optional(),
  workflows: z.array(workflowReportSchema).length(3),
  businessCase: z.object({
    perArea: z.array(z.object({
      archetypeId: z.string(),
      annualHours: z.number(),
      annualCost: z.number(),
      recoveryRange: z.object({ low: z.number(), high: z.number() }),
    })),
    totalAnnualHours: z.number(),
    totalAnnualCost: z.number(),
    conservativeRecovery: z.object({ low: z.number(), high: z.number() }),
    weeklyHoursRecovered: z.object({ low: z.number(), high: z.number() }),
    revenueFraming: z.boolean(),
  }),
  maturityAssessment: z.object({
    strengths: z.array(z.string()),
    development: z.array(z.string()),
  }).optional(),
  quickWins: z.array(z.string()).optional(),
  readiness: z.object({
    strengths: z.array(z.string()),
    gaps: z.array(z.string()),
  }),
  nextSteps: z.array(z.string()),
  generatedAt: z.string(),
})

// ============================================
// Wizard state
// ============================================

export interface PlannerState {
  currentStep: number
  qualification: QualificationData | null
  diagnostic: DiagnosticData | null
  scoringResult: ScoringResult | null
  sizing: SizingEntry[] | null
  report: GeneratedReport | null
}

export const INITIAL_PLANNER_STATE: PlannerState = {
  currentStep: 0,
  qualification: null,
  diagnostic: null,
  scoringResult: null,
  sizing: null,
  report: null,
}

/**
 * Backward compat: normalise old boolean conditions to traffic light levels.
 * Old reports stored true/false; new reports store 'green'/'amber'/'red'.
 */
export function normaliseCondition(value: boolean | ConditionLevel): ConditionLevel {
  if (typeof value === 'boolean') return value ? 'green' : 'red'
  return value
}
