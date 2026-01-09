import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata = {
  title: 'Services - Leomayn',
  description: 'Four-phase framework for operational improvement: Diagnose, Define, Deliver, Support. Fix the work first, then scale with AI.',
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
        <section className="bg-pearl py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate mb-6">
              Four steps to operational improvement
            </h1>
            <p className="text-xl leading-relaxed text-slate">
              We evaluate the situation before prescribing any solutions. New workflows
              are designed to fit your business. We ship working systems not pilots. We
              transfer capability so you own the results.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
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
            </div>
          </div>
        </section>

        {/* Framework Section */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-4">
                How we work
              </h2>
              <p className="text-xl text-slate/70 max-w-3xl mx-auto">
                Each phase of work builds on the previous one. You can pause between phases,
                or engage us for the full journey from diagnosis through to ongoing support.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="bg-coral rounded-lg p-5 mb-2 h-28 flex items-center justify-center">
                  <span className="text-2xl font-sans text-slate">Diagnose</span>
                </div>
                <h3 className="text-2xl font-serif leading-snug text-slate mb-1">Phase I</h3>
                <p className="text-base font-sans leading-relaxed text-slate/70">
                  c.2 - 4 weeks
                </p>
              </div>

              <div className="text-center">
                <div className="bg-coral rounded-lg p-5 mb-2 h-28 flex items-center justify-center">
                  <span className="text-2xl font-sans text-slate">Define</span>
                </div>
                <h3 className="text-2xl font-serif leading-snug text-slate mb-1">Phase II</h3>
                <p className="text-base font-sans leading-relaxed text-slate/70">
                  c.2 - 3 weeks
                </p>
              </div>

              <div className="text-center">
                <div className="bg-coral rounded-lg p-5 mb-2 h-28 flex items-center justify-center">
                  <span className="text-2xl font-sans text-slate">Deliver</span>
                </div>
                <h3 className="text-2xl font-serif leading-snug text-slate mb-1">Phase III</h3>
                <p className="text-base font-sans leading-relaxed text-slate/70">
                  c.4 - 8 weeks
                </p>
              </div>

              <div className="text-center">
                <div className="bg-coral rounded-lg p-5 mb-2 h-28 flex items-center justify-center">
                  <span className="text-2xl font-sans text-slate">Support</span>
                </div>
                <h3 className="text-2xl font-serif leading-snug text-slate mb-1">Phase IV</h3>
                <p className="text-base font-sans leading-relaxed text-slate/70">
                  Ongoing
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-sans font-semibold text-base bg-coral text-slate px-8 py-4 rounded-lg hover:bg-coral-dark transition-all"
              >
                Discuss Your Needs
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing Philosophy */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate text-center mb-8">
              Transparent pricing approach
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-slate">
              <p>
                We don't charge by the hour, we price by project complexity: low, standard, and high.
              </p>
              <p>
                Complexity is determined by factors like the number of systems requiring integration,
                number of stakeholders involved, process complexity and maturity, and governance
                requirements. You know the price before we start.
              </p>
              <p>
                Every project includes a fixed scope, clear deliverables, and a timeline. Any required
                changes to scope are easily accommodated with a change request.
              </p>
              <p>
                No surprises, no scope creep, no hourly rate anxiety.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 lg:px-8 bg-slate">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-white mb-6">
              Ready to start?
            </h2>
            <p className="text-xl font-sans leading-relaxed text-white mb-8">
              Book a 30-minute discovery call.
            </p>
            <p className="text-xl font-sans leading-relaxed text-white mb-8">
              We'll map one broken workflow and show you what's possible.
            </p>
            <Link
              href="/contact"
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
