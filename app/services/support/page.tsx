import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata = {
  title: 'AI Training & Support - Ongoing Optimisation | Leomayn',
  description: 'AI training and ongoing support to keep automation optimised. Quarterly health checks, performance monitoring, and capability building. Learn about our plans.',
  openGraph: {
    title: 'AI Training & Support - Ongoing Optimisation | Leomayn',
    description: 'AI training and ongoing support to keep automation optimised. Quarterly health checks, performance monitoring, and capability building. Learn about our plans.',
    images: [{
      url: 'https://leomayn.com/logo/logo-social-1200x630.png',
      width: 1200,
      height: 630,
      alt: 'Leomayn - AI Consulting',
    }],
  },
}

export default function SupportPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Managed Services",
    "name": "Support - Embed & Optimise",
    "description": "Ongoing performance monitoring, quarterly health checks, AI capability training, and incremental improvements. Available in Standard and Premium tiers.",
    "provider": {
      "@type": "Organization",
      "name": "Leomayn"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "url": "https://leomayn.com/services/support"
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
        "name": "Support",
        "item": "https://leomayn.com/services/support"
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
              className="absolute top-1/2 -right-16 w-80 h-80 rounded-full opacity-40 blur-3xl"
              style={{
                backgroundColor: 'var(--color-coral)',
                animation: 'blobFloat 22s ease-in-out infinite',
              }}
            />
            <div
              className="absolute -top-16 left-1/4 w-72 h-72 rounded-full opacity-30 blur-3xl"
              style={{
                backgroundColor: 'var(--color-rock)',
                animation: 'blobFloat 18s ease-in-out infinite reverse',
                animationDelay: '-7s',
              }}
            />
            <div
              className="absolute -bottom-20 -left-16 w-88 h-88 rounded-full opacity-35 blur-3xl"
              style={{
                backgroundColor: 'var(--color-coral-light)',
                animation: 'blobFloat 26s ease-in-out infinite',
                animationDelay: '-13s',
              }}
            />
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex items-end gap-6 mb-6 animate-fade-in-up">
              <div className="w-20 h-20 bg-coral rounded-md flex items-center justify-center">
                <i className="fi fi-rs-hands-heart text-slate leading-none flex items-center justify-center" style={{ fontSize: '48px' }}></i>
              </div>
              <div>
                <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate">
                  Support
                </h1>
                <p className="text-sm tracking-widest text-slate/60 mt-2 uppercase">AI Training & Support</p>
              </div>
            </div>
            <div className="max-w-2xl flex items-stretch animate-fade-in-up stagger-1">
              <div className="bg-[#9ab8cb] rounded-full my-[5px]" style={{ width: '3px', minWidth: '3px' }}></div>
              <p className="text-xl leading-[1.6] text-coral-accessible pl-6">
                Empower teams and keep systems optimised
              </p>
            </div>
          </div>
        </section>

        {/* What It Is */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              What this phase delivers
            </h2>
            <p className="text-lg leading-relaxed text-slate mb-6">
              The support phase keeps your automation performing as your business evolves.
              Performance monitoring, quarterly system reviews, technical support, and
              AI capability training ensure your operational leverage compounds over time.
            </p>
            <p className="text-lg leading-relaxed text-slate">
              This is an ongoing partnership, not just maintenance. We proactively identify
              optimisation opportunities, help you adapt workflows as requirements change,
              build your team's AI skills, and ensure your automation scales with your growth.
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
                  Building AI capability
                </h3>
                <p className="text-base leading-relaxed text-slate">
                  We run intensive workshops covering AI capabilities, limitations, practical
                  applications, and implementation risks. Content customised to your tools and
                  use cases with hands-on exercises. You get trained team members who understand
                  what AI can and cannot do in your specific context.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif leading-snug text-slate mb-3">
                  Performance monitoring and optimisation
                </h3>
                <p className="text-base leading-relaxed text-slate">
                  Continuous monitoring of workflow efficiency, processing times, and
                  resource utilisation. We tune configurations, eliminate bottlenecks,
                  and ensure systems run at peak performance.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif leading-snug text-slate mb-3">
                  Quarterly system health checks
                </h3>
                <p className="text-base leading-relaxed text-slate">
                  Regular reviews of automation performance, error rates, throughput,
                  and system reliability. We identify issues before they become problems
                  and recommend proactive improvements.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif leading-snug text-slate mb-3">
                  Incremental improvements and new features
                </h3>
                <p className="text-base leading-relaxed text-slate">
                  Ongoing enhancements based on user feedback and changing requirements.
                  Small improvements compound into significant capability gains over time.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif leading-snug text-slate mb-3">
                  Technical support and troubleshooting
                </h3>
                <p className="text-base leading-relaxed text-slate">
                  Responsive support when issues arise. We investigate problems, implement
                  fixes, and update documentation. Your team has expert backup when needed.
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
                  AI Capability Training
                </h3>
                <p className="text-sm text-slate/70">
                  Intensive workshops covering AI capabilities, limitations, and practical
                  applications customised to your tools and use cases.
                </p>
              </div>

              <div className="bg-pearl border border-steel rounded-md p-6">
                <h3 className="text-xl font-serif leading-snug text-slate mb-3">
                  Performance Reports and Advisory
                </h3>
                <p className="text-sm text-slate/70">
                  Regular reviews of automation performance, error rates, and throughput
                  metrics with advisory sessions to discuss improvements and priorities.
                </p>
              </div>

              <div className="bg-pearl border border-steel rounded-md p-6">
                <h3 className="text-xl font-serif leading-snug text-slate mb-3">
                  Ongoing Improvements
                </h3>
                <p className="text-sm text-slate/70">
                  Incremental enhancements, bug fixes, performance tuning, and new features
                  based on evolving requirements and usage patterns.
                </p>
              </div>

              <div className="bg-pearl border border-steel rounded-md p-6">
                <h3 className="text-xl font-serif leading-snug text-slate mb-3">
                  Technical Support
                </h3>
                <p className="text-sm text-slate/70">
                  Email and async support for troubleshooting, configuration questions,
                  and technical guidance. Response within one business day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Support Tiers */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate text-center mb-12">
              Support tiers
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-chalk border-2 border-steel rounded-md p-8">
                <h3 className="text-2xl font-serif leading-snug text-slate mb-3">
                  Standard Support
                </h3>
                <p className="text-base text-slate/70 mb-6">
                  Quarterly advisory and system monitoring for established automation
                  requiring maintenance and incremental improvements.
                </p>
                <ul className="space-y-2 text-sm text-slate mb-6">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Quarterly health checks and reporting
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Quarterly advisory session
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Email support (1-day response)
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Minor updates and bug fixes
                  </li>
                </ul>
              </div>

              <div className="bg-chalk border-2 border-coral rounded-md p-8">
                <h3 className="text-2xl font-serif leading-snug text-slate mb-3">
                  Premium Support
                </h3>
                <p className="text-base text-slate/70 mb-6">
                  Enhanced support for complex automation requiring frequent optimisation,
                  new features, and rapid response times.
                </p>
                <ul className="space-y-2 text-sm text-slate mb-6">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Weekly health checks and reporting
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Monthly advisory sessions
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Priority support (4-hour response)
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Feature development and enhancements
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
              Discuss ongoing support
            </h2>
            <p className="text-xl font-sans leading-relaxed text-white mb-8">
              Book a call to discuss how ongoing support keeps your automation
              optimised as your business scales.
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
