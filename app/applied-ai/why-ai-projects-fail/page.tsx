import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

export const metadata = {
  title: 'How to Avoid AI Project Failure | Leomayn',
  description: 'Three fixable problems explain why most AI projects stall. Identify which one you face and start with the right workflow. Book a discovery call.',
  keywords: ['how to avoid AI project failure', 'AI implementation failure', 'AI pilot failure', 'AI workflow redesign', 'operations', 'professional services'],
  alternates: {
    canonical: '/applied-ai/why-ai-projects-fail',
  },
  openGraph: {
    title: 'How to Avoid AI Project Failure | Leomayn',
    description: 'Three fixable problems explain why most AI projects stall. Identify which one you face and start with the right workflow.',
    images: [{
      url: 'https://leomayn.com/logo/logo-social-1200x630.png',
      width: 1200,
      height: 630,
      alt: 'Leomayn - AI Consulting',
    }],
  },
}

export default function WhyAIProjectsFailPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Avoiding common pitfalls when deploying AI',
    'description': 'Three fixable problems explain why most AI projects stall. All of them sit in operations, not technology.',
    'image': 'https://leomayn.com/logo/logo-social-1200x630.png',
    'url': 'https://leomayn.com/applied-ai/why-ai-projects-fail',
    'datePublished': '2026-02-11',
    'dateModified': '2026-02-12',
    'wordCount': 980,
    'articleSection': 'Operations',
    'keywords': ['AI implementation', 'workflow redesign', 'AI failure', 'operations', 'professional services'],
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
      '@id': 'https://leomayn.com/applied-ai/why-ai-projects-fail',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://leomayn.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Applied AI', 'item': 'https://leomayn.com/applied-ai' },
      { '@type': 'ListItem', 'position': 3, 'name': 'How to Avoid AI Project Failure', 'item': 'https://leomayn.com/applied-ai/why-ai-projects-fail' },
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
              className="absolute -top-16 -right-20 w-80 h-80 rounded-full opacity-40 blur-3xl"
              style={{
                backgroundColor: 'var(--color-coral)',
                animation: 'blobFloat 21s ease-in-out infinite',
              }}
            />
            <div
              className="absolute bottom-0 -left-16 w-72 h-72 rounded-full opacity-30 blur-3xl"
              style={{
                backgroundColor: 'var(--color-rock)',
                animation: 'blobFloat 18s ease-in-out infinite reverse',
                animationDelay: '-6s',
              }}
            />
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <Link href="/applied-ai" className="text-sm font-sans text-coral-accessible hover:text-coral-dark transition-colors mb-4 inline-block">
              &larr; All applied AI
            </Link>
            <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate mb-6 animate-fade-in-up">
              Avoiding common pitfalls when deploying AI
            </h1>
            <div className="max-w-2xl flex items-stretch animate-fade-in-up stagger-1">
              <div className="bg-[#9ab8cb] rounded-full my-[5px]" style={{ width: '3px', minWidth: '3px' }}></div>
              <p className="text-xl leading-[1.6] text-coral-accessible pl-6">
                Most AI projects stall for fixable reasons. Three operational
                problems explain the gap between adoption and value.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: The gap */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                The gap between adoption and value
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  Most organisations have investigated generative AI. <a href="https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/" target="_blank" rel="noopener noreferrer" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">Fewer than one in 20</a> have
                  it meaningfully integrated into their workflows.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  That is an operations problem.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  <a href="https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/" target="_blank" rel="noopener noreferrer" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">MIT researchers</a> call
                  it the Learning Gap. When AI tools forget corrections
                  and keep producing first-draft output, teams spend more time fixing than
                  creating. The result is visible adoption with invisible value. People use
                  the tools. The metrics don&apos;t move.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p>
                  The number that matters is how many workflows have been redesigned around
                  AI. <a href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" target="_blank" rel="noopener noreferrer" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">McKinsey</a> found
                  that the top-performing 6% of organisations achieving
                  real margin impact from AI share one trait: they redesigned their workflows.
                  55% of high performers did this, compared with 20% across the broader market.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p>
                  The gap is not technology. It is how the work is organised around the technology.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 2: Three failure modes */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                Three failure modes
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg leading-relaxed text-slate mb-12">
                When AI projects stall, the cause is almost always one of three things.
                Recognising which one you are dealing with helps you determine the right response.
              </p>
            </ScrollReveal>

            {/* Failure mode 1 */}
            <ScrollReveal delay={0.15}>
              <div className="mb-12">
                <h3 className="text-2xl font-serif leading-snug text-slate mb-4">
                  1. You chose the wrong starting point
                </h3>
                <p className="text-lg leading-relaxed text-slate">
                  The best starting points have clear inputs, repeatable steps, and measurable
                  outputs. If you automated a process that relies on tacit knowledge,
                  undocumented exceptions, or cross-team negotiations, the tool was never
                  going to work. The workflow was not the right place to start with applying AI.
                </p>
              </div>
            </ScrollReveal>

            {/* Failure mode 2 */}
            <ScrollReveal delay={0.2}>
              <div className="mb-12">
                <h3 className="text-2xl font-serif leading-snug text-slate mb-4">
                  2. You automated a broken workflow
                </h3>
                <div className="space-y-6 text-lg leading-relaxed text-slate">
                  <p>
                    Your process documentation says:
                    Brief, Work, Review, Deliver. The actual process is: Brief, Clarification,
                    Re-brief, Partial work, Scope creep, Fire drills, Rework, Stakeholder loops,
                    Version chaos, Delivery.
                  </p>
                  <p className="font-semibold">
                    If you automate the workaround, you scale dysfunction.
                  </p>
                  <p>
                    Your real process lives in someone&apos;s browser history, in Slack DMs,
                    in the spreadsheet called FINAL_v5. When the documented process and the
                    actual process diverge, organisations run on goodwill. Handoffs break.
                    Metrics lie. Rework spikes.
                  </p>
                  <p>
                    Before any automation, watch how work actually gets done. Count the
                    browser tabs. Document the workarounds. That is the process you need to fix.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Failure mode 3 */}
            <ScrollReveal delay={0.25}>
              <div>
                <h3 className="text-2xl font-serif leading-snug text-slate mb-4">
                  3. You didn&apos;t equip the team
                </h3>
                <div className="space-y-6 text-lg leading-relaxed text-slate">
                  <p>
                    AI tools arrive without operating instructions. Teams receive access but
                    not context: which tasks to use them for, what good output looks like,
                    how to review AI-generated work, or when to override it.
                  </p>
                  <p>
                    The result is a tool that sits unused after week two. <a href="https://www.bcg.com/publications/2025/are-you-generating-value-from-ai-the-widening-gap" target="_blank" rel="noopener noreferrer" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">BCG research</a> suggests
                    that while most organisations have adopted AI tools, fewer
                    than one in 20 are creating real value from them. Without context
                    for how to use the tools well, adoption stalls.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 3: Between paralysis and chaos */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                Between paralysis and chaos
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  Beyond individual workflows, organisations face two traps.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-pearl border border-steel rounded-md p-6">
                    <h3 className="text-lg font-serif text-slate mb-2">Paralysis</h3>
                    <p className="text-base text-slate/70">Waiting for the perfect strategy, the perfect tool, the perfect moment. Nothing ships. Months pass.</p>
                  </div>
                  <div className="bg-pearl border border-steel rounded-md p-6">
                    <h3 className="text-lg font-serif text-slate mb-2">Chaos</h3>
                    <p className="text-base text-slate/70">Starting ten projects simultaneously with no coordination or measurement. Everything ships. Nothing lands.</p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  The answer sits between them. Progress with intention.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p>
                  Start where three conditions intersect:
                </p>
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="bg-white border-2 border-coral rounded-md p-6 text-center">
                    <p className="text-base font-semibold text-slate">High impact on a measurable outcome</p>
                  </div>
                  <div className="bg-white border-2 border-coral rounded-md p-6 text-center">
                    <p className="text-base font-semibold text-slate">Low complexity to implement</p>
                  </div>
                  <div className="bg-white border-2 border-coral rounded-md p-6 text-center">
                    <p className="text-base font-semibold text-slate">High learning value for the team</p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p>One focused project beats ten half-started ones.</p>
              </ScrollReveal>
              <ScrollReveal delay={0.35}>
                <div className="p-8 bg-coral/10 rounded-md my-8">
                  <h3 className="text-xl font-serif text-slate mb-4">The right first workflows share common traits</h3>
                  <p className="text-base text-slate mb-4">Clear inputs. Repeatable steps. Measurable output. Examples:</p>
                  <ul className="space-y-2 text-base text-slate">
                    <li className="flex items-start">
                      <span className="bg-coral rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                      <span>Weekly reporting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-coral rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                      <span>Pipeline updates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-coral rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                      <span>Meeting preparation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-coral rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                      <span>Proposal drafting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-coral rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                      <span>Client onboarding documentation</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <p>
                  Pick one workflow. Redesign it end-to-end. Measure the result. Learn from it.
                  Then pick the next one.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 4: Fix work first */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                What &ldquo;fix work first&rdquo; actually means
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  Fixing work means a focused <Link href="/services/diagnose" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">diagnostic</Link> on how value actually flows through
                  your organisation.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  Start with one critical value flow. Pitch to retainer. Brief to delivered
                  work. Intake to matter close. Map it as it actually happens.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>Look for five things:</p>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-start">
                    <span className="bg-coral rounded-full w-2 h-2 mt-2.5 mr-3 flex-shrink-0"></span>
                    <span><strong>Time spent on work about work.</strong> Coordination, chasing approvals, reformatting, copying data between systems. Capacity that creates no client value.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-coral rounded-full w-2 h-2 mt-2.5 mr-3 flex-shrink-0"></span>
                    <span><strong>Rework and revision rates.</strong> How many passes does a deliverable take before it is right? Where do errors enter?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-coral rounded-full w-2 h-2 mt-2.5 mr-3 flex-shrink-0"></span>
                    <span><strong>Handoff friction.</strong> Where does work stall between people or teams? What information gets lost in the transition?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-coral rounded-full w-2 h-2 mt-2.5 mr-3 flex-shrink-0"></span>
                    <span><strong>Scope creep patterns.</strong> Where does agreed work expand without corresponding adjustment to timelines or pricing?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-coral rounded-full w-2 h-2 mt-2.5 mr-3 flex-shrink-0"></span>
                    <span><strong>Decision bottlenecks.</strong> Where does one person&apos;s availability hold up an entire workflow?</span>
                  </li>
                </ul>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p>
                  Quantify these. Put hours and pounds against them. That creates the
                  business case for change and tells you precisely where AI and automation
                  will create the most value.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 5: Operating architecture */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                The operating architecture beneath your tools
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  AI delivers durable value only when your pricing model, your delivery
                  workflows, and your technology work together. Most firms invest in the
                  technology and hope it redesigns the rest. It does not.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  <Link href="/applied-ai/operating-architecture" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">
                    Read more about the operating architecture your AI tools need &rarr;
                  </Link>
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
                Start with one workflow
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-xl font-sans leading-relaxed text-white mb-8">
                You don&apos;t need a company-wide AI strategy to make progress. You need
                one workflow, diagnosed honestly, redesigned thoughtfully, and measured
                rigorously. We will identify which one to start with.
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

        {/* Sources */}
        <section className="py-12 px-6 lg:px-8 bg-chalk border-t border-steel">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-sm font-sans font-semibold text-slate/50 uppercase tracking-wide mb-4">Sources</h3>
            <ol className="space-y-2 text-sm text-slate/60 list-decimal list-inside">
              <li>
                <a href="https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/" target="_blank" rel="noopener noreferrer" className="hover:text-coral-accessible transition-colors">MIT NANDA, &ldquo;The GenAI Divide: State of AI in Business 2025&rdquo;</a>
              </li>
              <li>
                <a href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" target="_blank" rel="noopener noreferrer" className="hover:text-coral-accessible transition-colors">McKinsey, &ldquo;The State of AI 2025&rdquo;</a>
              </li>
              <li>
                <a href="https://www.bcg.com/publications/2025/are-you-generating-value-from-ai-the-widening-gap" target="_blank" rel="noopener noreferrer" className="hover:text-coral-accessible transition-colors">BCG, &ldquo;The Widening AI Value Gap: Build for the Future&rdquo; (2025)</a>
              </li>
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
