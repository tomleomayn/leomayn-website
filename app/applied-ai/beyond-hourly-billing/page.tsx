import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

export const metadata = {
  title: 'Beyond Hourly Billing: AI and Services Pricing | Leomayn',
  description: 'If AI makes your team faster and you bill by the hour, efficiency becomes a revenue problem. Learn how to transition to value-based pricing. Book a discovery call.',
  keywords: ['AI professional services pricing', 'hourly billing AI', 'value based pricing', 'productised services', 'AI economics'],
  alternates: {
    canonical: '/applied-ai/beyond-hourly-billing',
  },
  openGraph: {
    title: 'Beyond Hourly Billing: AI and Services Pricing | Leomayn',
    description: 'If AI makes your team faster and you bill by the hour, efficiency becomes a revenue problem.',
    images: [{
      url: 'https://leomayn.com/logo/logo-social-1200x630.png',
      width: 1200,
      height: 630,
      alt: 'Leomayn - AI Consulting',
    }],
  },
}

export default function BeyondHourlyBillingPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Beyond hourly billing: how AI changes professional services economics',
    'description': 'If AI makes your team faster and you bill by the hour, efficiency becomes a revenue problem.',
    'image': 'https://leomayn.com/logo/logo-social-1200x630.png',
    'url': 'https://leomayn.com/applied-ai/beyond-hourly-billing',
    'datePublished': '2026-02-11',
    'dateModified': '2026-02-11',
    'wordCount': 870,
    'articleSection': 'Strategy',
    'keywords': ['hourly billing', 'value pricing', 'professional services', 'AI economics', 'productisation'],
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
      '@id': 'https://leomayn.com/applied-ai/beyond-hourly-billing',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://leomayn.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Applied AI', 'item': 'https://leomayn.com/applied-ai' },
      { '@type': 'ListItem', 'position': 3, 'name': 'Beyond Hourly Billing', 'item': 'https://leomayn.com/applied-ai/beyond-hourly-billing' },
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
              className="absolute top-1/3 -right-16 w-80 h-80 rounded-full opacity-35 blur-3xl"
              style={{
                backgroundColor: 'var(--color-coral-light)',
                animation: 'blobFloat 22s ease-in-out infinite',
              }}
            />
            <div
              className="absolute -bottom-20 left-1/4 w-72 h-72 rounded-full opacity-40 blur-3xl"
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
              Beyond hourly billing
            </h1>
            <div className="max-w-2xl flex items-stretch animate-fade-in-up stagger-1">
              <div className="bg-[#9ab8cb] rounded-full my-[5px]" style={{ width: '3px', minWidth: '3px' }}></div>
              <p className="text-xl leading-[1.6] text-coral-accessible pl-6">
                If AI makes your team 40% faster, and you bill by the hour, you just
                earned 40% less. The value hasn&apos;t changed. The time has collapsed.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: The billing paradox */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                The billing paradox
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  <a href="https://www.simon-kucher.com/en/applied-ai/ai-pocalypse-professional-services-more-roman-empire-dinosaurs" target="_blank" rel="noopener noreferrer" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">Simon-Kucher</a> calls it the AI-Pocalypse for professional services pricing.
                  The structural risk is real: firms that get faster without changing how
                  they charge will compress their own margins.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  In a pure time-and-materials model, every gain in efficiency is a cut
                  in revenue. A contract review that took four hours now takes 90 minutes.
                  A client report that consumed a full day now takes two hours of review
                  on an AI-generated draft.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  The work is still valuable. The judgment is still required. The client
                  still needs the outcome. But the clock — the thing you invoice against —
                  has shrunk.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p>
                  If firms do nothing, the gains flow primarily to the client. That is
                  fine if you have unlimited demand at attractive rates. For most mid-market
                  firms, that is not the reality.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 2: What clients want */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                What clients actually want
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  Clients rarely want hours. They want outcomes.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  A client paying for contract review wants risk mitigated. A client paying
                  for a financial model wants a decision supported. A client paying for
                  compliance work wants confidence that obligations are met.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  The hour was always a proxy for the thing they actually valued. AI has
                  exposed that proxy by making the time variable irrelevant while the value
                  stays constant.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p>
                  This creates an opening. Firms that move to outcome-based or value-based
                  pricing can capture the efficiency gains as margin rather than giving them
                  away as reduced invoices.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 3: Productise one service */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                The transition: productise one service
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  You do not need to reinvent your entire pricing model overnight. Start
                  with one repeatable service and prove the economics.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="space-y-8 my-8">
                  <div className="bg-pearl border border-steel rounded-md p-6">
                    <h3 className="text-lg font-serif text-slate mb-2">Step 1: Identify the repeatable outcome</h3>
                    <p className="text-base text-slate/70">What do your clients keep buying? Which engagements follow a predictable pattern in scope, effort, and deliverables?</p>
                  </div>
                  <div className="bg-pearl border border-steel rounded-md p-6">
                    <h3 className="text-lg font-serif text-slate mb-2">Step 2: Standardise the inputs</h3>
                    <p className="text-base text-slate/70">Define what is included and excluded. Scope clarity is what makes fixed-fee economics work.</p>
                  </div>
                  <div className="bg-pearl border border-steel rounded-md p-6">
                    <h3 className="text-lg font-serif text-slate mb-2">Step 3: Tier the offer</h3>
                    <p className="text-base text-slate/70">Create structured options. Each tier has clear scope, deliverables, and pricing.</p>
                  </div>
                  <div className="bg-pearl border border-steel rounded-md p-6">
                    <h3 className="text-lg font-serif text-slate mb-2">Step 4: Price on value</h3>
                    <p className="text-base text-slate/70">Price based on the risk you remove or the revenue you help create, not the time it takes to produce.</p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="p-8 bg-coral/10 rounded-md">
                  <h3 className="text-xl font-serif text-slate mb-4">Example: management reporting</h3>
                  <div className="space-y-3 text-base text-slate">
                    <p><strong>Core:</strong> Monthly dashboard with interpretation. Fixed monthly fee.</p>
                    <p><strong>Plus:</strong> Add quarterly strategic review with recommendations.</p>
                    <p><strong>Premium:</strong> Add ad-hoc analysis and direct senior team access.</p>
                  </div>
                  <p className="text-base text-slate/70 mt-4">
                    Each tier has clear scope and clear pricing. AI-driven efficiency in
                    the delivery process flows directly to margin.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 4: Premium moves to questions */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                When execution becomes cheap, the premium moves to questions
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  <a href="https://time.com/7342494/ai-changed-work-forever/" target="_blank" rel="noopener noreferrer" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">Erik Brynjolfsson at Stanford</a> describes a three-phase model for any
                  knowledge task: define the problem, execute the work, evaluate the result.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  AI is collapsing the cost of phase two. Draft documents, research
                  synthesis, data analysis, initial modelling — all are accelerating.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  The valuable skill is asking the right questions before the work starts,
                  and applying the right judgment when it comes back.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p>
                  Operations directors choosing which processes to automate. Client partners
                  framing the brief that shapes the entire engagement. Product leads deciding
                  which features matter and which are noise.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p>
                  The organisations investing in the quality of questions their people ask
                  will outperform those investing only in the speed of answers.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 5: What this means for delivery */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                What this means for your delivery team
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  If you lead an operations or delivery function, the billing model shift
                  has practical implications for how you structure work.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  Map where your team&apos;s time goes today. Separate the hours spent on
                  execution (drafting, compiling, formatting, checking) from the hours spent
                  on judgment (scoping, advising, reviewing, deciding). AI will compress the
                  execution hours. Your job is to ensure the judgment hours are visible,
                  valued, and priced correctly.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  This is also a retention play. Your best people did not join to format
                  reports. When you free them from execution overhead, you give them time
                  for the work that attracted them in the first place.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 6: Don't become a tech company */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                Don&apos;t become a tech company
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  A common mistake is overcorrecting. Firms see AI&apos;s potential and
                  conclude they need to become technology businesses.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  You already have the hard part: client relationships, domain expertise,
                  institutional knowledge, and a track record of solving real problems.
                  The opportunity is to remove the operational drag that prevents you from
                  scaling them.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  Take an existing service. Automate the repetitive components. Elevate
                  the human judgment that clients actually pay for. That is the sustainable
                  path — and it starts with understanding where your <Link href="/services/diagnose" className="underline decoration-coral/30 underline-offset-2 hover:decoration-coral transition-colors">delivery time goes</Link>.
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
                <a href="https://www.simon-kucher.com/en/applied-ai/ai-pocalypse-professional-services-more-roman-empire-dinosaurs" target="_blank" rel="noopener noreferrer" className="hover:text-coral-accessible transition-colors">Simon-Kucher, &ldquo;The AI-Pocalypse in Professional Services&rdquo;</a>
              </li>
              <li>
                <a href="https://time.com/7342494/ai-changed-work-forever/" target="_blank" rel="noopener noreferrer" className="hover:text-coral-accessible transition-colors">Brynjolfsson, &ldquo;AI Changed Work Forever&rdquo; (TIME, January 2026)</a>
              </li>
            </ol>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 lg:px-8 bg-slate">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-white mb-6">
                Explore your pricing model
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-xl font-sans leading-relaxed text-white mb-8">
                We help professional services firms identify which services are ready for
                productisation and what the commercial impact could be. It starts with
                mapping one value flow.
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
