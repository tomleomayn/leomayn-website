import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Why Leomayn - Leomayn',
  description: 'Founded by Tom Jones to solve operational challenges through AI and automation. Operations and AI consulting for professional and business services.',
}

export default function WhyLeomaynPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-pearl py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate mb-6">
              Why Leomayn
            </h1>
            <p className="text-2xl leading-relaxed text-slate">
              Operations and AI consulting for professional and business services
            </p>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="aspect-square relative">
                <div className="aspect-square bg-pearl rounded-lg flex items-center justify-center">
                  <span className="text-steel text-sm">Photo placeholder</span>
                </div>
              </div>

              {/* Intro */}
              <div>
                <h2 className="text-3xl font-serif text-slate mb-2">Tom Jones</h2>
                <p className="text-lg font-sans text-steel mb-4">Founder, Leomayn</p>
                <a
                  href="https://www.linkedin.com/in/thomasallanjones/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-coral hover:text-coral-dark mb-6"
                >
                  <span>LinkedIn</span>
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
                <p className="text-base font-sans text-slate leading-relaxed">
                  My career has been built on solving operational challenges. My brain
                  thinks in inputs, processes, and outputs. I thrive on the buzz of
                  delivering systems that work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-24 px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              Experience
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <p>
                I spent eight years at iCrossing delivering digital solutions to clients
                including Apple, Next, and Barclays, rising to Chief Client Officer on the
                executive team. Then 10 years as co-founder and COO of Everybody, a digital
                agency serving some of the world's biggest healthcare brands.
              </p>
              <p>
                At Everybody I built the product and operational systems that scaled the
                business from a kitchen table to £30m turnover, £6.75m fees, and 19% EBITDA.
                Clients included Boehringer Ingelheim, Nestlé, Pfizer, and Boston Scientific.
              </p>
            </div>
          </div>
        </section>

        {/* I Know Knowledge Work */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              I know knowledge work
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <p>
                I understand how to consistently deliver knowledge work while maintaining
                quality standards. I know why delivery fails and the common failure modes
                that compromise quality. I have deep first-hand experience of how
                professional services firms actually work and the commercial models that
                underpin them.
              </p>
              <p>
                My experience has taught me what actually works in operations improvement:
                diagnose real problems, design for real constraints, build systems people
                will actually use, and transfer capability so teams can iterate independently.
              </p>
            </div>
          </div>
        </section>

        {/* Why Leomayn Exists */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              Why Leomayn exists
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <p>
                I started Leomayn because I'm fascinated by what AI makes possible and
                wanted to build an AI-first business from the ground up.
              </p>
              <p>
                Too many firms know they have operational problems but don't have time to
                fix them. They sense AI should be part of the solution but need support
                connecting the technology to real operational outcomes.
              </p>
              <p>
                We help businesses get traction by delivering working AI solutions rather
                than bolting on tool licences and hoping for impact. We fix the operational
                foundations first, then scale what works with automation and AI.
              </p>
              <p>
                This approach creates sustainable leverage.
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
              Book a 30-minute discovery call. We'll map one workflow and show you where operational leverage exists in your business.
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
