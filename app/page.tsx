'use client'

import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'
import HeroBlobs from '@/components/HeroBlobs'
import ScrollReveal from '@/components/ScrollReveal'

// Extend window interface for dataLayer
declare global {
  interface Window {
    dataLayer: any[]
  }
}

export default function HomePage() {
  // Track CTA clicks
  const trackCTAClick = (ctaName: string, ctaLocation: string, destination: string) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'cta_click',
        cta_name: ctaName,
        cta_location: ctaLocation,
        link_destination: destination,
        page_location: window.location.href,
        page_title: 'Home'
      })
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Leomayn",
    "url": "https://leomayn.com",
    "description": "Workflow redesign and AI implementation for service organisations",
    "publisher": {
      "@type": "Organization",
      "name": "Leomayn"
    }
  }

  return (
    <>
      <SchemaMarkup data={websiteSchema} />
      <NavBar />
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-pearl py-24 px-6 lg:px-8 relative overflow-hidden">
        <HeroBlobs />
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate mb-4 animate-fade-in-up">
            Fix work, then scale with AI
          </h1>
          <div className="max-w-2xl mb-8 flex items-stretch animate-fade-in-up stagger-1">
            <div className="bg-[#9ab8cb] rounded-full my-[5px]" style={{ width: '3px', minWidth: '3px' }}></div>
            <div className="text-xl leading-[1.6] text-coral-accessible pl-6 space-y-4">
              <p>
                Your team's capacity is stuck in manual processes, scattered information, and error-prone handoffs.
              </p>
              <p>
                We diagnose what's broken, redesign how work flows, then use AI to scale what works.
              </p>
              <p>
                We help service organisations remove delivery friction to free up capacity, reduce rework, and improve margins.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-start animate-fade-in-up stagger-2">
            <Link
              href="/services/diagnose"
              onClick={() => trackCTAClick('Start with Diagnose', 'hero', '/services/diagnose')}
              className="btn-shimmer inline-flex items-center justify-center font-sans font-semibold text-base bg-coral text-slate px-8 py-4 rounded-md hover:bg-coral-dark hover:shadow-lg hover:-translate-y-0.5 transition-all min-w-[220px] w-full sm:w-auto"
            >
              Start with Diagnose
            </Link>
            <Link
              href="/services"
              onClick={() => trackCTAClick('View services', 'hero', '/services')}
              className="inline-flex items-center justify-center font-sans font-semibold text-base border border-slate bg-pearl text-slate px-8 py-4 rounded-md hover:bg-slate hover:text-white transition-all min-w-[220px] w-full sm:w-auto"
            >
              View services
            </Link>
          </div>
        </div>
      </section>

      {/* Tension Section */}
      <section className="py-20 bg-chalk">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-serif text-slate mb-8 text-center">
              You've tried AI tools before. They didn't stick.
            </h2>
          </ScrollReveal>
          <div className="space-y-6 text-lg leading-relaxed text-slate">
            <ScrollReveal delay={0.1}>
              <p>
                Most teams have. A workflow automation here, a chatbot pilot there. Some worked.
                Some quietly died. The pattern is familiar: quick enthusiasm, slow adoption, unclear ROI.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p>
                The issue is rarely the tool. It's what sits underneath: unclear handoffs, inconsistent
                data, processes held together by workarounds. Technology can't fix what isn't defined.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p>
                We start with the work itself. Diagnose what's actually slowing you down. Redesign it
                so it runs cleanly. Then apply AI where it genuinely helps.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-serif text-slate mb-8 text-center">
              AI helps great teams achieve more
            </h2>
          </ScrollReveal>
          <div className="space-y-6 text-lg leading-relaxed text-slate">
            <ScrollReveal delay={0.1}>
              <p>
                Most organisations have capacity trapped in low-value work: manual processes,
                error-prone handoffs, information scattered across systems. Time for strategic
                work that earns fees or creates differentiation gets eroded because the day-to-day
                demands constant attention.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p>
                AI and automation can reclaim this capacity, but only if the underlying
                operations are sound. Automating broken processes makes them faster, not
                better. Fix the workflow first, then apply technology to scale what works.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p>
                We help organisations redesign how work flows, build automation that
                frees people to focus on what matters, and transfer the skills your
                team needs to maintain and improve on their own.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p>
                Our approach starts with diagnosis, not technology. We work with you to
                review your operations and pinpoint where you'll get the biggest return:
                better quality, less wasted effort, and your team focused where they add
                the most value.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.25}>
            <div className="mt-8 p-6 bg-coral/70 rounded-md">
              <p className="text-lg leading-relaxed text-slate">
                <strong>If you have</strong> manual processes slowing your team down,
                <strong> we</strong> diagnose the root cause and redesign the workflow,
                <strong> so you get</strong> automation that actually works, the ability
                to maintain it, and your team empowered to create maximum value for your
                organisation.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-chalk">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-serif text-slate mb-12 text-center">
              Three problems we solve
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <ScrollReveal delay={0}>
              <div className="relative bg-pearl rounded-md p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group overflow-hidden h-full">
                {/* Hover blobs */}
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-coral opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-500 pointer-events-none"
                  style={{ animation: 'blobFloat 15s ease-in-out infinite' }}
                />
                <div
                  className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-rock opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500 pointer-events-none"
                  style={{ animation: 'blobFloat 18s ease-in-out infinite reverse' }}
                />

                <div className="relative z-10">
                  <h3 className="text-2xl font-serif text-slate mb-4">
                    Excessive manual work crowds out time for strategic work
                  </h3>
                  <p className="text-base font-sans text-slate leading-relaxed">
                    Time spent chasing updates, switching systems, and doing manual data entry
                    doesn't add value. Knowledge workers spend up to 60% of time on 'work about work'
                    rather than skilled tasks
                    <sup className="text-coral-accessible font-bold">[1]</sup>
                    . Little capacity remains for strategic work that drives growth.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2 */}
            <ScrollReveal delay={0.1}>
              <div className="relative bg-pearl rounded-md p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group overflow-hidden h-full">
                {/* Hover blobs */}
                <div
                  className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-coral opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-500 pointer-events-none"
                  style={{ animation: 'blobFloat 16s ease-in-out infinite' }}
                />
                <div
                  className="absolute -bottom-10 -right-10 w-28 h-28 rounded-full bg-rock opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500 pointer-events-none"
                  style={{ animation: 'blobFloat 20s ease-in-out infinite reverse' }}
                />

                <div className="relative z-10">
                  <h3 className="text-2xl font-serif text-slate mb-4">
                    Automating broken workflows compounds problems
                  </h3>
                  <p className="text-base font-sans text-slate leading-relaxed">
                    Automating inefficient processes makes them faster but not better
                    <sup className="text-coral-accessible font-bold">[2]</sup>
                    . Technology overlaid on broken workflows magnifies problems rather than solving them. Fix the workflow first, then scale what works.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3 */}
            <ScrollReveal delay={0.2}>
              <div className="relative bg-pearl rounded-md p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group overflow-hidden h-full">
                {/* Hover blobs */}
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-rock opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500 pointer-events-none"
                  style={{ animation: 'blobFloat 17s ease-in-out infinite' }}
                />
                <div
                  className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-coral opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-500 pointer-events-none"
                  style={{ animation: 'blobFloat 19s ease-in-out infinite reverse' }}
                />

                <div className="relative z-10">
                  <h3 className="text-2xl font-serif text-slate mb-4">
                    Tool selection before diagnosis creates waste
                  </h3>
                  <p className="text-base font-sans text-slate leading-relaxed">
                    Organisations waste 20% - 30% of software spending on unused licenses
                    <sup className="text-coral-accessible font-bold">[3]</sup>
                    . Selecting technology before understanding the operational problem leads to shelfware and disappointing results.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* References Section */}
          <div className="mt-12 pt-4 border-t border-steel/20">
            <h4 className="text-sm font-sans font-semibold text-slate mb-4">
              References
            </h4>

            <div className="space-y-3">
              {/* Reference 1 */}
              <p id="ref1" className="text-sm font-sans text-slate leading-relaxed">
                [1] Asana. (2025).
                <em> Why Work About Work is Bad</em>.
                <a
                  href="https://asana.com/resources/why-work-about-work-is-bad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coral-accessible hover:text-coral-dark underline ml-1"
                >
                  Available here
                </a>
              </p>

              {/* Reference 2 */}
              <p id="ref2" className="text-sm font-sans text-slate leading-relaxed">
                [2] Gates, B.
                <a
                  href="https://www.businessinsider.com/quotes-from-the-worlds-second-richest-man-2013-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coral-accessible hover:text-coral-dark underline ml-1"
                >
                  Source
                </a>
              </p>

              {/* Reference 3 */}
              <p id="ref3" className="text-sm font-sans text-slate leading-relaxed">
                [3] Flexera.
                <em> 2024 State of ITAM Report</em>.
                <a
                  href="https://www.flexera.com/about-us/press-center/flexera-2024-state-of-itam-report-finds-software-audit-costs-continue-to-rise"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coral-accessible hover:text-coral-dark underline ml-1"
                >
                  Full report
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bill Gates Quote Hero */}
      <section className="py-20 bg-slate">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center relative">
              {/* Decorative quote marks */}
              <span
                className="absolute -top-2 left-0 md:-left-6 text-5xl md:text-6xl text-coral leading-none opacity-50 select-none"
                aria-hidden="true"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                &ldquo;
              </span>
              <span
                className="absolute -bottom-6 right-0 md:-right-6 text-5xl md:text-6xl text-coral leading-none opacity-50 select-none"
                aria-hidden="true"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                &rdquo;
              </span>
              <p className="text-2xl md:text-3xl text-coral leading-relaxed mb-6 italic relative z-10" style={{ fontFamily: 'var(--font-serif)' }}>
                The first rule of any technology used in a business is that automation
                applied to an efficient operation will magnify the efficiency. The second
                is that automation applied to an inefficient operation will magnify the
                inefficiency.
              </p>
              <p className="text-lg text-chalk italic relative z-10" style={{ fontFamily: 'var(--font-serif)' }}>
                — Bill Gates
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6 lg:px-8 bg-pearl">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate text-center mb-12">
              We fix the work first, then scale it with AI
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-6 mb-8">
            <ScrollReveal delay={0}>
              <Link href="/services/diagnose" className="text-center group block">
                <div className="relative bg-coral rounded-md p-5 mb-4 max-w-[280px] mx-auto aspect-square flex items-center justify-center overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative z-10">
                    <div className="mx-auto flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <i className="fi fi-rs-brain-circuit text-slate" style={{ fontSize: '120px', marginBottom: '-8px' }}></i>
                    </div>
                    <h3 className="text-3xl font-serif leading-snug text-slate">1 · Diagnose</h3>
                  </div>
                </div>
                <p className="text-base font-sans leading-relaxed text-slate max-w-[280px] mx-auto">
                  Identify what's important and what to improve
                </p>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Link href="/services/define" className="text-center group block">
                <div className="relative bg-coral rounded-md p-5 mb-4 max-w-[280px] mx-auto aspect-square flex items-center justify-center overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative z-10">
                    <div className="mx-auto flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <i className="fi fi-rs-machine-learning text-slate" style={{ fontSize: '120px', marginBottom: '-8px' }}></i>
                    </div>
                    <h3 className="text-3xl font-serif leading-snug text-slate">2 · Define</h3>
                  </div>
                </div>
                <p className="text-base font-sans leading-relaxed text-slate max-w-[280px] mx-auto">
                  Design a solution to fit your needs
                </p>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link href="/services/deliver" className="text-center group block">
                <div className="relative bg-coral rounded-md p-5 mb-4 max-w-[280px] mx-auto aspect-square flex items-center justify-center overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative z-10">
                    <div className="mx-auto flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <i className="fi fi-rs-system-cloud text-slate" style={{ fontSize: '120px', marginBottom: '-8px' }}></i>
                    </div>
                    <h3 className="text-3xl font-serif leading-snug text-slate">3 · Deliver</h3>
                  </div>
                </div>
                <p className="text-base font-sans leading-relaxed text-slate max-w-[280px] mx-auto">
                  Deploy working automations that deliver value
                </p>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <Link href="/services/support" className="text-center group block">
                <div className="relative bg-coral rounded-md p-5 mb-4 max-w-[280px] mx-auto aspect-square flex items-center justify-center overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative z-10">
                    <div className="mx-auto flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <i className="fi fi-rs-hands-heart text-slate" style={{ fontSize: '120px', marginBottom: '-8px' }}></i>
                    </div>
                    <h3 className="text-3xl font-serif leading-snug text-slate">4 · Support</h3>
                  </div>
                </div>
                <p className="text-base font-sans leading-relaxed text-slate max-w-[280px] mx-auto">
                  Empower teams and keep systems optimised
                </p>
              </Link>
            </ScrollReveal>
          </div>
          <div className="text-center">
            <Link
              href="/services"
              onClick={() => trackCTAClick('See our full services', 'solution_section', '/services')}
              className="inline-flex items-center justify-center font-sans font-semibold text-base border border-slate text-slate px-8 py-4 rounded-md hover:bg-slate hover:text-white transition-all min-w-[220px]"
            >
              See our full services
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 px-6 lg:px-8 bg-chalk">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate text-center mb-12">
              How we deliver operational improvements by applying AI
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <ScrollReveal delay={0}>
              <div>
                <h3 className="text-2xl font-serif leading-snug text-slate mb-4">
                  Diagnose before designing
                </h3>
                <p className="text-base font-sans leading-relaxed text-slate">
                  Understand the operational problem before selecting tools and designing workflows
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div>
                <h3 className="text-2xl font-serif leading-snug text-slate mb-4">
                  Design for your reality
                </h3>
                <p className="text-base font-sans leading-relaxed text-slate">
                  Solutions designed and built to fit your data, systems, and governance needs
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <h3 className="text-2xl font-serif leading-snug text-slate mb-4">
                  Transfer systems, build capability
                </h3>
                <p className="text-base font-sans leading-relaxed text-slate">
                  You own the IP and platforms. We support you to iterate independently
                </p>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.3}>
            <div className="text-center">
              <Link
                href="/how-we-think"
                onClick={() => trackCTAClick('See how we think', 'how_we_work_section', '/how-we-think')}
className="inline-flex items-center justify-center font-sans font-semibold text-base border border-slate text-slate px-8 py-4 rounded-md hover:bg-slate hover:text-white transition-all min-w-[220px]"
              >
                See how we think
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 lg:px-8 bg-slate">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-white mb-6">
              Find your biggest bottleneck
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl font-sans leading-relaxed text-white mb-6">
              Book a 30-minute discovery call.<br />
              We'll map one broken workflow and show you what's possible.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link
              href="/contact"
              onClick={() => trackCTAClick('Book Discovery Call', 'final_cta', '/contact')}
              className="inline-flex items-center justify-center font-sans font-semibold text-base bg-coral text-slate px-8 py-4 rounded-md hover:bg-coral-dark transition-all min-w-[220px]"
            >
              Book Discovery Call
            </Link>
          </ScrollReveal>
        </div>
      </section>
      </main>
      <Footer />
    </>
  )
}
