import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import SchemaMarkup from '@/components/SchemaMarkup'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'FAQ - AI Consulting & Workflow Automation | Leomayn',
  description: 'Answers to common questions about AI consulting, workflow automation, timelines, pricing approach, and how we work. Straight answers, no sales pitch.',
  keywords: ['AI consulting FAQ', 'workflow automation questions', 'AI implementation cost', 'how long does AI consulting take'],
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'FAQ - AI Consulting & Workflow Automation | Leomayn',
    description: 'Answers to common questions about AI consulting, workflow automation, timelines, pricing approach, and how we work. Straight answers, no sales pitch.',
    images: [{
      url: 'https://leomayn.com/logo/logo-social-1200x630.png',
      width: 1200,
      height: 630,
      alt: 'Leomayn - FAQ',
    }],
  },
}

const faqs = [
  {
    category: 'How we work',
    questions: [
      {
        q: 'How does the engagement start?',
        a: 'Every engagement starts with a free discovery call. If there is a fit, we begin with Diagnose, a 2-4 week assessment of your current workflows. You get a standalone deliverable with actionable findings. No commitment to further phases required.',
      },
      {
        q: 'Do we need to commit to all four phases?',
        a: 'No. Each phase is independently valuable and independently priced. Many clients start with Diagnose to validate the opportunity before committing to Define. You can pause or stop between any phase.',
      },
      {
        q: 'What does a typical timeline look like?',
        a: 'Diagnose: 2-4 weeks. Define: 2-3 weeks. Deliver: 4-8 weeks. A full engagement typically runs 12-15 weeks, significantly faster than traditional consulting (9-12 months) or internal builds (6+ months).',
      },
    ],
  },
  {
    category: 'Investment and pricing',
    questions: [
      {
        q: 'How is pricing structured?',
        a: 'Fixed-price per phase, based on complexity. You know the exact investment before committing. No day rates, no hourly billing, no surprise overruns. Complexity is scored during discovery so pricing reflects your actual situation.',
      },
      {
        q: 'What is the ROI?',
        a: 'We typically target 25-75% time reduction for AI-augmented processes. We work with you to evaluate workflows in terms of their potential impact and ability to drive an ROI. Success metrics are agreed before starting and measured after implementation.',
      },
    ],
  },
  {
    category: 'Technical questions',
    questions: [
      {
        q: 'What platforms and tools do you use?',
        a: 'We are platform-agnostic. We evaluate tools based on your needs, existing systems, and team capability. For AI automation, we use n8n with a range of custom integrations. We choose n8n because it can be stood up as a client-owned instance with enterprise security standards. The right platform choice depends on your situation.',
      },
      {
        q: 'Can you integrate with our existing systems?',
        a: 'Yes. Integration with your existing systems is a core part of what we do. We map your current technology stack during Diagnose and design integrations during Define.',
      },
      {
        q: 'What about data security?',
        a: 'Enterprise-grade security controls are built into every engagement. We never train models on client data, we provide governance checklists as standard, and we build audit trails into every AI-assisted workflow.',
        link: { href: '/security-compliance', text: 'See our Security & Compliance page for detail' },
      },
    ],
  },
  {
    category: 'Working with us',
    questions: [
      {
        q: 'What size of company do you work with?',
        a: 'We typically work with B2B service organisations. This is based on our deep experience of transforming and delivering knowledge work in a B2B environment. A common characteristic is operational bottlenecks limiting growth and a desire to implement AI meaningfully into the organisation, but not necessarily knowing the best place to start.',
      },
      {
        q: 'Do you only work with AI?',
        a: 'No. We start with process diagnosis. If the fix is a simpler workflow, better handoffs, or a non-AI automation, we will say so. AI is one tool among many. We optimise for business outcomes, not technology showcase.',
      },
      {
        q: 'What happens after the deliver phase?',
        a: 'You own everything: all code, all IP, all documentation. Your team is trained to maintain and evolve the system. If you want ongoing support, our Support phase offers quarterly support with ongoing workflow health checks, performance monitoring, and incremental improvements.',
      },
      {
        q: 'What industries do you specialise in?',
        a: 'We are able to apply our expertise to all types of organisation. The common thread is labour-intensive, document-heavy workflows under margin pressure, and a desire to implement AI meaningfully into how work gets done.',
      },
    ],
  },
]

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.flatMap(category =>
      category.questions.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a,
        },
      }))
    ),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://leomayn.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "FAQ",
        "item": "https://leomayn.com/faq"
      }
    ]
  }

  return (
    <>
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
                animation: 'blobFloat 23s ease-in-out infinite',
              }}
            />
            <div
              className="absolute -bottom-20 left-1/3 w-72 h-72 rounded-full opacity-30 blur-3xl"
              style={{
                backgroundColor: 'var(--color-rock)',
                animation: 'blobFloat 19s ease-in-out infinite reverse',
                animationDelay: '-7s',
              }}
            />
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate mb-6 animate-fade-in-up">
              Questions we hear most
            </h1>
            <div className="max-w-2xl flex items-stretch animate-fade-in-up stagger-1">
              <div className="bg-[#9ab8cb] rounded-full my-[5px]" style={{ width: '3px', minWidth: '3px' }}></div>
              <p className="text-xl leading-[1.6] text-coral-accessible pl-6">
                Straight answers about how we work, what it costs, and what you get
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        {faqs.map((category, categoryIndex) => (
          <section
            key={category.category}
            className={`py-24 px-6 lg:px-8 ${categoryIndex % 2 === 0 ? 'bg-chalk' : 'bg-white'}`}
          >
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-10">
                  {category.category}
                </h2>
              </ScrollReveal>
              <div className="space-y-8">
                {category.questions.map((faq, faqIndex) => (
                  <ScrollReveal key={faq.q} delay={0.1 + faqIndex * 0.05}>
                    <div className="border-b border-steel/20 pb-8 last:border-b-0">
                      <h3 className="text-xl font-serif text-slate mb-3">{faq.q}</h3>
                      <p className="text-base leading-relaxed text-slate">
                        {faq.a}
                      </p>
                      {faq.link && (
                        <Link
                          href={faq.link.href}
                          className="inline-block mt-3 text-sm font-semibold text-coral-accessible hover:text-coral-dark transition-colors"
                        >
                          {faq.link.text} →
                        </Link>
                      )}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-24 px-6 lg:px-8 bg-slate">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-white mb-6">
                Didn&apos;t find your question?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-xl font-sans leading-relaxed text-white mb-8">
                We would rather answer directly than make you search. Book a 30-minute discovery call and ask us anything.
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
