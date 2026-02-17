import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import SchemaMarkup from '@/components/SchemaMarkup'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'Diagnose: Delivery Friction Audit | Leomayn',
  description: 'Start here to identify where capacity is stuck. We map workflows, interview stakeholders, and quantify delivery friction before recommending solutions.',
  alternates: {
    canonical: '/services/diagnose',
  },
  openGraph: {
    title: 'Diagnose: Delivery Friction Audit | Leomayn',
    description: 'Start here to identify where capacity is stuck. We map workflows, interview stakeholders, and quantify delivery friction before recommending solutions.',
    images: [{
      url: 'https://leomayn.com/logo/logo-social-1200x630.png',
      width: 1200,
      height: 630,
      alt: 'Leomayn - AI Consulting',
    }],
  },
}

export default function DiagnosePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Operations Consulting",
    "name": "Diagnose - Discovery & Assessment",
    "description": "Identify operational bottlenecks through stakeholder interviews, process mapping, and opportunity analysis. Delivers assessment report, workflow maps, and prioritised improvement recommendations.",
    "provider": {
      "@type": "Organization",
      "name": "Leomayn"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "url": "https://leomayn.com/services/diagnose"
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://leomayn.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://leomayn.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Diagnose",
        "item": "https://leomayn.com/services/diagnose"
      }
    ]
  }

  return (
    <>
      <SchemaMarkup data={serviceSchema} />
      <SchemaMarkup data={breadcrumbSchema} />
      <NavBar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-pearl py-24 px-6 lg:px-8 relative overflow-hidden">
          {/* Background blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div
              className="absolute -top-16 -right-20 w-80 h-80 rounded-full opacity-40 blur-3xl"
              style={{
                backgroundColor: 'var(--color-coral)',
                animation: 'blobFloat 21s ease-in-out infinite',
              }}
            />
            <div
              className="absolute -bottom-20 left-1/4 w-72 h-72 rounded-full opacity-30 blur-3xl"
              style={{
                backgroundColor: 'var(--color-rock)',
                animation: 'blobFloat 25s ease-in-out infinite reverse',
                animationDelay: '-8s',
              }}
            />
            <div
              className="absolute top-1/3 -left-16 w-64 h-64 rounded-full opacity-35 blur-3xl"
              style={{
                backgroundColor: 'var(--color-coral-light)',
                animation: 'blobFloat 18s ease-in-out infinite',
                animationDelay: '-4s',
              }}
            />
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex items-end gap-6 mb-6 animate-fade-in-up">
              <div className="w-20 h-20 bg-coral rounded-md flex items-center justify-center">
                <i className="fi fi-rs-brain-circuit text-slate leading-none flex items-center justify-center" style={{ fontSize: '48px' }}></i>
              </div>
              <div>
                <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate">
                  Diagnose
                </h1>
                <p className="text-sm tracking-widest text-slate/60 mt-2 uppercase">Delivery Friction Audit</p>
              </div>
            </div>
            <div className="max-w-2xl flex items-stretch animate-fade-in-up stagger-1">
              <div className="bg-[#9ab8cb] rounded-full my-[5px]" style={{ width: '3px', minWidth: '3px' }}></div>
              <p className="text-xl leading-[1.6] text-coral-accessible pl-6">
                Know exactly where to focus to create the most impact
              </p>
            </div>
          </div>
        </section>

        {/* Start here when */}
        <section className="py-16 px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="p-8 bg-coral/20 rounded-md">
                <h2 className="text-2xl font-serif text-slate mb-4">Start here when:</h2>
                <ul className="space-y-2 text-lg text-slate">
                  <li className="flex items-start gap-3">
                    <span className="text-coral mt-1">•</span>
                    Your team's capacity is stuck in manual processes
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-coral mt-1">•</span>
                    You want to integrate AI into your workflows, but don't know where to start
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-coral mt-1">•</span>
                    AI pilots stalled or never made it past experimentation
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-coral mt-1">•</span>
                    Work is trapped in handoffs, approvals, and missing context
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-coral mt-1">•</span>
                    You need more capacity without adding headcount
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* What It Is */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              What this phase delivers
            </h2>
            <p className="text-lg leading-relaxed text-slate mb-6">
              Before recommending any technology or automation, we need to understand
              how your work actually runs. The Diagnose phase maps your current state,
              surfaces pain points through stakeholder interviews, and identifies the
              operational bottlenecks limiting your effectiveness.
            </p>
            <p className="text-lg leading-relaxed text-slate">
              You get a clear picture of where time and quality leak out of your processes,
              prioritised by impact and effort. We don't make assumptions or offer generic advice.
              We provide evidence-based analysis of your specific operational reality.
            </p>
          </div>
        </section>

        {/* Evidence Block */}
        <section className="py-20 px-6 lg:px-8 bg-slate">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center relative">
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
                  98% of AI investments fail to deliver transformational value. The 2% that succeed start with process expertise.
                </p>
                <p className="text-sm text-chalk/60 italic relative z-10" style={{ fontFamily: 'var(--font-serif)' }}>
                  Gartner CIO Survey, cited in HBR <em>&ldquo;9 Trends Shaping Work in 2026 and Beyond&rdquo;</em>
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg leading-relaxed text-chalk text-center mt-8">
                That is what Diagnose is for. Understanding your operations before choosing any technology.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-12">
              What we do
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif leading-snug text-slate mb-3">
                  Stakeholder interviews
                </h3>
                <p className="text-base leading-relaxed text-slate">
                  We speak with the people doing the work, not just leadership. Typically
                  5-12 interviews across different roles to understand where friction occurs,
                  what workarounds exist, and what's preventing better outcomes.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif leading-snug text-slate mb-3">
                  Current state process mapping
                </h3>
                <p className="text-base leading-relaxed text-slate">
                  Visual workflow maps showing how work moves from intake through delivery.
                  We document handoffs, decision points, rework loops, and bottlenecks.
                  You see exactly where time and quality are lost.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif leading-snug text-slate mb-3">
                  Opportunity identification
                </h3>
                <p className="text-base leading-relaxed text-slate">
                  A prioritised list of improvement opportunities, scored by impact and
                  implementation effort. We highlight quick wins alongside strategic initiatives,
                  giving you options for immediate action and longer-term transformation.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif leading-snug text-slate mb-3">
                  Complexity assessment
                </h3>
                <p className="text-base leading-relaxed text-slate">
                  Realistic effort estimates for each opportunity based on stakeholder count,
                  systems involved, data quality, and change management requirements. You know
                  what you're committing to before starting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-12">
              What you receive
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-pearl border border-steel rounded-md p-6">
                <h3 className="text-xl font-serif leading-snug text-slate mb-3">
                  Assessment Report
                </h3>
                <p className="text-sm text-slate/70 mb-3">
                  Comprehensive analysis including interview summaries, operational assessment,
                  and prioritised opportunities with 1-2 focus areas recommended.
                </p>
                <p className="text-sm font-semibold text-coral-accessible">
                  So you have: Clarity on where time actually goes
                </p>
              </div>

              <div className="bg-pearl border border-steel rounded-md p-6">
                <h3 className="text-xl font-serif leading-snug text-slate mb-3">
                  Visual Workflow Maps
                </h3>
                <p className="text-sm text-slate/70 mb-3">
                  Current state process diagrams showing bottlenecks, handoffs, rework loops,
                  and inefficiencies in your existing workflows.
                </p>
                <p className="text-sm font-semibold text-coral-accessible">
                  So you have: Shared understanding across stakeholders
                </p>
              </div>

              <div className="bg-pearl border border-steel rounded-md p-6">
                <h3 className="text-xl font-serif leading-snug text-slate mb-3">
                  Opportunity Matrix
                </h3>
                <p className="text-sm text-slate/70 mb-3">
                  Impact vs effort scoring for each improvement opportunity, with estimated
                  time savings and quality improvements.
                </p>
                <p className="text-sm font-semibold text-coral-accessible">
                  So you have: Confidence in what to fix first
                </p>
              </div>

              <div className="bg-pearl border border-steel rounded-md p-6">
                <h3 className="text-xl font-serif leading-snug text-slate mb-3">
                  Complexity Scoring
                </h3>
                <p className="text-sm text-slate/70 mb-3">
                  Transparent complexity assessment showing effort required for each opportunity
                  based on stakeholders, systems, and change management needs.
                </p>
                <p className="text-sm font-semibold text-coral-accessible">
                  So you have: No surprises on effort or investment
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Good Looks Like */}
        <section className="py-24 px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-10">
                What good looks like
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  <strong className="font-semibold">A clear picture of how work gets done.</strong>{' '}
                  Mapped workflows showing exactly where capacity leaks, handoffs break, and rework accumulates. Evidence, not opinion.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  <strong className="font-semibold">Prioritised opportunities with numbers attached.</strong>{' '}
                  Each improvement opportunity scored for impact, feasibility, and complexity. You know which workflows to fix first and why.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  <strong className="font-semibold">Something concrete for your leadership team.</strong>{' '}
                  A report you can put in front of your board that says: here is what is broken, and here is what it costs us. No jargon, no speculation.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p>
                  <strong className="font-semibold">Confidence to make a decision.</strong>{' '}
                  Whether that is proceeding to Define, building internally with the roadmap we have provided, or deciding the status quo is acceptable. You will have the evidence either way.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Timeline & Investment */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-serif leading-tight text-slate mb-6">
                  Timeline
                </h2>
                <p className="text-lg leading-relaxed text-slate mb-4">
                  Typically 2-4 weeks depending on stakeholder availability and organisational
                  complexity.
                </p>
                <ul className="space-y-2 text-base text-slate">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Week 1: Kickoff and initial interviews
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Week 2-3: Process mapping and analysis
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Week 4: Report delivery and recommendations
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-serif leading-tight text-slate mb-6">
                  Investment
                </h2>
                <p className="text-lg leading-relaxed text-slate mb-4">
                  Fixed-price engagement based on organisational complexity.
                </p>
                <ul className="space-y-2 text-base text-slate">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Clear scope and deliverables
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    No hourly rate uncertainty
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Option to proceed to Define phase
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Next Step */}
        <section className="py-24 px-6 lg:px-8 bg-slate">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-white mb-6">
              Start with a discovery call
            </h2>
            <p className="text-xl font-sans leading-relaxed text-white mb-8">
              In 30 minutes, we'll map one workflow and show you where improvement
              opportunities exist. No obligation, no sales pitch.
            </p>
            <Link
              href="/contact"
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
