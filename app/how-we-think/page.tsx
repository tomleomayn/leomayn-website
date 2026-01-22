import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'AI Strategy & Implementation Philosophy | Leomayn',
  description: 'AI gives people unprecedented access to knowledge and capability. The opportunity is real. So is the risk. We help organisations build the skills to lead.',
  openGraph: {
    title: 'AI Strategy & Implementation Philosophy | Leomayn',
    description: 'AI gives people unprecedented access to knowledge and capability. The opportunity is real. So is the risk. We help organisations build the skills to lead.',
    images: [{
      url: 'https://leomayn.com/logo/logo-social-1200x630.png',
      width: 1200,
      height: 630,
      alt: 'Leomayn - AI Consulting',
    }],
  },
}

export default function HowWeThinkPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-pearl py-24 px-6 lg:px-8 relative overflow-hidden">
          {/* Background blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div
              className="absolute top-1/2 -left-24 w-88 h-88 rounded-full opacity-40 blur-3xl"
              style={{
                backgroundColor: 'var(--color-rock)',
                animation: 'blobFloat 19s ease-in-out infinite',
              }}
            />
            <div
              className="absolute -bottom-16 left-1/3 w-72 h-72 rounded-full opacity-35 blur-3xl"
              style={{
                backgroundColor: 'var(--color-coral)',
                animation: 'blobFloat 23s ease-in-out infinite reverse',
                animationDelay: '-8s',
              }}
            />
            <div
              className="absolute -top-16 -right-16 w-80 h-80 rounded-full opacity-30 blur-3xl"
              style={{
                backgroundColor: 'var(--color-coral-light)',
                animation: 'blobFloat 17s ease-in-out infinite',
                animationDelay: '-4s',
              }}
            />
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate mb-6 animate-fade-in-up">
              AI strategy pillars to help chart the transition ahead
            </h1>
            <div className="max-w-2xl flex items-stretch animate-fade-in-up stagger-1">
              <div className="bg-[#9ab8cb] rounded-full my-[5px]" style={{ width: '3px', minWidth: '3px' }}></div>
              <p className="text-xl leading-[1.6] text-coral-accessible pl-6">
                AI gives people unprecedented access to knowledge and capability.
                We help organisations and their people harness it.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Our purpose */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              We help people and organisations succeed in the transition to an AI-enabled workplace
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <p>
                Leomayn's purpose is to empower people & companies to win in a
                changing world.
              </p>
              <p>
                AI is rewriting the rules of knowledge work. When{' '}
                <a
                  href="https://openai.com/index/introducing-gpt-5-2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coral-accessible underline hover:text-coral-dark"
                >
                  OpenAI released GPT-5.2
                </a>{' '}
                in December 2025, it achieved a 70% score on the GDPval benchmark,
                meaning it met or exceeded human expert performance on 70% of
                economically valuable tasks across 44 occupations. The gap between
                having an idea and executing it has collapsed.
              </p>
              <p>
                But there's a catch. That 70% was achieved when tasks were perfectly
                briefed: clear instructions, complete context, defined success
                criteria. Real work doesn't arrive that way. This is why many
                organisations are not yet realising the value they could be from AI.
              </p>
              <p>
                This creates a fundamental challenge and opportunity. The skill is
                learning how to harness these models: providing context, direction,
                and judgement that channels AI capability toward meaningful outcomes.
                People and organisations that develop these skills will create more
                value, move faster, and compete on different terms. Those that don't
                will struggle to keep pace.
              </p>
              <p>
                We help organisations take practical steps to integrate AI into their
                workflows, deliver measurable improvements, and build the internal
                capability to sustain and extend those gains over time.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Context engineering is the skill */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              Context engineering is a new and vital skill
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <p>
                AI models respond to context.
              </p>
              <p>
                The quality of the output depends on the quality of the instructions,
                the background information, and the framing you provide. A vague
                prompt produces a vague result. A precise prompt, grounded in the
                right context, produces something useful.
              </p>
              <p>
                Learning to provide that context effectively is the new core
                competency. This is context engineering: the skill of structuring
                information, asking the right questions, and guiding AI toward
                outcomes that create real value.
              </p>
              <p>
                This is learnable. It requires practice, feedback, and deliberate
                effort. Organisations that invest in developing this skill across
                their teams will outperform those that treat AI as something you
                simply switch on.
              </p>
              <p>
                Leomayn exists to help people and organisations develop this competency.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Direct AI to the right problems */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              Direct AI to the right problems
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <p>
                The strategic question is: which problems are worth solving with AI,
                and how do you structure the work so it delivers real value?
              </p>
              <p>
                This requires understanding your operations. Where does effort
                compound? Where does it dissipate? Which workflows consume time
                without creating proportional value? Where are the handoffs, the
                rework loops, the bottlenecks?
              </p>
              <p>
                Once you understand this, you can direct AI to the problems that
                matter. You can design solutions that integrate into how your
                business actually works, rather than impressive demos that never
                scale.
              </p>
              <p>
                We help organisations identify those problems and build AI into
                workflows in ways that make a measurable difference.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Capability comes from application */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              Capability comes from application
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <p>
                You become fluent by doing the work, making mistakes, and refining
                your approach. Training and deliberate practice build the muscle.
              </p>
              <p>
                Leomayn develops capability through application. We work with clients
                to apply AI to real problems, generate impact, and build the flywheel
                of results that drives organisational change. Each successful
                implementation creates evidence, confidence, and momentum for the next.
              </p>
              <p>
                Organisations that create space for this kind of applied learning
                will develop a compounding advantage.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: The risk of displaced jobs is real */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              The risk of displaced jobs is real
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <p>
                We acknowledge this honestly.
              </p>
              <p>
                AI will change what work looks like. Some roles will disappear.
                Others will transform. The organisations that thrive will be the
                ones that invest in their people's ability to guide and orchestrate
                these tools.
              </p>
              <p>
                Leomayn exists to help teams build that capability. We want the
                people in your organisation to be leading the change.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 lg:px-8 bg-slate">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-white mb-6">
              See how we put this into practice
            </h2>
            <p className="text-xl font-sans leading-relaxed text-white mb-8">
              Book a 30-minute discovery call. We'll discuss your operational
              challenges and show you how these principles apply to your business.
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
