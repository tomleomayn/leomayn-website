import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Our Approach to AI Consulting | Leomayn',
  description: 'We diagnose before we prescribe, design for your business, and deliver working systems you own. Fixed pricing by complexity and outcomes. Phased commitment.',
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
        <section className="bg-pearl py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate mb-6">
              AI consulting that delivers
            </h1>
            <div className="max-w-2xl flex items-stretch">
              <div className="w-1.5 bg-[#9ab8cb] rounded-full my-[5px]"></div>
              <p className="text-xl leading-[1.6] text-coral-accessible pl-6">
                We deliver working AI systems that add value, reduce friction,
                and free your team to focus on what really matters.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Rigour */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              We understand before we prescribe
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <p>
                We don't arrive with a solution looking for a problem.
              </p>
              <p>
                Every engagement starts with diagnosis. We interview stakeholders,
                map workflows, and analyse where time and quality leak out of your
                operations. We identify the problems that matter before recommending
                any technology.
              </p>
              <p>
                We design for your business. Your legacy systems, your data quality,
                your regulatory requirements, your team's capabilities. Solutions
                that ignore these realities fail. We build for the environment you
                actually operate in.
              </p>
              <p>
                Governance is designed in from the start. Who can access what data?
                How is sensitive information protected? What gets logged? How do you
                demonstrate compliance? We answer these questions before we build,
                not after.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Delivery */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              Working systems that add value
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <p>
                We deliver automation you can use. Recommendations are worthless
                without implementation. Our engagements produce working systems:
                tested, documented, deployed.
              </p>
              <p>
                We work around your operations. We schedule work to minimise
                disruption to client delivery and billable time.
              </p>
              <p>
                The goal is to save you time, reduce administrative friction, and
                free your team to focus on work that creates value.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Ownership */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              You own it, with support available
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <p>
                You own the implementation. All code, configurations, and
                documentation belong to you. We use open platforms you can control.
                Nothing proprietary, nothing locked to our involvement.
              </p>
              <p>
                Your team uses what we build, with full documentation provided.
                The focus is on capability transfer: we want you to understand how
                things work and be able to extend them over time.
              </p>
              <p>
                We also offer ongoing support for clients who want it. Whether you
                run things independently or prefer continued partnership, the choice
                is yours.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Commercial */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              Fixed pricing, phased commitment
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <p>
                You know the cost before we start. We price by complexity and
                outcomes. No scope creep, no billing surprises.
              </p>
              <p>
                You can pause between phases. Complete a diagnosis and decide
                whether to proceed. Get a blueprint designed and choose when to
                build. There's no pressure to commit to the full journey upfront.
              </p>
              <p>
                We agree what success looks like before we start, and we track
                outcomes so you can see the value delivered.
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
              Book a 30-minute discovery call. We'll discuss one workflow and
              show you where we'd focus.
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
