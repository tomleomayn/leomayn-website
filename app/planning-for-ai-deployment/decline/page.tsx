'use client'

import { useState } from 'react'
import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function DeclinePage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    // Fire-and-forget waitlist signup via qualify API
    try {
      await fetch('/api/planner/qualify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Waitlist signup',
          email,
          company: '',
          role: 'unknown',
          turnover: 'under-1m',
          consentGiven: true,
        }),
      })
    } catch {
      // Best effort
    }

    setSubmitted(true)
  }

  return (
    <>
      <NavBar />
      <main className="min-h-screen">
        <section className="bg-pearl py-24 px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-serif leading-[1.1] text-slate mb-6">
              We are building something for you
            </h1>
            <p className="text-lg text-slate/70 leading-relaxed mb-8">
              Our AI Deployment Planner is designed for firms above {'\u00a3'}1M turnover, where the operational
              complexity makes workflow improvement most impactful. We are working on a version
              for earlier-stage businesses.
            </p>

            {submitted ? (
              <div className="bg-coral/20 rounded-md p-6">
                <p className="text-slate font-semibold">You are on the list.</p>
                <p className="text-sm text-slate/70 mt-2">
                  We will let you know when we have something for you.
                </p>
              </div>
            ) : (
              <form onSubmit={handleWaitlist} className="max-w-md mx-auto">
                <p className="text-sm text-slate/70 mb-4">
                  Join the waitlist and we will notify you when it is ready.
                </p>
                <div className="flex gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-3 border border-steel rounded-md focus:outline-none focus:border-coral bg-white text-slate"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center font-sans font-semibold text-sm bg-slate text-white px-6 py-3 rounded-md hover:bg-slate-light transition-all"
                  >
                    Join waitlist
                  </button>
                </div>
              </form>
            )}

            <div className="mt-12">
              <p className="text-sm text-slate/50 mb-3">In the meantime</p>
              <Link
                href="/applied-ai"
                className="text-sm font-sans font-semibold text-slate hover:text-rock transition-colors"
              >
                Read our thinking on AI in professional services &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
