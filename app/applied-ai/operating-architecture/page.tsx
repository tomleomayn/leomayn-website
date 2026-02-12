import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

export const metadata = {
  title: 'The Operating Architecture Your AI Tools Need | Leomayn',
  description: 'Your AI tools are not failing. The layer beneath them is missing. Six elements of operating architecture that separate real value from pilots. Book a discovery call.',
  keywords: ['AI operating architecture', 'AI workflow design', 'AI integration framework', 'operating model AI', 'professional services'],
  alternates: {
    canonical: '/applied-ai/operating-architecture',
  },
  openGraph: {
    title: 'The Operating Architecture Your AI Tools Need | Leomayn',
    description: 'Your AI tools are not failing. The layer beneath them is missing. Six elements of operating architecture.',
    images: [{
      url: 'https://leomayn.com/logo/logo-social-1200x630.png',
      width: 1200,
      height: 630,
      alt: 'Leomayn - AI Consulting',
    }],
  },
}

export default function OperatingArchitecturePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'The operating architecture your AI tools need',
    'description': 'Your AI tools are not failing. The layer beneath them is missing. Six elements of operating architecture.',
    'image': 'https://leomayn.com/logo/logo-social-1200x630.png',
    'url': 'https://leomayn.com/applied-ai/operating-architecture',
    'datePublished': '2026-02-11',
    'dateModified': '2026-02-11',
    'wordCount': 1120,
    'articleSection': 'Framework',
    'keywords': ['operating architecture', 'workflow design', 'AI integration', 'professional services', 'technology stack'],
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
      '@id': 'https://leomayn.com/applied-ai/operating-architecture',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://leomayn.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Applied AI', 'item': 'https://leomayn.com/applied-ai' },
      { '@type': 'ListItem', 'position': 3, 'name': 'Operating Architecture', 'item': 'https://leomayn.com/applied-ai/operating-architecture' },
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
              className="absolute top-1/2 -left-20 w-80 h-80 rounded-full opacity-40 blur-3xl"
              style={{
                backgroundColor: 'var(--color-rock)',
                animation: 'blobFloat 19s ease-in-out infinite',
              }}
            />
            <div
              className="absolute -top-16 right-1/4 w-72 h-72 rounded-full opacity-35 blur-3xl"
              style={{
                backgroundColor: 'var(--color-coral)',
                animation: 'blobFloat 23s ease-in-out infinite reverse',
                animationDelay: '-7s',
              }}
            />
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <Link href="/applied-ai" className="text-sm font-sans text-coral-accessible hover:text-coral-dark transition-colors mb-4 inline-block">
              &larr; All applied AI
            </Link>
            <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate mb-6 animate-fade-in-up">
              The operating architecture your AI tools need
            </h1>
            <div className="max-w-2xl flex items-stretch animate-fade-in-up stagger-1">
              <div className="bg-[#9ab8cb] rounded-full my-[5px]" style={{ width: '3px', minWidth: '3px' }}></div>
              <p className="text-xl leading-[1.6] text-coral-accessible pl-6">
                Operating architecture is the designed interaction between how you earn
                money, how you deliver work, and how your technology supports both. Most
                firms skip this layer. That is why their tools don&apos;t stick.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: The workflow gap */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                The workflow gap
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  <a href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" target="_blank" rel="noopener noreferrer" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">McKinsey</a> found that the 6% of organisations achieving real margin impact
                  from AI share a common pattern. They did not simply adopt AI tools. They
                  redesigned their workflows around AI capabilities.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  Among high performers, 55% had fundamentally restructured how work flows
                  through their organisation. Among the broader market, only 20% had done
                  so. That is a 3x gap in the single most important predictor of AI value.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  The implication is direct. If you are asking &ldquo;how do we get people
                  to use AI?&rdquo;, the better question is: which workflows should we rebuild?
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 2: Six layers */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                Six layers of operating architecture
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg leading-relaxed text-slate mb-12">
                An AI-ready operating architecture spans six layers. Each one matters.
                Skip any layer and the architecture is fragile.
              </p>
            </ScrollReveal>

            <div className="space-y-6">
              {[
                {
                  num: '1',
                  title: 'Value model',
                  desc: 'How the firm captures value. Hours, fixed fees, subscriptions, outcome fees. How AI-driven efficiency appears economically. This layer determines whether AI savings flow to the client or the firm.',
                },
                {
                  num: '2',
                  title: 'Workflow design',
                  desc: 'The defined path from client need to delivered outcome. Where decisions happen, who makes them, and what information they need. Where AI operates and where humans operate.',
                },
                {
                  num: '3',
                  title: 'Data and knowledge architecture',
                  desc: 'How documents, decisions, and precedents are captured, structured, and reused. What becomes context for AI tools. Without this layer, AI tools hallucinate or produce generic output.',
                },
                {
                  num: '4',
                  title: 'Technology stack and integration',
                  desc: 'The systems of record. How AI tools connect to those systems. How data flows between tools without manual intervention. This is where most firms start — and where most get stuck.',
                },
                {
                  num: '5',
                  title: 'Roles, skills, and guardrails',
                  desc: 'Who is responsible for what in a world where AI drafts, summarises, and suggests. What must be reviewed by humans, and by whom. This layer protects quality and manages risk.',
                },
                {
                  num: '6',
                  title: 'Incentives and governance',
                  desc: 'The metrics that encourage new behaviours. Governance for approving new tools, changing workflows, and updating guardrails. Without this layer, change is fragile.',
                },
              ].map((layer, index) => (
                <ScrollReveal key={layer.num} delay={0.1 + index * 0.05}>
                  <div className="bg-white border border-steel rounded-md p-6 flex items-start gap-6">
                    <span className="text-3xl font-serif text-coral-accessible flex-shrink-0 w-8">{layer.num}</span>
                    <div>
                      <h3 className="text-xl font-serif text-slate mb-2">{layer.title}</h3>
                      <p className="text-base leading-relaxed text-slate/70">{layer.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Case study */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                Case study: proposal automation
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  Consider how these layers work together. A professional services firm
                  generates proposals regularly. The typical process involves senior people
                  spending four to six hours per proposal — gathering client context, selecting
                  services, calculating pricing, and writing the document.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>The proposal workflow has seven distinct sections:</p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="space-y-4 my-8">
                  {[
                    { step: '1. Trigger and identification', detail: 'Structured data capture. Fully automatable.', human: false },
                    { step: '2. Discovery synthesis', detail: 'AI summarises and structures conversation notes. A human checks the interpretation.', human: false },
                    { step: '3. Product selection', detail: 'Which services fit this client? Requires judgment about fit, scope, and sequencing.', human: true },
                    { step: '4. Complexity scoring', detail: 'How complex is this engagement? Sets the pricing tier and shapes the delivery plan.', human: true },
                    { step: '5. Pricing lookup', detail: 'Pricing follows defined rules once complexity is set. A calculation.', human: false },
                    { step: '6. Content generation', detail: 'AI generates the proposal draft from templates and context. Mechanical.', human: false },
                    { step: '7. Document generation', detail: 'Final formatting, review, and delivery. A human reviews and approves.', human: false },
                  ].map((item) => (
                    <div key={item.step} className={`p-4 rounded-md border ${item.human ? 'bg-coral/10 border-coral' : 'bg-pearl border-steel'}`}>
                      <div className="flex items-start justify-between">
                        <p className="text-base text-slate font-semibold">{item.step}</p>
                        {item.human && (
                          <span className="text-xs font-sans font-semibold text-coral-accessible bg-coral/20 px-2 py-1 rounded">Human decides</span>
                        )}
                      </div>
                      <p className="text-sm text-slate/70 mt-1">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <div className="p-8 bg-coral/10 rounded-md">
                  <p className="text-lg text-slate">
                    Seven sections. Only two require human judgment. A four-hour process
                    becomes 45 minutes of focused decision-making.
                  </p>
                  <p className="text-base text-slate/70 mt-4">
                    But this only works because all six layers are in place. The value model
                    defines how pricing connects to complexity. The workflow defines which
                    decisions need human input. The data layer provides the context AI needs.
                    Remove any layer and the automation breaks.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 4: What integrated means */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                What &ldquo;integrated&rdquo; actually means
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  When AI is integrated into a workflow, three things are true:
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="space-y-6 my-8">
                  <div className="flex items-start gap-4">
                    <span className="bg-coral rounded-full w-2 h-2 mt-2.5 flex-shrink-0"></span>
                    <div>
                      <p className="font-semibold text-slate">It sits inside the workflow.</p>
                      <p className="text-slate/70 mt-1">Not as a separate tool people switch to, but as a step in the process they already follow.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="bg-coral rounded-full w-2 h-2 mt-2.5 flex-shrink-0"></span>
                    <div>
                      <p className="font-semibold text-slate">It is owned.</p>
                      <p className="text-slate/70 mt-1">Someone is responsible for how AI operates in that workflow. They monitor output quality, update context, and make decisions about scope. Unowned AI drifts and degrades.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="bg-coral rounded-full w-2 h-2 mt-2.5 flex-shrink-0"></span>
                    <div>
                      <p className="font-semibold text-slate">It moves one metric.</p>
                      <p className="text-slate/70 mt-1">Cycle time, first-pass quality, cost per deliverable, client satisfaction. If you cannot name the metric AI is improving, the integration is not real.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  These three criteria separate genuine integration from surface adoption.
                  The firms seeing real value from AI tend to meet all three. The rest are
                  running pilots.
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
                <a href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" target="_blank" rel="noopener noreferrer" className="hover:text-coral-accessible transition-colors">McKinsey, &ldquo;The State of AI 2025&rdquo;</a>
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
                You do not need to redesign your entire operating architecture to start.
                Choose one workflow that is repeatable, measurable, and commercially
                important. We will help you <Link href="/services/diagnose" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral text-white transition-colors">diagnose it</Link> against these six layers and
                rebuild it with intention.
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
