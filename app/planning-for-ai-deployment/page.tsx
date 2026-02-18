'use client'

import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

const trackCTA = () => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'planner_start',
      cta_location: 'landing_page',
    })
  }
}

export default function PlannerLandingPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-pearl py-24 lg:py-32 px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div
              className="absolute -bottom-20 left-1/4 w-80 h-80 rounded-full opacity-40 blur-3xl"
              style={{ backgroundColor: 'var(--color-coral)', animation: 'blobWander1 23s ease-in-out infinite' }}
            />
            <div
              className="absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-30 blur-3xl"
              style={{ backgroundColor: 'var(--color-rock)', animation: 'blobWander2 19s ease-in-out infinite' }}
            />
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate mb-6 animate-fade-in-up">
              Find out where AI will move the needle for your business
            </h1>
            <div className="max-w-2xl flex items-stretch animate-fade-in-up stagger-1">
              <div className="bg-rock rounded-full my-[5px]" style={{ width: '3px', minWidth: '3px' }} />
              <div className="pl-6">
                <p className="text-xl leading-[1.6] text-coral-accessible">
                  A diagnostic tool for leaders in professional services and knowledge work environments.
                </p>
                <p className="text-xl leading-[1.6] text-coral-accessible mt-2">
                  Five to ten minutes. A prioritised plan for where to start with AI in your business.
                </p>
              </div>
            </div>
            <div className="mt-10 animate-fade-in-up stagger-2">
              <p className="text-base text-slate/70 mb-4">The hardest part of AI adoption is knowing where to begin. Start here.</p>
              <p className="text-sm text-slate/50 mb-6">Free tool. No sales pitch. No obligation.</p>
              <Link
                href="/planning-for-ai-deployment/start"
                onClick={trackCTA}
                className="btn-shimmer inline-flex items-center justify-center font-sans font-semibold text-base bg-slate text-white px-10 py-4 rounded-md hover:bg-slate-light transition-all"
              >
                Start your diagnostic
              </Link>
            </div>
          </div>
        </section>

        {/* What you'll get */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif text-slate text-center mb-4">
                What you will get
              </h2>
              <p className="text-center text-slate/70 max-w-2xl mx-auto mb-2">
                A shortened version of the methodology we use with paying clients.
              </p>
              <p className="text-center text-slate/50 text-sm max-w-2xl mx-auto mb-16">
                Built to help you think about where you might start embedding AI into your workflows.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal>
                <div className="bg-white border border-steel/20 rounded-lg p-8 h-full">
                  <div className="w-12 h-12 rounded-full bg-coral/20 flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif text-slate mb-3">Priority map</h3>
                  <p className="text-sm text-slate/70 leading-relaxed">
                    Your top three workflow areas ranked by impact potential, implementation complexity, and alignment with your strategic goals.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="bg-white border border-steel/20 rounded-lg p-8 h-full">
                  <div className="w-12 h-12 rounded-full bg-coral/20 flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif text-slate mb-3">Time-recovery analysis</h3>
                  <p className="text-sm text-slate/70 leading-relaxed">
                    A business case sketch showing estimated hours and cost across your priority areas, with conservative recovery projections you can take to your leadership team.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="bg-white border border-steel/20 rounded-lg p-8 h-full">
                  <div className="w-12 h-12 rounded-full bg-coral/20 flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif text-slate mb-3">Actionable next steps</h3>
                  <p className="text-sm text-slate/70 leading-relaxed">
                    A personalised checklist of what to do next, what to watch out for, and what foundations you need before starting. Yours to keep as a PDF.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-24 px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif text-slate text-center mb-16">
                How it works
              </h2>
            </ScrollReveal>

            <div className="space-y-12">
              {[
                {
                  step: '01',
                  title: 'Answer ten questions about your firm',
                  description:
                    'Firm type, team size, strategic goals, where time goes, and your current tech landscape. Each question comes with context explaining why it matters.',
                },
                {
                  step: '02',
                  title: 'We score and size key workflow opportunities',
                  description:
                    'Our scoring engine identifies your top three workflow improvement areas. You provide sizing data so we can build a credible business case.',
                },
                {
                  step: '03',
                  title: 'Receive your personalised report',
                  description:
                    'A diagnostic report tailored to your situation: priority map, workflow recommendations, business case numbers, readiness assessment, and next steps. Delivered on-screen and as a branded PDF.',
                },
              ].map((item) => (
                <ScrollReveal key={item.step}>
                  <div className="flex gap-6 items-start">
                    <span className="flex-shrink-0 w-12 h-12 rounded-full bg-slate flex items-center justify-center text-lg font-serif text-white">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-xl font-serif text-slate mb-2">{item.title}</h3>
                      <p className="text-base text-slate/70 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* The four failure modes */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif text-slate text-center mb-4">
                We built this because getting started is the hardest part
              </h2>
              <p className="text-center text-slate/70 max-w-2xl mx-auto mb-16">
                The challenge is working out which workflows and what order to tackle them in. Get that right and it helps you avoid some of the common traps that derail most AI programmes.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  name: 'Hype Paralysis',
                  description:
                    'Reading about AI constantly but never starting. The gap between awareness and action grows wider every quarter.',
                },
                {
                  name: 'Pilot Purgatory',
                  description:
                    'Running experiments that never scale. Proofs of concept that prove the concept but never become production workflows.',
                },
                {
                  name: 'Tool Sprawl',
                  description:
                    'Adopting AI tools without redesigning workflows. Adding technology to broken processes and wondering why nothing improves.',
                },
                {
                  name: 'Compliance Black Box',
                  description:
                    'Ignoring governance until it becomes an emergency. Teams using AI without policies, creating risk that compounds silently.',
                },
              ].map((mode) => (
                <ScrollReveal key={mode.name}>
                  <div className="bg-white border border-steel/20 rounded-lg p-6 h-full">
                    <h3 className="text-lg font-serif text-slate mb-2">{mode.name}</h3>
                    <p className="text-sm text-slate/70 leading-relaxed">{mode.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-24 px-6 lg:px-8 bg-slate">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-serif text-white mb-4">
              Five to ten minutes. A clear starting point.
            </h2>
            <p className="text-lg text-white/70 mb-10">
              The hardest part of AI adoption is knowing where to begin. Start here.
            </p>
            <Link
              href="/planning-for-ai-deployment/start"
              onClick={trackCTA}
              className="btn-shimmer inline-flex items-center justify-center font-sans font-semibold text-base bg-coral text-slate px-10 py-4 rounded-md hover:bg-coral-dark transition-all"
            >
              Start your diagnostic
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
