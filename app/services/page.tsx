import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'
import SchemaMarkup from '@/components/SchemaMarkup'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'AI consulting for service organisations | Leomayn',
  description: 'We diagnose what\'s broken, redesign how work flows, then use AI to scale what works. Workflow redesign and AI implementation for service organisations.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'AI consulting for service organisations | Leomayn',
    description: 'We diagnose what\'s broken, redesign how work flows, then use AI to scale what works. Workflow redesign and AI implementation for service organisations.',
    images: [{
      url: 'https://leomayn.com/logo/logo-social-1200x630.png',
      width: 1200,
      height: 630,
      alt: 'Leomayn - Workflow redesign and AI implementation',
    }],
  },
}

export default function ServicesPage() {
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
      }
    ]
  }

  return (
    <>
      <SchemaMarkup data={breadcrumbSchema} />
      <NavBar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-pearl py-24 px-6 lg:px-8 relative overflow-hidden">
          {/* Background blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div
              className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full opacity-40 blur-3xl"
              style={{
                backgroundColor: 'var(--color-coral)',
                animation: 'blobFloat 22s ease-in-out infinite',
              }}
            />
            <div
              className="absolute -top-20 right-1/4 w-72 h-72 rounded-full opacity-30 blur-3xl"
              style={{
                backgroundColor: 'var(--color-rock)',
                animation: 'blobFloat 20s ease-in-out infinite reverse',
                animationDelay: '-7s',
              }}
            />
            <div
              className="absolute top-1/2 -right-16 w-80 h-80 rounded-full opacity-35 blur-3xl"
              style={{
                backgroundColor: 'var(--color-coral-light)',
                animation: 'blobFloat 25s ease-in-out infinite',
                animationDelay: '-12s',
              }}
            />
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate mb-6 animate-fade-in-up">
              Workflow redesign and AI implementation
            </h1>
            <div className="max-w-2xl flex items-stretch animate-fade-in-up stagger-1">
              <div className="bg-[#9ab8cb] rounded-full my-[5px]" style={{ width: '3px', minWidth: '3px' }}></div>
              <div className="text-xl leading-[1.6] text-coral-accessible pl-6 space-y-4">
                <p>
                  Evaluation before prescription. We diagnose what's broken, redesign how work flows, and use AI to scale what works for your business.
                </p>
                <p>
                  We transfer capability so you own the results. The result is more capacity, less rework, and delivery you can rely on.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <ScrollReveal delay={0}>
                <ServiceCard
                  number="1"
                  title="Diagnose"
                  subtitle="Discovery & Assessment"
                  description="Identify what's broken and what moves the needle. We interview stakeholders, map current workflows, and pinpoint operational pain points that limit effectiveness."
                  href="/services/diagnose"
                  features={[
                    'Stakeholder interviews to surface pain points',
                    'Current state process mapping',
                    'Prioritised opportunity analysis',
                    'AI readiness assessment',
                  ]}
                />
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <ServiceCard
                  number="2"
                  title="Define"
                  subtitle="Solution Design"
                  description="Design the right solution once and remove guesswork from the build phase. We create detailed blueprints that fit your data, systems, and governance requirements before building."
                  href="/services/define"
                  features={[
                    'Workflow redesign and specifications',
                    'Business logic and schema design',
                    'Technical architecture and integration mapping',
                    'Governance and data considerations',
                  ]}
                />
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <ServiceCard
                  number="3"
                  title="Deliver"
                  subtitle="Build & Deploy"
                  description="Working automation in weeks. We build, test, and deploy the solution with your team involved throughout. You own the IP and learn to maintain it."
                  href="/services/deliver"
                  features={[
                    'Automation build and system integration',
                    'Testing and quality assurance',
                    'Team training and documentation',
                    'Deployment and handover',
                  ]}
                />
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <ServiceCard
                  number="4"
                  title="Support"
                  subtitle="Embed & Optimise"
                  description="Empower teams to use AI in their work. Keep systems optimised as you grow. Our technical support and training help compound improvements over time."
                  href="/services/support"
                  features={[
                    'Applied AI training',
                    'Performance monitoring and optimisation',
                    'Quarterly system health checks',
                    'Incremental improvements and new features',
                  ]}
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Framework Section */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-4">
                  How we work
                </h2>
                <p className="text-xl text-slate/70 max-w-3xl mx-auto">
                  Each phase of work builds on the previous one. You can pause between phases,
                  or engage us for the full journey from diagnosis through to ongoing support.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="max-w-2xl mx-auto mb-12 p-6 bg-coral/20 rounded-md text-center">
                <p className="text-lg text-slate">
                  Most clients start with Diagnose. It gives you the evidence, priority order, and ROI case before you build anything.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto lg:max-w-none">
              <ScrollReveal delay={0}>
                <Link href="/services/diagnose" className="text-center group block">
                <div className="bg-coral rounded-md p-5 mb-2 aspect-square flex flex-col items-center justify-center max-w-[160px] mx-auto hover:shadow-lg transition-all duration-300">
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    <i className="fi fi-rs-brain-circuit text-slate" style={{ fontSize: '48px' }}></i>
                  </div>
                  <span className="text-xl text-slate" style={{ fontFamily: 'var(--font-serif)' }}>Diagnose</span>
                </div>
                <h3 className="text-xl leading-snug text-slate mb-1" style={{ fontFamily: 'var(--font-sans)' }}>Phase I</h3>
                <p className="text-base font-sans leading-relaxed text-slate/70">
                    Est. duration: 2 - 4 weeks
                  </p>
                </Link>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <Link href="/services/define" className="text-center group block">
                <div className="bg-coral rounded-md p-5 mb-2 aspect-square flex flex-col items-center justify-center max-w-[160px] mx-auto hover:shadow-lg transition-all duration-300">
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    <i className="fi fi-rs-machine-learning text-slate" style={{ fontSize: '48px' }}></i>
                  </div>
                  <span className="text-xl text-slate" style={{ fontFamily: 'var(--font-serif)' }}>Define</span>
                </div>
                <h3 className="text-xl leading-snug text-slate mb-1" style={{ fontFamily: 'var(--font-sans)' }}>Phase II</h3>
                <p className="text-base font-sans leading-relaxed text-slate/70">
                    Est. duration: 2 - 3 weeks
                  </p>
                </Link>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <Link href="/services/deliver" className="text-center group block">
                  <div className="bg-coral rounded-md p-5 mb-2 aspect-square flex flex-col items-center justify-center max-w-[160px] mx-auto hover:shadow-lg transition-all duration-300">
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      <i className="fi fi-rs-system-cloud text-slate" style={{ fontSize: '48px' }}></i>
                    </div>
                    <span className="text-xl text-slate" style={{ fontFamily: 'var(--font-serif)' }}>Deliver</span>
                  </div>
                  <h3 className="text-xl leading-snug text-slate mb-1" style={{ fontFamily: 'var(--font-sans)' }}>Phase III</h3>
                  <p className="text-base font-sans leading-relaxed text-slate/70">
                    Est. duration: 4 - 8 weeks
                  </p>
                </Link>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Link href="/services/support" className="text-center group block">
                  <div className="bg-coral rounded-md p-5 mb-2 aspect-square flex flex-col items-center justify-center max-w-[160px] mx-auto hover:shadow-lg transition-all duration-300">
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      <i className="fi fi-rs-hands-heart text-slate" style={{ fontSize: '48px' }}></i>
                    </div>
                    <span className="text-xl text-slate" style={{ fontFamily: 'var(--font-serif)' }}>Support</span>
                  </div>
                  <h3 className="text-xl leading-snug text-slate mb-1" style={{ fontFamily: 'var(--font-sans)' }}>Phase IV</h3>
                  <p className="text-base font-sans leading-relaxed text-slate/70">
                    Ongoing
                  </p>
                </Link>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.4}>
              <div className="text-center">
                <Link
                  href="/services/diagnose"
                  className="inline-flex items-center justify-center font-sans font-semibold text-base bg-coral text-slate px-8 py-4 rounded-md hover:bg-coral-dark transition-all min-w-[220px]"
                >
                  Start with Diagnose
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Pricing Philosophy */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate text-center mb-8">
                How we price
              </h2>
            </ScrollReveal>
            <div className="space-y-4 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  We don't charge by the hour, we price by project complexity: low, standard, and high.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  Complexity is determined by factors like the number of systems requiring integration,
                  number of stakeholders involved, process complexity and maturity, and governance
                  requirements. You know the price before we start.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  Every project includes a fixed scope, clear deliverables, and a timeline. Any required
                  changes to scope are easily accommodated with a change request.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p>
                  No surprises, no scope creep, no hourly rate anxiety.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 lg:px-8 bg-slate">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-white mb-6">
                Ready to start?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-xl font-sans leading-relaxed text-white mb-8">
                Book a 30-minute discovery call.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-xl font-sans leading-relaxed text-white mb-8">
                We'll map one broken workflow and show you what's possible.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-sans font-semibold text-base bg-coral text-slate px-8 py-4 rounded-md hover:bg-coral-dark transition-all min-w-[220px]"
              >
                Let's talk
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
