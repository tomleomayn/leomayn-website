'use client'

import { usePlanner } from './PlannerContext'
import { ARCHETYPES, getRecoveryPercentageRange, CONDITION_LABELS } from '@/lib/planner/constants'
import { normaliseCondition, type ConditionLevel } from '@/lib/planner/types'

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0,
  }).format(amount)
}

function formatRecovery(range: { low: number; high: number }): string {
  const fmt = (n: number) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(n)
  if (range.low === range.high) return fmt(range.low)
  return `${fmt(range.low)} ${'\u2013'} ${fmt(range.high)}`
}

function getRecoveryLabel(archetypeId: string): { rate: string; label: string } {
  const range = getRecoveryPercentageRange(archetypeId)
  return { rate: `${range.low}\u2013${range.high}%`, label: 'Target time savings' }
}

const CONDITION_STYLES: Record<ConditionLevel, { bg: string; text: string; icon: React.ReactNode }> = {
  green: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
  },
  amber: {
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
    ),
  },
  red: {
    bg: 'bg-red-50',
    text: 'text-red-700',
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
      </svg>
    ),
  },
}

function ConditionBadge({ level, label }: { level: ConditionLevel; label: string }) {
  const style = CONDITION_STYLES[level]
  return (
    <span className={`inline-flex items-center justify-center gap-1.5 w-40 px-3 py-1 rounded-full text-xs font-semibold ${style.bg} ${style.text}`}>
      {style.icon}
      {label}
    </span>
  )
}

const RANK_ACCENTS = ['border-l-slate', 'border-l-rock', 'border-l-steel']

export default function ReportView() {
  const { state } = usePlanner()
  const report = state.report

  if (!report) {
    return (
      <div className="text-center py-24">
        <p className="text-slate/70">No report data available.</p>
      </div>
    )
  }

  const { businessCase } = report
  const reportId = report.id

  const handlePdfDownload = () => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ event: 'planner_pdf_download' })
    }
    window.open(`/api/planner/pdf/${reportId}`, '_blank')
  }

  const handleDiscoveryCTA = () => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ event: 'planner_cta_discovery' })
    }
  }

  // Track report generated
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({ event: 'planner_report_generated' })
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* ── Report header ── */}
      <div className="text-center mb-16">
        <div className="inline-block mb-6">
          <div className="w-12 h-0.5 bg-coral mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-serif text-slate mb-3">Your AI Deployment Plan</h1>
          <div className="w-12 h-0.5 bg-coral mx-auto mt-6" />
        </div>
        <p className="text-slate/50 text-sm">
          Generated {new Date(report.generatedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
        <button
          onClick={handlePdfDownload}
          className="mt-6 inline-flex items-center gap-2 font-sans font-semibold text-sm border-2 border-slate text-slate px-6 py-3 rounded-md hover:bg-slate hover:text-white transition-all"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download PDF
        </button>
      </div>

      {/* ── Section 1: Your situation ── */}
      <section className="mb-14">
        <h2 className="text-2xl font-serif text-slate mb-4">Your situation</h2>
        <div className="border-l-2 border-coral pl-6">
          <p className="text-base text-slate/80 leading-relaxed">{report.situationSummary}</p>
        </div>
      </section>

      {/* ── Section 2: Priority map ── */}
      <section className="mb-14">
        <h2 className="text-2xl font-serif text-slate mb-6">Priority map</h2>
        <p className="text-sm text-slate/60 leading-relaxed mb-3">
          Based on your diagnostic inputs, we scored nine workflow archetypes and ranked them by impact, feasibility, and learning value. These three represent your strongest starting points.
        </p>
        {report.priorityMapIntro && (
          <p className="text-sm text-slate/70 leading-relaxed mb-6">{report.priorityMapIntro}</p>
        )}
        <div className="grid gap-4">
          {report.workflows.map((workflow, index) => (
            <div
              key={workflow.archetypeId}
              className={`bg-white border border-steel/15 rounded-lg p-6 border-l-4 ${RANK_ACCENTS[index] ?? 'border-l-steel'}`}
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate text-white text-sm font-semibold flex-shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-serif text-slate">{workflow.name}</h3>
                  <p className="text-sm text-slate/70 mt-1 leading-relaxed">{workflow.whyThisMatters}</p>
                </div>
              </div>

              <div className="flex gap-2 ml-11">
                {(() => {
                  const impact = normaliseCondition(workflow.threeConditionsCheck.impact)
                  const complexity = normaliseCondition(workflow.threeConditionsCheck.complexity)
                  const learning = normaliseCondition(workflow.threeConditionsCheck.learning)
                  return (
                    <>
                      <ConditionBadge level={impact} label={CONDITION_LABELS.impact[impact]} />
                      <ConditionBadge level={complexity} label={CONDITION_LABELS.complexity[complexity]} />
                      <ConditionBadge level={learning} label={CONDITION_LABELS.learning[learning]} />
                    </>
                  )
                })()}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 3: Workflow detail (x3) ── */}
      {report.workflows.map((workflow, index) => (
        <section key={`detail-${workflow.archetypeId}`} className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate text-white text-sm font-semibold flex-shrink-0">
              {index + 1}
            </span>
            <h2 className="text-2xl font-serif text-slate">{workflow.name}</h2>
          </div>

          <div className="space-y-6">
            {/* Current vs Future state */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-pearl rounded-lg p-5 border-t-2 border-steel/20">
                <h4 className="text-xs uppercase tracking-wider text-steel font-semibold mb-3">Today</h4>
                <p className="text-sm text-slate/80 leading-relaxed">{workflow.currentState}</p>
              </div>
              <div className="bg-coral/8 rounded-lg p-5 border-t-2 border-coral/40">
                <h4 className="text-xs uppercase tracking-wider text-coral-accessible font-semibold mb-3">With AI</h4>
                <p className="text-sm text-slate/80 leading-relaxed">{workflow.futureState}</p>
              </div>
            </div>

            {/* Considerations */}
            <div className="bg-white border border-steel/15 rounded-lg p-5">
              <h4 className="text-xs uppercase tracking-wider text-steel font-semibold mb-3">Key considerations</h4>
              <p className="text-sm text-slate/80 leading-relaxed">{workflow.considerations}</p>
            </div>

            {/* Prerequisites and Pitfalls */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-steel font-semibold mb-3">Before you start</h4>
                <ul className="space-y-2">
                  {workflow.prerequisites.map((prereq, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate/70">
                      <svg className="w-4 h-4 text-rock flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {prereq}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-steel font-semibold mb-3">Watch out for</h4>
                <ul className="space-y-2">
                  {workflow.pitfalls.map((pitfall, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate/70">
                      <svg className="w-4 h-4 text-coral-accessible flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      {pitfall}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── Section 4: Business case ── */}
      <section className="mb-14">
        <h2 className="text-2xl font-serif text-slate mb-6">Estimated savings from successful AI automation</h2>

        <p className="text-sm text-slate/70 leading-relaxed mb-6">
          The figures below are based on the team size and time estimates you provided. We apply a standard 25%
          employer cost uplift (pension, NI, benefits) to base salary. Target saving ranges reflect the proportion of
          manual effort each workflow type typically yields to automation and process improvement. These are
          directional estimates to frame the opportunity, not a financial forecast.
        </p>

        <div className="bg-white border border-steel/15 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate text-white">
                  <th className="text-left px-5 py-3.5 font-semibold">Workflow</th>
                  <th className="text-right px-5 py-3.5 font-semibold">Est. annual hours</th>
                  <th className="text-right px-5 py-3.5 font-semibold">Est. annual cost</th>
                  <th className="text-right px-5 py-3.5 font-semibold">Target saving range</th>
                </tr>
              </thead>
              <tbody>
                {businessCase.perArea.map((area, index) => {
                  const workflow = report.workflows[index]
                  const recovery = getRecoveryLabel(area.archetypeId)
                  return (
                    <tr key={area.archetypeId} className="border-b border-steel/10">
                      <td className="px-5 py-3.5 text-slate">
                        <div>{workflow?.name ?? area.archetypeId}</div>
                        <span className="text-xs text-steel">{recovery.label}: {recovery.rate}</span>
                      </td>
                      <td className="px-5 py-3.5 text-right text-slate/70">
                        {area.annualHours.toLocaleString('en-GB')}
                      </td>
                      <td className="px-5 py-3.5 text-right text-slate/70">
                        {formatCurrency(area.annualCost)}
                      </td>
                      <td className="px-5 py-3.5 text-right font-semibold text-slate">
                        {formatRecovery(area.recoveryRange)}
                      </td>
                    </tr>
                  )
                })}
                <tr className="bg-pearl">
                  <td className="px-5 py-3.5 font-semibold text-slate">Combined target saving range</td>
                  <td className="px-5 py-3.5 text-right font-semibold text-slate">
                    {businessCase.totalAnnualHours.toLocaleString('en-GB')}
                  </td>
                  <td className="px-5 py-3.5 text-right font-semibold text-slate">
                    {formatCurrency(businessCase.totalAnnualCost)}
                  </td>
                  <td className="px-5 py-3.5 text-right font-semibold text-slate">
                    {formatRecovery(businessCase.conservativeRecovery)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Stat cards */}
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="bg-white border border-steel/15 rounded-lg p-6 text-center">
            <p className="text-xs uppercase tracking-wider text-steel mb-2 font-semibold">Est. weekly hours recovered</p>
            <p className="text-3xl font-serif text-slate">
              {businessCase.weeklyHoursRecovered.low === businessCase.weeklyHoursRecovered.high
                ? businessCase.weeklyHoursRecovered.low
                : <>{businessCase.weeklyHoursRecovered.low} {'\u2013'} {businessCase.weeklyHoursRecovered.high}</>}
            </p>
            <p className="text-xs text-steel mt-1">hours per week</p>
          </div>
          <div className="bg-white border border-coral/30 rounded-lg p-6 text-center">
            <p className="text-xs uppercase tracking-wider text-steel mb-2 font-semibold">Combined target saving range</p>
            <p className="text-3xl font-serif text-slate">
              {formatRecovery(businessCase.conservativeRecovery)}
            </p>
            <p className="text-xs text-steel mt-1">per year across all three workflows</p>
          </div>
        </div>

        {businessCase.revenueFraming && (
          <div className="mt-4 border-l-2 border-rock pl-5">
            <p className="text-sm text-slate/70 leading-relaxed">
              For a predominantly client-facing team, recovered hours have direct revenue potential.
              If even half of the recovered time converts to billable work, that represents meaningful top-line growth.
            </p>
          </div>
        )}

        <p className="mt-4 text-xs text-steel leading-relaxed">
          Target saving ranges are estimated based on Leomayn's methodology and industry benchmarks for comparable workflow types. These are directional estimates based on the sizing data you provided. A full Diagnose engagement would validate these figures with access to your team and data.
        </p>

        {/* Expandable full workings */}
        <details className="mt-4">
          <summary className="text-xs text-steel cursor-pointer hover:text-slate/70 font-semibold">
            How we calculated this
          </summary>
          <div className="mt-2 text-xs text-steel leading-relaxed pl-4 border-l border-steel/15">
            <p className="mb-1">Base salary estimate &times; 1.25 employer uplift = fully loaded cost</p>
            <p className="mb-1">People involved &times; weekly hours &times; 45 working weeks = annual hours</p>
            <p className="mb-1">Annual hours &times; hourly rate = annual cost</p>
            <p className="mb-1">Target time savings range applied per workflow type</p>
            <p>Sum across three workflows = combined target saving range</p>
          </div>
        </details>
      </section>

      {/* ── Section 4b: Success factors ── */}
      <section className="mb-14">
        <h2 className="text-2xl font-serif text-slate mb-4">What supports AI-powered change</h2>
        <p className="text-sm text-slate/60 leading-relaxed mb-6">
          These factors consistently determine whether AI-assisted workflows deliver sustained value:
        </p>
        <div className="space-y-3">
          {[
            { label: 'Governance', desc: 'Clear ownership of each workflow, with defined decision rights' },
            { label: 'Change management', desc: 'A structured approach to transitioning teams from current to future ways of working' },
            { label: 'Effective leadership', desc: 'Visible sponsorship from senior leaders who model the new behaviours' },
            { label: 'Communication', desc: 'Regular, honest updates on what is changing, why, and what it means for individuals' },
            { label: 'Access to training', desc: 'Practical, role-specific training on the new tools and workflows' },
            { label: 'Time to upskill', desc: 'Protected time for teams to learn, experiment, and build confidence' },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-rock flex-shrink-0 mt-2" />
              <p className="text-sm text-slate/80 leading-relaxed">
                <span className="font-semibold text-slate">{item.label}</span> — {item.desc}
              </p>
            </div>
          ))}
        </div>
        <p className="text-xs text-steel leading-relaxed mt-4">
          These factors develop through the engagement, not before it. Our Diagnose phase assesses your current position on each and helps you build them into an implementation plan.
        </p>
      </section>

      {/* ── Section 5: Maturity assessment (if present) ── */}
      {report.maturityAssessment && (
        <section className="mb-14">
          <h2 className="text-2xl font-serif text-slate mb-6">Your maturity profile</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white border border-steel/15 rounded-lg p-5">
              <h3 className="text-xs uppercase tracking-wider text-rock font-semibold mb-4">Strengths</h3>
              <ul className="space-y-3">
                {report.maturityAssessment.strengths.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-rock flex-shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-steel/15 rounded-lg p-5">
              <h3 className="text-xs uppercase tracking-wider text-coral-accessible font-semibold mb-4">Areas for development</h3>
              <ul className="space-y-3">
                {report.maturityAssessment.development.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-coral-accessible flex-shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* ── Section 6: Quick wins (if present) ── */}
      {report.quickWins && report.quickWins.length > 0 && (
        <section className="mb-14">
          <h2 className="text-2xl font-serif text-slate mb-6">Quick wins</h2>
          <p className="text-sm text-slate/60 mb-4">Things you can start this week to build early momentum and validate assumptions.</p>
          <div className="space-y-3">
            {report.quickWins.map((win, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border border-steel/15 rounded-lg p-4">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-rock/15 text-slate text-xs font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-sm text-slate/80 leading-relaxed">{win}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Section 7: Readiness ── */}
      <section className="mb-14">
        <h2 className="text-2xl font-serif text-slate mb-6">Your readiness</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xs uppercase tracking-wider text-rock font-semibold mb-4">What is working</h3>
            <ul className="space-y-3">
              {report.readiness.strengths.map((strength, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate/70">
                  <svg className="w-4 h-4 text-rock flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {strength}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-wider text-coral-accessible font-semibold mb-4">Where to build</h3>
            <ul className="space-y-3">
              {report.readiness.gaps.map((gap, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate/70">
                  <svg className="w-4 h-4 text-coral-accessible flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {gap}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Section 8: Next steps ── */}
      <section className="mb-14">
        <h2 className="text-2xl font-serif text-slate mb-6">What to do next</h2>
        <ol className="space-y-4">
          {report.nextSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate/8 text-slate text-xs font-bold flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="text-sm text-slate/80 leading-relaxed pt-1">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Section 9: Go deeper CTA ── */}
      <section className="bg-slate rounded-xl p-8 sm:p-12 text-center mb-8">
        <div className="w-10 h-0.5 bg-coral mx-auto mb-6" />
        <h2 className="text-2xl sm:text-3xl font-serif text-white mb-4">Want to go deeper?</h2>
        <p className="text-white/60 max-w-xl mx-auto mb-8 text-sm leading-relaxed">
          This planner gives you a starting point. Our Diagnose engagement goes further, with access
          to your team, your data, and your systems. We produce a validated roadmap with
          workflow blueprints, business case, and implementation sequencing. Most firms
          complete Diagnose in 2{'\u2013'}3 weeks.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://calendly.com/tom-leomayn/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDiscoveryCTA}
            className="inline-flex items-center justify-center font-sans font-semibold text-base bg-coral text-slate px-8 py-4 rounded-md hover:bg-coral-dark transition-all"
          >
            Book a discovery call
          </a>
          <a
            href="mailto:hello@leomayn.com"
            className="inline-flex items-center justify-center font-sans font-semibold text-base border-2 border-white/20 text-white px-8 py-4 rounded-md hover:bg-white/10 transition-all"
          >
            Email us
          </a>
        </div>
      </section>

      {/* Download reminder */}
      <div className="text-center mt-6 mb-12">
        <button
          onClick={handlePdfDownload}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate hover:text-rock transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download PDF report
        </button>
      </div>
    </div>
  )
}
