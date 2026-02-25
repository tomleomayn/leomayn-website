'use client'

import type { FieldError } from 'react-hook-form'

interface PainPoint {
  area: string
  symptom: string
}

interface AreaOption {
  value: string
  shortLabel: string
  label: string
}

interface SymptomOption {
  value: string
  shortLabel: string
  label: string
}

interface CategoryGroup {
  label: string
  areas: readonly string[]
}

interface AreaSymptomSelectorProps {
  areaLabel: string
  areaContext?: string
  symptomContext?: string
  areaOptions: readonly AreaOption[]
  symptomOptions: readonly SymptomOption[]
  categories?: readonly CategoryGroup[]
  value: PainPoint[]
  onChange: (value: PainPoint[]) => void
  maxAreas?: number
  maxSymptomsPerArea?: number
  error?: FieldError | { root?: FieldError }
}

export function AreaSymptomSelector({
  areaLabel,
  areaContext,
  symptomContext,
  areaOptions,
  symptomOptions,
  categories,
  value,
  onChange,
  maxAreas = 3,
  maxSymptomsPerArea = 2,
  error,
}: AreaSymptomSelectorProps) {
  // Derive selected areas from the value array
  const selectedAreas = [...new Set(value.map(p => p.area))]
  const atLimit = selectedAreas.length >= maxAreas

  const handleAreaToggle = (areaValue: string) => {
    if (selectedAreas.includes(areaValue)) {
      // Deselect — remove all entries for this area
      onChange(value.filter(p => p.area !== areaValue))
    } else if (!atLimit) {
      // Select — add a placeholder (will be filtered on submit)
      onChange([...value, { area: areaValue, symptom: '' }])
    }
  }

  const handleSymptomToggle = (areaValue: string, symptomValue: string) => {
    const areaEntries = value.filter(p => p.area === areaValue)
    const hasSymptom = areaEntries.some(p => p.symptom === symptomValue)

    if (hasSymptom) {
      // Uncheck — remove this specific entry
      const updated = value.filter(p => !(p.area === areaValue && p.symptom === symptomValue))
      // If no symptoms left for this area, keep the area with empty symptom
      if (!updated.some(p => p.area === areaValue)) {
        updated.push({ area: areaValue, symptom: '' })
      }
      onChange(updated)
    } else {
      // Check — add this symptom if under the per-area limit
      const currentSymptoms = areaEntries.filter(p => p.symptom !== '')
      if (currentSymptoms.length >= maxSymptomsPerArea) return

      // Replace the empty placeholder if it exists, otherwise add
      const hasPlaceholder = areaEntries.some(p => p.symptom === '')
      if (hasPlaceholder && currentSymptoms.length === 0) {
        onChange(value.map(p =>
          p.area === areaValue && p.symptom === '' ? { area: areaValue, symptom: symptomValue } : p
        ))
      } else {
        onChange([...value, { area: areaValue, symptom: symptomValue }])
      }
    }
  }

  const getSymptomsForArea = (areaValue: string): string[] =>
    value.filter(p => p.area === areaValue && p.symptom !== '').map(p => p.symptom)

  const errorMessage =
    error && 'message' in error
      ? error.message
      : error && 'root' in error
        ? error.root?.message
        : undefined

  // Render a single area card with inline symptom expansion
  const renderAreaCard = (opt: AreaOption) => {
    const checked = selectedAreas.includes(opt.value)
    const disabled = atLimit && !checked
    const selectedSymptoms = getSymptomsForArea(opt.value)
    const atSymptomLimit = selectedSymptoms.length >= maxSymptomsPerArea

    return (
      <div key={opt.value}>
        <label
          className={`flex items-start gap-3 p-3 border rounded-md cursor-pointer transition-colors ${
            checked
              ? 'border-rock bg-pearl rounded-b-none'
              : disabled
                ? 'border-steel/20 opacity-50 cursor-not-allowed'
                : 'border-steel/40 hover:border-rock'
          }`}
        >
          <input
            type="checkbox"
            checked={checked}
            disabled={disabled}
            onChange={() => handleAreaToggle(opt.value)}
            className="mt-0.5 accent-slate"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-semibold text-slate">{opt.shortLabel}</span>
              {checked && (
                <span className="text-xs text-slate/50 ml-2 flex-shrink-0">
                  {selectedSymptoms.length}/{maxSymptomsPerArea}
                </span>
              )}
            </div>
            <span className="text-xs text-slate/50 leading-snug">{opt.label}</span>
          </div>
        </label>

        {/* Inline symptom expansion */}
        {checked && (
          <div className="border border-t-0 border-rock bg-white rounded-b-md p-3 space-y-1.5 transition-all">
            {symptomContext && selectedSymptoms.length === 0 && (
              <p className="text-xs text-slate/50 mb-2">Select up to {maxSymptomsPerArea} symptoms</p>
            )}
            {symptomOptions.map(symptom => {
              const isChecked = selectedSymptoms.includes(symptom.value)
              const isDisabled = atSymptomLimit && !isChecked
              return (
                <label
                  key={symptom.value}
                  className={`flex items-start gap-2.5 p-2 border rounded cursor-pointer transition-colors ${
                    isChecked
                      ? 'border-rock bg-pearl'
                      : isDisabled
                        ? 'border-steel/20 opacity-50 cursor-not-allowed'
                        : 'border-steel/30 hover:border-rock'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    disabled={isDisabled}
                    onChange={() => handleSymptomToggle(opt.value, symptom.value)}
                    className="mt-0.5 accent-slate"
                  />
                  <div className="min-w-0">
                    <span className="text-sm font-medium text-slate">{symptom.shortLabel}</span>
                    <span className="text-xs text-slate/50 ml-1.5">{symptom.label}</span>
                  </div>
                </label>
              )
            })}
          </div>
        )}
      </div>
    )
  }

  // Group areas by category, or render flat if no categories provided
  const renderAreas = () => {
    if (categories) {
      return categories.map(cat => {
        const catAreas = cat.areas
          .map(areaValue => areaOptions.find(o => o.value === areaValue))
          .filter((o): o is AreaOption => !!o)

        if (catAreas.length === 0) return null

        return (
          <div key={cat.label}>
            <p className="text-xs font-semibold text-slate/40 uppercase tracking-wide mb-2 mt-1">
              {cat.label}
            </p>
            <div className="space-y-2">
              {catAreas.map(opt => renderAreaCard(opt))}
            </div>
          </div>
        )
      })
    }

    // Flat rendering fallback
    return areaOptions.map(opt => renderAreaCard(opt))
  }

  return (
    <div>
      {/* Area selection */}
      <label className="block text-sm font-sans font-semibold text-slate mb-2">
        {areaLabel}
      </label>
      {areaContext && (
        <div className="flex items-stretch mt-2 mb-6">
          <div
            className="bg-rock rounded-full my-[3px]"
            style={{ width: '2px', minWidth: '2px' }}
          />
          <p className="text-sm leading-relaxed text-slate/70 pl-4">{areaContext}</p>
        </div>
      )}
      <p className="text-sm text-slate/60 mb-3">
        Select {maxAreas === 3 ? 'two or three' : `up to ${maxAreas}`} areas ({selectedAreas.length}/{maxAreas} selected)
      </p>
      <div className="space-y-4">
        {renderAreas()}
      </div>

      {errorMessage && (
        <p className="text-sm text-red-600 mt-1">{errorMessage}</p>
      )}
    </div>
  )
}
