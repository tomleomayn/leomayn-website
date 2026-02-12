import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

export const metadata = {
  title: 'AI Agents for Business: Where to Draw the Line | Leomayn',
  description: '79% of companies use agentic AI but fewer than one in 20 capture value. Learn where AI agents work and how to draw the line. Book a discovery call.',
  keywords: ['AI agents for business', 'agentic AI', 'AI agent implementation', 'AI agents examples', 'AI governance', 'professional services'],
  alternates: {
    canonical: '/applied-ai/ai-agents-for-business',
  },
  openGraph: {
    title: 'AI Agents for Business: Where to Draw the Line | Leomayn',
    description: '79% of companies use agentic AI but fewer than one in 20 capture value. Learn where AI agents work and how to draw the line.',
    images: [{
      url: 'https://leomayn.com/logo/logo-social-1200x630.png',
      width: 1200,
      height: 630,
      alt: 'Leomayn - AI Consulting',
    }],
  },
}

export default function AIAgentsForBusinessPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'AI agents are coming to your operations. The question is where to draw the line.',
    'description': '79% of companies use agentic AI but fewer than one in 20 capture value. The difference is governance, not technology.',
    'image': 'https://leomayn.com/logo/logo-social-1200x630.png',
    'url': 'https://leomayn.com/applied-ai/ai-agents-for-business',
    'datePublished': '2026-02-12',
    'dateModified': '2026-02-12',
    'wordCount': 950,
    'articleSection': 'AI Agents',
    'keywords': ['AI agents', 'agentic AI', 'AI governance', 'professional services', 'operating architecture'],
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
      '@id': 'https://leomayn.com/applied-ai/ai-agents-for-business',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://leomayn.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Applied AI', 'item': 'https://leomayn.com/applied-ai' },
      { '@type': 'ListItem', 'position': 3, 'name': 'AI Agents for Business', 'item': 'https://leomayn.com/applied-ai/ai-agents-for-business' },
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
              className="absolute -top-12 -left-16 w-80 h-80 rounded-full opacity-40 blur-3xl"
              style={{
                backgroundColor: 'var(--color-coral)',
                animation: 'blobFloat 22s ease-in-out infinite',
              }}
            />
            <div
              className="absolute bottom-4 -right-20 w-72 h-72 rounded-full opacity-30 blur-3xl"
              style={{
                backgroundColor: 'var(--color-rock)',
                animation: 'blobFloat 17s ease-in-out infinite reverse',
                animationDelay: '-5s',
              }}
            />
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <Link href="/applied-ai" className="text-sm font-sans text-coral-accessible hover:text-coral-dark transition-colors mb-4 inline-block">
              &larr; All applied AI
            </Link>
            <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate mb-6 animate-fade-in-up">
              AI agents are coming to your operations. The question is where to draw the line.
            </h1>
            <div className="max-w-2xl flex items-stretch animate-fade-in-up stagger-1">
              <div className="bg-[#9ab8cb] rounded-full my-[5px]" style={{ width: '3px', minWidth: '3px' }}></div>
              <p className="text-xl leading-[1.6] text-coral-accessible pl-6">
                79% of companies now use agentic AI. Fewer than one in 20 capture real value. The difference is governance.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: The agent opportunity */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                The agent opportunity is real
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  Agentic AI represents a genuine shift. AI can now act on decisions within
                  defined boundaries, rather than just providing information.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  A chatbot answers questions. An agent executes workflows. It reads inputs,
                  makes decisions, and produces outputs without waiting for a human at each step.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  <a href="https://www.bcg.com/publications/2025/are-you-generating-value-from-ai-the-widening-gap" target="_blank" rel="noopener noreferrer" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">BCG research</a> estimates
                  that AI agents account for 17% of total AI value today, rising to 29% by
                  2028. <a href="https://time.com/7342494/ai-changed-work-forever/" target="_blank" rel="noopener noreferrer" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">PwC reports</a> that
                  79% of companies are already using agentic AI. The investment is happening.
                  The question is whether the value follows.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p>
                  For professional services firms, agents offer something specific: operational
                  leverage without proportional headcount growth. An agent that handles meeting
                  preparation, client research, or proposal drafting removes the work about work
                  that keeps your best people from client-facing activity.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 2: Agents vs automation */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                When agents work and when simpler automation is enough
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg leading-relaxed text-slate mb-8">
                Not every workflow needs an agent. Many need a well-designed automation.
                The distinction matters because agents introduce complexity. An automation
                follows a fixed path: if this, then that. An agent makes decisions within
                boundaries. That flexibility creates value when the workflow requires judgment.
                It creates risk when the workflow does not.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <ScrollReveal delay={0.15}>
                <div className="bg-chalk border border-steel rounded-md p-6 h-full">
                  <h3 className="text-lg font-serif text-slate mb-4">Agents work well when</h3>
                  <ul className="space-y-3 text-base text-slate/80">
                    <li className="flex items-start">
                      <span className="bg-coral rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                      <span>The workflow involves varied inputs requiring interpretation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-coral rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                      <span>Decisions need to be made within defined boundaries</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-coral rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                      <span>The task benefits from context carried across steps</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-coral rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                      <span>Quality improves with feedback over time</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="bg-chalk border border-steel rounded-md p-6 h-full">
                  <h3 className="text-lg font-serif text-slate mb-4">Simpler automation is enough when</h3>
                  <ul className="space-y-3 text-base text-slate/80">
                    <li className="flex items-start">
                      <span className="bg-steel rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                      <span>The workflow follows a predictable, repeatable path</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-steel rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                      <span>Inputs and outputs are structured and consistent</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-steel rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                      <span>No interpretation is required</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-steel rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                      <span>Speed and reliability matter more than flexibility</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.25}>
              <p className="text-lg leading-relaxed text-slate">
                Start with the simpler option. Graduate to agents when you have evidence that
                the workflow needs adaptive behaviour, not when a vendor tells you agents are the future.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 3: Three questions */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                Three questions before you deploy
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg leading-relaxed text-slate mb-12">
                Before any agent goes live in your operations, answer three questions.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mb-12">
                <h3 className="text-2xl font-serif leading-snug text-slate mb-4">
                  1. Where are the handoffs?
                </h3>
                <p className="text-lg leading-relaxed text-slate">
                  Every point where an agent passes work to another agent or to a human is
                  a point where context gets lost. Map these deliberately. Design explicit
                  protocols for what information transfers and what gets verified at each boundary.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mb-12">
                <h3 className="text-2xl font-serif leading-snug text-slate mb-4">
                  2. Where are the human checkpoints?
                </h3>
                <div className="space-y-6 text-lg leading-relaxed text-slate">
                  <p>
                    Not everywhere. At decision boundaries where the cost of error is high.
                    Client-facing communications. Pricing decisions. Compliance judgments.
                  </p>
                  <p>
                    Let the agent prepare the dossier. Keep the decision human.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="mb-12">
                <h3 className="text-2xl font-serif leading-snug text-slate mb-4">
                  3. What happens when it is wrong?
                </h3>
                <div className="space-y-6 text-lg leading-relaxed text-slate">
                  <p>
                    Not if. When. Every agent will produce bad output at some point. The
                    question is whether your system catches it before it reaches a client.
                    Design for recovery, not just success.
                  </p>
                  <p>
                    The firms getting this right treat agent orchestration as an access control
                    problem. The agent gets permissions proportional to the reversibility of
                    its actions. Low-impact, reversible tasks run autonomously. Irreversible
                    decisions stay human.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 4: Human authority line */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                The human authority line
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  The strategic question for operations leaders is not &ldquo;what can we
                  automate?&rdquo; It is &ldquo;where must human judgment remain
                  non-delegable?&rdquo;
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  This reframe changes how you deploy AI. Instead of starting with capability
                  and working backwards, you start with governance and work forwards.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="font-semibold mb-4">Six principles for drawing the line:</p>
                <ol className="space-y-4 list-none">
                  <li className="flex items-start">
                    <span className="text-coral font-serif font-semibold mr-3 mt-0.5 flex-shrink-0">1.</span>
                    <span><strong>Codify the human element.</strong> Identify capabilities your organisation cannot remove. Professional judgment, client relationships, ethical decisions.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-coral font-serif font-semibold mr-3 mt-0.5 flex-shrink-0">2.</span>
                    <span><strong>Audit for identity risk.</strong> Test whether efficiency narratives erode the professional judgment that makes your firm valuable.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-coral font-serif font-semibold mr-3 mt-0.5 flex-shrink-0">3.</span>
                    <span><strong>Set domain-specific boundaries.</strong> Different practice areas, client types, and risk profiles need different lines. A one-size-fits-all automation policy fails.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-coral font-serif font-semibold mr-3 mt-0.5 flex-shrink-0">4.</span>
                    <span><strong>Elevate bridge builders.</strong> The people who translate between AI capability and professional practice are your most valuable asset during adoption.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-coral font-serif font-semibold mr-3 mt-0.5 flex-shrink-0">5.</span>
                    <span><strong>Make protection visible.</strong> Transparent boundaries around data, model training, and decision authority build client trust.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-coral font-serif font-semibold mr-3 mt-0.5 flex-shrink-0">6.</span>
                    <span><strong>Measure empowerment, not adoption.</strong> Track whether people are making better decisions, not whether they are using the tools.</span>
                  </li>
                </ol>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p className="font-semibold">
                  Every automation decision is a governance decision. Governance is about trust.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 5: Architecture beneath agents */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                The architecture beneath your agents
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  <a href="https://www.bcg.com/publications/2026/scaling-ai-requires-new-processes-not-just-new-tools" target="_blank" rel="noopener noreferrer" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">BCG research</a> on
                  AI scaling reveals a pattern. Organisations that capture real value follow
                  the 10-20-70 principle: 10% of effort on algorithms, 20% on data and
                  technology, 70% on people, processes, and cultural change.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  Most organisations invert this. They spend on technology and wonder why
                  adoption stalls.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  The firms seeing real impact direct more than half of their AI investment
                  to agents deployed end-to-end across workstreams. They
                  are twice as likely as followers to deploy agents across full processes
                  rather than in isolated use cases.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p>
                  What separates these firms is the <Link href="/applied-ai/operating-architecture" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">operating architecture</Link> beneath
                  the technology. Agents need redesigned workflows, clear data governance,
                  defined roles, and explicit incentive structures.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p>
                  You already have the hard part. Domain expertise. Client relationships.
                  Controlled environments. You are not building an open network. You are
                  adding intelligence to a system you understand.
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
                <a href="https://www.bcg.com/publications/2025/are-you-generating-value-from-ai-the-widening-gap" target="_blank" rel="noopener noreferrer" className="hover:text-coral-accessible transition-colors">BCG, &ldquo;The Widening AI Value Gap: Build for the Future&rdquo; (2025)</a>
              </li>
              <li>
                <a href="https://time.com/7342494/ai-changed-work-forever/" target="_blank" rel="noopener noreferrer" className="hover:text-coral-accessible transition-colors">Brynjolfsson, &ldquo;AI Changed Work Forever&rdquo;, TIME (January 2026)</a>
              </li>
              <li>
                <a href="https://www.bcg.com/publications/2026/scaling-ai-requires-new-processes-not-just-new-tools" target="_blank" rel="noopener noreferrer" className="hover:text-coral-accessible transition-colors">BCG, &ldquo;Scaling AI Requires New Processes, Not Just New Tools&rdquo; (January 2026)</a>
              </li>
            </ol>
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
                Pick one workflow where an agent could augment your team&apos;s capacity.
                <Link href="/services/diagnose" className="text-white underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors"> Diagnose it</Link>.
                Define the boundaries. Then build.
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
