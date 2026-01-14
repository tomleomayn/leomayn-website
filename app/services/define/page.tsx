import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata = {
  title: 'AI Strategy & Solution Design - Define Phase | Leomayn',
  description: 'Design the right AI solution once. We create detailed blueprints covering workflows, architecture, and governance before building begins. Learn more.',
  openGraph: {
    title: 'AI Strategy & Solution Design - Define Phase | Leomayn',
    description: 'Design the right AI solution once. We create detailed blueprints covering workflows, architecture, and governance before building begins. Learn more.',
    images: [{
      url: 'https://leomayn.com/logo/logo-social-1200x630.png',
      width: 1200,
      height: 630,
      alt: 'Leomayn - AI Consulting',
    }],
  },
}

export default function DefinePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Operations Consulting",
    "name": "Define - Solution Design",
    "description": "Design workflows, technical architecture, and governance frameworks before building. Delivers solution blueprint and system architecture diagram.",
    "provider": {
      "@type": "Organization",
      "name": "Leomayn"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "url": "https://leomayn.com/services/define"
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
        "name": "Define",
        "item": "https://leomayn.com/services/define"
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
        <section className="bg-pearl py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-end gap-6 mb-6">
              <div className="w-20 h-20 bg-coral rounded-md flex items-center justify-center">
                <i className="fi fi-rs-machine-learning text-slate leading-none flex items-center justify-center" style={{ fontSize: '48px' }}></i>
              </div>
              <div>
                <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate">
                  Define
                </h1>
                <p className="text-sm tracking-widest text-slate/60 mt-2 uppercase">AI Strategy & Solution Design</p>
              </div>
            </div>
            <p className="text-2xl leading-relaxed text-slate">
              Design the right solution once
            </p>
          </div>
        </section>

        {/* What It Is */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              What this phase delivers
            </h2>
            <p className="text-lg leading-relaxed text-slate mb-6">
              The Define phase turns improvement opportunities into detailed blueprints.
              We design workflows that remove bottlenecks, specify technical architecture
              that integrates with your systems, and create governance frameworks that
              protect your data.
            </p>
            <p className="text-lg leading-relaxed text-slate">
              You get a complete solution design before any building begins. This means
              no wasted development effort, no discovering constraints halfway through,
              and no costly rework. The blueprint is the contract.
            </p>
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
                  Workflow redesign
                </h3>
                <p className="text-base leading-relaxed text-slate">
                  Future state process maps showing how work will flow once automation
                  is in place. We document decision points, error handling, exception
                  management, and human-in-the-loop requirements.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif leading-snug text-slate mb-3">
                  Technical architecture
                </h3>
                <p className="text-base leading-relaxed text-slate">
                  System integration diagrams, data flow specifications, and API mapping.
                  We identify which tools to use, how they connect, and what data moves
                  between them. Every technical decision is documented and justified.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif leading-snug text-slate mb-3">
                  Governance framework
                </h3>
                <p className="text-base leading-relaxed text-slate">
                  Data handling protocols, access controls, audit logging, and compliance
                  requirements. We specify who can do what, how data is protected, and
                  how the system maintains accountability.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif leading-snug text-slate mb-3">
                  Change management plan
                </h3>
                <p className="text-base leading-relaxed text-slate">
                  Rollout strategy, training requirements, communication plan, and success
                  metrics. We design how the new system gets adopted, not just how it
                  gets built.
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
                  Solution Blueprint
                </h3>
                <p className="text-sm text-slate/70">
                  Comprehensive design document covering workflow specifications,
                  technical architecture, integration points, and implementation sequence.
                </p>
              </div>

              <div className="bg-pearl border border-steel rounded-md p-6">
                <h3 className="text-xl font-serif leading-snug text-slate mb-3">
                  System Architecture Diagram
                </h3>
                <p className="text-sm text-slate/70">
                  Visual map of all systems, integrations, data flows, and API connections
                  with security and governance controls clearly marked.
                </p>
              </div>

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
                  Typically 2-3 weeks depending on solution complexity and integration
                  requirements.
                </p>
                <ul className="space-y-2 text-base text-slate">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Week 1: Workflow design and architecture
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Week 2: Governance and change planning
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Week 3: Blueprint review and approval
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-serif leading-tight text-slate mb-6">
                  Investment
                </h2>
                <p className="text-lg leading-relaxed text-slate mb-4">
                  Fixed-price engagement based on solution complexity.
                </p>
                <ul className="space-y-2 text-base text-slate">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Detailed scope and deliverables
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Blueprint becomes build specification
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Option to proceed to Deliver phase
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
              Discuss your requirements
            </h2>
            <p className="text-xl font-sans leading-relaxed text-white mb-8">
              Book a call to discuss your operational challenge and how the Define
              phase creates clarity before building begins.
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
