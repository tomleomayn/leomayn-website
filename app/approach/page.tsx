import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Our Approach - Leomayn',
  description: 'Fix the work first, then scale with AI. Our systematic approach to operational improvement for professional services firms.',
}

export default function ApproachPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-pearl py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate mb-6">
              Our approach
            </h1>
            <p className="text-2xl leading-relaxed text-slate">
              Fix the work first, then scale with AI
            </p>
          </div>
        </section>

        {/* Three Principles */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate text-center mb-12">
              How we deliver successful AI transformation projects
            </h2>
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-serif leading-snug text-slate mb-4">
                  1. Diagnose before prescribing:
                </h3>
                <p className="text-base leading-relaxed text-slate">
                  We don't start with solutions. We start with stakeholder interviews,
                  process mapping, and operational analysis to understand where time and
                  quality leak out of your workflows. Only after diagnosing the actual
                  problem do we recommend technology or automation. This prevents expensive
                  mistakes and ensures we solve the right problem.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif leading-snug text-slate mb-4">
                  2. Design for your reality:
                </h3>
                <p className="text-base leading-relaxed text-slate">
                  Every organisation is unique: legacy systems, data quality issues, regulatory
                  requirements, team capabilities, and governance needs. Generic solutions ignore
                  these realities. We design workflows and automation that fit your specific
                  environment, using tools you can own, maintain, and adapt as requirements evolve.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif leading-snug text-slate mb-4">
                  3. Transfer capability, not dependency:
                </h3>
                <p className="text-base leading-relaxed text-slate">
                  We don't create ongoing dependency on proprietary platforms or consultancy
                  retainers. You own all code, configurations, and documentation. The goal is
                  to make ourselves redundant, not indispensable. We also offer ongoing
                  support for clients who need it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-12">
              What makes us different
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-serif leading-snug text-slate mb-3">
                  Working systems, not strategy decks
                </h3>
                <p className="text-base leading-relaxed text-slate">
                  We deliver automation you can use, not just recommendations you have to implement.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif leading-snug text-slate mb-3">
                  Capability transfer
                </h3>
                <p className="text-base leading-relaxed text-slate">
                  You own what we build, with the option to maintain it independently.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif leading-snug text-slate mb-3">
                  Designed for your constraints
                </h3>
                <p className="text-base leading-relaxed text-slate">
                  Solutions fit your data, systems, and governance requirements. Not off-the-shelf products.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif leading-snug text-slate mb-3">
                  Fixed prices, defined scope
                </h3>
                <p className="text-base leading-relaxed text-slate">
                  You know the cost before we start. No hourly billing, no scope creep.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-24 px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              Who we serve
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <p>
                We work with professional services firms and the business services functions in other organisations: agencies, consultancies, expert service businesses. Typically 50-500 people, £5M-£50M revenue, with operations directors or COOs who are looking for support to create operational leverage.
              </p>
              <p>
                Our clients face common challenges: manual processes limiting growth or reducing billable time, administrative drag eroding margins, team burnout from repetitive work, and pressure to adopt AI without a clear strategy.
              </p>
              <p>
                We help them build operational systems that scale. Not through headcount, but through improved workflows, intelligent automation, and AI deployed where it solves real problems.
              </p>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              How we work with you
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <p>
                We work alongside your team, not in isolation. You're involved throughout:
                reviewing process maps, approving designs, testing systems before deployment,
                and learning to maintain what we build.
              </p>
              <p>
                Projects are priced based on complexity, not hours. You know the cost before
                we start. No surprises, no scope creep, no hourly rate anxiety. Clear scope,
                clear deliverables, clear timelines.
              </p>
              <p>
                You can pause between phases. Complete a diagnosis and decide whether to
                proceed. Get a blueprint designed and choose when to build. There's no
                pressure to commit to the full journey upfront.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 lg:px-8 bg-slate">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-white mb-6">
              See how it works in practice
            </h2>
            <p className="text-xl font-sans leading-relaxed text-white mb-8">
              Book a 30-minute discovery call. We'll map one workflow and show you
              where improvement opportunities exist.
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
