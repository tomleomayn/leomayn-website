import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'
import RelatedPages from '@/components/RelatedPages'

export const metadata = {
  title: 'Context Engineering: The Skill That Makes All Your AI Smarter | Leomayn',
  description: 'Context engineering is the highest-leverage AI skill for businesses. Four layers that compound to produce output no amount of prompting can match.',
  keywords: ['context engineering', 'AI context', 'prompt engineering vs context engineering', 'AI implementation', 'AI for business','AI operating architecture'],
  alternates: {
    canonical: '/applied-ai/context-engineering',
  },
  openGraph: {
    title: 'Context Engineering: The Skill That Makes All Your AI Smarter | Leomayn',
    description: 'Context engineering is the highest-leverage AI skill for businesses. Four layers that compound to produce output no amount of prompting can match.',
    images: [{
      url: 'https://leomayn.com/logo/logo-social-1200x630.png',
      width: 1200,
      height: 630,
      alt: 'Leomayn - AI Consulting',
    }],
  },
}

export default function ContextEngineeringPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Context engineering: the skill that makes all your AI smarter',
    'description': 'Context engineering is the highest-leverage AI skill for businesses. Four layers that compound to produce output no amount of prompting can match.',
    'image': 'https://leomayn.com/logo/logo-social-1200x630.png',
    'url': 'https://leomayn.com/applied-ai/context-engineering',
    'datePublished': '2026-05-13',
    'dateModified': '2026-05-13',
    'wordCount': 1450,
    'articleSection': 'Framework',
    'keywords': ['context engineering', 'AI context', 'prompt engineering', 'AI implementation', 'professional services'],
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
      '@id': 'https://leomayn.com/applied-ai/context-engineering',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://leomayn.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Applied AI', 'item': 'https://leomayn.com/applied-ai' },
      { '@type': 'ListItem', 'position': 3, 'name': 'Context Engineering', 'item': 'https://leomayn.com/applied-ai/context-engineering' },
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
              Context engineering: the skill that makes all your AI smarter
            </h1>
            <div className="max-w-2xl flex items-stretch animate-fade-in-up stagger-1">
              <div className="bg-[#9ab8cb] rounded-full my-[5px]" style={{ width: '3px', minWidth: '3px' }}></div>
              <p className="text-xl leading-[1.6] text-coral-accessible pl-6">
                The difference between generic AI output and genuinely useful
                work is not the model. It is what the model knows before you ask.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: The prompt engineering ceiling */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                The prompt engineering ceiling
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  Most organisations start their AI journey with prompt engineering.
                  Learning to write clear, specific instructions is a genuine skill,
                  and teams that invest in it get better outputs.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  But prompt engineering is where many organisations stop. And that
                  is a problem.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  Prompt engineering is how you ask the question. It improves a single
                  output for one person. When the conversation ends, the context
                  disappears. The next task starts from zero. Your results depend
                  entirely on who is writing the instruction.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p>
                  Organisations that invest only in prompting tend to say: &ldquo;Our
                  best people get great results from AI.&rdquo; That is a ceiling,
                  not a strategy.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 2: What context engineering is */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                What context engineering actually is
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  Context engineering is the practice of structuring what your AI
                  knows so it produces better outputs. Not better prompts. Better
                  foundations.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  It is the process of selecting, organising, and delivering your
                  organisation&apos;s knowledge, standards, and history so that AI
                  tools can do useful work without being asked the same questions
                  every time.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  When your standards, your terminology, your client history, and
                  your way of working are already built into the system, even a
                  simple prompt produces output your team would actually use. The
                  context does the work that used to require your best person writing
                  a detailed brief.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p>
                  Organisations that invest in context tend to say something
                  different: &ldquo;Anyone on the team gets great results
                  from AI.&rdquo;
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 3: Four layers */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                Four layers that compound
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg leading-relaxed text-slate mb-12">
                Context engineering is not one thing. It is four layers,
                each building on the last. When all four are present, the system
                produces output that no amount of careful prompting can match.
              </p>
            </ScrollReveal>

            {/* Layer 1 */}
            <ScrollReveal delay={0.15}>
              <div className="mb-12">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-4xl font-serif text-coral-accessible">01</span>
                  <h3 className="text-2xl font-serif leading-snug text-slate">
                    Identity
                  </h3>
                </div>
                <div className="space-y-4 text-lg leading-relaxed text-slate pl-14">
                  <p>
                    Your voice, your values, and the rules that make output sound
                    like you wrote it. Without this layer, every AI produces the
                    same generic tone for every organisation.
                  </p>
                  <p className="text-base text-slate/70">
                    <strong>How to build it:</strong> Write voice documents. Define
                    brand rules. Collect real examples of how you actually
                    communicate so the AI has something to match.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Layer 2 */}
            <ScrollReveal delay={0.2}>
              <div className="mb-12">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-4xl font-serif text-coral-accessible">02</span>
                  <h3 className="text-2xl font-serif leading-snug text-slate">
                    Domain knowledge
                  </h3>
                </div>
                <div className="space-y-4 text-lg leading-relaxed text-slate pl-14">
                  <p>
                    What you know about your field that a generalist does not. The
                    expertise that took years to build. Without this layer, AI
                    makes naive suggestions that ignore how your industry actually
                    works.
                  </p>
                  <p className="text-base text-slate/70">
                    <strong>How to build it:</strong> Document your frameworks,
                    delivery methods, and the pattern recognition built over years
                    of practice. Codify the expertise that currently lives only
                    in experience.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Layer 3 */}
            <ScrollReveal delay={0.25}>
              <div className="mb-12">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-4xl font-serif text-coral-accessible">03</span>
                  <h3 className="text-2xl font-serif leading-snug text-slate">
                    Situational awareness
                  </h3>
                </div>
                <div className="space-y-4 text-lg leading-relaxed text-slate pl-14">
                  <p>
                    Everything that has already happened with this person, project,
                    or relationship. The full history of the engagement. Without
                    this layer, every interaction starts cold, ignoring decisions
                    already made and conversations already had.
                  </p>
                  <p className="text-base text-slate/70">
                    <strong>How to build it:</strong> Connect CRM records, meeting
                    notes, previous conversations, and email history. Surface the
                    relationship context that already exists across your systems.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Layer 4 */}
            <ScrollReveal delay={0.3}>
              <div>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-4xl font-serif text-coral-accessible">04</span>
                  <h3 className="text-2xl font-serif leading-snug text-slate">
                    Compounding feedback
                  </h3>
                </div>
                <div className="space-y-4 text-lg leading-relaxed text-slate pl-14">
                  <p>
                    What the system has learned from previous outputs. Corrections,
                    experiment results, and lessons linked to specific strategies.
                    Without this layer, the same mistakes recur. With it, output
                    improves with every iteration.
                  </p>
                  <p className="text-base text-slate/70">
                    <strong>How to build it:</strong> Feed in corrections after
                    every output. Document what worked and what did not. Systematise
                    the capture so lessons compound rather than getting lost.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 4: Why context beats prompting */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                Why context beats prompting at scale
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  Prompt engineering is an investment in people: training
                  individuals to write better instructions. Context engineering
                  is an investment in organisational infrastructure: building
                  systems that make every instruction more effective regardless
                  of who writes it.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-chalk border border-steel rounded-md p-6">
                    <h3 className="text-lg font-serif text-slate mb-3">Prompt engineering</h3>
                    <ul className="space-y-3 text-base text-slate/70">
                      <li className="flex items-start">
                        <span className="bg-steel rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                        <span>Improves one output at a time</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-steel rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                        <span>Disappears when the conversation ends</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-steel rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                        <span>Quality depends on who writes the prompt</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-steel rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                        <span>Requires no maintenance</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-chalk border-2 border-coral rounded-md p-6">
                    <h3 className="text-lg font-serif text-slate mb-3">Context engineering</h3>
                    <ul className="space-y-3 text-base text-slate/70">
                      <li className="flex items-start">
                        <span className="bg-coral rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                        <span>Improves every output automatically</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-coral rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                        <span>Persists across conversations and tools</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-coral rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                        <span>Quality depends on the system, not the person</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-coral rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                        <span>Requires ongoing curation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  The investment is front-loaded. Once the context is built,
                  every subsequent interaction benefits from it without additional
                  effort. The context itself gets richer over time.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p>
                  There is an important failure mode to watch for. When context
                  goes wrong, every person using the system gets the same wrong
                  answer. The output still reads well and uses the right language,
                  so the problem is harder to spot. One mistake in the context
                  affects every output until someone finds and fixes it. That is
                  why curation matters.
                </p>
              </ScrollReveal>
            </div>
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
                  The shift does not need to start with technology. It starts
                  with documentation.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  Write down what the AI needs to know about how your
                  organisation works. That is your first context layer. Your
                  voice, your terminology, your quality standards.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="p-8 bg-coral/10 rounded-md my-8">
                  <h3 className="text-xl font-serif text-slate mb-4">A practical starting sequence</h3>
                  <ul className="space-y-4 text-base text-slate">
                    <li className="flex items-start">
                      <span className="bg-coral rounded-full w-2 h-2 mt-2.5 mr-3 flex-shrink-0"></span>
                      <span><strong>Week one:</strong> Write a voice document. How does your organisation actually communicate? Collect real examples, not aspirational guidelines.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-coral rounded-full w-2 h-2 mt-2.5 mr-3 flex-shrink-0"></span>
                      <span><strong>Week two:</strong> Document your domain expertise. What do you know about your field that a generalist AI does not? Frameworks, terminology, how things really work in practice.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-coral rounded-full w-2 h-2 mt-2.5 mr-3 flex-shrink-0"></span>
                      <span><strong>Week three:</strong> Connect your situational data. Client records, project history, meeting notes. Surface the information that already exists in your systems.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-coral rounded-full w-2 h-2 mt-2.5 mr-3 flex-shrink-0"></span>
                      <span><strong>Ongoing:</strong> Build the feedback loop. After every significant output, capture what worked and what did not. Make the corrections stick.</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p>
                  Each layer you add compounds the value of the ones before it.
                  Domain knowledge without identity produces accurate but generic
                  output. Situational awareness without domain knowledge produces
                  personalised but shallow output. All four together produce work
                  that your team would actually use.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 6: Connection to operating architecture */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                Context is the operating architecture beneath your tools
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  Context engineering is not separate from{' '}
                  <Link href="/applied-ai/operating-architecture" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">
                    operating architecture
                  </Link>. It is the mechanism that makes operating architecture
                  concrete rather than abstract.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  Most firms invest in AI tools and hope the tools redesign
                  the work. They do not. AI delivers durable value only when
                  your knowledge, your standards, and your way of working are
                  structured into the system that sits beneath those tools.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  That system is context. And building it well is the single
                  highest-leverage activity for creating stronger AI outputs
                  across your entire organisation.
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
                Build the context layer your AI needs
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-xl font-sans leading-relaxed text-white mb-8">
                We help businesses structure their knowledge,
                standards, and client history into systems that make every AI
                interaction more useful. Together we will identify where your
                context gaps are and which layer to build first.
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
              href: '/applied-ai/operating-architecture',
              title: 'Operating Architecture',
              description: 'How AI fits into existing workflows without replacing what already works.',
            },
            {
              href: '/applied-ai/why-ai-projects-fail',
              title: 'Avoiding Common Pitfalls',
              description: 'Three fixable problems explain why most AI projects stall.',
            },
            {
              href: '/applied-ai',
              title: 'All Articles',
              description: 'Browse all Applied AI perspectives for professional services.',
            },
          ]}
        />
      </main>
      <Footer />
    </>
  )
}
