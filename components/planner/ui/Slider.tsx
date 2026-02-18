'use client'

import { useState } from 'react'

interface SliderProps {
  label: string
  context?: string
  value: number
  onChange: (value: number) => void
  leftAnchor: string
  rightAnchor: string
}

export function Slider({
  label,
  context,
  value,
  onChange,
  leftAnchor,
  rightAnchor,
}: SliderProps) {
  const [touched, setTouched] = useState(false)

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
      <div className="px-1">
        <input
          type="range"
          min={0}
          max={100}
          step={5}
          value={value}
          onChange={e => {
            setTouched(true)
            onChange(Number(e.target.value))
          }}
          className="w-full h-2 bg-steel/30 rounded-full appearance-none cursor-pointer accent-slate"
        />
        <div className="flex justify-between mt-2">
          <span className="text-xs text-slate/60">{leftAnchor} {touched && `(${value}%)`}</span>
          <span className="text-xs text-slate/60">{rightAnchor} {touched && `(${100 - value}%)`}</span>
        </div>
      </div>
    </div>
  )
}
