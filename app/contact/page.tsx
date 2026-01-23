'use client'

import { useState } from 'react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

// Extend window interface for dataLayer
declare global {
  interface Window {
    dataLayer: any[]
  }
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    confirmEmail: '',
    company: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [emailError, setEmailError] = useState('')

  const handleCalendlyClick = () => {
    // Track Calendly discovery call booking click
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'generate_lead',
        lead_type: 'discovery_call',
        method: 'calendly',
        page_location: window.location.href,
        page_title: 'Contact'
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setEmailError('')

    // Validate emails match
    if (formData.email !== formData.confirmEmail) {
      setEmailError('Email addresses do not match')
      return
    }

    setStatus('submitting')

    try {
      // Remove confirmEmail from submission data
      const { confirmEmail, ...submitData } = formData

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', confirmEmail: '', company: '', message: '' })

        // Track successful contact form submission
        if (typeof window !== 'undefined' && window.dataLayer) {
          window.dataLayer.push({
            event: 'generate_lead',
            lead_type: 'contact_form',
            method: 'form_submission',
            page_location: window.location.href,
            page_title: 'Contact'
          })
        }
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Clear email error when user modifies email fields
    if (e.target.name === 'email' || e.target.name === 'confirmEmail') {
      setEmailError('')
    }

    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      <NavBar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-pearl py-24 px-6 lg:px-8 relative overflow-hidden">
          {/* Background blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div
              className="absolute -bottom-20 left-1/4 w-80 h-80 rounded-full opacity-40 blur-3xl"
              style={{
                backgroundColor: 'var(--color-coral)',
                animation: 'blobFloat 23s ease-in-out infinite',
              }}
            />
            <div
              className="absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-30 blur-3xl"
              style={{
                backgroundColor: 'var(--color-rock)',
                animation: 'blobFloat 19s ease-in-out infinite reverse',
                animationDelay: '-7s',
              }}
            />
            <div
              className="absolute top-1/3 -left-20 w-88 h-88 rounded-full opacity-35 blur-3xl"
              style={{
                backgroundColor: 'var(--color-coral-light)',
                animation: 'blobFloat 22s ease-in-out infinite',
                animationDelay: '-14s',
              }}
            />
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate mb-6 animate-fade-in-up">
              Get in touch
            </h1>
            <div className="max-w-2xl flex items-stretch animate-fade-in-up stagger-1">
              <div className="bg-[#9ab8cb] rounded-full my-[5px]" style={{ width: '3px', minWidth: '3px' }}></div>
              <p className="text-xl leading-[1.6] text-coral-accessible pl-6">
                Book a 30-minute discovery call, send us a message, or drop us an email.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Calendly Section */}
              <div>
                <h2 className="text-3xl font-serif leading-tight text-slate mb-6">
                  Book a discovery call
                </h2>
                <p className="text-base leading-relaxed text-slate mb-8">
                  The fastest way to start is a 30-minute discovery call. We'll discuss your goals, map one workflow, and consider improvement opportunities.
                </p>
                <div className="bg-pearl border border-steel rounded-md p-8">
                  <div className="space-y-4 text-base text-slate">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>30 minutes, video call</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>No obligation, no sales pitch</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Practical insights you can use immediately</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a
                      href="https://calendly.com/tom-leomayn/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleCalendlyClick}
                      className="inline-flex items-center justify-center font-sans font-semibold text-base bg-coral text-slate px-8 py-4 rounded-md hover:bg-coral-dark transition-all w-full"
                    >
                      Schedule a Call
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-serif leading-tight text-slate mb-6">
                  Send us a message
                </h2>
                <p className="text-base leading-relaxed text-slate mb-8">
                  Prefer to send a message first? Tell us about your operational
                  challenges and we will get back to you within one business day.
                </p>

                {status === 'success' ? (
                  <div className="bg-coral rounded-md p-8 text-center h-full flex flex-col justify-center">
                    <svg className="w-16 h-16 text-slate mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <h3 className="text-2xl font-serif text-slate mb-2">Message sent</h3>
                    <p className="text-slate">We will get back to you within one business day.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-sans font-semibold text-slate mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-steel rounded-md focus:outline-none focus:border-coral bg-white text-slate"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-sans font-semibold text-slate mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-steel rounded-md focus:outline-none focus:border-coral bg-white text-slate"
                      />
                    </div>

                    <div>
                      <label htmlFor="confirmEmail" className="block text-sm font-sans font-semibold text-slate mb-2">
                        Confirm Email *
                      </label>
                      <input
                        type="email"
                        id="confirmEmail"
                        name="confirmEmail"
                        required
                        value={formData.confirmEmail}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-steel rounded-md focus:outline-none focus:border-coral bg-white text-slate"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-sans font-semibold text-slate mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-steel rounded-md focus:outline-none focus:border-coral bg-white text-slate"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-sans font-semibold text-slate mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-steel rounded-md focus:outline-none focus:border-coral bg-white text-slate resize-none"
                      />
                    </div>

                    {emailError && (
                      <div className="bg-red-50 border border-red-200 rounded-md p-4 text-red-800 text-sm">
                        {emailError}
                      </div>
                    )}

                    {status === 'error' && (
                      <div className="bg-red-50 border border-red-200 rounded-md p-4 text-red-800 text-sm">
                        There was an error sending your message. Please try again or email us directly.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full inline-flex items-center justify-center font-sans font-semibold text-base bg-slate text-white px-8 py-4 rounded-md hover:bg-slate-light transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Direct Contact */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif leading-tight text-slate mb-6">
              Or email us directly
            </h2>
            <p className="text-xl leading-relaxed text-slate mb-4">
              <a href="mailto:hello@leomayn.com" className="text-coral hover:underline">
                hello@leomayn.com
              </a>
            </p>
            <p className="text-base text-slate/70 mb-8">
              We respond to all enquiries within one business day.
            </p>
            <a
              href="https://www.linkedin.com/in/thomasallanjones/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans font-semibold text-base border-2 border-slate text-slate px-6 py-3 rounded-md hover:bg-slate hover:text-white transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Follow on LinkedIn
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
