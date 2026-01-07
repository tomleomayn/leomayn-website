'use client'

import Link from 'next/link'
import Image from 'next/image'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

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

  return (
    <>
      <NavBar />
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-pearl py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate mb-6">
            Fix work, then scale with AI
          </h1>
          <div className="max-w-3xl mx-auto space-y-4 text-xl leading-relaxed text-slate mb-8">
            <p>
              We redesign knowledge work to remove bottlenecks, reduce repetitive work,
              and fix error-prone processes. Then we use automation and AI to free up
              humans to focus on work which adds real value.
            </p>
            <p>
              We transfer the skills and knowledge your team needs to use AI tools
              effectively. You build the capability to maintain systems and drive
              continuous improvement independently.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              onClick={() => trackCTAClick('Book Discovery Call', 'hero', '/contact')}
              className="inline-flex items-center justify-center font-sans font-semibold text-base bg-coral text-slate px-8 py-4 rounded-lg hover:bg-coral-dark transition-all"
            >
              Book Discovery Call
            </Link>
            <Link
              href="/services"
              onClick={() => trackCTAClick('See Our Services', 'hero', '/services')}
              className="inline-flex items-center justify-center font-sans font-semibold text-base border-2 border-slate text-slate px-8 py-4 rounded-lg hover:bg-slate hover:text-white transition-all"
            >
              See Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-chalk">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-serif text-slate mb-12 text-center">
            Three problems to fix first
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="relative bg-pearl border border-steel rounded-lg p-8 hover:border-coral transition-all duration-300 group overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.08] transition-opacity duration-300 pointer-events-none"
                   style={{
                     backgroundImage: `linear-gradient(#9da7b0 1px, transparent 1px), linear-gradient(90deg, #9da7b0 1px, transparent 1px)`,
                     backgroundSize: '12px 12px'
                   }}>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-serif text-slate mb-4">
                  Manual work crowds out strategic work
                </h3>
                <p className="text-base font-sans text-slate leading-relaxed">
                  Teams spend most of their day chasing updates, switching systems,
                  and doing manual data entry. Knowledge workers spend 60% of time
                  on work about work rather than skilled tasks
                  <sup>
                    <a href="#ref1" className="text-coral hover:text-coral-dark no-underline">
                      [1]
                    </a>
                  </sup>
                  . Little capacity remains for strategic work that drives growth.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative bg-pearl border border-steel rounded-lg p-8 hover:border-coral transition-all duration-300 group overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.08] transition-opacity duration-300 pointer-events-none"
                   style={{
                     backgroundImage: `linear-gradient(#9da7b0 1px, transparent 1px), linear-gradient(90deg, #9da7b0 1px, transparent 1px)`,
                     backgroundSize: '12px 12px'
                   }}>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-serif text-slate mb-4">
                  Automating broken workflows doesn't work
                </h3>
                <p className="text-base font-sans text-slate leading-relaxed">
                  Automating broken processes makes them faster but no less broken
                  <sup>
                    <a href="#ref2" className="text-coral hover:text-coral-dark no-underline">
                      [2]
                    </a>
                  </sup>
                  . Technology overlaid on inefficient workflows magnifies problems
                  rather than solving them. Fix the workflow first, then scale what works.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative bg-pearl border border-steel rounded-lg p-8 hover:border-coral transition-all duration-300 group overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.08] transition-opacity duration-300 pointer-events-none"
                   style={{
                     backgroundImage: `linear-gradient(#9da7b0 1px, transparent 1px), linear-gradient(90deg, #9da7b0 1px, transparent 1px)`,
                     backgroundSize: '12px 12px'
                   }}>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-serif text-slate mb-4">
                  Tool choice before diagnosis creates waste
                </h3>
                <p className="text-base font-sans text-slate leading-relaxed">
                  Organisations waste 30% of software spending on unused licenses
                  <sup>
                    <a href="#ref3" className="text-coral hover:text-coral-dark no-underline">
                      [3]
                    </a>
                  </sup>
                  . Selecting technology before understanding the operational problem
                  leads to disappointing results. Diagnosis determines the right solution.
                </p>
              </div>
            </div>
          </div>

          {/* References Section */}
          <div className="mt-12 pt-8 border-t border-steel/20">
            <h4 className="text-sm font-sans font-semibold text-slate uppercase tracking-wider mb-4">
              References
            </h4>

            <div className="space-y-3">
              {/* Reference 1 */}
              <p id="ref1" className="text-sm font-sans text-slate leading-relaxed">
                [1] Asana. (2025).
                <em> Anatomy of Work Index 2025</em>.
                <a
                  href="https://asana.com/resources/anatomy-of-work"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coral hover:text-coral-dark underline ml-1"
                >
                  Available here
                </a>
              </p>

              {/* Reference 2 */}
              <p id="ref2" className="text-sm font-sans text-slate leading-relaxed">
                [2] Gates, B. (1995).
                <em> The Road Ahead</em>.
                "The first rule of any technology used in a business is that automation
                applied to an efficient operation will magnify the efficiency. The second
                is that automation applied to an inefficient operation will magnify the
                inefficiency."
                <a
                  href="https://www.goodreads.com/quotes/536961-the-first-rule-of-any-technology-used-in-a-business"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coral hover:text-coral-dark underline ml-1"
                >
                  Source
                </a>
              </p>

              {/* Reference 3 */}
              <p id="ref3" className="text-sm font-sans text-slate leading-relaxed">
                [3] Gartner & NPI Financial. (2024).
                <em> IT Cost Reduction Strategies</em>.
                Analysis of SaaS spending waste and unused licenses.
                <a
                  href="https://npifinancial.com/blog/it-cost-reduction-strategies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coral hover:text-coral-dark underline ml-1"
                >
                  Full report
                </a>
              </p>

              {/* Supporting References */}
              <p className="text-xs font-sans text-steel leading-relaxed mt-4 pb-6 border-b border-steel/10">
                Additional supporting research:
                <a
                  href="https://www.smartsheet.com/content-center/product-news/automation/workers-waste-quarter-of-workweek-on-manual-repetitive-tasks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coral hover:text-coral-dark underline ml-1"
                >
                  Smartsheet (2024)
                </a>
                {', '}
                <a
                  href="https://www.mckinsey.com/mgi/our-research/agents-robots-and-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coral hover:text-coral-dark underline"
                >
                  McKinsey Global Institute (2025)
                </a>
                {', '}
                <a
                  href="https://www.flexera.com/about-us/press-center/flexera-releases-2025-state-of-itam-report.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coral hover:text-coral-dark underline"
                >
                  Flexera (2025)
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6 lg:px-8 bg-pearl">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate text-center mb-12">
            We fix the work first, then scale it with AI
          </h2>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-coral rounded-lg p-8 mb-4">
                <div className="mx-auto mb-6 flex items-center justify-center">
                  <i className="fi fi-rs-brain-circuit text-slate" style={{ fontSize: '72px' }}></i>
                </div>
                <span className="text-4xl font-serif text-slate">1</span>
              </div>
              <h3 className="text-xl font-serif leading-snug text-slate mb-2">Diagnose</h3>
              <p className="text-sm font-sans leading-relaxed text-slate">
                Identify what's broken and what matters
              </p>
            </div>
            <div className="text-center">
              <div className="bg-coral rounded-lg p-8 mb-4">
                <div className="mx-auto mb-6 flex items-center justify-center">
                  <i className="fi fi-rs-machine-learning text-slate" style={{ fontSize: '72px' }}></i>
                </div>
                <span className="text-4xl font-serif text-slate">2</span>
              </div>
              <h3 className="text-xl font-serif leading-snug text-slate mb-2">Define</h3>
              <p className="text-sm font-sans leading-relaxed text-slate">
                Design the right solution once
              </p>
            </div>
            <div className="text-center">
              <div className="bg-coral rounded-lg p-8 mb-4">
                <div className="mx-auto mb-6 flex items-center justify-center">
                  <i className="fi fi-rs-system-cloud text-slate" style={{ fontSize: '72px' }}></i>
                </div>
                <span className="text-4xl font-serif text-slate">3</span>
              </div>
              <h3 className="text-xl font-serif leading-snug text-slate mb-2">Deliver</h3>
              <p className="text-sm font-sans leading-relaxed text-slate">
                Working automation creating impact
              </p>
            </div>
            <div className="text-center">
              <div className="bg-coral rounded-lg p-8 mb-4">
                <div className="mx-auto mb-6 flex items-center justify-center">
                  <i className="fi fi-rs-hands-heart text-slate" style={{ fontSize: '72px' }}></i>
                </div>
                <span className="text-4xl font-serif text-slate">4</span>
              </div>
              <h3 className="text-xl font-serif leading-snug text-slate mb-2">Support</h3>
              <p className="text-sm font-sans leading-relaxed text-slate">
                Systems optimised and teams supported as you grow
              </p>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/services"
              onClick={() => trackCTAClick('See our full services', 'solution_section', '/services')}
              className="inline-flex items-center justify-center font-sans font-semibold text-base border-2 border-slate text-slate px-8 py-4 rounded-lg hover:bg-slate hover:text-white transition-all"
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
            A systematic approach to operational improvement
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-serif leading-snug text-slate mb-4">
                Diagnose before prescribing
              </h3>
              <p className="text-base font-sans leading-relaxed text-slate">
                Understand the operational problem before selecting tools
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif leading-snug text-slate mb-4">
                Design for your constraints
              </h3>
              <p className="text-base font-sans leading-relaxed text-slate">
                Solutions must fit your data, systems, and governance requirements
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif leading-snug text-slate mb-4">
                Transfer capability
              </h3>
              <p className="text-base font-sans leading-relaxed text-slate">
                You own the IP, learn to maintain it, and iterate independently
              </p>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/how-we-think"
              onClick={() => trackCTAClick('See How We Think', 'how_we_work_section', '/how-we-think')}
              className="inline-flex items-center justify-center font-sans font-semibold text-base border-2 border-slate text-slate px-8 py-4 rounded-lg hover:bg-slate hover:text-white transition-all"
            >
              See How We Think
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 lg:px-8 bg-slate">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-white mb-6">
            Ready to fix your operations?
          </h2>
          <p className="text-xl font-sans leading-relaxed text-white mb-8">
            Book a 30-minute discovery call. We'll map one broken workflow
            and show you what's possible.
          </p>
          <Link
            href="/contact"
            onClick={() => trackCTAClick('Book Discovery Call', 'final_cta', '/contact')}
            className="inline-flex items-center justify-center font-sans font-semibold text-base bg-coral text-slate px-8 py-4 rounded-lg hover:bg-coral-dark transition-all"
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
