'use client'

import { useState, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { usePlanner } from '../PlannerContext'
import { SelectField, FieldWrapper } from '../ui/FormFields'
import { sizingEntrySchema } from '@/lib/planner/types'
import type { SizingEntry, RankedArchetype } from '@/lib/planner/types'
import {
  PEOPLE_INVOLVED_OPTIONS,
  WEEKLY_HOURS_OPTIONS,
  COST_PER_PERSON_OPTIONS,
  AREA_OPTIONS,
  SYMPTOM_OPTIONS,
  STRATEGIC_FOCUS_OPTIONS,
  QUESTION_CONTEXT,
} from '@/lib/planner/constants'

const sizingFormSchema = z.object({
  entries: z.array(sizingEntrySchema).length(3),
})

type SizingFormData = z.infer<typeof sizingFormSchema>

function reorderByUserAreas(
  archetypes: RankedArchetype[],
  userAreas: string[]
): RankedArchetype[] {
  const withDirectMatch: RankedArchetype[] = []
  const withoutDirectMatch: RankedArchetype[] = []

  for (const a of archetypes) {
    const hasDirectMatch = a.matchedSignals.some(s => userAreas.includes(s.area))
    if (hasDirectMatch) {
      withDirectMatch.push(a)
    } else {
      withoutDirectMatch.push(a)
    }
  }

  return [...withDirectMatch, ...withoutDirectMatch]
}

function getRecommendationReason(
  archetype: RankedArchetype,
  userAreas: string[],
  primaryGoal: string
): string {
  // Find the highest-weight signal that matches a user-selected area
  const directMatches = archetype.matchedSignals
    .filter(s => userAreas.includes(s.area))
    .sort((a, b) => b.weight - a.weight)

  if (directMatches.length > 0) {
    const top = directMatches[0]
    const areaLabel = AREA_OPTIONS.find(a => a.value === top.area)?.label ?? top.area
    const symptomLabel = SYMPTOM_OPTIONS.find(s => s.value === top.symptom)?.label ?? top.symptom
    return `You told us ${areaLabel.toLowerCase()} involves ${symptomLabel.toLowerCase()}. This workflow addresses that.`
  }

  // No direct area match — explain via goal alignment
  const goalLabel = STRATEGIC_FOCUS_OPTIONS.find(g => g.value === primaryGoal)?.label ?? primaryGoal
  return `This aligns with your priority to ${goalLabel.toLowerCase()}. It addresses patterns connected to the areas you identified.`
}

export default function SizingStep() {
  const { state, updateSizing, setStep } = usePlanner()
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const rawArchetypes = state.scoringResult?.topArchetypes ?? []
  const userAreas = [...new Set((state.diagnostic?.painPoints ?? []).map(p => p.area))]
  const primaryGoal = state.diagnostic?.strategicFocus.primary ?? ''

  const topArchetypes = useMemo(
    () => reorderByUserAreas(rawArchetypes, userAreas),
    [rawArchetypes, userAreas]
  )

  const defaultEntries: SizingEntry[] = topArchetypes.map(a => ({
    archetypeId: a.id,
    peopleInvolved: '',
    weeklyHours: '',
    costPerPerson: '',
    freeText: '',
  }))

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SizingFormData>({
    resolver: zodResolver(sizingFormSchema),
    defaultValues: {
      entries: state.sizing ?? defaultEntries,
    },
  })

  if (!state.scoringResult || topArchetypes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate/70">No scoring results found. Please complete the diagnostic first.</p>
      </div>
    )
  }

  const onSubmit = async (data: SizingFormData) => {
    setSubmitting(true)
    setSubmitError('')

    try {
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'planner_sizing_complete',
          archetypes: topArchetypes.map(a => a.id).join(','),
        })
      }

      updateSizing(data.entries)
      setStep(3)
    } catch {
      setSubmitError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div>
      <h2 className="text-3xl font-serif text-slate mb-2">Your recommended focus areas</h2>
      <p className="text-xs uppercase tracking-wider text-rock font-semibold mb-4">Nearly there. Three final sections.</p>
      <div className="flex items-stretch mb-8">
        <div className="bg-rock rounded-full my-[3px]" style={{ width: '2px', minWidth: '2px' }} />
        <p className="text-base text-slate/70 pl-4">
          You told us where your team loses time, and what the problems look like. Based on your inputs, these three workflows are your strongest starting points. For each one, help us estimate the time and cost involved so we can build your business case.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
        {topArchetypes.map((archetype, index) => (
          <div key={archetype.id} className="bg-white border border-steel/30 rounded-lg p-6 sm:p-8">
            <div className="flex items-start gap-3 mb-2">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate text-white text-sm font-semibold flex-shrink-0">
                {index + 1}
              </span>
              <div>
                <h3 className="text-xl font-serif text-slate">{archetype.name}</h3>
                <p className="text-sm text-slate/70 mt-1">{archetype.description}</p>
                <p className="text-sm text-rock/80 mt-2 italic">
                  {getRecommendationReason(archetype, userAreas, primaryGoal)}
                </p>
              </div>
            </div>

            <div className="space-y-5 mt-6">
              <SelectField
                label="How many people are involved in this process?"
                error={errors.entries?.[index]?.peopleInvolved}
                registration={register(`entries.${index}.peopleInvolved`)}
                options={PEOPLE_INVOLVED_OPTIONS}
                placeholder="Select..."
              />

              <SelectField
                label="How many hours per week does each person typically spend on this?"
                error={errors.entries?.[index]?.weeklyHours}
                registration={register(`entries.${index}.weeklyHours`)}
                options={WEEKLY_HOURS_OPTIONS}
                placeholder="Select..."
              />

              <SelectField
                label="Approximate average base salary for people involved in this workflow"
                error={errors.entries?.[index]?.costPerPerson}
                context={QUESTION_CONTEXT.costPerPerson}
                registration={register(`entries.${index}.costPerPerson`)}
                options={COST_PER_PERSON_OPTIONS}
                placeholder="Select..."
              />

              <FieldWrapper
                label={`What frustrates you most about ${archetype.name.toLowerCase()}?`}
                context={QUESTION_CONTEXT.freeText}
              >
                <textarea
                  maxLength={500}
                  rows={3}
                  placeholder="Optional, but even a sentence or two helps us personalise your report"
                  className="w-full px-4 py-3 border border-steel rounded-md focus:outline-none focus:border-coral bg-white text-slate resize-none text-sm"
                  {...register(`entries.${index}.freeText`)}
                />
              </FieldWrapper>

              <input type="hidden" {...register(`entries.${index}.archetypeId`)} />
            </div>
          </div>
        ))}

        {submitError && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 text-red-800 text-sm">
            {submitError}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full inline-flex items-center justify-center font-sans font-semibold text-base bg-slate text-white px-8 py-4 rounded-md hover:bg-slate-light transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? 'Processing...' : 'Generate my report'}
        </button>
      </form>
    </div>
  )
}
