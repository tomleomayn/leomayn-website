'use client'

import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'

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
    "description": "Operations and AI consulting for knowledge work",
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
      <section className="bg-pearl py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate mb-6">
            Fix work, then scale with AI
          </h1>
          <div className="max-w-2xl mb-8 flex items-stretch">
            <div className="w-1.5 bg-[#9ab8cb] rounded-full my-[5px]"></div>
            <p className="text-xl leading-[1.6] text-coral-accessible pl-6">
              We redesign knowledge work to remove bottlenecks, reduce repetitive work,
              and fix error-prone processes. Then we use automation and AI to free up
              humans to focus on work that adds real value.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Link
              href="/services"
              onClick={() => trackCTAClick('See Our Services', 'hero', '/services')}
              className="inline-flex items-center justify-center font-sans font-semibold text-base border-2 border-slate bg-pearl text-slate px-8 py-4 rounded-md hover:bg-[#9ab8cb] hover:border-[#9ab8cb] hover:text-white transition-all min-w-[220px]"
            >
              See Our Services
            </Link>
            <Link
              href="/contact"
              onClick={() => trackCTAClick('Book Discovery Call', 'hero', '/contact')}
              className="inline-flex items-center justify-center font-sans font-semibold text-base bg-coral text-slate px-8 py-4 rounded-md hover:bg-coral-dark transition-all min-w-[220px]"
            >
              Book Discovery Call
            </Link>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-serif text-slate mb-8 text-center">
            AI helps great teams achieve more
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-slate">
            <p>
              Most organisations have capacity trapped in low-value work: manual processes,
              error-prone handoffs, information scattered across systems. Time for strategic
              work that earns fees or creates differentiation gets eroded because day-to-day
              demands constant attention.
            </p>
            <p>
              AI and automation can reclaim this capacity, but only if the underlying
              operations are sound. Automating broken processes makes them faster, not
              better. Fix the workflow first, then apply technology to scale what works.
            </p>
            <p>
              We help organisations redesign how work flows, build automation that
              frees people to focus on what matters, and transfer the skills your
              team needs to maintain and improve on their own.
            </p>
            <p>
              Our AI consulting approach starts with diagnosis, not technology. We work
              with you to review your operations and pinpoint where you'll get the biggest
              return: better quality, less wasted effort, and your team focused where they
              add the most value.
            </p>
          </div>
          <div className="mt-8 p-6 bg-coral/70 rounded-md">
            <p className="text-lg leading-relaxed text-slate">
              <strong>If you have</strong> manual processes slowing your team down,
              <strong> we</strong> diagnose the root cause and redesign the workflow,
              <strong> so you get</strong> automation that actually works, the ability
              to maintain it, and your team empowered to create maximum value for your
              organisation.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-chalk">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-serif text-slate mb-12 text-center">
            Three problems we solve
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="relative bg-pearl border border-steel rounded-md p-8 hover:border-coral transition-all duration-300 group overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.13] transition-opacity duration-300 pointer-events-none"
                   style={{
                     backgroundImage: `linear-gradient(#9da7b0 1px, transparent 1px), linear-gradient(90deg, #9da7b0 1px, transparent 1px)`,
                     backgroundSize: '12px 12px'
                   }}>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-serif text-slate mb-4">
                  Excessive manual work crowds out time for strategic work
                </h3>
                <p className="text-base font-sans text-slate leading-relaxed">
                  Time spent chasing updates, switching systems, and doing manual data entry
                  doesn't add value. Knowledge workers spend up to 60% of time on 'work about work'
                  rather than skilled tasks
                  <sup>
                    <a href="#ref1" className="text-coral-accessible hover:text-coral-dark no-underline font-bold">
                      [1]
                    </a>
                  </sup>
                  . Little capacity remains for strategic work that drives growth.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative bg-pearl border border-steel rounded-md p-8 hover:border-coral transition-all duration-300 group overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.13] transition-opacity duration-300 pointer-events-none"
                   style={{
                     backgroundImage: `linear-gradient(#9da7b0 1px, transparent 1px), linear-gradient(90deg, #9da7b0 1px, transparent 1px)`,
                     backgroundSize: '12px 12px'
                   }}>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-serif text-slate mb-4">
                  Automating broken workflows compounds problems
                </h3>
                <p className="text-base font-sans text-slate leading-relaxed">
                  Automating inefficient processes makes them faster but not better
                  <sup>
                    <a href="#ref2" className="text-coral-accessible hover:text-coral-dark no-underline font-bold">
                      [2]
                    </a>
                  </sup>
                  . Technology overlaid on broken workflows magnifies problems rather than solving them. Fix the workflow first, then scale what works.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative bg-pearl border border-steel rounded-md p-8 hover:border-coral transition-all duration-300 group overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.13] transition-opacity duration-300 pointer-events-none"
                   style={{
                     backgroundImage: `linear-gradient(#9da7b0 1px, transparent 1px), linear-gradient(90deg, #9da7b0 1px, transparent 1px)`,
                     backgroundSize: '12px 12px'
                   }}>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-serif text-slate mb-4">
                  Tool selection before diagnosis creates waste
                </h3>
                <p className="text-base font-sans text-slate leading-relaxed">
                  Organisations waste 20% - 30% of software spending on unused licenses
                  <sup>
                    <a href="#ref3" className="text-coral-accessible hover:text-coral-dark no-underline font-bold">
                      [3]
                    </a>
                  </sup>
                  . Selecting technology before understanding the operational problem leads to shelfware and disappointing results.
                </p>
              </div>
            </div>
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
          <div className="text-center">
            <p className="text-2xl md:text-3xl text-coral leading-relaxed mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              "The first rule of any technology used in a business is that automation
              applied to an efficient operation will magnify the efficiency. The second
              is that automation applied to an inefficient operation will magnify the
              inefficiency."
            </p>
            <p className="text-lg text-chalk" style={{ fontFamily: 'var(--font-serif)' }}>
              — Bill Gates
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6 lg:px-8 bg-pearl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate text-center mb-12">
            We fix the work first, then scale it with AI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-6 mb-8">
            <div className="text-center">
              <div className="relative bg-coral rounded-md p-5 mb-4 max-w-[280px] mx-auto aspect-square flex items-center justify-center group overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.13] transition-opacity duration-300 pointer-events-none"
                     style={{
                       backgroundImage: `linear-gradient(#fffcfa 1px, transparent 1px), linear-gradient(90deg, #fffcfa 1px, transparent 1px)`,
                       backgroundSize: '12px 12px'
                     }}>
                </div>
                <div className="relative z-10">
                  <div className="mx-auto flex items-center justify-center">
                    <i className="fi fi-rs-brain-circuit text-slate" style={{ fontSize: '120px', marginBottom: '-8px' }}></i>
                  </div>
                  <h3 className="text-3xl font-serif leading-snug text-slate">1 · Diagnose</h3>
                </div>
              </div>
              <p className="text-base font-sans leading-relaxed text-slate max-w-[280px] mx-auto">
                Identify what's important and what to improve
              </p>
            </div>
            <div className="text-center">
              <div className="relative bg-coral rounded-md p-5 mb-4 max-w-[280px] mx-auto aspect-square flex items-center justify-center group overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.13] transition-opacity duration-300 pointer-events-none"
                     style={{
                       backgroundImage: `linear-gradient(#fffcfa 1px, transparent 1px), linear-gradient(90deg, #fffcfa 1px, transparent 1px)`,
                       backgroundSize: '12px 12px'
                     }}>
                </div>
                <div className="relative z-10">
                  <div className="mx-auto flex items-center justify-center">
                    <i className="fi fi-rs-machine-learning text-slate" style={{ fontSize: '120px', marginBottom: '-8px' }}></i>
                  </div>
                  <h3 className="text-3xl font-serif leading-snug text-slate">2 · Define</h3>
                </div>
              </div>
              <p className="text-base font-sans leading-relaxed text-slate max-w-[280px] mx-auto">
                Design a solution to fit your needs
              </p>
            </div>
            <div className="text-center">
              <div className="relative bg-coral rounded-md p-5 mb-4 max-w-[280px] mx-auto aspect-square flex items-center justify-center group overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.13] transition-opacity duration-300 pointer-events-none"
                     style={{
                       backgroundImage: `linear-gradient(#fffcfa 1px, transparent 1px), linear-gradient(90deg, #fffcfa 1px, transparent 1px)`,
                       backgroundSize: '12px 12px'
                     }}>
                </div>
                <div className="relative z-10">
                  <div className="mx-auto flex items-center justify-center">
                    <i className="fi fi-rs-system-cloud text-slate" style={{ fontSize: '120px', marginBottom: '-8px' }}></i>
                  </div>
                  <h3 className="text-3xl font-serif leading-snug text-slate">3 · Deliver</h3>
                </div>
              </div>
              <p className="text-base font-sans leading-relaxed text-slate max-w-[280px] mx-auto">
                Deploy working automations that deliver value
              </p>
            </div>
            <div className="text-center">
              <div className="relative bg-coral rounded-md p-5 mb-4 max-w-[280px] mx-auto aspect-square flex items-center justify-center group overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.13] transition-opacity duration-300 pointer-events-none"
                     style={{
                       backgroundImage: `linear-gradient(#fffcfa 1px, transparent 1px), linear-gradient(90deg, #fffcfa 1px, transparent 1px)`,
                       backgroundSize: '12px 12px'
                     }}>
                </div>
                <div className="relative z-10">
                  <div className="mx-auto flex items-center justify-center">
                    <i className="fi fi-rs-hands-heart text-slate" style={{ fontSize: '120px', marginBottom: '-8px' }}></i>
                  </div>
                  <h3 className="text-3xl font-serif leading-snug text-slate">4 · Support</h3>
                </div>
              </div>
              <p className="text-base font-sans leading-relaxed text-slate max-w-[280px] mx-auto">
                Empower teams and keep systems optimised
              </p>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/services"
              onClick={() => trackCTAClick('See our full services', 'solution_section', '/services')}
              className="inline-flex items-center justify-center font-sans font-semibold text-base border-2 border-slate text-slate px-8 py-4 rounded-md hover:bg-slate hover:text-white transition-all min-w-[220px]"
            >
              See our full services
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 px-6 lg:px-8 bg-chalk">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate text-center mb-12">
            How we deliver operational improvements by applying AI
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-serif leading-snug text-slate mb-4">
                Diagnose before designing
              </h3>
              <p className="text-base font-sans leading-relaxed text-slate">
                Understand the operational problem before selecting tools and designing workflows
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif leading-snug text-slate mb-4">
                Design for your reality
              </h3>
              <p className="text-base font-sans leading-relaxed text-slate">
                Solutions designed and built to fit your data, systems, and governance needs
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif leading-snug text-slate mb-4">
                Transfer systems, build capability
              </h3>
              <p className="text-base font-sans leading-relaxed text-slate">
                You own the IP and platforms. We support you to iterate independently
              </p>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/how-we-think"
              onClick={() => trackCTAClick('See how we think', 'how_we_work_section', '/how-we-think')}
              className="inline-flex items-center justify-center font-sans font-semibold text-base border-2 border-slate text-slate px-8 py-4 rounded-md hover:bg-slate hover:text-white transition-all min-w-[220px]"
            >
              See how we think
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 lg:px-8 bg-slate">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-white mb-6">
            Ready to level up your operations?
          </h2>
          <p className="text-xl font-sans leading-relaxed text-white mb-6">
            Book a 30-minute discovery call.<br />
            We'll map one broken workflow and show you what's possible.
          </p>
          <Link
            href="/contact"
            onClick={() => trackCTAClick('Book Discovery Call', 'final_cta', '/contact')}
            className="inline-flex items-center justify-center font-sans font-semibold text-base bg-coral text-slate px-8 py-4 rounded-md hover:bg-coral-dark transition-all min-w-[220px]"
          >
            Book Discovery Call
          </Link>
        </div>
      </section>
      </main>
      <Footer />
    </>
  )
}
