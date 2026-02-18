'use client'

import type { ReactNode } from 'react'
import type { FieldError, UseFormRegisterReturn } from 'react-hook-form'

// ============================================
// Shared form field styling (matches contact page)
// ============================================

const inputClasses =
  'w-full px-4 py-3 border border-steel rounded-md focus:outline-none focus:border-coral bg-white text-slate'
const labelClasses = 'block text-sm font-sans font-semibold text-slate mb-2'
const errorClasses = 'text-sm text-red-600 mt-1'
const contextClasses =
  'flex items-stretch mt-2 mb-6'
const contextBarClasses = 'bg-rock rounded-full my-[3px]'
const contextTextClasses = 'text-sm leading-relaxed text-slate/70 pl-4'

interface FieldWrapperProps {
  label: string
  required?: boolean
  error?: FieldError
  context?: string
  children: ReactNode
}

export function FieldWrapper({ label, required, error, context, children }: FieldWrapperProps) {
  return (
    <div>
      <label className={labelClasses}>
        {label}
      </label>
      {context && (
        <div className={contextClasses}>
          <div className={contextBarClasses} style={{ width: '2px', minWidth: '2px' }} />
          <p className={contextTextClasses}>{context}</p>
        </div>
      )}
      {children}
      {error && <p className={errorClasses}>{error.message}</p>}
    </div>
  )
}

interface TextFieldProps {
  label: string
  required?: boolean
  error?: FieldError
  registration: UseFormRegisterReturn
  type?: 'text' | 'email'
  placeholder?: string
}

export function TextField({ label, required, error, registration, type = 'text', placeholder }: TextFieldProps) {
  return (
    <FieldWrapper label={label} required={required} error={error}>
      <input
        type={type}
        placeholder={placeholder}
        className={inputClasses}
        {...registration}
      />
    </FieldWrapper>
  )
}

interface SelectFieldProps {
  label: string
  required?: boolean
  error?: FieldError
  context?: string
  registration: UseFormRegisterReturn
  options: readonly { value: string; label: string }[]
  placeholder?: string
}

export function SelectField({
  label,
  required,
  error,
  context,
  registration,
  options,
  placeholder = 'Select...',
}: SelectFieldProps) {
  return (
    <FieldWrapper label={label} required={required} error={error} context={context}>
      <select className={inputClasses} {...registration}>
        <option value="">{placeholder}</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </FieldWrapper>
  )
}

interface RadioGroupProps {
  label: string
  required?: boolean
  error?: FieldError
  context?: string
  registration: UseFormRegisterReturn
  options: readonly { value: string; label: string }[]
}

export function RadioGroup({ label, required, error, context, registration, options }: RadioGroupProps) {
  return (
    <FieldWrapper label={label} required={required} error={error} context={context}>
      <div className="space-y-3">
        {options.map(opt => (
          <label
            key={opt.value}
            className="flex items-start gap-3 p-3 border border-steel/40 rounded-md cursor-pointer hover:border-rock transition-colors has-[:checked]:border-rock has-[:checked]:bg-pearl"
          >
            <input
              type="radio"
              value={opt.value}
              className="mt-0.5 accent-slate"
              {...registration}
            />
            <span className="text-sm text-slate leading-relaxed">{opt.label}</span>
          </label>
        ))}
      </div>
    </FieldWrapper>
  )
}

interface CheckboxGroupProps {
  label: string
  required?: boolean
  error?: FieldError
  context?: string
  options: readonly { value: string; label: string }[]
  selectedValues: string[]
  onChange: (values: string[]) => void
  maxSelections?: number
}

export function CheckboxGroup({
  label,
  required,
  error,
  context,
  options,
  selectedValues,
  onChange,
  maxSelections,
}: CheckboxGroupProps) {
  const handleToggle = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter(v => v !== value))
    } else if (!maxSelections || selectedValues.length < maxSelections) {
      onChange([...selectedValues, value])
    }
  }

  const atLimit = maxSelections !== undefined && selectedValues.length >= maxSelections

  return (
    <FieldWrapper label={label} required={required} error={error} context={context}>
      {maxSelections && (
        <p className="text-xs text-slate/60 mb-3">
          Select up to {maxSelections} ({selectedValues.length}/{maxSelections} selected)
        </p>
      )}
      <div className="space-y-3">
        {options.map(opt => {
          const checked = selectedValues.includes(opt.value)
          const disabled = atLimit && !checked
          return (
            <label
              key={opt.value}
              className={`flex items-start gap-3 p-3 border rounded-md cursor-pointer transition-colors ${
                checked
                  ? 'border-rock bg-pearl'
                  : disabled
                    ? 'border-steel/20 opacity-50 cursor-not-allowed'
                    : 'border-steel/40 hover:border-rock'
              }`}
            >
              <input
                type="checkbox"
                checked={checked}
                disabled={disabled}
                onChange={() => handleToggle(opt.value)}
                className="mt-0.5 accent-slate"
              />
              <span className="text-sm text-slate leading-relaxed">{opt.label}</span>
            </label>
          )
        })}
      </div>
    </FieldWrapper>
  )
}

interface CheckboxFieldProps {
  label: string
  error?: FieldError
  registration: UseFormRegisterReturn
}

export function CheckboxField({ label, error, registration }: CheckboxFieldProps) {
  return (
    <div>
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          className="mt-1 accent-slate"
          {...registration}
        />
        <span className="text-sm text-slate leading-relaxed">{label}</span>
      </label>
      {error && <p className={errorClasses}>{error.message}</p>}
    </div>
  )
}
