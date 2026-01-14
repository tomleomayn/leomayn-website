import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata = {
  title: 'Why Leomayn - Leomayn',
  description: 'Founded by Tom Jones to solve operational challenges through AI and automation. Operations and AI consulting for knowledge work.',
}

export default function WhyLeomaynPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tom Jones",
    "jobTitle": "Founder",
    "worksFor": {
      "@type": "Organization",
      "name": "Leomayn"
    },
    "url": "https://leomayn.com/why-leomayn",
    "sameAs": [
      "https://www.linkedin.com/in/thomasallanjones/"
    ],
    "knowsAbout": [
      "Operations consulting",
      "AI automation",
      "Process improvement",
      "Professional services"
    ],
    "description": "Operations specialist with 18 years experience. Former COO of Everybody (scaled to £30m turnover). Chief Client Officer at iCrossing."
  }

  return (
    <>
      <SchemaMarkup data={personSchema} />
      <NavBar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-pearl py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate mb-6">
              Why Leomayn
            </h1>
            <p className="text-2xl leading-relaxed text-coral-accessible">
              Operations and AI consulting for knowledge work
            </p>
          </div>
        </section>

        {/* Company Intro */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <p>
                Leomayn helps organisations fix operational foundations before scaling with
                AI and automation. We deliver working systems, transfer capability, and
                create sustainable leverage.
              </p>
              <p>
                The consultancy was founded by Tom Jones, drawing on nearly two decades
                of experience building and scaling operations in professional services.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-24 px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="aspect-square relative">
                <Image
                  src="/images/tom-jones-founder.jpg"
                  alt="Tom Jones, Founder of Leomayn"
                  fill
                  className="object-cover rounded-md"
                />
              </div>

              {/* Bio */}
              <div>
                <h2 className="text-3xl font-serif text-slate mb-4">Tom Jones, Founder</h2>
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
                <div className="space-y-4 text-base font-sans text-slate leading-relaxed">
                  <p>
                    My career has been built on solving operational challenges. My brain
                    thinks in inputs, processes, and outputs. I thrive on the buzz of
                    delivering systems that work.
                  </p>
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
            </div>
          </div>
        </section>

        {/* What We Bring */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              What we bring
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <p>
                Leomayn combines deep operational experience with modern AI and automation
                capability. We understand how professional services firms actually work -
                the commercial models, delivery pressures, and quality standards.
              </p>
              <p>Our approach draws on:</p>
              <ul className="space-y-3 ml-6">
                <li>
                  <strong>Operational leadership</strong> - building and scaling delivery functions
                </li>
                <li>
                  <strong>Client-side experience</strong> - understanding buyer needs and constraints
                </li>
                <li>
                  <strong>Technical implementation</strong> - hands-on automation and AI deployment
                </li>
                <li>
                  <strong>Change management</strong> - making new systems stick
                </li>
              </ul>
              <p>
                We partner with specialists when projects require additional expertise,
                ensuring you get the right capability for each engagement.
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
                wanted to build an AI-first consultancy from the ground up.
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
