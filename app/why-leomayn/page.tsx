import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import SchemaMarkup from '@/components/SchemaMarkup'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'Why Leomayn - Leomayn',
  description: 'Founded by Tom Jones to solve operational challenges through AI and automation. Operations and AI consulting for knowledge work.',
  alternates: {
    canonical: '/why-leomayn',
  },
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
        <section className="bg-pearl py-24 px-6 lg:px-8 relative overflow-hidden">
          {/* Background blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div
              className="absolute -bottom-24 -left-16 w-96 h-96 rounded-full opacity-40 blur-3xl"
              style={{
                backgroundColor: 'var(--color-coral)',
                animation: 'blobFloat 21s ease-in-out infinite',
              }}
            />
            <div
              className="absolute -top-16 left-1/3 w-72 h-72 rounded-full opacity-30 blur-3xl"
              style={{
                backgroundColor: 'var(--color-rock)',
                animation: 'blobFloat 26s ease-in-out infinite reverse',
                animationDelay: '-6s',
              }}
            />
            <div
              className="absolute top-1/3 -right-20 w-80 h-80 rounded-full opacity-35 blur-3xl"
              style={{
                backgroundColor: 'var(--color-coral-light)',
                animation: 'blobFloat 19s ease-in-out infinite',
                animationDelay: '-11s',
              }}
            />
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate mb-6 animate-fade-in-up">
              We empower people & companies to win in a changing world
            </h1>
            <div className="max-w-2xl flex items-stretch animate-fade-in-up stagger-1">
              <div className="bg-[#9ab8cb] rounded-full my-[5px]" style={{ width: '3px', minWidth: '3px' }}></div>
              <p className="text-xl leading-[1.6] text-coral-accessible pl-6">
                When you need help to embed AI in real processes, we provide operations and AI consulting support to make it happen.
              </p>
            </div>
          </div>
        </section>

        {/* Company Intro */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal>
                <p>
                  Leomayn helps organisations fix operational foundations before scaling with
                  AI and automation. We deliver working systems, transfer capability, and
                  create sustainable leverage.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p>
                  The consultancy was founded by Tom Jones, drawing on nearly two decades
                  of experience building and scaling operations in professional services.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-24 px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <ScrollReveal>
                <div className="aspect-square relative">
                  <Image
                    src="/images/tom-jones-founder.jpg"
                    alt="Tom Jones, Founder of Leomayn"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </ScrollReveal>

              {/* Bio */}
              <div>
                <ScrollReveal delay={0.1}>
                  <h2 className="text-3xl font-serif text-slate mb-4">Tom Jones, Founder</h2>
                  <a
                    href="https://www.linkedin.com/in/thomasallanjones/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-sans font-semibold text-sm border-2 border-slate text-slate px-4 py-2 rounded-md hover:bg-slate hover:text-white transition-all mb-6"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Follow on LinkedIn
                  </a>
                </ScrollReveal>
                <div className="space-y-4 text-base font-sans text-slate leading-relaxed">
                  <ScrollReveal delay={0.15}>
                    <p>
                      My career has been built on solving operational challenges. My brain
                      thinks in inputs, processes, and outputs. I thrive on the buzz of
                      delivering systems that work.
                    </p>
                  </ScrollReveal>
                  <ScrollReveal delay={0.2}>
                    <p>
                      I spent eight years at iCrossing delivering digital solutions to clients
                      including Apple, Next, and Barclays, rising to Chief Client Officer on the
                      executive team. Then 10 years as co-founder and COO of Everybody, a digital
                      agency serving some of the world's biggest healthcare brands.
                    </p>
                  </ScrollReveal>
                  <ScrollReveal delay={0.25}>
                    <p>
                      At Everybody I built the product and operational systems that scaled the
                      business from a kitchen table to $28M turnover, £6.75m fees, and 19% EBITDA.
                      Clients included Boehringer Ingelheim, Nestlé, Pfizer, and Boston Scientific.
                    </p>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Bring */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                What we bring
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  Leomayn combines deep operational experience with modern AI and automation
                  capability. We understand how professional services firms actually work -
                  the commercial models, delivery pressures, and quality standards.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>Our approach draws on:</p>
                <ul className="space-y-3 ml-6 mt-6">
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
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  We partner with specialists when projects require additional expertise,
                  ensuring you get the right capability for each engagement.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Why Leomayn Exists */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                Why Leomayn exists
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  I started Leomayn because I'm fascinated by what AI makes possible and
                  wanted to build an AI-first consultancy from the ground up.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  Too many firms know they have operational problems but don't have time to
                  fix them. They sense AI should be part of the solution but need support
                  connecting the technology to real operational outcomes.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  We help businesses get traction by delivering working AI solutions rather
                  than bolting on tool licences and hoping for impact. We fix the operational
                  foundations first, then scale what works with automation and AI.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p>
                  This approach creates sustainable leverage.
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
                Work with us
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-xl font-sans leading-relaxed text-white mb-8">
                Book a 30-minute discovery call. We'll map one workflow and show you where operational leverage exists in your business.
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
