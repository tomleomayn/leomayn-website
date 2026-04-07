import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const resources = [
  {
    href: '/resources/claude-code-cheat-sheet',
    title: '9 Ways to Teach Claude Code How You Work',
    description:
      'From first session to full operating system. Nine techniques pulled from a working system that runs a consulting practice.',
    tag: 'Cheat Sheet',
  },
  {
    href: '/resources/claude-code-reporting-guide',
    title: 'Claude Code Does Your Reporting',
    description:
      'Turn a manual status report into an automated dashboard in 20 minutes. Nine steps, a prompt template, and a worked example.',
    tag: 'Step-by-Step Guide',
  },
  {
    href: '/resources/ai-vendor-due-diligence',
    title: 'AI Vendor Due Diligence: What Sits Underneath',
    description:
      'Seven model providers. Six dimensions each. 109 sourced references. The research your AI vendor probably hasn\'t shared with you.',
    tag: 'Research',
  },
  {
    href: '/resources/claude-code-deck-guide',
    title: 'Building Presentations with Claude Code',
    description:
      'Config, component vocabulary, and the Playwright export pipeline. Everything you need to go from brief to branded PDF deck.',
    tag: 'Setup Guide',
  },
]

export default function ResourcesPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-pearl py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate mb-6">
                Guides and tools
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg leading-relaxed text-slate/80 max-w-2xl">
                Practical resources for people working with and adopting AI.
                Each one covers a specific challenge, with steps you can act on
                immediately. Free to download.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Resource Cards */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 sm:grid-cols-2">
              {resources.map(({ href, title, description, tag }) => (
                <ScrollReveal key={href}>
                  <Link
                    href={href}
                    className="group block h-full p-8 bg-pearl border border-steel rounded-lg hover:border-coral hover:-translate-y-1 transition-all duration-200"
                  >
                    <span className="inline-block text-xs font-sans font-semibold uppercase tracking-wider text-coral mb-4">
                      {tag}
                    </span>
                    <h2 className="text-xl font-serif text-slate mb-3 group-hover:text-coral transition-colors">
                      {title}
                    </h2>
                    <p className="text-sm font-sans text-slate/70 leading-relaxed">
                      {description}
                    </p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-serif text-white mb-4">
                Need something more specific?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
                Book a discovery call and we will map your specific challenge
                together.
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
