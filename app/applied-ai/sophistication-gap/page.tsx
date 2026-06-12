import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'
import RelatedPages from '@/components/RelatedPages'
import ArticleByline from '@/components/ArticleByline'

export const metadata = {
  title: 'The AI Sophistication Gap: Why Adoption Is Not Enough | Leomayn',
  description: '90% of employees at one firm used AI regularly. Only 5% used it well. The gap between adoption and sophistication is where organisations lose value.',
  keywords: ['AI adoption gap', 'AI sophistication', 'AI capability building', 'AI skills gap', 'professional services AI', 'AI upskilling'],
  alternates: {
    canonical: '/applied-ai/sophistication-gap',
  },
  openGraph: {
    title: 'The AI Sophistication Gap: Why Adoption Is Not Enough | Leomayn',
    description: '90% of employees used AI regularly. Only 5% used it well. Adoption is the wrong metric.',
    images: [{
      url: 'https://leomayn.com/logo/logo-social-1200x630.png',
      width: 1200,
      height: 630,
      alt: 'Leomayn - AI Consulting',
    }],
  },
}

export default function SophisticationGapPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'The AI sophistication gap',
    'description': '90% of employees at one firm used AI regularly. Only 5% used it well. The gap between adoption and sophistication is where organisations lose value.',
    'image': 'https://leomayn.com/logo/logo-social-1200x630.png',
    'url': 'https://leomayn.com/applied-ai/sophistication-gap',
    'datePublished': '2026-03-25',
    'dateModified': '2026-03-25',
    'wordCount': 1200,
    'articleSection': 'Capability',
    'keywords': ['AI adoption', 'AI sophistication', 'capability building', 'upskilling', 'professional services'],
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
      '@id': 'https://leomayn.com/applied-ai/sophistication-gap',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://leomayn.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Applied AI', 'item': 'https://leomayn.com/applied-ai' },
      { '@type': 'ListItem', 'position': 3, 'name': 'The Sophistication Gap', 'item': 'https://leomayn.com/applied-ai/sophistication-gap' },
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
              className="absolute -top-16 left-1/4 w-80 h-80 rounded-full opacity-35 blur-3xl"
              style={{
                backgroundColor: 'var(--color-coral)',
                animation: 'blobFloat 22s ease-in-out infinite',
              }}
            />
            <div
              className="absolute bottom-0 -right-20 w-72 h-72 rounded-full opacity-40 blur-3xl"
              style={{
                backgroundColor: 'var(--color-rock)',
                animation: 'blobFloat 17s ease-in-out infinite reverse',
                animationDelay: '-7s',
              }}
            />
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <Link href="/applied-ai" className="text-sm font-sans text-coral-accessible hover:text-coral-dark transition-colors mb-4 inline-block">
              &larr; All applied AI
            </Link>
            <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate mb-6 animate-fade-in-up">
              The AI sophistication gap
            </h1>
            <div className="max-w-2xl flex items-stretch animate-fade-in-up stagger-1">
              <div className="bg-[#9ab8cb] rounded-full my-[5px]" style={{ width: '3px', minWidth: '3px' }}></div>
              <p className="text-xl leading-[1.6] text-coral-accessible pl-6">
                90% of employees at one firm used AI regularly. Only 5% used
                it well. Adoption is not the metric that matters.
              </p>
            </div>
            <ArticleByline published="2026-03-25" />
          </div>
        </section>

        {/* Section 1: The gap */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                Adoption is the easy number to track
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  <a href="https://hbr.org/2026/03/what-the-best-ai-users-do-differently-and-how-to-level-up-all-of-your-employees" target="_blank" rel="noopener noreferrer" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">Joint research by KPMG and the University of Texas at Austin</a>,
                  published in Harvard Business Review, studied 2,500 employees and analysed
                  1.4 million AI prompts over eight months. The adoption numbers were impressive.
                  The sophistication metrics were sobering.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-pearl border border-steel rounded-md p-8 text-center">
                    <p className="text-5xl font-serif text-coral-accessible mb-2">90%</p>
                    <p className="text-base text-slate/70">used AI regularly</p>
                  </div>
                  <div className="bg-pearl border border-steel rounded-md p-8 text-center">
                    <p className="text-5xl font-serif text-coral-accessible mb-2">5%</p>
                    <p className="text-base text-slate/70">used it with real sophistication</p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  Many firms track logins, licence utilisation, and monthly active users.
                  These metrics confirm that people have opened the tool. They say nothing
                  about whether the tool is creating value.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p>
                  The gap between 90% and 5% is where the productivity gains are hiding.
                  That gap does not close with another licence or another prompt template.
                  It closes when people change how they work.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 2: Four behaviours */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                Four behaviours that separate the 5% from the 90%
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg leading-relaxed text-slate mb-12">
                The researchers identified four behavioural patterns that distinguished
                sophisticated AI users from everyone else. None of them are about prompt
                engineering. All of them are about how people think about the tool.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mb-10">
                <h3 className="text-2xl font-serif leading-snug text-slate mb-4">
                  1. They go deeper
                </h3>
                <p className="text-lg leading-relaxed text-slate">
                  Sophisticated users do not accept the first answer. They push past it
                  with follow-up questions, refinements, and challenges. Their interactions
                  are longer and more iterative. Where most people treat AI as a search
                  engine, the top 5% treat it as a working partner they can push back on.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mb-10">
                <h3 className="text-2xl font-serif leading-snug text-slate mb-4">
                  2. They shape how the AI thinks
                </h3>
                <p className="text-lg leading-relaxed text-slate">
                  Rather than issuing instructions and hoping for the best, sophisticated
                  users{' '}
                  <Link href="/applied-ai/context-engineering" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">set context</Link>.
                  They define roles, provide examples of good output,
                  and explain the reasoning they expect. They are not writing longer prompts
                  for the sake of it. They are giving the tool enough context to produce
                  something useful on the first pass.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="mb-10">
                <h3 className="text-2xl font-serif leading-snug text-slate mb-4">
                  3. They hand over real work
                </h3>
                <p className="text-lg leading-relaxed text-slate">
                  Most employees use AI for simple tasks: summarising an email, cleaning up
                  a paragraph, generating a bullet list. The top performers delegate complex,
                  multi-step work with clear constraints and success criteria. They define
                  what done looks like before they start. The complexity is in the scope of
                  the task, not just the length of the prompt.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div>
                <h3 className="text-2xl font-serif leading-snug text-slate mb-4">
                  4. They use AI across their whole role
                </h3>
                <p className="text-lg leading-relaxed text-slate">
                  Most people find one use case and stay there. Sophisticated users apply AI
                  to ideation, analysis, technical guidance, knowledge synthesis, and
                  problem-solving. They have integrated it into how they think about their
                  work, not bolted it onto one repetitive task.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 3: Seniority finding */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                Experience outperforms enthusiasm
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  One finding challenges a common assumption. Senior employees outperformed
                  junior ones. The assumption is that younger staff adopt faster. They do.
                  But comfort and sophistication are different things.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="my-8 p-8 bg-coral/10 border-l-4 border-coral rounded-r-md">
                  <p className="text-2xl font-serif text-slate">
                    Senior people had enough domain knowledge to delegate meaningfully. They
                    knew what good output looked like because they had done the work themselves
                    for years.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  This has implications for how firms structure their AI capability programmes.
                  Starting with the most technically comfortable people is not the same as
                  starting with the people who will extract the most value. Your experienced
                  practitioners already know what good looks like. They know the edge cases,
                  the quality standards, and the shortcuts that cause problems later. Give
                  them the tools and they will use them with the judgment that only comes
                  from having done the work.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p>
                  Junior staff still matter. But training them to use AI without first
                  building their domain knowledge creates a different risk: confident use
                  of{' '}
                  <Link href="/applied-ai/why-ai-projects-fail" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">tools they cannot evaluate</Link>.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 4: What firms get wrong */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                Why most capability programmes miss the mark
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  The standard playbook runs like this: buy licences, send a company-wide
                  email, run a lunch-and-learn, track adoption metrics, declare success. The
                  tools are adopted. The working patterns do not change.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  Three things are typically missing.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="bg-white border-2 border-coral rounded-md p-6">
                    <h3 className="text-lg font-serif text-slate mb-3">Clear standards</h3>
                    <p className="text-base text-slate/70">
                      What does good AI-assisted work look like for each role? Without this,
                      people default to the lowest-effort use case.
                    </p>
                  </div>
                  <div className="bg-white border-2 border-coral rounded-md p-6">
                    <h3 className="text-lg font-serif text-slate mb-3">Hands-on training</h3>
                    <p className="text-base text-slate/70">
                      Scenario-based practice using real work, not abstract exercises.
                      People learn by solving problems they recognise.
                    </p>
                  </div>
                  <div className="bg-white border-2 border-coral rounded-md p-6">
                    <h3 className="text-lg font-serif text-slate mb-3">Peer networks</h3>
                    <p className="text-base text-slate/70">
                      Internal champions who share what works, debug what does not, and set
                      the pace for their teams. Behaviour spreads through people, not policies.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p>
                  The firms closing the sophistication gap are not buying more tools. They
                  are investing in how their people use the ones they already have.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 5: What to measure */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                Measuring sophistication, not just adoption
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  If adoption metrics tell you whether people have opened the tool,
                  sophistication metrics tell you whether they are getting value from it.
                  That requires different questions.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-start">
                    <span className="bg-coral rounded-full w-2 h-2 mt-2.5 mr-3 flex-shrink-0"></span>
                    <span><strong>How many workflows have been redesigned around AI?</strong> Not just which tasks use it, but which processes have fundamentally changed.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-coral rounded-full w-2 h-2 mt-2.5 mr-3 flex-shrink-0"></span>
                    <span><strong>What complexity of work is being delegated?</strong> Single-step tasks or multi-step workflows with defined success criteria?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-coral rounded-full w-2 h-2 mt-2.5 mr-3 flex-shrink-0"></span>
                    <span><strong>Are people iterating or accepting first outputs?</strong> Iteration signals that someone is working with the tool, not just querying it.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-coral rounded-full w-2 h-2 mt-2.5 mr-3 flex-shrink-0"></span>
                    <span><strong>Where has time been redirected?</strong> Freed capacity only creates value if it moves to higher-value work. Track where it goes.</span>
                  </li>
                </ul>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  A <Link href="/services/diagnose" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">diagnostic</Link> that
                  starts with these questions will surface where your team is already
                  creating value with AI and where the gap is widest. That is where
                  investment in capability will have the greatest return.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Sources */}
        <section className="py-12 px-6 lg:px-8 bg-pearl border-t border-steel">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-sm font-sans font-semibold text-slate/50 uppercase tracking-wide mb-4">Sources</h3>
            <ol className="space-y-2 text-sm text-slate/60 list-decimal list-inside">
              <li>
                <a href="https://hbr.org/2026/03/what-the-best-ai-users-do-differently-and-how-to-level-up-all-of-your-employees" target="_blank" rel="noopener noreferrer" className="hover:text-coral-accessible transition-colors">Hallman, Kowaleski, Puvvada &amp; Schmidt, &ldquo;What the Best AI Users Do Differently&rdquo; (HBR, March 2026)</a>
              </li>
            </ol>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 lg:px-8 bg-slate">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-white mb-6">
                Close the gap in your organisation
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-xl font-sans leading-relaxed text-white mb-8">
                Your team is already using AI. The question is whether they are using it
                well enough to create real value. We will diagnose where the sophistication
                gap sits in your operations and build a plan to close it. The free{' '}
                <Link href="/ai-planner" className="text-white underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">AI Deployment Planner</Link> is a quick first read on where you stand.
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
        <RelatedPages
          heading="More from Applied AI"
          pages={[
            {
              href: '/applied-ai/context-engineering',
              title: 'Context Engineering',
              description: 'The skill that separates sophisticated AI users from everyone else.',
            },
            {
              href: '/applied-ai/why-ai-projects-fail',
              title: 'Why AI Projects Fail',
              description: 'Five predictable reasons AI projects stall, and how to fix them.',
            },
            {
              href: '/applied-ai',
              title: 'All Articles',
              description: 'Browse all Applied AI perspectives.',
            },
          ]}
        />
      </main>
      <Footer />
    </>
  )
}
