import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import SchemaMarkup from '@/components/SchemaMarkup'
import ScrollReveal from '@/components/ScrollReveal'
import RelatedPages from '@/components/RelatedPages'

export const metadata = {
  title: 'Emsere: AI-Powered Board Intelligence for a Global Commercial Team | Leomayn',
  description: 'How Emsere brought AI into the boardroom to deliver on-demand commercial intelligence. 10,500+ CRM deals connected, 21-slide narrative deck, 4 weeks from kickoff to board delivery.',
  keywords: ['AI board reporting', 'commercial intelligence', 'CRM automation', 'board deck automation', 'clinical trials', 'AI case study'],
  alternates: {
    canonical: '/why-leomayn/case-studies/emsere',
  },
  openGraph: {
    title: 'Emsere: AI-Powered Board Intelligence | Leomayn',
    description: 'How Emsere brought AI into the boardroom to deliver on-demand commercial intelligence across 10,500+ deals and 9 external sources.',
    url: 'https://leomayn.com/why-leomayn/case-studies/emsere',
    siteName: 'Leomayn',
    locale: 'en_GB',
    type: 'article',
    images: [{
      url: 'https://leomayn.com/logo/logo-social-1200x630.png',
      width: 1200,
      height: 630,
      alt: 'Leomayn - AI Consulting',
    }],
  },
}

export default function EmsereCaseStudyPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'AI-Powered Board Intelligence for a Global Commercial Team',
    'description': 'How Emsere brought AI into the boardroom to deliver on-demand commercial intelligence.',
    'image': 'https://leomayn.com/logo/logo-social-1200x630.png',
    'url': 'https://leomayn.com/why-leomayn/case-studies/emsere',
    'datePublished': '2026-06-09',
    'dateModified': '2026-06-09',
    'articleSection': 'Case Study',
    'keywords': ['AI board reporting', 'commercial intelligence', 'CRM automation', 'clinical trials'],
    'author': {
      '@type': 'Organization',
      'name': 'Leomayn',
      'url': 'https://leomayn.com',
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Leomayn',
      'url': 'https://leomayn.com',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://leomayn.com/logo/logo-social-1200x630.png',
      },
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://leomayn.com/why-leomayn/case-studies/emsere',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://leomayn.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Why Leomayn', 'item': 'https://leomayn.com/why-leomayn' },
      { '@type': 'ListItem', 'position': 3, 'name': 'Emsere Case Study', 'item': 'https://leomayn.com/why-leomayn/case-studies/emsere' },
    ],
  }

  return (
    <>
      <SchemaMarkup data={articleSchema} />
      <SchemaMarkup data={breadcrumbSchema} />
      <NavBar />
      <main className="min-h-screen">

        {/* Hero */}
        <section className="bg-pearl py-24 px-6 lg:px-8 relative overflow-hidden">
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
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <Link href="/why-leomayn" className="text-sm font-sans text-coral-accessible hover:text-coral-dark transition-colors mb-4 inline-block">
              &larr; Why Leomayn
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-sans font-bold uppercase tracking-widest text-white bg-coral-accessible px-4 py-1.5 rounded-full shadow-sm">
                Case Study
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate mb-6 animate-fade-in-up">
              AI-Powered Board Intelligence for a Global Commercial Team
            </h1>
            <div className="max-w-2xl flex items-stretch animate-fade-in-up stagger-1">
              <div className="bg-[#9ab8cb] rounded-full my-[5px]" style={{ width: '3px', minWidth: '3px' }}></div>
              <p className="text-xl leading-[1.6] text-coral-accessible pl-6">
                How Emsere brought AI into the boardroom to deliver on-demand commercial intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* Client profile bar */}
        <section className="bg-slate py-8 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col">
                <p className="text-xs font-sans font-semibold uppercase tracking-wider text-slate/50 mb-3">Client</p>
                <div className="flex-1 flex items-center justify-center">
                  <Image
                    src="/images/case-studies/logo-emsere.svg"
                    alt="Emsere B.V."
                    width={180}
                    height={60}
                  />
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-xs font-sans font-semibold uppercase tracking-wider text-slate/50 mb-3">Sector</p>
                <p className="text-lg font-sans text-slate">Clinical trial equipment rental and logistics</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-xs font-sans font-semibold uppercase tracking-wider text-slate/50 mb-3">Scale</p>
                <p className="text-lg font-sans text-slate">13,000+ devices, 900+ studies, 80+ countries</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Decision */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                The decision to invest in AI
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  Emsere manages over 13,000 rental devices across 80+ countries, supporting 900+ clinical trials for the world&apos;s largest pharmaceutical companies. As the business continues on its strong growth journey, the commercial leadership team saw an opportunity: use AI to elevate the quality and speed of board-level reporting, and build a platform that could extend across the commercial function.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  Jon Raven, Emsere&apos;s Chief Commercial Officer, chose to invest in a contained pilot timed to a live board meeting. Not a proof of concept divorced from the business; a working system that had to deliver for a board that expected precision and pace.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Stats band */}
        <section className="bg-chalk pt-8 pb-16 px-6 lg:px-8 border-b border-steel/20">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <ScrollReveal>
                <div className="text-center">
                  <p className="text-5xl lg:text-6xl font-serif text-coral-accessible mb-3">4</p>
                  <p className="text-sm lg:text-base font-sans text-slate/70 uppercase tracking-wider font-semibold">Weeks from brief to delivery</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="text-center">
                  <p className="text-5xl lg:text-6xl font-serif text-coral-accessible mb-3">10,500+</p>
                  <p className="text-sm lg:text-base font-sans text-slate/70 uppercase tracking-wider font-semibold">Live CRM deals connected</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="text-center">
                  <p className="text-5xl lg:text-6xl font-serif text-coral-accessible mb-3">700+</p>
                  <p className="text-sm lg:text-base font-sans text-slate/70 uppercase tracking-wider font-semibold">Signals harvested weekly</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="text-center">
                  <p className="text-5xl lg:text-6xl font-serif text-coral-accessible mb-3">21</p>
                  <p className="text-sm lg:text-base font-sans text-slate/70 uppercase tracking-wider font-semibold">Slide bespoke narrative deck</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* The Pilot */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                The pilot: board deck automation
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  Leomayn built an automated intelligence system that pulls live CRM data across 10,500+ deals, combines it with signals from nine external sources, and generates a 21-slide narrative deck with supporting analysis dossier. 700+ signals are harvested weekly, scored for relevance, and synthesised into board-level commentary. The board deck creation pipeline reduces preparation from several hours to under 30 minutes per cycle, while surfacing reporting insights the team had not previously had time to assemble.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  The design principle was deliberate: AI generates 100% of the graphical information translated direct from CRM source data and 50% of insightful narrative, some of which is buried to the human eye. The remaining 50% is human judgement, context that only the commercial team holds. The system does the assembly; the team provides their unique human insight and framing.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* What the System Delivers */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                Commercial intelligence at scale
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  Beyond board reporting, the intelligence platform extended the commercial team&apos;s reach into sources they hadn&apos;t previously monitored at scale. Competitor acquisitions, trial registrations, and regulatory movements are now surfaced automatically, scored for relevance, and presented alongside CRM data in a single narrative.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/case-studies/jon-raven.jpg"
                    alt="Jon Raven, Chief Commercial Officer at Emsere"
                    width={140}
                    height={140}
                    className="rounded-full object-cover object-top"
                    style={{ width: 140, height: 140 }}
                  />
                </div>
                <div>
                  <div className="relative pb-4">
                    <span className="text-6xl font-serif text-coral leading-none absolute -top-4 -left-2" aria-hidden="true">&ldquo;</span>
                    <blockquote className="text-xl lg:text-2xl font-serif leading-snug text-slate pl-8">
                      I was highly impressed with Leomayn&apos;s combination of strategic thinking and technical delivery, and we&apos;re excited to develop further AI use-cases across the commercial team that drive our growth plan.
                    </blockquote>
                    <span className="text-6xl font-serif text-coral leading-none absolute -bottom-2 right-0" aria-hidden="true">&rdquo;</span>
                  </div>
                  <p className="text-base font-sans font-semibold text-slate mt-4 pl-8">
                    Jon Raven
                  </p>
                  <p className="text-sm font-sans text-slate/70 pl-8">
                    Chief Commercial Officer, Emsere
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Building from Pilot to Programme */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                From one deck to an AI-powered commercial system
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  Following the board presentation, Leomayn built a complementary automated pipeline review dossier. Each salesperson now receives their own intelligence briefing ahead of monthly pipeline reviews, combining live CRM data with the same external signals that power the board deck.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  The insight captured during those reviews feeds back into the system. When the commercial team identifies context the AI missed, or corrects a narrative that needs local knowledge, those inputs sharpen the next board deck. The result is a cycle where the work of reviewing the pipeline directly improves the quality of board reporting.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Key Facts Table */}
        <section className="pt-12 pb-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                Key facts
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-md border border-steel/20 overflow-hidden">
                <table className="w-full text-left">
                  <tbody>
                    <tr className="border-b border-steel/10">
                      <td className="px-6 py-4 text-sm font-sans font-semibold text-slate w-1/3">Client</td>
                      <td className="px-6 py-4 text-sm font-sans text-slate">Emsere B.V.</td>
                    </tr>
                    <tr className="border-b border-steel/10 bg-pearl/50">
                      <td className="px-6 py-4 text-sm font-sans font-semibold text-slate">Sector</td>
                      <td className="px-6 py-4 text-sm font-sans text-slate">Clinical trial equipment rental and logistics</td>
                    </tr>
                    <tr className="border-b border-steel/10">
                      <td className="px-6 py-4 text-sm font-sans font-semibold text-slate">Scale</td>
                      <td className="px-6 py-4 text-sm font-sans text-slate">13,000+ rental devices, 8,000+ contracts, 900+ studies, 80+ countries</td>
                    </tr>
                    <tr className="border-b border-steel/10 bg-pearl/50">
                      <td className="px-6 py-4 text-sm font-sans font-semibold text-slate">Project duration</td>
                      <td className="px-6 py-4 text-sm font-sans text-slate">4 weeks (kickoff to board delivery)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-sans font-semibold text-slate">Data sources</td>
                      <td className="px-6 py-4 text-sm font-sans text-slate">Live CRM (10,500+ deals) + 9 external intelligence feeds</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 lg:px-8 bg-slate">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-white mb-6">
                Ready to bring AI into your boardroom?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-xl font-sans leading-relaxed text-white mb-8">
                We help commercial teams build intelligence systems that connect live data to board-level reporting. Book a call to explore what this could look like for your business.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-sans font-semibold text-base bg-coral text-slate px-8 py-4 rounded-md hover:bg-coral-dark transition-all min-w-[220px]"
              >
                Book a Call
              </Link>
            </ScrollReveal>
          </div>
        </section>

        <RelatedPages
          heading="Explore more"
          pages={[
            {
              href: '/why-leomayn',
              title: 'Why Leomayn',
              description: 'Operational leadership, hands-on technical delivery, and a track record of scaling professional services firms.',
            },
            {
              href: '/services',
              title: 'Services',
              description: 'Four phases of engagement: Diagnose, Define, Deliver, and Support.',
            },
            {
              href: '/contact',
              title: 'Get in Touch',
              description: 'Book a 30-minute discovery call to explore how we can help.',
            },
          ]}
        />
      </main>
      <Footer />
    </>
  )
}
