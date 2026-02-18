'use client'

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import type {
  PlannerState,
  QualificationData,
  DiagnosticData,
  ScoringResult,
  SizingEntry,
  GeneratedReport,
} from '@/lib/planner/types'
import { INITIAL_PLANNER_STATE } from '@/lib/planner/types'

const STORAGE_KEY = 'leomayn-planner-state'

interface PlannerContextValue {
  state: PlannerState
  updateQualification: (data: QualificationData) => void
  updateDiagnostic: (data: DiagnosticData) => void
  setScoringResult: (result: ScoringResult) => void
  updateSizing: (entries: SizingEntry[]) => void
  setReport: (report: GeneratedReport) => void
  setStep: (step: number) => void
  reset: () => void
  hasExistingSession: boolean
}

const PlannerContext = createContext<PlannerContextValue | null>(null)

function loadFromStorage(): PlannerState | null {
  if (typeof window === 'undefined') return null
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY)
    if (!stored) return null
    return JSON.parse(stored) as PlannerState
  } catch {
    return null
  }
}

function saveToStorage(state: PlannerState) {
  if (typeof window === 'undefined') return
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // sessionStorage full or unavailable — continue without persistence
  }
}

export function PlannerProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PlannerState>(INITIAL_PLANNER_STATE)
  const [hasExistingSession, setHasExistingSession] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  // Hydrate from sessionStorage on mount
  useEffect(() => {
    const stored = loadFromStorage()
    if (stored && stored.qualification) {
      setHasExistingSession(true)
      setState(stored)
    }
    setHydrated(true)
  }, [])

  // Save to sessionStorage on every state change (after hydration)
  useEffect(() => {
    if (hydrated) {
      saveToStorage(state)
    }
  }, [state, hydrated])

  const updateQualification = useCallback((data: QualificationData) => {
    setState(prev => ({ ...prev, qualification: data }))
  }, [])

  const updateDiagnostic = useCallback((data: DiagnosticData) => {
    setState(prev => ({ ...prev, diagnostic: data }))
  }, [])

  const setScoringResult = useCallback((result: ScoringResult) => {
    setState(prev => ({ ...prev, scoringResult: result }))
  }, [])

  const updateSizing = useCallback((entries: SizingEntry[]) => {
    setState(prev => ({ ...prev, sizing: entries }))
  }, [])

  const setReport = useCallback((report: GeneratedReport) => {
    setState(prev => ({ ...prev, report }))
  }, [])

  const setStep = useCallback((step: number) => {
    setState(prev => ({ ...prev, currentStep: step }))
  }, [])

  const reset = useCallback(() => {
    setState(INITIAL_PLANNER_STATE)
    setHasExistingSession(false)
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem(STORAGE_KEY)
    }
  }, [])

  return (
    <PlannerContext.Provider
      value={{
        state,
        updateQualification,
        updateDiagnostic,
        setScoringResult,
        updateSizing,
        setReport,
        setStep,
        reset,
        hasExistingSession,
      }}
    >
      {children}
    </PlannerContext.Provider>
  )
}

export function usePlanner() {
  const context = useContext(PlannerContext)
  if (!context) {
    throw new Error('usePlanner must be used within a PlannerProvider')
  }
  return context
}
