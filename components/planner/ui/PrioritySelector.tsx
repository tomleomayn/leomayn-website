'use client'

import type { FieldError } from 'react-hook-form'

interface PrioritySelectorProps {
  label: string
  error?: FieldError | { primary?: FieldError; secondary?: FieldError }
  context?: string
  options: readonly { value: string; label: string }[]
  value: { primary: string; secondary: string }
  onChange: (value: { primary: string; secondary: string }) => void
}

export function PrioritySelector({
  label,
  error,
  context,
  options,
  value,
  onChange,
}: PrioritySelectorProps) {
  const handleClick = (optionValue: string) => {
    // If clicking the current primary → deselect it (and promote secondary)
    if (value.primary === optionValue) {
      onChange({ primary: value.secondary, secondary: '' })
      return
    }
    // If clicking the current secondary → deselect it
    if (value.secondary === optionValue) {
      onChange({ primary: value.primary, secondary: '' })
      return
    }
    // If no primary selected → set as primary
    if (!value.primary) {
      onChange({ primary: optionValue, secondary: value.secondary })
      return
    }
    // If primary set but no secondary → set as secondary
    if (!value.secondary) {
      onChange({ primary: value.primary, secondary: optionValue })
      return
    }
    // Both set → replace secondary
    onChange({ primary: value.primary, secondary: optionValue })
  }

  const errorMessage =
    error && 'message' in error
      ? error.message
      : error && 'primary' in error
        ? error.primary?.message || error.secondary?.message
        : undefined

  return (
    <div>
      <label className="block text-sm font-sans font-semibold text-slate mb-2">
        {label}
      </label>
      {context && (
        <div className="flex items-stretch mt-2 mb-6">
          <div
            className="bg-rock rounded-full my-[3px]"
            style={{ width: '2px', minWidth: '2px' }}
          />
          <p className="text-sm leading-relaxed text-slate/70 pl-4">{context}</p>
        </div>
      )}
      <p className="text-sm text-slate/60 mb-3">
        Pick your top priority first, then your second.
        {value.primary && !value.secondary && ' Now pick your second.'}
      </p>
      <div className="space-y-3">
        {options.map(opt => {
          const isPrimary = value.primary === opt.value
          const isSecondary = value.secondary === opt.value
          const isSelected = isPrimary || isSecondary

          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => handleClick(opt.value)}
              className={`w-full flex items-start gap-3 p-3 border rounded-md text-left transition-colors ${
                isPrimary
                  ? 'border-slate bg-slate/5'
                  : isSecondary
                    ? 'border-rock bg-pearl'
                    : 'border-steel/40 hover:border-rock'
              }`}
            >
              <span
                className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold flex-shrink-0 mt-0.5 ${
                  isPrimary
                    ? 'bg-slate text-white'
                    : isSecondary
                      ? 'bg-rock text-white'
                      : 'bg-steel/20 text-slate/40'
                }`}
              >
                {isPrimary ? '1' : isSecondary ? '2' : ''}
              </span>
              <span className="text-sm text-slate leading-relaxed">{opt.label}</span>
            </button>
          )
        })}
      </div>
      {errorMessage && (
        <p className="text-sm text-red-600 mt-1">{errorMessage}</p>
      )}
    </div>
  )
}
