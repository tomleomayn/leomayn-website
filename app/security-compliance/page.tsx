import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import SchemaMarkup from '@/components/SchemaMarkup'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'AI Security & Compliance | Leomayn',
  description: 'Security and data governance built into every engagement. Enterprise-grade controls, clear data boundaries, and compliance documentation for regulated industries.',
  keywords: ['AI security compliance', 'data governance AI', 'AI data protection UK', 'secure AI implementation'],
  alternates: {
    canonical: '/security-compliance',
  },
  openGraph: {
    title: 'AI Security & Compliance | Leomayn',
    description: 'Security and data governance built into every engagement. Enterprise-grade controls, clear data boundaries, and compliance documentation for regulated industries.',
    images: [{
      url: 'https://leomayn.com/logo/logo-social-1200x630.png',
      width: 1200,
      height: 630,
      alt: 'Leomayn - AI Security & Compliance',
    }],
  },
}

export default function SecurityCompliancePage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AI Security & Compliance",
    "description": "Security and data governance built into every Leomayn engagement.",
    "publisher": {
      "@type": "Organization",
      "name": "Leomayn"
    },
    "url": "https://leomayn.com/security-compliance"
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
        "name": "Security & Compliance",
        "item": "https://leomayn.com/security-compliance"
      }
    ]
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
              className="absolute -top-12 -left-16 w-80 h-80 rounded-full opacity-40 blur-3xl"
              style={{
                backgroundColor: 'var(--color-coral)',
                animation: 'blobFloat 21s ease-in-out infinite',
              }}
            />
            <div
              className="absolute -bottom-16 right-1/4 w-72 h-72 rounded-full opacity-30 blur-3xl"
              style={{
                backgroundColor: 'var(--color-rock)',
                animation: 'blobFloat 26s ease-in-out infinite reverse',
                animationDelay: '-6s',
              }}
            />
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate mb-6 animate-fade-in-up">
              Security and data governance as standard
            </h1>
            <div className="max-w-2xl flex items-stretch animate-fade-in-up stagger-1">
              <div className="bg-[#9ab8cb] rounded-full my-[5px]" style={{ width: '3px', minWidth: '3px' }}></div>
              <p className="text-xl leading-[1.6] text-coral-accessible pl-6">
                Built into every engagement
              </p>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
                The compliance black box
              </h2>
            </ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <ScrollReveal delay={0.1}>
                <p>
                  Many firms implementing AI face an invisible risk. Consumer-grade tools handling sensitive client data with no enterprise guardrails. General Counsel cannot approve what they cannot audit. Innovation stalls.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  The tension is real: teams want to move fast with AI, but compliance needs visibility and control. Most organisations resolve this by either blocking AI entirely or pretending the risk does not exist.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  Neither works. Security should enable adoption, not prevent it. When governance is designed in from the start, your team can use AI confidently and your compliance function can sleep at night.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Our Principles */}
        <section className="py-24 px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-12">
                Our security principles
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8">
              <ScrollReveal delay={0.1}>
                <div className="bg-pearl border border-steel rounded-md p-6">
                  <h3 className="text-xl font-serif leading-snug text-slate mb-3">
                    Your data stays yours
                  </h3>
                  <p className="text-base leading-relaxed text-slate">
                    We never train models on client data. Clear contractual boundaries on data handling, storage, and deletion. Your information is used only for the work you have commissioned.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="bg-pearl border border-steel rounded-md p-6">
                  <h3 className="text-xl font-serif leading-snug text-slate mb-3">
                    Enterprise-grade by default
                  </h3>
                  <p className="text-base leading-relaxed text-slate">
                    All tools and platforms we deploy meet enterprise security standards. No consumer-tier workarounds. No free-plan tools handling sensitive data.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="bg-pearl border border-steel rounded-md p-6">
                  <h3 className="text-xl font-serif leading-snug text-slate mb-3">
                    Auditability built in
                  </h3>
                  <p className="text-base leading-relaxed text-slate">
                    Every AI-assisted workflow has logging, human review points, and clear decision trails. You can demonstrate to auditors exactly what happened, when, and who approved it.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <div className="bg-pearl border border-steel rounded-md p-6">
                  <h3 className="text-xl font-serif leading-snug text-slate mb-3">
                    Compliance documentation included
                  </h3>
                  <p className="text-base leading-relaxed text-slate">
                    Governance checklists and compliance documentation are standard deliverables in our Define phase. Not an optional extra. Not an afterthought.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* What We Cover */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-10">
                What we cover
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-slate/20">
                      <th className="py-4 pr-6 text-base font-serif text-slate">Domain</th>
                      <th className="py-4 text-base font-serif text-slate">What we address</th>
                    </tr>
                  </thead>
                  <tbody className="text-base leading-relaxed text-slate">
                    <tr className="border-b border-steel/20">
                      <td className="py-4 pr-6 font-semibold align-top">Data classification</td>
                      <td className="py-4">Categorise data by sensitivity before any AI touches it</td>
                    </tr>
                    <tr className="border-b border-steel/20">
                      <td className="py-4 pr-6 font-semibold align-top">Access controls</td>
                      <td className="py-4">Role-based access with least-privilege defaults</td>
                    </tr>
                    <tr className="border-b border-steel/20">
                      <td className="py-4 pr-6 font-semibold align-top">Model governance</td>
                      <td className="py-4">Which AI models are approved, for which use cases, with what constraints</td>
                    </tr>
                    <tr className="border-b border-steel/20">
                      <td className="py-4 pr-6 font-semibold align-top">Audit trails</td>
                      <td className="py-4">Logging of AI inputs, outputs, and human review decisions</td>
                    </tr>
                    <tr className="border-b border-steel/20">
                      <td className="py-4 pr-6 font-semibold align-top">Regulatory alignment</td>
                      <td className="py-4">UK GDPR and sector-specific requirements (SRA, FCA, ICAEW where applicable)</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-6 font-semibold align-top">Incident response</td>
                      <td className="py-4">Clear protocols and escalation paths if something goes wrong</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* How It Fits */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-10">
                Built into every phase
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg leading-relaxed text-slate mb-8">
                Security is not a separate workstream. It is woven through every phase of how we work.
              </p>
            </ScrollReveal>
            <div className="space-y-6">
              <ScrollReveal delay={0.15}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-coral rounded-md flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-slate font-serif font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-slate mb-1">Diagnose</h3>
                    <p className="text-base leading-relaxed text-slate">We assess current data handling practices and identify compliance gaps as part of the operational assessment.</p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-coral rounded-md flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-slate font-serif font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-slate mb-1">Define</h3>
                    <p className="text-base leading-relaxed text-slate">Governance checklists and security architecture are standard blueprint deliverables. Access controls, data flows, and compliance requirements are designed before building starts.</p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-coral rounded-md flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-slate font-serif font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-slate mb-1">Deliver</h3>
                    <p className="text-base leading-relaxed text-slate">All systems built with enterprise security controls. Testing includes security validation alongside functional testing.</p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-coral rounded-md flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-slate font-serif font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-slate mb-1">Support</h3>
                    <p className="text-base leading-relaxed text-slate">Ongoing monitoring, quarterly security reviews, and regulatory updates. Your systems stay compliant as requirements evolve.</p>
                  </div>
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
                Questions about security?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-xl font-sans leading-relaxed text-white mb-8">
                We are happy to walk through our security practices in a discovery call.
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
