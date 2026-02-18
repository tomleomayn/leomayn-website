'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { usePlanner } from '../PlannerContext'
import { TextField, SelectField, CheckboxField } from '../ui/FormFields'
import { qualificationSchema, type QualificationData } from '@/lib/planner/types'
import { ROLE_OPTIONS, TURNOVER_OPTIONS } from '@/lib/planner/constants'

export default function QualificationStep() {
  const { state, updateQualification, setStep } = usePlanner()
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<QualificationData>({
    resolver: zodResolver(qualificationSchema),
    defaultValues: state.qualification ?? {
      name: '',
      email: '',
      company: '',
      companyWebsite: '',
      role: '',
      roleOther: '',
      turnover: '',
      consentGiven: false as unknown as true,
    },
  })

  const selectedRole = watch('role')

  const onSubmit = async (data: QualificationData) => {
    setSubmitting(true)
    setSubmitError('')

    // Check turnover — route under £1M to decline
    if (data.turnover === 'under-1m') {
      // Fire-and-forget: send to qualify API for Attio lead capture
      fetch('/api/planner/qualify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).catch(() => {})

      router.push('/planning-for-ai-deployment/decline')
      return
    }

    try {
      // Send to qualify API for Attio lead capture (fire-and-forget)
      fetch('/api/planner/qualify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).catch(() => {})

      // Track GA event
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'planner_qualify',
          turnover_range: data.turnover,
          role: data.role,
        })
      }

      updateQualification(data)
      setStep(1)
    } catch {
      setSubmitError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div>
      <h2 className="text-3xl font-serif text-slate mb-2">Tell us about you</h2>
      <p className="text-base text-slate/70 mb-8">
        We will use this to personalise your diagnostic report. Takes about one minute.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <TextField
          label="Your name"
          error={errors.name}
          registration={register('name')}
        />

        <TextField
          label="Work email"
          type="email"
          error={errors.email}
          registration={register('email')}
        />

        <TextField
          label="Company name"
          error={errors.company}
          registration={register('company')}
        />

        <TextField
          label="Company website"
          error={errors.companyWebsite}
          registration={register('companyWebsite')}
          placeholder="e.g. yourcompany.com"
        />

        <SelectField
          label="Your role"
          error={errors.role}
          registration={register('role')}
          options={ROLE_OPTIONS}
          placeholder="Select your role..."
        />

        {selectedRole === 'other' && (
          <TextField
            label="Please specify your role"
            error={errors.roleOther}
            registration={register('roleOther')}
          />
        )}

        <SelectField
          label="Annual company turnover"
          error={errors.turnover}
          registration={register('turnover')}
          options={TURNOVER_OPTIONS}
          placeholder="Select turnover range..."
        />

        <CheckboxField
          label="I consent to Leomayn storing this information in accordance with our privacy notice. We will use your data to generate your report and may follow up by email."
          error={errors.consentGiven}
          registration={register('consentGiven')}
        />

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
          {submitting ? 'Checking...' : 'Continue'}
        </button>
      </form>
    </div>
  )
}
