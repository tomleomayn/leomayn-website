'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { usePlanner } from '../PlannerContext'
import { SelectField, RadioGroup } from '../ui/FormFields'
import { PrioritySelector } from '../ui/PrioritySelector'
import { AreaSymptomSelector } from '../ui/AreaSymptomSelector'
import { Slider } from '../ui/Slider'
import { diagnosticSchema, type DiagnosticData } from '@/lib/planner/types'
import {
  FIRM_TYPE_OPTIONS,
  TEAM_SIZE_OPTIONS,
  STRATEGIC_FOCUS_OPTIONS,
  AREA_OPTIONS,
  SYMPTOM_OPTIONS,
  PROCESS_KNOWLEDGE_OPTIONS,
  DATA_FOUNDATIONS_OPTIONS,
  AI_ADOPTION_OPTIONS,
  TECH_ENVIRONMENT_OPTIONS,
  QUESTION_CONTEXT,
} from '@/lib/planner/constants'

export default function DiagnosticStep() {
  const { state, updateDiagnostic, setScoringResult, setStep } = usePlanner()
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<DiagnosticData>({
    resolver: zodResolver(diagnosticSchema),
    defaultValues: state.diagnostic ?? {
      firmType: '',
      teamSize: '',
      strategicFocus: { primary: '', secondary: '' },
      painPoints: [],
      processKnowledge: '',
      dataFoundations: '',
      aiAdoption: '',
      techEnvironment: '',
      billableSplit: 50,
    },
  })

  const onSubmit = async (data: DiagnosticData) => {
    setSubmitting(true)
    setSubmitError('')

    try {
      // Call scoring API
      const response = await fetch('/api/planner/score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Scoring failed')
      }

      const scoringResult = await response.json()

      // Track GA event
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'planner_diagnostic_complete',
          firm_type: data.firmType,
          strategic_focus_primary: data.strategicFocus.primary,
          strategic_focus_secondary: data.strategicFocus.secondary,
          pain_points: data.painPoints.map(p => `${p.area}:${p.symptom}`).join(','),
        })
      }

      updateDiagnostic(data)
      setScoringResult(scoringResult)
      setStep(2)
    } catch {
      setSubmitError('We could not process your diagnostic. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div>
      <h2 className="text-3xl font-serif text-slate mb-2">About your organisation</h2>
      <p className="text-base text-slate/70 mb-8">
        Ten questions that help us understand your situation. Each one shapes your personalised report. Answer to the best of your ability.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        {/* ── Section 1: Context ── */}
        <div className="space-y-10">
          {/* Q1: Firm type */}
          <SelectField
            label="Q1. What type of services organisation are you?"
            error={errors.firmType}
            context={QUESTION_CONTEXT.firmType}
            registration={register('firmType')}
            options={FIRM_TYPE_OPTIONS}
            placeholder="Select your organisation type..."
          />

          {/* Q2: Workforce size */}
          <SelectField
            label="Q2. How large is your workforce?"
            error={errors.teamSize}
            context={QUESTION_CONTEXT.teamSize}
            registration={register('teamSize')}
            options={TEAM_SIZE_OPTIONS}
            placeholder="Select workforce size..."
          />

          {/* Q3: Strategic focus — pick top 2, ranked */}
          <Controller
            name="strategicFocus"
            control={control}
            render={({ field }) => (
              <PrioritySelector
                label="Q3. What are the two outcomes you most want from operational improvement?"
                error={errors.strategicFocus}
                context={QUESTION_CONTEXT.strategicFocus}
                options={STRATEGIC_FOCUS_OPTIONS}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </div>

        {/* ── Section 2: Diagnosis ── */}
        <div className="space-y-10">
          <div className="border-t border-steel/20 pt-10">
            <h3 className="text-xl font-serif text-slate mb-1">Where the friction is</h3>
            <p className="text-sm text-slate/60 mb-6">Select the areas where your team loses the most time, then tell us what the problem looks like.</p>
          </div>

          {/* Q4 + Q5: Pain points — two-axis model (areas, then symptoms per area) */}
          <Controller
            name="painPoints"
            control={control}
            render={({ field }) => (
              <AreaSymptomSelector
                areaLabel="Q4. Where does your workforce lose the most time to manual, repetitive, or frustrating work?"
                areaContext={QUESTION_CONTEXT.painAreas}
                symptomContext={QUESTION_CONTEXT.painSymptoms}
                areaOptions={AREA_OPTIONS}
                symptomOptions={SYMPTOM_OPTIONS}
                value={field.value}
                onChange={field.onChange}
                maxAreas={3}
                error={errors.painPoints?.root ?? (errors.painPoints as any)}
              />
            )}
          />
        </div>

        {/* ── Section 3: Readiness ── */}
        <div className="space-y-10">
          <div className="border-t border-steel/20 pt-10">
            <h3 className="text-xl font-serif text-slate mb-1">Your foundations</h3>
            <p className="text-sm text-slate/60 mb-6">These help us assess which improvements are achievable as a starting point.</p>
          </div>

          {/* Q6: Process knowledge */}
          <RadioGroup
            label="Q6. How well documented are your core processes?"
            error={errors.processKnowledge}
            context={QUESTION_CONTEXT.processKnowledge}
            registration={register('processKnowledge')}
            options={PROCESS_KNOWLEDGE_OPTIONS}
          />

          {/* Q7: Data foundations */}
          <RadioGroup
            label="Q7. How reliable is the data in your core business systems?"
            error={errors.dataFoundations}
            context={QUESTION_CONTEXT.dataFoundations}
            registration={register('dataFoundations')}
            options={DATA_FOUNDATIONS_OPTIONS}
          />

          {/* Q8: AI adoption */}
          <RadioGroup
            label="Q8. How is your organisation currently using AI?"
            error={errors.aiAdoption}
            context={QUESTION_CONTEXT.aiAdoption}
            registration={register('aiAdoption')}
            options={AI_ADOPTION_OPTIONS}
          />

          {/* Q9: Tech environment */}
          <RadioGroup
            label="Q9. Broadly, what does your organisation's tech stack look like?"
            error={errors.techEnvironment}
            context={QUESTION_CONTEXT.techEnvironment}
            registration={register('techEnvironment')}
            options={TECH_ENVIRONMENT_OPTIONS}
          />

          {/* Q10: Billable split */}
          <Controller
            name="billableSplit"
            control={control}
            render={({ field }) => (
              <Slider
                label="Q10. Approximately what proportion of your workforce is client-facing vs internal operations?"
                context={QUESTION_CONTEXT.billableSplit}
                value={100 - field.value}
                onChange={(v) => field.onChange(100 - v)}
                leftAnchor="All client-facing"
                rightAnchor="All internal"
              />
            )}
          />
        </div>

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
          {submitting ? 'Analysing your inputs...' : 'Continue'}
        </button>
      </form>
    </div>
  )
}
