import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

export const metadata = {
  title: 'Applied AI for Professional Services | Leomayn',
  description: 'Practical AI implementation guidance for professional services firms. Operating architecture, scaling, pricing, and AI agents. Book a discovery call.',
  keywords: ['applied AI', 'AI implementation', 'professional services AI', 'operating architecture', 'AI strategy', 'AI agents', 'agentic AI'],
  alternates: {
    canonical: '/applied-ai',
  },
  openGraph: {
    title: 'Applied AI for Professional Services | Leomayn',
    description: 'Practical AI implementation guidance for professional services firms.',
    images: [{
      url: 'https://leomayn.com/logo/logo-social-1200x630.png',
      width: 1200,
      height: 630,
      alt: 'Leomayn - AI Consulting',
    }],
  },
}

const insights = [
  {
    title: 'Avoiding common pitfalls when deploying AI',
    description: 'Most AI projects stall for fixable reasons. Three operational problems explain the gap between adoption and value.',
    href: '/applied-ai/why-ai-projects-fail',
    category: 'Operations',
  },
  {
    title: 'How mid-market firms use AI to scale without scaling headcount',
    description: 'Your board wants growth. Your ops team is stretched. The answer is leverage: redesigning work so each person\'s effort compounds.',
    href: '/applied-ai/scale-without-headcount',
    category: 'Growth',
  },
  {
    title: 'Beyond hourly billing: how AI changes professional services economics',
    description: 'If AI makes your team faster and you bill by the hour, efficiency becomes a revenue problem. The fix is productised services.',
    href: '/applied-ai/beyond-hourly-billing',
    category: 'Strategy',
  },
  {
    title: 'The operating architecture your AI tools need',
    description: 'Your AI tools are not failing. The layer beneath them is missing. Six elements that separate firms achieving real value from those running pilots.',
    href: '/applied-ai/operating-architecture',
    category: 'Framework',
  },
  {
    title: 'AI agents for business: where to draw the line',
    description: '79% of companies now use agentic AI. Fewer than one in 20 capture real value. The difference is governance, not technology.',
    href: '/applied-ai/ai-agents-for-business',
    category: 'AI Agents',
  },
]

export default function AppliedAIPage() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Applied AI | Leomayn',
    'description': 'Practical AI implementation guidance for professional services firms.',
    'url': 'https://leomayn.com/applied-ai',
    'publisher': {
      '@type': 'Organization',
      'name': 'Leomayn',
      'url': 'https://leomayn.com',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://leomayn.com/logo/logo-social-1200x630.png',
      },
    },
    'mainEntity': {
      '@type': 'ItemList',
      'itemListElement': insights.map((insight, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'url': `https://leomayn.com${insight.href}`,
      })),
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://leomayn.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Applied AI', 'item': 'https://leomayn.com/applied-ai' },
    ],
  }

  return (
    <>
      <SchemaMarkup data={pageSchema} />
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
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate mb-6 animate-fade-in-up">
              Applied AI
            </h1>
            <div className="max-w-2xl flex items-stretch animate-fade-in-up stagger-1">
              <div className="bg-[#9ab8cb] rounded-full my-[5px]" style={{ width: '3px', minWidth: '3px' }}></div>
              <p className="text-xl leading-[1.6] text-coral-accessible pl-6">
                Practical thinking on AI implementation, operating architecture, and scaling professional services firms.
              </p>
            </div>
          </div>
        </section>

        {/* Insights Grid */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {insights.map((insight, index) => (
                <ScrollReveal key={insight.href} delay={index * 0.1}>
                  <Link href={insight.href} className="block group">
                    <article className="bg-white border border-steel rounded-md p-8 hover:border-coral hover:-translate-y-1 hover:shadow-lg transition-all">
                      <span className="text-sm font-sans font-semibold text-coral-accessible uppercase tracking-wide">
                        {insight.category}
                      </span>
                      <h2 className="text-2xl lg:text-3xl font-serif leading-snug text-slate mt-2 mb-4 group-hover:text-coral-accessible transition-colors">
                        {insight.title}
                      </h2>
                      <p className="text-lg leading-relaxed text-slate/70">
                        {insight.description}
                      </p>
                      <span className="inline-flex items-center text-sm font-sans font-semibold text-coral-accessible mt-4 group-hover:gap-2 transition-all">
                        Read more
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </article>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 lg:px-8 bg-slate">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-white mb-6">
                Ready to apply these ideas?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-xl font-sans leading-relaxed text-white mb-8">
                Book a 30-minute discovery call. We will discuss your operational
                challenges and identify where to start.
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
