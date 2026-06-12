import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'
import RelatedPages from '@/components/RelatedPages'

export const metadata = {
  title: 'Why AI Projects Fail and How to Make Yours Succeed | Leomayn',
  description: 'Five predictable reasons AI projects stall. All operational, not technical. Identify which one you face and fix it before you build anything.',
  keywords: ['why AI projects fail', 'AI project failure', 'AI implementation failure', 'AI pilot failure', 'AI workflow redesign', 'operations'],
  alternates: {
    canonical: '/applied-ai/why-ai-projects-fail',
  },
  openGraph: {
    title: 'Why AI Projects Fail and How to Make Yours Succeed | Leomayn',
    description: 'Five predictable reasons AI projects stall. All operational, not technical. Identify which one you face and fix it before you build anything.',
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
    'headline': 'Why AI projects fail and how to make yours succeed',
    'description': 'Five predictable reasons AI projects stall. All operational, not technical.',
    'image': 'https://leomayn.com/logo/logo-social-1200x630.png',
    'url': 'https://leomayn.com/applied-ai/why-ai-projects-fail',
    'datePublished': '2026-02-11',
    'dateModified': '2026-06-11',
    'wordCount': 2200,
    'articleSection': 'Operations',
    'keywords': ['why AI projects fail', 'AI implementation', 'workflow redesign', 'AI failure', 'operations'],
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What percentage of AI projects fail?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'MIT research found that fewer than one in 20 organisations have AI meaningfully integrated into their workflows. McKinsey found that only 6% of organisations achieve real margin impact from AI. Many AI projects stall not because of the technology, but because of operational gaps in how the work is organised around the technology.',
        },
      },
      {
        '@type': 'Question',
        'name': 'Why do AI projects fail?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'AI projects fail for five predictable operational reasons: automating broken processes instead of fixing them first, choosing tools before defining problems, deploying without evaluation criteria, allowing shadow AI to spread without governance, and measuring hours saved instead of business outcomes. None of these are technology problems.',
        },
      },
      {
        '@type': 'Question',
        'name': 'How do you prevent AI project failure?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Start with the work, not the tool. Map your critical workflows as they actually happen (not as documented). Diagnose where time is lost, where rework originates, and where handoffs break. Fix the process, define evaluation criteria for quality, then select and deploy AI tools that fit the redesigned workflow.',
        },
      },
      {
        '@type': 'Question',
        'name': 'What is the difference between a successful AI pilot and a successful AI rollout?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Pilots test whether the technology works. Rollouts test whether the organisation can absorb it. These are different challenges. The first is technical; the second is operational. Many firms prepare for the first and are caught out by the second. Successful rollouts require process redesign, evaluation criteria, governance, and change capacity.',
        },
      },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://leomayn.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Applied AI', 'item': 'https://leomayn.com/applied-ai' },
      { '@type': 'ListItem', 'position': 3, 'name': 'Why AI Projects Fail', 'item': 'https://leomayn.com/applied-ai/why-ai-projects-fail' },
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
              Why AI projects fail and how to make yours succeed
            </h1>
            <div className="max-w-2xl flex items-stretch animate-fade-in-up stagger-1">
              <div className="bg-[#9ab8cb] rounded-full my-[5px]" style={{ width: '3px', minWidth: '3px' }}></div>
              <p className="text-xl leading-[1.6] text-coral-accessible pl-6">
                The technology is not the problem. Five predictable, operational
                reasons explain why many AI projects stall. All of them are fixable.
              </p>
            </div>
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
                  <span><a href="https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/" target="_blank" rel="noopener noreferrer" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">Fewer than one in 20</a> organisations have AI meaningfully integrated into their workflows. The gap is operational, not technical.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-coral rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Five failure patterns account for many stalled AI projects: broken processes, tool-first thinking, no evaluation criteria, ungoverned shadow AI, and wrong metrics.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-coral rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                  <span>The fix is the same in every case: understand the work before you try to change it.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Opening: The pilot worked */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                The pilot worked. The rollout did not.
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  This is the most common AI story. A team runs a
                  pilot. The technology performs. Leadership signs off on scaling. Then nothing
                  happens, or worse, what scales does not deliver the value the pilot promised.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  The reason is straightforward: pilots test whether the technology works.
                  Rollouts test whether the organisation can absorb it. These are different
                  challenges. <a href="https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/" target="_blank" rel="noopener noreferrer" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">MIT researchers</a> call
                  it the Learning Gap: when AI tools forget corrections and keep producing
                  first-draft output, teams spend more time fixing than creating. <a href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" target="_blank" rel="noopener noreferrer" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">McKinsey</a> found
                  that the top-performing 6% achieving real margin impact from AI share one
                  trait: they redesigned their workflows first.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  We see five failure patterns that account for many stalled
                  AI deployments. None of them are about the models.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Five Failure Patterns */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-12">
                Five failure patterns
              </h2>
            </ScrollReveal>

            {/* Pattern 1 */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white border border-steel rounded-lg p-8 mb-8">
                <span className="text-xs font-mono font-medium uppercase tracking-wider text-coral-accessible">Pattern 01</span>
                <h3 className="text-2xl font-serif leading-snug text-slate mt-2 mb-4">Automating a broken process</h3>
                <div className="space-y-4 text-base leading-relaxed text-slate/80">
                  <p>
                    A firm identifies a slow, painful workflow (client onboarding, proposal
                    generation, compliance reporting) and reaches for AI to speed it up.
                    But the workflow was never designed. It grew organically over years,
                    through workarounds and tribal knowledge.
                  </p>
                  <p>
                    AI applied to a broken process does not fix it. It accelerates it.
                    You produce the same errors faster, at greater scale, with more confidence.
                  </p>
                  <p className="font-semibold text-slate text-sm">What this looks like:</p>
                  <p>
                    An accounting firm automates tax return preparation. Turnaround drops
                    from four days to one. But the review process has not changed, so
                    senior staff still take three days to review. Net gain: one day, not three.
                    The bottleneck was never preparation.
                  </p>
                </div>
                <div className="bg-pearl rounded-lg p-5 mt-5">
                  <span className="text-xs font-mono font-medium uppercase tracking-wider text-rock-dark">What to do instead</span>
                  <p className="text-base leading-relaxed text-slate mt-2">
                    <Link href="/applied-ai/operating-architecture" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">Map the end-to-end workflow</Link> before selecting any tool. Identify where
                    time is actually lost, where decisions happen, and where rework
                    originates. Fix the process, then automate the fixed version. Our{' '}
                    <Link href="/services/diagnose" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">Diagnose phase</Link> does
                    exactly this.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Pattern 2 */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white border border-steel rounded-lg p-8 mb-8">
                <span className="text-xs font-mono font-medium uppercase tracking-wider text-coral-accessible">Pattern 02</span>
                <h3 className="text-2xl font-serif leading-snug text-slate mt-2 mb-4">Choosing tools before defining problems</h3>
                <div className="space-y-4 text-base leading-relaxed text-slate/80">
                  <p>
                    A partner reads about an AI tool at a conference. The firm buys it.
                    Then a team is asked to find uses for it. This is backwards. Tool
                    selection should be the last step, not the first.
                  </p>
                  <p>
                    Without a clear diagnosis of which problems matter most, firms
                    accumulate tools without building capability.
                  </p>
                  <p className="font-semibold text-slate text-sm">What this looks like:</p>
                  <p>
                    A company adopts a contract review AI, a research assistant, and a
                    document automation platform. Each works in isolation. None share data.
                    Staff use whichever one they remember, inconsistently. Twelve months
                    later, usage is declining and nobody can quantify the return.
                  </p>
                </div>
                <div className="bg-pearl rounded-lg p-5 mt-5">
                  <span className="text-xs font-mono font-medium uppercase tracking-wider text-rock-dark">What to do instead</span>
                  <p className="text-base leading-relaxed text-slate mt-2">
                    Start with the problem, not the product. Diagnose which workflows
                    create the most friction, cost, or risk. Score opportunities by impact
                    and feasibility. Then select tools that fit the architecture you need.
                    The free{' '}
                    <Link href="/ai-planner" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">AI Deployment Planner</Link> helps
                    you identify which problems to solve first.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Pattern 3 */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white border border-steel rounded-lg p-8 mb-8">
                <span className="text-xs font-mono font-medium uppercase tracking-wider text-coral-accessible">Pattern 03</span>
                <h3 className="text-2xl font-serif leading-snug text-slate mt-2 mb-4">No evaluation, no trust</h3>
                <div className="space-y-4 text-base leading-relaxed text-slate/80">
                  <p>
                    Teams deploy AI to draft client communications, summarise meetings, or
                    analyse data. But nobody has defined what &ldquo;good enough&rdquo;
                    looks like. Without evaluation criteria, every output requires manual
                    review, defeating the purpose.
                  </p>
                  <p>
                    <Link href="/applied-ai/context-engineering" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">Prompt quality becomes folklore</Link>: &ldquo;Sarah gets good results because
                    she knows how to ask.&rdquo; That is not a capability. That is a single
                    point of failure.
                  </p>
                  <p className="font-semibold text-slate text-sm">What this looks like:</p>
                  <p>
                    A team uses AI to draft client proposals. Some are excellent. Some are
                    embarrassing. Nobody has a rubric. Senior staff review everything line
                    by line, adding time rather than saving it. The AI is technically
                    functional but operationally untrusted.
                  </p>
                </div>
                <div className="bg-pearl rounded-lg p-5 mt-5">
                  <span className="text-xs font-mono font-medium uppercase tracking-wider text-rock-dark">What to do instead</span>
                  <p className="text-base leading-relaxed text-slate mt-2">
                    Define evaluation criteria before deployment. What does a passing
                    output look like? What fails? Build rubrics that anyone on the team
                    can apply consistently. Trust is not a feeling. It is an architecture.
                    This is a core part of{' '}
                    <Link href="/ai-readiness" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">AI readiness</Link>.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Pattern 4 */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white border border-steel rounded-lg p-8 mb-8">
                <span className="text-xs font-mono font-medium uppercase tracking-wider text-coral-accessible">Pattern 04</span>
                <h3 className="text-2xl font-serif leading-snug text-slate mt-2 mb-4">Shadow AI without governance</h3>
                <div className="space-y-4 text-base leading-relaxed text-slate/80">
                  <p>
                    When official AI rollouts are slow, people find their own tools. This
                    is not a technology risk. It is a management signal. Employees are
                    telling you that the approved path is too slow, too restrictive, or
                    nonexistent.
                  </p>
                  <p>
                    <a href="https://www.gartner.com/en/newsroom/press-releases/2025-08-26-gartner-predicts-40-percent-of-enterprise-apps-will-feature-task-specific-ai-agents-by-2026-up-from-less-than-5-percent-in-2025" target="_blank" rel="noopener noreferrer" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">Gartner predicts</a> 40%
                    of enterprise applications will embed AI agents by the end of 2026, up
                    from less than 5% in 2025. Many will be adopted without a governance
                    framework. The result: overlapping capabilities, no audit trail, and no
                    single owner accountable for what the AI is doing.
                  </p>
                  <p className="font-semibold text-slate text-sm">What this looks like:</p>
                  <p>
                    Different teams in the same firm use different AI tools for the same
                    task. Client data flows into three separate platforms. Nobody has an
                    inventory. When a compliance question arises, it takes two weeks to work
                    out what data went where.
                  </p>
                </div>
                <div className="bg-pearl rounded-lg p-5 mt-5">
                  <span className="text-xs font-mono font-medium uppercase tracking-wider text-rock-dark">What to do instead</span>
                  <p className="text-base leading-relaxed text-slate mt-2">
                    Govern the decision, not the tool. Approve faster than people can
                    self-serve and you eliminate the incentive for shadow adoption. Maintain
                    an inventory of what is deployed, who owns it, and what data it touches.
                    Leadership owns this. It cannot be delegated to IT alone.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Pattern 5 */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white border border-steel rounded-lg p-8">
                <span className="text-xs font-mono font-medium uppercase tracking-wider text-coral-accessible">Pattern 05</span>
                <h3 className="text-2xl font-serif leading-snug text-slate mt-2 mb-4">Measuring the wrong thing</h3>
                <div className="space-y-4 text-base leading-relaxed text-slate/80">
                  <p>
                    The default AI business case is &ldquo;hours saved.&rdquo; It sounds
                    concrete but it is misleading. If your team saves two hours per week but
                    cannot bill more, close faster, or take on additional clients, the saving
                    is invisible to the P&amp;L.
                  </p>
                  <p>
                    Hours saved is an input metric. What matters is the output: capacity
                    recovered, rework eliminated, revenue protected, risk reduced. The firms
                    that sustain AI investment are the ones that measure value in terms their
                    board already cares about.
                  </p>
                  <p className="font-semibold text-slate text-sm">What this looks like:</p>
                  <p>
                    A firm reports that AI saves 500 hours per quarter. Leadership asks
                    what happened to those hours. Nobody can answer. The budget comes under
                    scrutiny at the next review cycle.
                  </p>
                </div>
                <div className="bg-pearl rounded-lg p-5 mt-5">
                  <span className="text-xs font-mono font-medium uppercase tracking-wider text-rock-dark">What to do instead</span>
                  <p className="text-base leading-relaxed text-slate mt-2">
                    Measure the cost of the problem, not the speed of the solution. What
                    does rework cost you? How much does it cost when a senior associate
                    leaves and their knowledge goes with them? Frame AI value in the
                    language of the problem it solves.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* The common thread + comparison table */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                The common thread
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  All five patterns share the same root cause: the work was never properly
                  understood before the technology was applied. Process was assumed, not
                  mapped. Quality was hoped for, not defined. Governance was deferred, not
                  designed.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="overflow-x-auto my-8">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b-2 border-slate/20">
                        <th className="py-3 pr-6 text-xs font-mono font-medium uppercase tracking-wider text-steel">What fails</th>
                        <th className="py-3 text-xs font-mono font-medium uppercase tracking-wider text-steel">What works</th>
                      </tr>
                    </thead>
                    <tbody className="text-base leading-relaxed">
                      <tr className="border-b border-steel/20">
                        <td className="py-3 pr-6 text-coral-accessible">Buy tools, then find problems</td>
                        <td className="py-3 text-slate">Diagnose problems, then select tools</td>
                      </tr>
                      <tr className="border-b border-steel/20">
                        <td className="py-3 pr-6 text-coral-accessible">Automate existing workflows as-is</td>
                        <td className="py-3 text-slate">Redesign workflows, then automate</td>
                      </tr>
                      <tr className="border-b border-steel/20">
                        <td className="py-3 pr-6 text-coral-accessible">Trust AI output by default</td>
                        <td className="py-3 text-slate">Define evaluation criteria upfront</td>
                      </tr>
                      <tr className="border-b border-steel/20">
                        <td className="py-3 pr-6 text-coral-accessible">Restrict tools, hope for compliance</td>
                        <td className="py-3 text-slate">Govern decisions, enable adoption</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-6 text-coral-accessible">Measure hours saved</td>
                        <td className="py-3 text-slate">Measure cost of the problem solved</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  This is why we start every engagement with a{' '}
                  <Link href="/services/diagnose" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">diagnosis</Link>.
                  Not because the technology is complicated, but because the work underneath
                  it usually is, and nobody has taken the time to look at it clearly.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p>
                  If you want to start smaller, the{' '}
                  <Link href="/ai-planner" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">AI Deployment Planner</Link> is
                  a free, five-minute self-assessment that surfaces the same patterns.
                  It will not solve the problem, but it will show you where to look.
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
                  <h3 className="text-xl font-serif text-slate mb-3">What percentage of AI projects fail?</h3>
                  <p className="text-base leading-relaxed text-slate/80">
                    MIT research found that fewer than one in 20 organisations have AI
                    meaningfully integrated into their workflows. McKinsey found that only
                    6% of organisations achieve real margin impact from AI. Many
                    stall because of operational gaps, not technical ones.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div>
                  <h3 className="text-xl font-serif text-slate mb-3">Why do AI projects fail?</h3>
                  <p className="text-base leading-relaxed text-slate/80">
                    Five predictable operational reasons: automating broken processes
                    instead of fixing them first, choosing tools before defining problems,
                    deploying without evaluation criteria, allowing shadow AI to spread
                    without governance, and measuring hours saved instead of business
                    outcomes.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div>
                  <h3 className="text-xl font-serif text-slate mb-3">How do you prevent AI project failure?</h3>
                  <p className="text-base leading-relaxed text-slate/80">
                    Start with the work, not the tool. Map your critical workflows as they
                    actually happen. Diagnose where time is lost, where rework originates,
                    and where handoffs break. Fix the process, define evaluation criteria
                    for quality, then select and deploy AI tools that fit the redesigned
                    workflow.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <div>
                  <h3 className="text-xl font-serif text-slate mb-3">What is the difference between a successful AI pilot and a successful rollout?</h3>
                  <p className="text-base leading-relaxed text-slate/80">
                    Pilots test whether the technology works. Rollouts test whether the
                    organisation can absorb it. These are different challenges. Successful
                    rollouts require process redesign, evaluation criteria, governance, and
                    change capacity. Many firms prepare for the first and are caught out by
                    the second.
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
                Fix the work first
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-xl font-sans leading-relaxed text-white mb-8">
                Start with a diagnosis. Understand the work. Then decide where AI fits.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services/diagnose"
                  className="inline-flex items-center justify-center font-sans font-semibold text-base bg-coral text-slate px-8 py-4 rounded-md hover:bg-coral-dark transition-all min-w-[220px]"
                >
                  Start with Diagnose
                </Link>
                <Link
                  href="/ai-planner"
                  className="inline-flex items-center justify-center font-sans font-semibold text-base bg-transparent text-white border border-white/25 px-8 py-4 rounded-md hover:border-white/50 transition-all min-w-[220px]"
                >
                  Try the AI Planner (free)
                </Link>
              </div>
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
              <li>
                <a href="https://www.gartner.com/en/newsroom/press-releases/2025-08-26-gartner-predicts-40-percent-of-enterprise-apps-will-feature-task-specific-ai-agents-by-2026-up-from-less-than-5-percent-in-2025" target="_blank" rel="noopener noreferrer" className="hover:text-coral-accessible transition-colors">Gartner, &ldquo;40% of Enterprise Apps Will Feature AI Agents by 2026&rdquo;</a>
              </li>
            </ol>
          </div>
        </section>
        <RelatedPages
          heading="More from Applied AI"
          pages={[
            {
              href: '/ai-readiness',
              title: 'AI Readiness',
              description: 'What to fix before you build anything with AI.',
            },
            {
              href: '/applied-ai/operating-architecture',
              title: 'Operating Architecture',
              description: 'The layer beneath your AI tools that makes them work.',
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
