'use client'

import type { FieldError } from 'react-hook-form'

interface PainPoint {
  area: string
  symptom: string
}

interface AreaSymptomSelectorProps {
  areaLabel: string
  areaContext?: string
  symptomContext?: string
  areaOptions: readonly { value: string; label: string }[]
  symptomOptions: readonly { value: string; label: string }[]
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
      <div className="space-y-3">
        {areaOptions.map(opt => {
          const checked = selectedAreas.includes(opt.value)
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
                onChange={() => handleAreaToggle(opt.value)}
                className="mt-0.5 accent-slate"
              />
              <span className="text-sm text-slate leading-relaxed">{opt.label}</span>
            </label>
          )
        })}
      </div>

      {errorMessage && (
        <p className="text-sm text-red-600 mt-1">{errorMessage}</p>
      )}

      {/* Symptom cards — one per selected area */}
      {selectedAreas.length > 0 && (
        <div className="mt-8 space-y-6">
          {symptomContext && (
            <div>
              <label className="block text-sm font-sans font-semibold text-slate mb-2">
                Q5. What does the problem mainly look like?
              </label>
              <div className="flex items-stretch mt-2 mb-2">
                <div
                  className="bg-rock rounded-full my-[3px]"
                  style={{ width: '2px', minWidth: '2px' }}
                />
                <p className="text-sm leading-relaxed text-slate/70 pl-4">{symptomContext}</p>
              </div>
            </div>
          )}
          {selectedAreas.map(areaValue => {
            const areaOpt = areaOptions.find(o => o.value === areaValue)
            const selectedSymptoms = getSymptomsForArea(areaValue)
            const atSymptomLimit = selectedSymptoms.length >= maxSymptomsPerArea
            return (
              <div
                key={areaValue}
                className="bg-white border border-steel/30 rounded-lg p-5"
              >
                <div className="flex items-baseline justify-between mb-4">
                  <p className="text-sm font-semibold text-slate">
                    {areaOpt?.label ?? areaValue}
                  </p>
                  <p className="text-sm text-slate/50">
                    {selectedSymptoms.length}/{maxSymptomsPerArea} selected
                  </p>
                </div>
                <div className="space-y-2">
                  {symptomOptions.map(symptom => {
                    const isChecked = selectedSymptoms.includes(symptom.value)
                    const isDisabled = atSymptomLimit && !isChecked
                    return (
                      <label
                        key={symptom.value}
                        className={`flex items-start gap-3 p-3 border rounded-md cursor-pointer transition-colors ${
                          isChecked
                            ? 'border-rock bg-pearl'
                            : isDisabled
                              ? 'border-steel/20 opacity-50 cursor-not-allowed'
                              : 'border-steel/40 hover:border-rock'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          disabled={isDisabled}
                          onChange={() => handleSymptomToggle(areaValue, symptom.value)}
                          className="mt-0.5 accent-slate"
                        />
                        <span className="text-sm text-slate leading-relaxed">{symptom.label}</span>
                      </label>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
