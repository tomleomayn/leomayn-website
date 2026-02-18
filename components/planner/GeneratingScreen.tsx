'use client'

import { useState, useEffect } from 'react'

const INSIGHTS = [
  'We look for seven diagnostic signals across each operational area you identified.',
  'Every workflow recommendation must pass three conditions: high impact, low complexity, and high learning value.',
  'The firms that succeed with AI start by fixing the work, then scaling with technology.',
  'Your business case is built from the sizing data you provided, with per-workflow recovery rates.',
  'We assess your organisational readiness to identify which improvements are achievable now.',
]

const STAGES = [
  'Analysing your diagnostic inputs',
  'Scoring workflow archetypes',
  'Building your business case',
  'Writing your personalised report',
]

export default function GeneratingScreen() {
  const [insightIndex, setInsightIndex] = useState(0)
  const [stageIndex, setStageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setInsightIndex(prev => (prev + 1) % INSIGHTS.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setStageIndex(prev => Math.min(prev + 1, STAGES.length - 1))
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-center py-16 sm:py-24">
      {/* Animated line */}
      <div className="w-48 h-0.5 bg-steel/20 mx-auto mb-10 rounded-full overflow-hidden">
        <div className="h-full bg-rock rounded-full animate-pulse" style={{ width: '60%', animationDuration: '1.5s' }} />
      </div>

      <h2 className="text-3xl font-serif text-slate mb-3">
        Generating your report
      </h2>

      {/* Progress stages */}
      <div className="max-w-xs mx-auto mb-12">
        {STAGES.map((stage, i) => (
          <div
            key={stage}
            className={`flex items-center gap-2.5 py-1.5 transition-all duration-500 ${
              i < stageIndex ? 'opacity-40' : i === stageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {i < stageIndex ? (
              <svg className="w-4 h-4 text-rock flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            ) : i === stageIndex ? (
              <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-rock animate-pulse" />
              </div>
            ) : (
              <div className="w-4 h-4 flex-shrink-0" />
            )}
            <span className={`text-sm ${i === stageIndex ? 'text-slate font-medium' : 'text-steel'}`}>
              {stage}
            </span>
          </div>
        ))}
      </div>

      {/* Rotating insights */}
      <div className="max-w-md mx-auto">
        <div className="border-t border-steel/15 pt-6">
          <p className="text-xs uppercase tracking-wider text-steel mb-3 font-sans font-semibold">
            From our methodology
          </p>
          <p
            key={insightIndex}
            className="text-sm text-slate/60 leading-relaxed animate-fade-in-up"
            style={{ animationDuration: '0.4s' }}
          >
            {INSIGHTS[insightIndex]}
          </p>
        </div>
      </div>
    </div>
  )
}
