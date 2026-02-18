'use client'

import { useEffect, useState, useRef } from 'react'
import { usePlanner } from './PlannerContext'
import ProgressBar from './ProgressBar'
import QualificationStep from './steps/QualificationStep'
import DiagnosticStep from './steps/DiagnosticStep'
import SizingStep from './steps/SizingStep'
import GeneratingScreen from './GeneratingScreen'
import ReportView from './ReportView'

export default function WizardShell() {
  const { state, setReport, setStep } = usePlanner()
  const [generating, setGenerating] = useState(false)
  const [generateError, setGenerateError] = useState('')
  const [retryToken, setRetryToken] = useState<string | null>(null)
  const generationStarted = useRef(false)

  // Scroll to top on step transitions
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [state.currentStep])

  // Trigger AI generation when entering step 3 with sizing data but no report
  useEffect(() => {
    if (
      state.currentStep === 3 &&
      state.sizing &&
      state.qualification &&
      state.diagnostic &&
      !state.report &&
      !generating &&
      !generationStarted.current
    ) {
      generationStarted.current = true
      triggerGeneration()
    }
  }, [state.currentStep, state.sizing, state.report])

  const triggerGeneration = async () => {
    setGenerating(true)
    setGenerateError('')
    setRetryToken(null)

    try {
      const response = await fetch('/api/planner/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          qualification: state.qualification,
          diagnostic: state.diagnostic,
          sizing: state.sizing,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        if (data.retryToken) {
          setRetryToken(data.retryToken)
        }
        throw new Error(data.error || 'Generation failed')
      }

      if (data.status === 'success' && data.report) {
        setReport(data.report)
      }
    } catch (error) {
      setGenerateError(
        error instanceof Error
          ? error.message
          : 'Report generation failed. Please try again.'
      )
    } finally {
      setGenerating(false)
    }
  }

  const handleRetry = () => {
    generationStarted.current = false
    setGenerateError('')
    triggerGeneration()
  }

  const renderStep = () => {
    switch (state.currentStep) {
      case 0:
        return <QualificationStep />
      case 1:
        return <DiagnosticStep />
      case 2:
        return <SizingStep />
      case 3:
        // Report step: show report, generating screen, or error
        if (state.report) {
          return <ReportView />
        }
        if (generateError) {
          return (
            <div className="text-center py-16 sm:py-24">
              <div className="max-w-md mx-auto">
                <svg className="w-12 h-12 text-coral-accessible mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <h2 className="text-2xl font-serif text-slate mb-3">Generation failed</h2>
                <p className="text-sm text-slate/70 mb-6">{generateError}</p>
                <button
                  onClick={handleRetry}
                  className="inline-flex items-center justify-center font-sans font-semibold text-base bg-slate text-white px-8 py-4 rounded-md hover:bg-slate-light transition-all"
                >
                  Retry
                </button>
              </div>
            </div>
          )
        }
        return <GeneratingScreen />
      default:
        return <QualificationStep />
    }
  }

  // Don't show progress bar on report view
  const showProgressBar = !(state.currentStep === 3 && state.report)

  return (
    <div className="min-h-screen bg-chalk">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-12">
        {showProgressBar && <ProgressBar currentStep={state.currentStep} />}

        <div
          key={`${state.currentStep}-${state.report ? 'report' : 'loading'}`}
          className="animate-fade-in-up"
          style={{ animationDuration: '0.4s' }}
        >
          {renderStep()}
        </div>
      </div>
    </div>
  )
}
