import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'

export const metadata = {
  title: 'Services - Leomayn',
  description: 'Four-phase framework for operational improvement: Diagnose, Define, Deliver, Support. Fix the work first, then scale with AI.',
}

export default function ServicesPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-pearl py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate mb-6">
              Four phases to operational improvement
            </h1>
            <p className="text-xl leading-relaxed text-slate">
              We diagnose the problem before prescribing solutions. We design workflows
              to fit your constraints. We build working systems in weeks. We transfer
              capability so you own the result.
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
                description="Identify what's broken and what matters. We map current workflows, interview stakeholders, and pinpoint the operational bottlenecks limiting your effectiveness."
                href="/services/diagnose"
                features={[
                  'Stakeholder interviews to surface pain points',
                  'Current state process mapping',
                  'Prioritised opportunity analysis',
                  'Complexity scoring and effort estimation',
                ]}
              />

              <ServiceCard
                number="2"
                title="Define"
                subtitle="Solution Design"
                description="Design the right solution once. We create detailed blueprints that fit your data, systems, and governance requirements before building anything."
                href="/services/define"
                features={[
                  'Workflow redesign and specifications',
                  'Technical architecture and integration mapping',
                  'Governance framework and data controls',
                  'Change management and training plan',
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
                subtitle="Optimise & Scale"
                description="Keep systems optimised as you grow. Monthly advisory, ongoing improvements, and technical support to ensure your automation scales with your business."
                href="/services/support"
                features={[
                  'Monthly system health checks',
                  'Performance monitoring and optimisation',
                  'Incremental improvements and new features',
                  'Technical support and troubleshooting',
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
                How the framework works
              </h2>
              <p className="text-xl text-slate/70 max-w-3xl mx-auto">
                Each phase builds on the previous one. You can pause between phases,
                or engage us for the full journey from diagnosis through to ongoing support.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="bg-coral rounded-lg p-6 mb-4 h-32 flex items-center justify-center">
                  <span className="text-4xl font-serif text-slate">1</span>
                </div>
                <h3 className="text-xl font-serif leading-snug text-slate mb-2">Diagnose</h3>
                <p className="text-sm font-sans leading-relaxed text-slate/70">
                  2-4 weeks
                </p>
              </div>

              <div className="text-center">
                <div className="bg-coral rounded-lg p-6 mb-4 h-32 flex items-center justify-center">
                  <span className="text-4xl font-serif text-slate">2</span>
                </div>
                <h3 className="text-xl font-serif leading-snug text-slate mb-2">Define</h3>
                <p className="text-sm font-sans leading-relaxed text-slate/70">
                  2-3 weeks
                </p>
              </div>

              <div className="text-center">
                <div className="bg-coral rounded-lg p-6 mb-4 h-32 flex items-center justify-center">
                  <span className="text-4xl font-serif text-slate">3</span>
                </div>
                <h3 className="text-xl font-serif leading-snug text-slate mb-2">Deliver</h3>
                <p className="text-sm font-sans leading-relaxed text-slate/70">
                  4-8 weeks
                </p>
              </div>

              <div className="text-center">
                <div className="bg-coral rounded-lg p-6 mb-4 h-32 flex items-center justify-center">
                  <span className="text-4xl font-serif text-slate">4</span>
                </div>
                <h3 className="text-xl font-serif leading-snug text-slate mb-2">Support</h3>
                <p className="text-sm font-sans leading-relaxed text-slate/70">
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
              Transparent, complexity-based pricing
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-slate">
              <p>
                We don't charge by the hour. We price by project complexity across three bands:
                low, standard, and high.
              </p>
              <p>
                Complexity is determined by factors like stakeholder count, systems requiring
                integration, process maturity, and governance requirements. You know the price
                before we start.
              </p>
              <p>
                Every project includes a fixed scope, clear deliverables, and a defined timeline.
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
              Book a 30-minute discovery call. We'll map one broken workflow
              and show you what's possible.
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
