import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'Our Approach to AI Consulting | Leomayn',
  description: 'We diagnose before we prescribe, design for your business, and deliver working systems you own. Fixed pricing by complexity and outcomes. Phased commitment.',
  alternates: {
    canonical: '/approach',
  },
  openGraph: {
    title: 'Our Approach to AI Consulting | Leomayn',
    description: 'We diagnose before we prescribe, design for your business, and deliver working systems you own. Fixed pricing by complexity and outcomes. Phased commitment.',
    images: [{
      url: 'https://leomayn.com/logo/logo-social-1200x630.png',
      width: 1200,
      height: 630,
      alt: 'Leomayn - AI Consulting',
    }],
  },
}

export default function ApproachPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-pearl py-24 px-6 lg:px-8 relative overflow-hidden">
          {/* Background blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div
              className="absolute -top-20 -left-16 w-80 h-80 rounded-full opacity-40 blur-3xl"
              style={{
                backgroundColor: 'var(--color-coral)',
                animation: 'blobFloat 24s ease-in-out infinite',
              }}
            />
            <div
              className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full opacity-30 blur-3xl"
              style={{
                backgroundColor: 'var(--color-rock)',
                animation: 'blobFloat 18s ease-in-out infinite reverse',
                animationDelay: '-5s',
              }}
            />
            <div
              className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full opacity-35 blur-3xl"
              style={{
                backgroundColor: 'var(--color-coral-light)',
                animation: 'blobFloat 21s ease-in-out infinite',
                animationDelay: '-9s',
              }}
            />
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate mb-6 animate-fade-in-up">
              How we use AI to create operational leverage
            </h1>
            <div className="max-w-2xl flex items-stretch animate-fade-in-up stagger-1">
              <div className="bg-[#9ab8cb] rounded-full my-[5px]" style={{ width: '3px', minWidth: '3px' }}></div>
              <p className="text-xl leading-[1.6] text-coral-accessible pl-6">
                Fix work first, then scale with AI. We deliver working systems
                that add value, reduce friction, and free your team to focus on
                what really matters.
              </p>
            </div>
          </div>
        </section>

        {/* Context Bridge */}
        <section className="py-16 px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="p-8 bg-chalk rounded-md">
                <p className="text-lg leading-relaxed text-slate">
                  AI performance now matches or exceeds human experts on most knowledge tasks. In December 2025, OpenAI reported{' '}
                  <a
                    href="https://openai.com/index/introducing-gpt-5-2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-coral-accessible hover:text-coral-dark underline"
                  >
                    GPT-5.2
                  </a>{' '}
                  Thinking beat or tied experts on 70.9% of{' '}
                  <a
                    href="https://openai.com/index/gdpval/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-coral-accessible hover:text-coral-dark underline"
                  >
                    GDPval
                  </a>{' '}
                  tasks across 44 occupations. The constraint has shifted from capability to implementation: how work is designed, how context flows, and how decisions get made.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 1: We understand before we prescribe */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                We understand before we prescribe
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  We don't arrive with a solution looking for a problem.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  Every engagement starts with diagnosis. We interview stakeholders,
                  map workflows, and analyse where time and quality leak out of your
                  operations. We identify the problems that matter before recommending
                  any technology.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  We design for your business. Your legacy systems, your data quality,
                  your regulatory requirements, your team's capabilities. Solutions
                  that ignore these realities fail. We build for the environment you
                  actually operate in.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p>
                  Governance is designed in from the start. Who can access what data?
                  How is sensitive information protected? What gets logged? How do you
                  demonstrate compliance? We answer these questions before we build.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 2: Working systems that add value */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                Working systems that add value
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  We deliver automation you can use. Recommendations are worthless
                  without implementation. Our engagements produce working systems:
                  tested, documented, deployed.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  We work alongside your team throughout. You're involved in reviewing
                  process maps, approving designs, testing systems before deployment,
                  and learning to maintain what we build.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  The goal is to save you time, reduce administrative friction, and
                  free your team to focus on work that creates value.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 3: You own it */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                You own it, with support available
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  You own the implementation. All code, configurations, and
                  documentation belong to you. We use open platforms you can control.
                  Nothing proprietary, nothing locked to our involvement.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  Your team uses what we build, with full documentation provided.
                  The focus is on capability transfer: we want you to understand how
                  things work and be able to extend them over time.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  We also offer ongoing support for clients who want it. Whether you
                  run things independently or prefer continued partnership, the choice
                  is yours.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 4: Fixed pricing */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                Fixed pricing, phased commitment
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  You know the cost before we start. We price by complexity and
                  outcomes. No scope creep, no billing surprises. Clear scope, clear
                  deliverables, clear timelines.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  You can pause between phases. Complete a diagnosis and decide
                  whether to proceed. Get a blueprint designed and choose when to
                  build. There's no pressure to commit to the full journey upfront.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  We agree what success looks like before we start, and we track
                  outcomes so you can see the value delivered.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 5: Who we serve */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                Who we serve
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  We work with professional services firms and the business services
                  functions in larger organisations: agencies, consultancies, expert
                  service businesses. Typically 50-500 people, £5M-£50M revenue, with
                  operations directors or COOs looking to create operational leverage.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  Our clients face common challenges:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Manual processes limiting growth or reducing billable time</li>
                  <li>Administrative drag eroding margins</li>
                  <li>Team burnout from repetitive work</li>
                  <li>Pressure to adopt AI without a clear strategy</li>
                </ul>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  We help them build operational systems that scale. Through improved
                  workflows, intelligent automation, and AI deployed where it solves
                  real problems.
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
                See how it works in practice
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-xl font-sans leading-relaxed text-white mb-8">
                Book a 30-minute discovery call. We'll discuss one workflow and
                show you where we'd focus.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-sans font-semibold text-base bg-coral text-slate px-8 py-4 rounded-md hover:bg-coral-dark transition-all min-w-[220px]"
              >
                Book Discovery Call
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
