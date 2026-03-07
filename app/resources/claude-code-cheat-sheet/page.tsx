'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

declare global {
  interface Window {
    dataLayer: any[]
  }
}

const RESOURCE_SLUG = 'claude-code-cheat-sheet'

export default function CheatSheetPage() {
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('/api/resources/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, resource_slug: RESOURCE_SLUG }),
      })

      const data = await response.json()

      if (response.ok && data.downloadUrl) {
        setDownloadUrl(data.downloadUrl)
        setStatus('success')

        if (typeof window !== 'undefined' && window.dataLayer) {
          window.dataLayer.push({
            event: 'generate_lead',
            lead_type: 'resource_download',
            resource: RESOURCE_SLUG,
            method: 'form_submit',
          })
        }
      } else {
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

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

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left — copy */}
              <div>
                <p className="text-sm font-sans font-semibold text-coral-accessible uppercase tracking-wider mb-4 animate-fade-in-up">
                  Free cheat sheet
                </p>
                <h1 className="text-4xl lg:text-5xl font-serif leading-[1.1] text-slate mb-6 animate-fade-in-up stagger-1">
                  Level up your Claude Code game.
                </h1>
                <div className="max-w-lg flex items-stretch animate-fade-in-up stagger-2">
                  <div className="bg-rock rounded-full my-[5px]" style={{ width: '3px', minWidth: '3px' }} />
                  <p className="text-lg leading-[1.6] text-coral-accessible pl-6">
                    9 steps from first session to full operating system. Every step is pulled from a working system that creates real leverage within a consulting practice.
                  </p>
                </div>
              </div>

              {/* Right — form or download */}
              <div className="animate-fade-in-up stagger-2">
                {status === 'success' && downloadUrl ? (
                  <div className="bg-white border border-steel/20 rounded-lg p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-coral/20 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-serif text-slate mb-3">Your cheat sheet is ready</h2>
                    <p className="text-sm text-slate/70 mb-6">
                      The download link expires in one hour.
                    </p>
                    <a
                      href={downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center font-sans font-semibold text-base bg-slate text-white px-10 py-4 rounded-md hover:bg-slate-light transition-all w-full"
                    >
                      Download PDF
                    </a>
                    <p className="text-xs text-slate/50 mt-4">
                      Check your email for a copy too.
                    </p>
                  </div>
                ) : (
                  <div className="bg-white border border-steel/20 rounded-lg p-8">
                    <h2 className="text-xl font-serif text-slate mb-2">Get the cheat sheet</h2>
                    <p className="text-sm text-slate/70 mb-6">
                      PDF delivered instantly. Yours in thirty seconds.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-sans font-semibold text-slate mb-1.5">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-steel rounded-md focus:outline-none focus:border-coral bg-white text-slate"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-sans font-semibold text-slate mb-1.5">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-steel rounded-md focus:outline-none focus:border-coral bg-white text-slate"
                          placeholder="you@example.com"
                        />
                      </div>

                      {status === 'error' && (
                        <div className="bg-red-50 border border-red-200 rounded-md p-3 text-red-800 text-sm">
                          {errorMessage}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full inline-flex items-center justify-center font-sans font-semibold text-base bg-slate text-white px-8 py-4 rounded-md hover:bg-slate-light transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {status === 'submitting' ? 'Preparing download...' : 'Download the cheat sheet'}
                      </button>
                    </form>
                    <p className="text-xs text-slate/50 mt-4 text-center">
                      We may send you occasional emails. You can unsubscribe any time.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* What's inside */}
        <section className="py-20 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl font-serif text-slate text-center mb-4">
                What is inside
              </h2>
              <p className="text-center text-slate/70 max-w-2xl mx-auto mb-14">
                Nine techniques, ordered by complexity. Start at the top, each one compounds on the last.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  label: 'Starter',
                  items: ['Session rules (CLAUDE.md)', 'Forbidden word list', 'Correct once, remember forever'],
                  note: 'Do these today. Ten minutes.',
                },
                {
                  label: 'Intermediate',
                  items: ['Reference files and conditional loading', 'Session handoff notes', 'Automated quality gates (hooks)'],
                  note: 'Compound over weeks.',
                },
                {
                  label: 'Advanced',
                  items: ['One-sentence workflows (commands + skills)', 'Cumulative feedback loops', 'Config over conversation'],
                  note: 'Build once, use forever.',
                },
              ].map((tier) => (
                <ScrollReveal key={tier.label}>
                  <div className="bg-white border border-steel/20 rounded-lg p-6 h-full flex flex-col">
                    <span className="text-xs font-sans font-semibold text-coral-accessible uppercase tracking-wider mb-4">
                      {tier.label}
                    </span>
                    <ul className="space-y-3 flex-1">
                      {tier.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-slate leading-relaxed">
                          <svg className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-slate/50 mt-4 pt-4 border-t border-steel/10">
                      {tier.note}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Credibility strip */}
        <section className="py-16 px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <p className="text-lg text-slate/70 leading-relaxed">
                Every technique is pulled from a working system — 32 commands, 35 skills, 7 automated hooks, and 64 service integrations. All built in plain English, running a real consulting practice.
              </p>
              <p className="text-sm text-slate/50 mt-6">
                By Tom Jones, founder of Leomayn
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Bottom CTA */}
        {status !== 'success' && (
          <section className="py-20 px-6 lg:px-8 bg-slate">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-serif text-white mb-4">
                Stop re-explaining yourself every session
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Nine steps. One PDF. Yours in thirty seconds.
              </p>
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="inline-flex items-center justify-center font-sans font-semibold text-lg bg-coral text-slate px-14 py-5 rounded-md hover:bg-coral-dark transition-all"
              >
                Get the cheat sheet
              </a>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
