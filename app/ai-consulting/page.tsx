import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import SchemaMarkup from '@/components/SchemaMarkup'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'AI consulting for service organisations | Leomayn',
  description: 'AI consulting that starts with workflow redesign. We diagnose what\'s broken, redesign how work flows, then use AI to scale what works.',
  openGraph: {
    title: 'AI consulting for service organisations | Leomayn',
    description: 'AI consulting that starts with workflow redesign. We diagnose what\'s broken, redesign how work flows, then use AI to scale what works.',
    images: [{
      url: 'https://leomayn.com/logo/logo-social-1200x630.png',
      width: 1200,
      height: 630,
      alt: 'Leomayn - AI consulting for service organisations',
    }],
  },
  alternates: {
    canonical: 'https://leomayn.com/ai-consulting',
  },
}

export default function AIConsultingPage() {
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
        "name": "AI Consulting",
        "item": "https://leomayn.com/ai-consulting"
      }
    ]
  }

  return (
    <>
      <SchemaMarkup data={breadcrumbSchema} />
      <NavBar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-pearl py-24 px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div
              className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full opacity-40 blur-3xl"
              style={{
                backgroundColor: 'var(--color-coral)',
                animation: 'blobFloat 22s ease-in-out infinite',
              }}
            />
            <div
              className="absolute -top-20 right-1/4 w-72 h-72 rounded-full opacity-30 blur-3xl"
              style={{
                backgroundColor: 'var(--color-rock)',
                animation: 'blobFloat 20s ease-in-out infinite reverse',
                animationDelay: '-7s',
              }}
            />
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate mb-6 animate-fade-in-up">
              AI consulting for service organisations
            </h1>
            <div className="max-w-2xl flex items-stretch animate-fade-in-up stagger-1">
              <div className="bg-[#9ab8cb] rounded-full my-[5px]" style={{ width: '3px', minWidth: '3px' }}></div>
              <p className="text-xl leading-[1.6] text-coral-accessible pl-6">
                We diagnose what's broken, redesign how work flows, then use AI to scale what works.
              </p>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-20 bg-chalk">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif text-slate mb-6">
                Who Leomayn is built for
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg leading-relaxed text-slate">
                Service organisations where capacity is stuck in manual processes, scattered information, and error-prone handoffs. Operations leaders who need to free up capacity, reduce rework, and improve margins without adding headcount.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* The Challenge */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif text-slate mb-6">
                Why AI projects stall
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg leading-relaxed text-slate">
                Most AI initiatives start with the technology rather than the workflow. Automation gets layered onto processes that weren't designed for it. The tools work, but adoption doesn't follow. We've found that fixing the workflow first makes the difference between pilots that fade and systems that stick.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* What we do instead */}
        <section className="py-20 bg-chalk">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif text-slate mb-8">
                The Leomayn approach
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6">
              <ScrollReveal delay={0}>
                <div className="bg-pearl rounded-md p-6">
                  <h3 className="text-xl font-serif text-slate mb-2">Diagnose</h3>
                  <p className="text-base text-slate/80">Map current state, quantify friction, identify automation opportunities.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="bg-pearl rounded-md p-6">
                  <h3 className="text-xl font-serif text-slate mb-2">Define</h3>
                  <p className="text-base text-slate/80">Design the optimum workflow and AI solution architecture.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="bg-pearl rounded-md p-6">
                  <h3 className="text-xl font-serif text-slate mb-2">Deliver</h3>
                  <p className="text-base text-slate/80">Build and ship working systems with buy-in from your team.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="bg-pearl rounded-md p-6">
                  <h3 className="text-xl font-serif text-slate mb-2">Support</h3>
                  <p className="text-base text-slate/80">Provide the support needed to help embed new ways of working until they stick.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="p-8 bg-coral/20 rounded-md">
                <h2 className="text-2xl font-serif text-slate mb-4">
                  Outcomes
                </h2>
                <p className="text-lg leading-relaxed text-slate">
                  Free up capacity, reduce rework, and improve margins. Delivery becomes reliable as volume grows. Your people focus on the work that matters most.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-chalk">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-serif text-slate mb-8">
                Frequently asked questions
              </h2>
            </ScrollReveal>

            <div className="space-y-6">
              <ScrollReveal delay={0.1}>
                <div className="bg-pearl rounded-md p-6">
                  <h3 className="text-lg font-semibold text-slate mb-2">What type of AI consulting do you provide?</h3>
                  <p className="text-base text-slate/80">We focus on workflow redesign and AI implementation for service organisations. We diagnose operational friction first, then design and build AI solutions that fit your specific workflows. The goal is systems that stick, not pilots that fade.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="bg-pearl rounded-md p-6">
                  <h3 className="text-lg font-semibold text-slate mb-2">Do you build solutions or just advise?</h3>
                  <p className="text-base text-slate/80">Both. We design and ship working systems. Advice without implementation doesn't create operational improvement.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-pearl rounded-md p-6">
                  <h3 className="text-lg font-semibold text-slate mb-2">How do you make adoption stick?</h3>
                  <p className="text-base text-slate/80">Our goal is to provide the support you need until the new way of working is embedded.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <div className="bg-pearl rounded-md p-6">
                  <h3 className="text-lg font-semibold text-slate mb-2">How long does it take?</h3>
                  <p className="text-base text-slate/80">Diagnose takes 2-3 weeks. Define takes 2-4 weeks. Deliver varies by scope, typically 4-12 weeks.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.35}>
                <div className="bg-pearl rounded-md p-6">
                  <h3 className="text-lg font-semibold text-slate mb-2">Who is this best for?</h3>
                  <p className="text-base text-slate/80">Service organisations where capacity is stuck in busy work.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="bg-pearl rounded-md p-6">
                  <h3 className="text-lg font-semibold text-slate mb-2">What happens after Diagnose?</h3>
                  <p className="text-base text-slate/80">You get a prioritised opportunity map with ROI estimates. You can stop there, continue with Define, or take findings to another provider. No lock-in.</p>
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
                Ready to start?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-xl font-sans leading-relaxed text-white mb-8">
                Most clients start with Diagnose. It gives you the evidence before you build anything.
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
                  href="/contact"
                  className="inline-flex items-center justify-center font-sans font-semibold text-base border border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-slate transition-all min-w-[220px]"
                >
                  Book a discovery call
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
