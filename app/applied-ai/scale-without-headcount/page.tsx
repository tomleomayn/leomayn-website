import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

export const metadata = {
  title: 'Scale Without Headcount: AI for Mid-Market Growth | Leomayn',
  description: 'Your board wants growth. Your ops team is stretched. Learn how mid-market firms use AI to create operational leverage without hiring. Book a discovery call.',
  keywords: ['AI scaling operations', 'scale without hiring', 'operational leverage AI', 'AI mid-market', 'AI business growth'],
  alternates: {
    canonical: '/applied-ai/scale-without-headcount',
  },
  openGraph: {
    title: 'Scale Without Headcount: AI for Mid-Market Growth | Leomayn',
    description: 'Your board wants growth. Your ops team is stretched. The answer is operational leverage.',
    images: [{
      url: 'https://leomayn.com/logo/logo-social-1200x630.png',
      width: 1200,
      height: 630,
      alt: 'Leomayn - AI Consulting',
    }],
  },
}

export default function ScaleWithoutHeadcountPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'How mid-market firms use AI to scale without scaling headcount',
    'description': 'Your board wants growth. Your ops team is stretched. The answer is operational leverage.',
    'image': 'https://leomayn.com/logo/logo-social-1200x630.png',
    'url': 'https://leomayn.com/applied-ai/scale-without-headcount',
    'datePublished': '2026-02-11',
    'dateModified': '2026-02-11',
    'wordCount': 1050,
    'articleSection': 'Growth',
    'keywords': ['scaling operations', 'operational leverage', 'mid-market', 'AI augmentation', 'professional services'],
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
      '@id': 'https://leomayn.com/applied-ai/scale-without-headcount',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://leomayn.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Applied AI', 'item': 'https://leomayn.com/applied-ai' },
      { '@type': 'ListItem', 'position': 3, 'name': 'Scale Without Headcount', 'item': 'https://leomayn.com/applied-ai/scale-without-headcount' },
    ],
  }

  return (
    <>
      <SchemaMarkup data={articleSchema} />
      <SchemaMarkup data={breadcrumbSchema} />
      <NavBar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-pearl py-24 px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div
              className="absolute -top-20 left-1/3 w-88 h-88 rounded-full opacity-35 blur-3xl"
              style={{
                backgroundColor: 'var(--color-coral)',
                animation: 'blobFloat 20s ease-in-out infinite',
              }}
            />
            <div
              className="absolute bottom-0 -right-16 w-72 h-72 rounded-full opacity-40 blur-3xl"
              style={{
                backgroundColor: 'var(--color-rock)',
                animation: 'blobFloat 24s ease-in-out infinite reverse',
                animationDelay: '-10s',
              }}
            />
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <Link href="/applied-ai" className="text-sm font-sans text-coral-accessible hover:text-coral-dark transition-colors mb-4 inline-block">
              &larr; All applied AI
            </Link>
            <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate mb-6 animate-fade-in-up">
              Scale without scaling headcount
            </h1>
            <div className="max-w-2xl flex items-stretch animate-fade-in-up stagger-1">
              <div className="bg-[#9ab8cb] rounded-full my-[5px]" style={{ width: '3px', minWidth: '3px' }}></div>
              <p className="text-xl leading-[1.6] text-coral-accessible pl-6">
                Your board wants growth. Your operations team is already stretched. The
                answer starts with understanding where capacity is trapped.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: The growth ceiling */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                The growth ceiling
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  This is a pattern we see repeatedly in mid-market services firms. Revenue
                  is flat or growing slowly. The board wants 20-30% growth. Sales could
                  bring in the work. But operations cannot handle current volume reliably,
                  let alone more.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-coral rounded-full w-2 h-2 mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Client onboarding takes weeks when it should take days</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-coral rounded-full w-2 h-2 mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Senior people spend hours on tasks that should be routine</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-coral rounded-full w-2 h-2 mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Quality drops when volume increases because processes depend on individual knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-coral rounded-full w-2 h-2 mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Every growth conversation ends with &ldquo;we&apos;d need to hire first&rdquo;</span>
                  </li>
                </ul>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  The ceiling is delivery capacity. The constraint is how the work is organised.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 2: Two different games */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                Two different games
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg leading-relaxed text-slate mb-8">
                When firms talk about AI and efficiency, they are usually playing one of
                two games. The difference matters.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-steel rounded-md p-8 opacity-75">
                  <h3 className="text-xl font-serif text-slate mb-4">The cost game</h3>
                  <p className="text-base text-slate/70 mb-4">
                    Same output, fewer people, lower spend. This is short-term.
                    Every competitor will achieve the same cost savings within
                    a few years. When efficiency gains are universal, they stop
                    being an advantage.
                  </p>
                  <p className="text-sm font-sans text-slate/50">
                    Defensive. Delivers short-term margin gains but does not create growth.
                  </p>
                </div>
                <div className="bg-white border-2 border-coral rounded-md p-8">
                  <h3 className="text-xl font-serif text-slate mb-4">The leverage game</h3>
                  <p className="text-base text-slate/70 mb-4">
                    Same people, more output, greater capacity. The real play is
                    redirecting freed capacity into competitiveness: better client
                    work, faster delivery, stronger relationships, differentiated
                    service. That compounds in ways cost savings never will.
                  </p>
                  <p className="text-sm font-sans text-coral-accessible font-semibold">
                    Offensive. Creates durable advantage.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg leading-relaxed text-slate mt-8">
                If your board wants growth without proportional headcount, you are playing
                the leverage game. That changes everything about how you select, design,
                and implement AI.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 3: Where leverage comes from */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                Where leverage actually comes from
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg leading-relaxed text-slate mb-12">
                Leverage comes from redesigning how work flows through your organisation
                so that each person&apos;s effort compounds rather than dissipates.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mb-10">
                <h3 className="text-2xl font-serif leading-snug text-slate mb-4">
                  1. Eliminate work about work
                </h3>
                <p className="text-lg leading-relaxed text-slate">
                  In most mid-market firms, a significant portion of team time goes to
                  coordination: chasing approvals, copying data between systems, formatting
                  reports, preparing status updates, scheduling meetings. None of this creates
                  client value. AI and automation can absorb much of it, freeing capacity
                  for work that matters.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mb-10">
                <h3 className="text-2xl font-serif leading-snug text-slate mb-4">
                  2. Standardise the repeatable
                </h3>
                <p className="text-lg leading-relaxed text-slate">
                  Every firm has work that follows a predictable pattern 70-80% of the time.
                  Client onboarding. Proposal generation. Monthly reporting. When these are
                  standardised with clear inputs, defined steps, and automated routing, they
                  take less time and produce more consistent results. The exceptions still
                  need human judgment. The routine should not.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div>
                <h3 className="text-2xl font-serif leading-snug text-slate mb-4">
                  3. Amplify judgment
                </h3>
                <p className="text-lg leading-relaxed text-slate">
                  The most valuable thing your team does is apply judgment: deciding what
                  matters, advising clients, managing risk, making trade-offs. AI&apos;s best
                  role is preparing the ground for that judgment. Research compiled before a
                  meeting. Data analysed before a review. Options surfaced before a decision.
                  Your people still decide. They decide faster, with better information.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 4: The augmentation premium */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                The augmentation premium
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  When you free up operational capacity, the question becomes: what do your
                  people do with the time?
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  The organisations creating the most value from AI do not simply produce
                  the same output faster. They redirect freed capacity toward harder, more
                  valuable problems. <a href="https://time.com/7342494/ai-changed-work-forever/" target="_blank" rel="noopener noreferrer" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">Erik Brynjolfsson at Stanford</a> calls this the augmentation
                  premium: as AI makes execution cheaper, the premium shifts to judgment.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white border border-steel rounded-md p-6">
                    <h3 className="text-lg font-serif text-slate mb-2">Orchestration</h3>
                    <p className="text-base text-slate/70">Coordinating systems, tools, and people toward coherent outcomes. Deciding which processes get redesigned.</p>
                  </div>
                  <div className="bg-white border border-steel rounded-md p-6">
                    <h3 className="text-lg font-serif text-slate mb-2">Judgment</h3>
                    <p className="text-base text-slate/70">Human decision-making that weighs risk, context, and consequence. AI surfaces options. People decide what to do with them.</p>
                  </div>
                  <div className="bg-white border border-steel rounded-md p-6">
                    <h3 className="text-lg font-serif text-slate mb-2">Creative direction</h3>
                    <p className="text-base text-slate/70">Deciding what good looks like. AI generates options. The bottleneck shifts to choosing well and directing with intent.</p>
                  </div>
                  <div className="bg-white border border-steel rounded-md p-6">
                    <h3 className="text-lg font-serif text-slate mb-2">Relationships</h3>
                    <p className="text-base text-slate/70">Client work where trust determines outcomes. AI can prepare you for these conversations. It cannot have them.</p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p>
                  Freeing up time is the starting point. Pointing that time at problems that
                  matter is where the growth comes from.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 5: Process experts */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                Process experts, not just tech specialists
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  <a href="https://hbr.org/2026/02/9-trends-shaping-work-in-2026-and-beyond" target="_blank" rel="noopener noreferrer" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">Gartner</a> found that 81% of CIOs report an AI skill gap stopping them from
                  meeting their objectives. The natural response is to hire AI talent.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  But their research also showed that the highest-performing organisations
                  do not start with AI expertise. They hire people who understand how work
                  flows, where it gets stuck, and which handoffs break.
                </p>
                <div className="my-8 p-8 bg-coral/10 border-l-4 border-coral rounded-r-md">
                  <p className="text-2xl font-serif text-slate">
                    Firms that paired process expertise with AI capability were twice as likely to exceed their revenue goals.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  The lesson for mid-market firms: your next AI hire needs to understand
                  your operations at least as well as they understand the technology.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 6: What leverage looks like */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                What leverage looks like at mid-market scale
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  Consider a 200-person professional services firm spending roughly 12,000
                  hours per year on internal reporting, status updates, and data consolidation.
                  At &pound;45 per hour of loaded cost, that is &pound;540,000 annually in
                  work that creates no client value.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  <Link href="/services/deliver" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">Redesigning those workflows</Link> can recover 60-70% of that time. That is 8,000
                  hours redirected to client work, business development, or service improvement.
                  Without hiring a single additional person.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="p-8 bg-coral/10 rounded-md">
                  <p className="text-lg text-slate">
                    At the individual level, a senior consultant spending 15 hours per week on
                    coordination and admin is operating at 60% capacity on billable or strategic
                    work. Freeing five of those hours increases their effective capacity by a
                    third. Across a team of 20, that is the equivalent of adding six full-time
                    people to the delivery workforce.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p>
                  This is what leverage means in practice. A structural shift in what your
                  team can accomplish.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Sources */}
        <section className="py-12 px-6 lg:px-8 bg-chalk border-t border-steel">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-sm font-sans font-semibold text-slate/50 uppercase tracking-wide mb-4">Sources</h3>
            <ol className="space-y-2 text-sm text-slate/60 list-decimal list-inside">
              <li>
                <a href="https://time.com/7342494/ai-changed-work-forever/" target="_blank" rel="noopener noreferrer" className="hover:text-coral-accessible transition-colors">Brynjolfsson, &ldquo;AI Changed Work Forever&rdquo; (TIME, January 2026)</a>
              </li>
              <li>
                <a href="https://hbr.org/2026/02/9-trends-shaping-work-in-2026-and-beyond" target="_blank" rel="noopener noreferrer" className="hover:text-coral-accessible transition-colors">Harvard Business Review, &ldquo;9 Trends Shaping Work in 2026 and Beyond&rdquo; (citing Gartner CIO survey)</a>
              </li>
            </ol>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 lg:px-8 bg-slate">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-white mb-6">
                Find your leverage opportunities
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-xl font-sans leading-relaxed text-white mb-8">
                Every firm has capacity trapped in low-value work. The question is how much,
                and where. We will identify the workflows with the highest leverage potential
                in your operations.
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
