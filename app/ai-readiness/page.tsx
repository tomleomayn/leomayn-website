import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'
import ScrollReveal from '@/components/ScrollReveal'
import ArticleByline from '@/components/ArticleByline'
import Link from 'next/link'

export const metadata = {
  title: 'AI Readiness: What to Fix Before You Build Anything | Leomayn',
  description: 'Many organisations have tried AI tools. Few have the operational foundations to make them stick. Here is what readiness actually means.',
  keywords: ['AI readiness', 'AI readiness assessment', 'AI implementation', 'operational readiness', 'AI strategy'],
  alternates: {
    canonical: '/ai-readiness',
  },
  openGraph: {
    title: 'AI Readiness: What to Fix Before You Build Anything | Leomayn',
    description: 'Many organisations have tried AI tools. Few have the operational foundations to make them stick.',
    images: [{
      url: 'https://leomayn.com/logo/logo-social-1200x630.png',
      width: 1200,
      height: 630,
      alt: 'Leomayn - AI Consulting',
    }],
  },
}

export default function AIReadinessPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'AI readiness is not a technology problem',
    'description': 'Many organisations have tried AI tools. Few have the operational foundations to make them stick.',
    'image': 'https://leomayn.com/logo/logo-social-1200x630.png',
    'url': 'https://leomayn.com/ai-readiness',
    'datePublished': '2026-03-30',
    'dateModified': '2026-06-11',
    'wordCount': 1800,
    'articleSection': 'AI Readiness',
    'keywords': ['AI readiness', 'operational readiness', 'AI implementation', 'AI strategy'],
    'author': {
      '@type': 'Person',
      'name': 'Tom Jones',
      'jobTitle': 'Founder',
      'url': 'https://leomayn.com/about',
      'sameAs': 'https://www.linkedin.com/in/thomasallanjones/',
      'worksFor': {
        '@type': 'Organization',
        'name': 'Leomayn',
        'url': 'https://leomayn.com',
      },
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
      '@id': 'https://leomayn.com/ai-readiness',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What does AI readiness mean?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'AI readiness is the organisational capability to deploy AI tools in a way that produces consistent, trustworthy, measurable results. It covers four areas: process clarity (mapped workflows), evaluation discipline (quality rubrics for AI output), governance structure (who decides what gets deployed), and change capacity (whether your team has time to adopt new ways of working).',
        },
      },
      {
        '@type': 'Question',
        'name': 'How do I assess my organisation\'s AI readiness?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Start by asking four questions. Can your team describe your critical workflows step by step? Do you have criteria for what good AI output looks like? Is someone accountable for AI adoption? Does your team have capacity to change how they work? If any answer is no, that is your starting point.',
        },
      },
      {
        '@type': 'Question',
        'name': 'Why do AI pilots succeed but rollouts fail?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Pilots test whether the technology works in controlled conditions. Rollouts test whether the organisation can absorb the change across teams, processes, and governance structures. The skills required are different: pilots need technical competence, rollouts need operational readiness.',
        },
      },
      {
        '@type': 'Question',
        'name': 'What should I fix before deploying AI?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Fix the work, not the technology. Map your critical workflows as they actually happen. Define evaluation criteria for quality. Assign ownership for AI adoption. Create capacity for your team to learn and adapt. These operational foundations determine whether AI creates value or creates noise.',
        },
      },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://leomayn.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'AI Readiness', 'item': 'https://leomayn.com/ai-readiness' },
    ],
  }

  return (
    <>
      <SchemaMarkup data={articleSchema} />
      <SchemaMarkup data={faqSchema} />
      <SchemaMarkup data={breadcrumbSchema} />
      <NavBar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-pearl py-24 px-6 lg:px-8 relative overflow-hidden">
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
              AI readiness is not a technology problem
            </h1>
            <div className="max-w-2xl flex items-stretch animate-fade-in-up stagger-1">
              <div className="bg-[#9ab8cb] rounded-full my-[5px]" style={{ width: '3px', minWidth: '3px' }}></div>
              <p className="text-xl leading-[1.6] text-coral-accessible pl-6">
                Many organisations have tried AI tools. Few have the operational
                foundations to make them stick. Readiness is not about choosing
                the right model. It is about understanding the work underneath it.
              </p>
            </div>
            <ArticleByline published="2026-03-30" updated="2026-06-11" />
          </div>
        </section>

        {/* TL;DR */}
        <section className="py-12 px-6 lg:px-8 bg-chalk border-b border-steel/20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-pearl border border-steel rounded-lg p-6 lg:p-8">
              <h2 className="text-sm font-sans font-bold uppercase tracking-widest text-coral-accessible mb-4">Summary</h2>
              <ul className="space-y-3 text-base leading-relaxed text-slate">
                <li className="flex items-start">
                  <span className="bg-coral rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                  <span>91% of firms in one sector report using AI tools. Only 21% have a strategy. The gap between access and readiness is where value gets lost.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-coral rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Four readiness gaps surface repeatedly: process clarity, evaluation discipline, governance structure, and change capacity.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-coral rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Readiness is not a six-month programme. It starts with understanding which workflows matter most and what &ldquo;good&rdquo; looks like.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 1: The gap between access and readiness */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                The gap between access and readiness
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  AI tools have never been more accessible. Your team can sign up
                  for a copilot in minutes. But access is not adoption, and
                  adoption is not value.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  The pattern repeats: firms invest in AI tools, run pilots that
                  show promise, then struggle to move beyond a handful of
                  enthusiastic users. The technology works. The organisation around
                  it does not. (We wrote about the five most common{' '}
                  <Link href="/applied-ai/why-ai-projects-fail" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">
                    reasons AI projects fail
                  </Link>
                  .)
                </p>
              </ScrollReveal>
            </div>

            {/* Stats */}
            <ScrollReveal delay={0.2}>
              <div className="grid md:grid-cols-3 gap-6 my-12">
                <div className="bg-pearl rounded-lg p-8 text-center">
                  <p className="text-5xl font-serif text-slate leading-none mb-2">91%</p>
                  <p className="text-sm text-slate/70">of firms report using AI tools</p>
                  <p className="text-xs font-mono text-steel mt-2">ICAEW 2025</p>
                </div>
                <div className="bg-pearl rounded-lg p-8 text-center">
                  <p className="text-5xl font-serif text-slate leading-none mb-2">21%</p>
                  <p className="text-sm text-slate/70">have an AI strategy</p>
                  <p className="text-xs font-mono text-steel mt-2">ICAEW 2025</p>
                </div>
                <div className="bg-pearl rounded-lg p-8 text-center">
                  <p className="text-5xl font-serif text-slate leading-none mb-2">70%</p>
                  <p className="text-sm text-slate/70">of AI scaling effort is people and process, not technology</p>
                  <p className="text-xs font-mono text-steel mt-2">BCG 2024</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="space-y-6 text-lg leading-relaxed text-slate">
                <p>
                  That gap between using AI and being ready for AI is where value
                  gets lost. Not in the models. In the operations around them.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 2: Four readiness gaps */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                Four readiness gaps that surface repeatedly
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg leading-relaxed text-slate mb-12">
                The same four gaps appear when organisations move from
                experimenting with AI to relying on it. Each one is invisible
                from a technology perspective but obvious from an operational one.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6">
              <ScrollReveal delay={0.15}>
                <div className="bg-white border border-steel rounded-lg p-8 h-full">
                  <h3 className="text-xl font-serif text-slate mb-4">Process clarity</h3>
                  <p className="text-base leading-relaxed text-slate/70">
                    AI cannot improve work that is not defined. If client
                    onboarding lives in email threads and tribal knowledge, no
                    tool will fix it. You need to map the work before you
                    automate it.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="bg-white border border-steel rounded-lg p-8 h-full">
                  <h3 className="text-xl font-serif text-slate mb-4">Evaluation discipline</h3>
                  <p className="text-base leading-relaxed text-slate/70">
                    Many firms cannot tell you whether their AI outputs are good
                    enough. Without rubrics and pass/fail criteria, prompt quality
                    is folklore. What gets evaluated gets trusted.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <div className="bg-white border border-steel rounded-lg p-8 h-full">
                  <h3 className="text-xl font-serif text-slate mb-4">Governance structure</h3>
                  <p className="text-base leading-relaxed text-slate/70">
                    When anyone can adopt AI tools, everyone does differently.
                    Shadow AI is not a security problem. It is a management
                    problem. The firms that govern well adopt faster, not slower.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="bg-white border border-steel rounded-lg p-8 h-full">
                  <h3 className="text-xl font-serif text-slate mb-4">Change capacity</h3>
                  <p className="text-base leading-relaxed text-slate/70">
                    Adopting AI means changing how people work. That takes time,
                    attention, and leadership. Firms already running at capacity
                    have no slack for the transition. Readiness requires creating
                    space.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 3: What readiness actually looks like */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                What readiness actually looks like
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg leading-relaxed text-slate mb-12">
                AI readiness is not a maturity score or a checklist. It is the
                organisational capability to deploy AI tools in a way that
                produces consistent, trustworthy, measurable results. Practically,
                that means:
              </p>
            </ScrollReveal>

            <div className="space-y-8">
              <ScrollReveal delay={0.15}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-rock flex items-center justify-center text-slate-dark font-bold text-sm mr-5 mt-1">1</div>
                  <div>
                    <h3 className="text-xl font-serif text-slate mb-2">Your critical workflows are mapped</h3>
                    <p className="text-base leading-relaxed text-slate/70">
                      You can describe, step by step, how key work gets done. Who
                      touches it, where decisions happen, and where time gets lost.
                      Not in theory. In practice, as people actually do it.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-rock flex items-center justify-center text-slate-dark font-bold text-sm mr-5 mt-1">2</div>
                  <div>
                    <h3 className="text-xl font-serif text-slate mb-2">You know what &ldquo;good&rdquo; looks like</h3>
                    <p className="text-base leading-relaxed text-slate/70">
                      For the work you want AI to support, you have criteria for
                      quality. Not just speed. A fast wrong answer is worse than a
                      slow right one. Evaluation rubrics are the foundation of trust.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-rock flex items-center justify-center text-slate-dark font-bold text-sm mr-5 mt-1">3</div>
                  <div>
                    <h3 className="text-xl font-serif text-slate mb-2">Someone owns the rollout</h3>
                    <p className="text-base leading-relaxed text-slate/70">
                      AI adoption without ownership becomes experimentation without
                      learning. One person or a small group is accountable for what
                      gets deployed, how it performs, and when it scales.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-rock flex items-center justify-center text-slate-dark font-bold text-sm mr-5 mt-1">4</div>
                  <div>
                    <h3 className="text-xl font-serif text-slate mb-2">Your team has capacity to change</h3>
                    <p className="text-base leading-relaxed text-slate/70">
                      The people doing the work have time to learn new tools, give
                      feedback, and adjust their habits. Firms that layer AI on top
                      of 100% utilisation get resistance, not adoption.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.35}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-rock flex items-center justify-center text-slate-dark font-bold text-sm mr-5 mt-1">5</div>
                  <div>
                    <h3 className="text-xl font-serif text-slate mb-2">Your business case is grounded</h3>
                    <p className="text-base leading-relaxed text-slate/70">
                      The value of AI is not &ldquo;hours saved.&rdquo; It is the
                      cost of the failures, rework, and missed capacity that the
                      current process creates. Readiness means knowing what broken
                      work actually costs you.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 4: Sector patterns */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-12">
                What this looks like in practice
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mb-12">
                <h3 className="text-2xl font-serif leading-snug text-slate mb-4">
                  When the process was never designed
                </h3>
                <p className="text-lg leading-relaxed text-slate mb-6">
                  Deadlines drive urgency, but the readiness gap is upstream. Five
                  systems hold client data with no single source of truth. Teams
                  buy AI tools to solve problems they have not yet diagnosed.
                </p>
                <div className="bg-white border-l-[3px] border-rock rounded-r-lg p-6">
                  <p className="text-base leading-relaxed text-slate">
                    <strong>The readiness question:</strong> Can your team describe
                    the client onboarding process without using the words
                    &ldquo;it depends&rdquo;? If not, you are not ready to automate it.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mb-12">
                <h3 className="text-2xl font-serif leading-snug text-slate mb-4">
                  When knowledge lives in people, not systems
                </h3>
                <p className="text-lg leading-relaxed text-slate mb-6">
                  Two-thirds of organisations describe themselves as being in
                  &ldquo;automation purgatory&rdquo;: tools deployed, value elusive. The
                  issue is not the AI. It is the process debt underneath it.
                </p>
                <div className="bg-white border-l-[3px] border-rock rounded-r-lg p-6">
                  <p className="text-base leading-relaxed text-slate">
                    <strong>The readiness question:</strong> When a senior team
                    member leaves, does their knowledge leave with them? If yes,
                    you have a knowledge architecture problem that AI will amplify,
                    not solve.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <h3 className="text-2xl font-serif leading-snug text-slate mb-4">
                  When admin eats capacity
                </h3>
                <p className="text-lg leading-relaxed text-slate mb-6">
                  Sales teams spend 30% of their time on admin rather than
                  selling. The instinct is to buy a copilot. The readiness step
                  is to understand why admin takes so long and whether the process
                  is worth keeping at all.
                </p>
                <div className="bg-white border-l-[3px] border-rock rounded-r-lg p-6">
                  <p className="text-base leading-relaxed text-slate">
                    <strong>The readiness question:</strong> If you automated your
                    proposal process tomorrow, would the proposals be any better?
                    Or would you just produce the same mediocre output faster?
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 5: Where to start */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                Where to start
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  Readiness is not a six-month programme. It starts with an honest
                  assessment of where you stand today: which workflows matter
                  most, where the friction lives, and what &ldquo;good&rdquo; would look
                  like if you fixed it. That is what our{' '}
                  <Link href="/services/diagnose" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">
                    Diagnose phase
                  </Link>{' '}
                  is built around.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  We built the{' '}
                  <Link href="/ai-planner" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">
                    AI Deployment Planner
                  </Link>{' '}
                  as a free starting point. It takes five to ten minutes, asks
                  the questions we ask in the first hour of every engagement, and
                  produces a prioritised report showing where AI would create the
                  most value in your organisation and what needs to be true
                  before you deploy it.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  It will not tell you which tools to buy. It will tell you which
                  problems to solve first.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-10">
                Frequently asked questions
              </h2>
            </ScrollReveal>
            <div className="space-y-8">
              <ScrollReveal delay={0.1}>
                <div>
                  <h3 className="text-xl font-serif text-slate mb-3">What does AI readiness mean?</h3>
                  <p className="text-base leading-relaxed text-slate/80">
                    AI readiness is the organisational capability to deploy AI tools in a
                    way that produces consistent, trustworthy, measurable results. It
                    covers four areas: process clarity, evaluation discipline, governance
                    structure, and change capacity. Technology selection comes after these
                    foundations are in place.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div>
                  <h3 className="text-xl font-serif text-slate mb-3">How do I assess my organisation&apos;s AI readiness?</h3>
                  <p className="text-base leading-relaxed text-slate/80">
                    Start by asking four questions. Can your team describe your critical
                    workflows step by step? Do you have criteria for what good AI output
                    looks like? Is someone accountable for AI adoption? Does your team have
                    capacity to change how they work? If any answer is no, that is your
                    starting point. The{' '}
                    <Link href="/ai-planner" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">AI Deployment Planner</Link> covers
                    these questions in five minutes.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div>
                  <h3 className="text-xl font-serif text-slate mb-3">Why do AI pilots succeed but rollouts fail?</h3>
                  <p className="text-base leading-relaxed text-slate/80">
                    Pilots test whether the technology works in controlled conditions.
                    Rollouts test whether the organisation can absorb the change across
                    teams, processes, and governance structures. We cover the five most
                    common failure patterns in{' '}
                    <Link href="/applied-ai/why-ai-projects-fail" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">why AI projects fail</Link>.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <div>
                  <h3 className="text-xl font-serif text-slate mb-3">What should I fix before deploying AI?</h3>
                  <p className="text-base leading-relaxed text-slate/80">
                    Fix the work, not the technology. Map your critical workflows as they
                    actually happen. Define evaluation criteria for quality. Assign
                    ownership for AI adoption. Create capacity for your team to learn and
                    adapt. Our{' '}
                    <Link href="/services/diagnose" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">Diagnose phase</Link> is
                    built to do exactly this.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 lg:px-8 bg-slate">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-white mb-6">
                Find out where you stand
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-xl font-sans leading-relaxed text-white mb-8">
                Five minutes. No obligation. A clear picture of where AI fits in
                your organisation and what to fix first.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/ai-planner"
                  className="inline-flex items-center justify-center font-sans font-semibold text-base bg-coral text-slate px-8 py-4 rounded-md hover:bg-coral-dark transition-all min-w-[220px]"
                >
                  Use the AI Deployment Planner
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-sans font-semibold text-base bg-transparent text-white border border-white/25 px-8 py-4 rounded-md hover:border-white/50 transition-all min-w-[220px]"
                >
                  Book a Discovery Call
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
