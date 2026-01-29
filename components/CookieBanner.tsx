'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type ConsentState = 'pending' | 'granted' | 'denied'

const CONSENT_KEY = 'leomayn_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (!stored) {
      setVisible(true)
    }
  }, [])

  const handleConsent = (granted: boolean) => {
    const state: ConsentState = granted ? 'granted' : 'denied'
    localStorage.setItem(CONSENT_KEY, state)

    // Update GTM Consent Mode
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: state,
        ad_storage: state,
        ad_user_data: state,
        ad_personalization: state,
      })
    }

    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-8 left-0 right-0 z-50 p-4 md:p-6"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="mx-auto max-w-3xl rounded-xl bg-slate p-5 shadow-xl md:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-chalk md:text-base">
            We use cookies to understand how you use our site and improve your experience.{' '}
            <Link
              href="/privacy"
              className="underline underline-offset-2 hover:text-coral transition-colors"
            >
              Privacy policy
            </Link>
          </p>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => handleConsent(false)}
              className="rounded-lg border border-rock/40 px-4 py-2 text-sm font-semibold text-chalk transition-colors hover:bg-slate-light"
            >
              Reject
            </button>
            <button
              onClick={() => handleConsent(true)}
              className="rounded-lg bg-coral px-4 py-2 text-sm font-semibold text-slate transition-colors hover:bg-coral-light"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Type declaration for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}
