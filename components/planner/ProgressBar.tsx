'use client'

import { WIZARD_STEPS } from '@/lib/planner/constants'

interface ProgressBarProps {
  currentStep: number
}

export default function ProgressBar({ currentStep }: ProgressBarProps) {
  return (
    <div className="w-full">
      {/* Desktop: full labels */}
      <div className="hidden sm:flex items-center justify-between mb-8">
        {WIZARD_STEPS.map((step, index) => {
          const isCompleted = index < currentStep
          const isCurrent = index === currentStep
          return (
            <div key={step.label} className="flex items-center flex-1 last:flex-none">
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                    isCompleted
                      ? 'bg-rock text-white'
                      : isCurrent
                        ? 'bg-slate text-white'
                        : 'bg-steel/20 text-steel'
                  }`}
                >
                  {isCompleted ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </div>
                <span
                  className={`text-sm font-sans ${
                    isCurrent ? 'font-semibold text-slate' : 'text-steel'
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {index < WIZARD_STEPS.length - 1 && (
                <div
                  className={`flex-1 h-px mx-4 ${
                    isCompleted ? 'bg-rock' : 'bg-steel/20'
                  }`}
                />
              )}
            </div>
          )
        })}
      </div>

      {/* Mobile: step dots */}
      <div className="flex sm:hidden items-center justify-center gap-3 mb-6">
        {WIZARD_STEPS.map((step, index) => {
          const isCompleted = index < currentStep
          const isCurrent = index === currentStep
          return (
            <div key={step.shortLabel} className="flex flex-col items-center gap-1">
              <div
                className={`w-3 h-3 rounded-full transition-colors ${
                  isCompleted
                    ? 'bg-rock'
                    : isCurrent
                      ? 'bg-slate'
                      : 'bg-steel/20'
                }`}
              />
              <span className={`text-xs font-sans ${isCurrent ? 'text-slate font-semibold' : 'text-steel'}`}>
                {step.shortLabel}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
