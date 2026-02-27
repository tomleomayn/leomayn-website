'use client'

import Link from 'next/link'
import { PlannerProvider } from '@/components/planner/PlannerContext'
import WizardShell from '@/components/planner/WizardShell'

export default function PlannerStartPage() {
  return (
    <PlannerProvider>
      <div className="min-h-screen bg-chalk">
        {/* Minimal header — no full nav during wizard */}
        <div className="border-b border-steel/20 bg-white/80 backdrop-blur-md">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link href="/" className="flex flex-col group">
              <span className="font-sans font-bold text-slate text-lg leading-none uppercase tracking-[0.12em] transition-opacity group-hover:opacity-70">
                LEOMAYN
              </span>
              <div className="bg-coral mt-1 h-[2px] w-full transition-all group-hover:h-[3px]" />
            </Link>
            <span className="text-sm text-slate/50 font-sans">AI Deployment Planner</span>
          </div>
        </div>

        <WizardShell />
      </div>
    </PlannerProvider>
  )
}
