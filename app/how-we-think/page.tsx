import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'How We Think - Leomayn',
  description: 'Our philosophy on operational improvement, AI implementation, and creating sustainable leverage in professional services.',
}

export default function HowWeThinkPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-pearl py-24 px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative">
            <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate mb-6">
              How we think
            </h1>
            <p className="text-2xl leading-relaxed text-slate">
              How we apply AI to deliver operational improvements
            </p>
          </div>
        </section>

        {/* Operations Before AI */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              Operations before AI
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <p>
                Many AI and automation projects fail because they start with the technology
                and work backwards to the problem. Tools are selected before understanding
                constraints. Transformation is promised without diagnosing what needs fixing.
              </p>
              <p>
                AI is a powerful lever. Without fixing the underlying workflow, it just
                accelerates broken processes. We see companies implementing ChatGPT, Copilot,
                or Claude without enabling teams or understanding what operational problem
                they are solving.
              </p>
              <p>
                The result is predictable: pilot purgatory. Teams run experiments that show
                promise but never scale. Shadow IT emerges. Governance breaks down. Investment
                is wasted.
              </p>
              <p>
                We work differently. We start with how your work actually runs today, identify
                what's broken and what matters, redesign the workflow to remove inefficiencies,
                and only then deploy AI and automation to scale what works.
              </p>
              <p>
                This approach delivers working systems in weeks. Your team owns the result,
                understands how it works, and can maintain it independently.
              </p>
            </div>
          </div>
        </section>

        {/* Complexity is the Enemy */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              Complexity is the enemy
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <p>
                Most operational problems are not technical. They are organisational.
                Unclear ownership, duplicated effort, manual handoffs between systems,
                missing data, inconsistent processes across teams.
              </p>
              <p>
                Adding technology to this creates more complexity. You now have the original
                organisational problem plus integration overhead, tool sprawl, and maintenance
                burden.
              </p>
              <p>
                Our approach strips out complexity before adding anything new. We clarify
                who does what, consolidate duplicated work, remove unnecessary steps, and
                document the simplified process.
              </p>
              <p>
                Then we automate the simple version. Automation on top of simplicity
                compounds. Automation on top of complexity collapses.
              </p>
            </div>
          </div>
        </section>

        {/* Governance is Not Optional */}
        <section className="py-24 px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              Governance is not optional
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <p>
                Many automation projects skip governance because it feels like overhead.
                This is a mistake. Without clear data handling protocols, access controls,
                and audit trails, you create risk that compounds over time.
              </p>
              <p>
                We design governance into the solution from the start. Who can access what
                data? How is sensitive information protected? What gets logged? How do you
                prove compliance?
              </p>
              <p>
                This is not bureaucracy. It is insurance. Systems with clear governance
                scale safely. Systems without it create liability.
              </p>
              <p>
                For firms handling client data, governance is the difference between
                operational leverage and operational risk.
              </p>
            </div>
          </div>
        </section>

        {/* Transfer Capability */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              Transfer capability
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <p>
                Many consultancies and vendors create dependency by design. Proprietary
                platforms, complex configurations, undocumented customisations. You cannot
                maintain the system without them.
              </p>
              <p>
                We build every solution on platforms you control. Every workflow is documented.
                Every configuration is explained. Your team receives training to maintain and
                improve the system independently.
              </p>
              <p>
                The goal is to make ourselves redundant. You should be able to iterate, modify,
                and extend what we build without coming back to us.
              </p>
              <p>
                When you own the capability, you adapt faster, iterate more frequently, and
                compound improvements over time.
              </p>
            </div>
          </div>
        </section>

        {/* Build for Humans */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              Build for humans
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <p>
                Automation projects often treat people as an afterthought. The system gets
                built, then training happens, then adoption struggles, then the system fails.
              </p>
              <p>
                We design for human adoption from the start. What does the user experience?
                How do they learn the new workflow? What happens when they make a mistake?
                How do we measure success from their perspective?
              </p>
              <p>
                Change management is not a phase at the end. It is a constraint throughout.
                We build systems that make work easier, clearer, and more valuable.
              </p>
              <p>
                The best automation is invisible. It removes friction without adding complexity.
                People get better outcomes without feeling like they are learning new technology.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 lg:px-8 bg-slate">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-white mb-6">
              See how we apply these principles
            </h2>
            <p className="text-xl font-sans leading-relaxed text-white mb-8">
              Book a 30-minute discovery call. We'll discuss your operational
              challenges and show you how our approach creates sustainable leverage.
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
