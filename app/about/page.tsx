import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'About Us | AI Consultants for Professional Services | Leomayn',
  description: 'Meet the AI consultants behind Leomayn. We help professional services firms build operational leverage through workflow improvement and AI automation.',
  openGraph: {
    title: 'About Us | AI Consultants for Professional Services | Leomayn',
    description: 'Meet the AI consultants behind Leomayn. We help professional services firms build operational leverage through workflow improvement and AI automation.',
    images: [{
      url: 'https://leomayn.com/logo/logo-social-1200x630.png',
      width: 1200,
      height: 630,
      alt: 'Leomayn - AI Consulting',
    }],
  },
}

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-pearl py-24 px-6 lg:px-8 relative overflow-hidden">
          {/* Background blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div
              className="absolute -top-16 -left-20 w-80 h-80 rounded-full opacity-40 blur-3xl"
              style={{
                backgroundColor: 'var(--color-coral)',
                animation: 'blobFloat 20s ease-in-out infinite',
              }}
            />
            <div
              className="absolute -bottom-16 right-1/4 w-64 h-64 rounded-full opacity-30 blur-3xl"
              style={{
                backgroundColor: 'var(--color-rock)',
                animation: 'blobFloat 24s ease-in-out infinite reverse',
                animationDelay: '-10s',
              }}
            />
            <div
              className="absolute top-1/2 -left-12 w-72 h-72 rounded-full opacity-35 blur-3xl"
              style={{
                backgroundColor: 'var(--color-coral-light)',
                animation: 'blobFloat 18s ease-in-out infinite',
                animationDelay: '-3s',
              }}
            />
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate mb-6 animate-fade-in-up">
              About Leomayn
            </h1>
            <div className="max-w-2xl flex items-stretch animate-fade-in-up stagger-1">
              <div className="bg-[#9ab8cb] rounded-full my-[5px]" style={{ width: '3px', minWidth: '3px' }}></div>
              <p className="text-xl leading-[1.6] text-coral-accessible pl-6">
                Operational architecture for professional services
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              Why Leomayn exists
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <p>
                Leomayn was founded to solve a specific problem: professional services
                firms drowning in operational complexity while AI vendors promise
                transformation without understanding the underlying workflows.
              </p>
              <p>
                Most firms know their processes are broken. Manual handoffs, duplicated
                effort, unclear ownership, data scattered across systems. They want to
                fix it, but generic AI consultants start with technology and work backwards
                to the problem.
              </p>
              <p>
                We work the other way round. Fix the operational foundation first, then
                scale what works with automation and AI. This creates sustainable leverage,
                not expensive experiments that fail to scale.
              </p>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              Founded by Tom Jones
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <p>
                Tom has spent 20 years solving operational problems across technology,
                operations, and knowledge work. He has delivered operational excellence
                programmes for companies including Boehringer Ingelheim, Nestlé, Boston
                Scientific, and Everybody.
              </p>
              <p>
                His approach combines systems thinking with practical implementation.
                Diagnose the actual problem, design for real constraints, build working
                solutions, and transfer capability to internal teams.
              </p>
              <p>
                Before founding Leomayn, Tom led operations teams, built product
                development functions, and consulted on business transformation. He
                understands how professional services firms actually work, not just
                how they should work in theory.
              </p>
            </div>
          </div>
        </section>

        {/* What We Believe */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              What we believe
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif leading-snug text-slate mb-3">
                  Operations before technology
                </h3>
                <p className="text-base leading-relaxed text-slate">
                  Fix the workflow first. Technology amplifies what you build on top of.
                  If the foundation is broken, automation makes things worse, not better.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif leading-snug text-slate mb-3">
                  Outcomes over hours
                </h3>
                <p className="text-base leading-relaxed text-slate">
                  We price by complexity and deliverables, not hourly rates. You know
                  the cost before we start. No scope creep, no hourly rate anxiety, no
                  billing surprises.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif leading-snug text-slate mb-3">
                  Transfer capability, not dependency
                </h3>
                <p className="text-base leading-relaxed text-slate">
                  You own all code, configurations, and documentation. Your team learns
                  to maintain and improve systems independently. We make ourselves
                  redundant, not indispensable.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif leading-snug text-slate mb-3">
                  Evidence over assumptions
                </h3>
                <p className="text-base leading-relaxed text-slate">
                  We interview stakeholders, map actual workflows, and identify real
                  bottlenecks before recommending solutions. No generic frameworks,
                  no cookie-cutter approaches.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              How we work
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <p>
                We work alongside your team, not in isolation. You are involved throughout:
                reviewing process maps, approving designs, testing systems, and learning
                to maintain what we build.
              </p>
              <p>
                Projects follow a systematic approach: Diagnose the problem, Define the
                solution, Deliver working systems, and Support ongoing optimization. You
                can pause between phases. No pressure to commit upfront to the full journey.
              </p>
              <p>
                We use open platforms you can own. Nothing proprietary, nothing locked
                to our involvement. Complete documentation, comprehensive training, and
                full capability transfer.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              Who we serve
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <p>
                We work with professional services firms: agencies, consultancies, expert
                service businesses. Typically 50-500 people, £5M-£50M revenue, with
                operations directors or COOs who need operational leverage.
              </p>
              <p>
                Our clients face common challenges: manual processes limiting growth,
                administrative drag eroding margins, team burnout from repetitive work,
                and pressure to adopt AI without clear operational strategy.
              </p>
              <p>
                We help them build operational systems that scale. Not through headcount,
                but through improved workflows, intelligent automation, and AI deployed
                where it solves real problems.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 lg:px-8 bg-slate">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-white mb-6">
              Work with us
            </h2>
            <p className="text-xl font-sans leading-relaxed text-white mb-8">
              Book a 30-minute discovery call. We will map one workflow and show you
              where operational leverage exists in your business.
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
