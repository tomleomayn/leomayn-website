import type { SizingEntry, DiagnosticData, BusinessCase, AreaBusinessCase } from './types'
import {
  ARCHETYPES,
  PEOPLE_INVOLVED_OPTIONS,
  WEEKLY_HOURS_OPTIONS,
  COST_PER_PERSON_OPTIONS,
  WORKING_WEEKS_PER_YEAR,
  HOURS_PER_WEEK,
  EMPLOYER_COST_UPLIFT,
  RECOVERY_SPREAD,
  RECOVERY_FLOOR,
  RECOVERY_CEILING,
} from './constants'

function getMidpoint(
  value: string,
  options: readonly { value: string; midpoint: number }[]
): number {
  return options.find(o => o.value === value)?.midpoint ?? 0
}

function getRecoveryRate(archetypeId: string): number {
  return ARCHETYPES.find(a => a.id === archetypeId)?.recoveryRate ?? 0.5
}

export function calculateBusinessCase(
  sizing: SizingEntry[],
  diagnostic: DiagnosticData
): BusinessCase {
  const perArea: AreaBusinessCase[] = sizing.map(entry => {
    const people = getMidpoint(entry.peopleInvolved, PEOPLE_INVOLVED_OPTIONS)
    const weeklyHours = getMidpoint(entry.weeklyHours, WEEKLY_HOURS_OPTIONS)
    const baseSalary = getMidpoint(entry.costPerPerson, COST_PER_PERSON_OPTIONS)
    const fullyLoadedCost = baseSalary * (1 + EMPLOYER_COST_UPLIFT)

    const annualHours = people * weeklyHours * WORKING_WEEKS_PER_YEAR
    const hourlyRate = fullyLoadedCost / (WORKING_WEEKS_PER_YEAR * HOURS_PER_WEEK)
    const annualCost = annualHours * hourlyRate

    const recoveryRate = getRecoveryRate(entry.archetypeId)
    const lowRate = Math.max(RECOVERY_FLOOR, recoveryRate - RECOVERY_SPREAD)
    const highRate = Math.min(RECOVERY_CEILING, recoveryRate + RECOVERY_SPREAD)

    return {
      archetypeId: entry.archetypeId,
      annualHours: Math.round(annualHours),
      annualCost: Math.round(annualCost),
      recoveryRange: {
        low: Math.round(annualCost * lowRate),
        high: Math.round(annualCost * highRate),
      },
    }
  })

  const totalAnnualHours = perArea.reduce((sum, a) => sum + a.annualHours, 0)
  const totalAnnualCost = perArea.reduce((sum, a) => sum + a.annualCost, 0)

  const totalRecoveryLow = perArea.reduce((sum, a) => sum + a.recoveryRange.low, 0)
  const totalRecoveryHigh = perArea.reduce((sum, a) => sum + a.recoveryRange.high, 0)

  const avgRecoveryLow = totalAnnualCost > 0 ? totalRecoveryLow / totalAnnualCost : 0.35
  const avgRecoveryHigh = totalAnnualCost > 0 ? totalRecoveryHigh / totalAnnualCost : 0.65

  return {
    perArea,
    totalAnnualHours,
    totalAnnualCost,
    conservativeRecovery: {
      low: totalRecoveryLow,
      high: totalRecoveryHigh,
    },
    weeklyHoursRecovered: {
      low: Math.round((totalAnnualHours * avgRecoveryLow) / WORKING_WEEKS_PER_YEAR),
      high: Math.round((totalAnnualHours * avgRecoveryHigh) / WORKING_WEEKS_PER_YEAR),
    },
    revenueFraming: diagnostic.billableSplit >= 70,
  }
}
