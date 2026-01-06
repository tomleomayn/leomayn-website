import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Link from 'next/link'

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
        <section className="bg-pearl py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate mb-6">
              How we think
            </h1>
            <p className="text-2xl leading-relaxed text-slate">
              Principles that shape how we approach operational improvement
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
                AI is a lever, not a silver bullet. Without fixing the underlying
                workflow, AI just accelerates broken processes. We see companies
                rushing to implement ChatGPT or Copilot without understanding what
                operational problem they are solving.
              </p>
              <p>
                The result is predictable: pilot purgatory. Teams run experiments
                that show promise but never scale. Shadow IT emerges. Governance
                breaks down. Investment is wasted.
              </p>
              <p>
                We work the other way round. Fix the workflow first. Remove bottlenecks,
                eliminate unnecessary handoffs, clarify decision rights, and standardize
                where it matters. Only then does automation or AI make sense.
              </p>
              <p>
                This is not slower. It is faster. Because you build once, not three times.
                You deploy solutions that stick, not experiments that die in staging.
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
                Most operational problems are not technical. They are organizational.
                Unclear ownership, duplicated effort, manual handoffs between systems,
                missing data, inconsistent processes across teams.
              </p>
              <p>
                Adding technology to this mess creates more complexity, not less. You
                now have the original organizational problem plus integration complexity,
                tool sprawl, and maintenance burden.
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
        <section className="py-24 px-6 lg:px-8 bg-chalk">
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
                data? How is sensitive information protected? What gets logged? How do we
                prove compliance?
              </p>
              <p>
                This is not bureaucracy. It is insurance. Systems with clear governance
                scale safely. Systems without it create liability.
              </p>
              <p>
                For professional services firms handling client data, governance is the
                difference between operational leverage and operational risk.
              </p>
            </div>
          </div>
        </section>

        {/* Transfer Capability, Not Dependency */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              Transfer capability, not dependency
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <p>
                Many consultancies and vendors create dependency by design. Proprietary
                platforms, complex configurations, undocumented customizations. You cannot
                maintain the system without them.
              </p>
              <p>
                We do the opposite. Every solution is built on open platforms you can own.
                Every workflow is documented. Every configuration is explained. Your team
                receives training to maintain and improve the system independently.
              </p>
              <p>
                The goal is to make ourselves redundant, not indispensable. You should be
                able to iterate, modify, and extend what we build without coming back to us.
              </p>
              <p>
                This creates better outcomes. When you own the capability, you adapt faster,
                iterate more frequently, and compound improvements over time.
              </p>
            </div>
          </div>
        </section>

        {/* Build for Humans */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
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
                We do not build systems people will not use. We build systems that make their
                work easier, clearer, and more valuable.
              </p>
              <p>
                The best automation is invisible. It removes friction without adding complexity.
                People get better outcomes without feeling like they are using new technology.
              </p>
            </div>
          </div>
        </section>

        {/* Measure What Matters */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              Measure what matters
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <p>
                Many AI projects measure activity instead of outcomes. Hours saved, tasks
                automated, workflows digitized. These metrics miss the point.
              </p>
              <p>
                We measure operational leverage: Can you deliver more value with the same
                team? Can you maintain quality while growing revenue? Can your best people
                spend more time on high-value work?
              </p>
              <p>
                This requires different metrics. Throughput per person. Error rates. Cycle
                time from intake to delivery. Time spent on value creation versus administration.
              </p>
              <p>
                When you measure what matters, you optimize for the right things. Automation
                that saves time but reduces quality is not success. Automation that frees
                experts to focus on complex problems is.
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
              Book a 30-minute discovery call. We will discuss your operational
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
