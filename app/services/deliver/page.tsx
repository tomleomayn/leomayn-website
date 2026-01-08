import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Deliver Phase - Leomayn',
  description: 'Working automation in weeks. Build, test, and deploy solutions with your team involved throughout.',
}

export default function DeliverPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-pearl py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-end gap-6 mb-6">
              <div className="w-20 h-20 bg-coral rounded-lg flex items-center justify-center">
                <i className="fi fi-rs-system-cloud text-slate leading-none flex items-center justify-center" style={{ fontSize: '48px' }}></i>
              </div>
              <div>
                <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate">
                  Deliver
                </h1>
                <p className="text-sm tracking-widest text-slate/60 mt-2 uppercase">Build & Deploy</p>
              </div>
            </div>
            <p className="text-2xl leading-relaxed text-slate">
              Working automation in weeks
            </p>
          </div>
        </section>

        {/* What It Is */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              What this phase delivers
            </h2>
            <p className="text-lg leading-relaxed text-slate mb-6">
              The Deliver phase turns blueprints into working systems. We build the
              automation, integrate with your existing tools, test thoroughly, and
              deploy with your team trained and ready to use it.
            </p>
            <p className="text-lg leading-relaxed text-slate">
              You own the result. All code, configurations, and documentation transfer
              to you. We don't create dependency on proprietary platforms or lock you
              into ongoing fees. Your team learns to maintain and improve the system
              independently.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-12">
              What we do
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif leading-snug text-slate mb-3">
                  System build and integration
                </h3>
                <p className="text-base leading-relaxed text-slate">
                  We configure automation platforms, build custom workflows, connect
                  APIs, and integrate with your existing systems. Development follows
                  the blueprint, with progress visible throughout.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif leading-snug text-slate mb-3">
                  Testing and quality assurance
                </h3>
                <p className="text-base leading-relaxed text-slate">
                  Systematic testing of all workflows, error handling, edge cases, and
                  integration points. We test with real data in a staging environment
                  before production deployment.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif leading-snug text-slate mb-3">
                  Team training and documentation
                </h3>
                <p className="text-base leading-relaxed text-slate">
                  Hands-on training for users and administrators. Complete documentation
                  covering system operation, troubleshooting, and common modifications.
                  Your team knows how it works and how to maintain it.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif leading-snug text-slate mb-3">
                  Deployment and handover
                </h3>
                <p className="text-base leading-relaxed text-slate">
                  Phased rollout to production with monitoring and support. Complete
                  transfer of code, configurations, credentials, and documentation.
                  You have full control from day one.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-12">
              What you receive
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-pearl border border-steel rounded-lg p-6">
                <h3 className="text-xl font-serif leading-snug text-slate mb-3">
                  Working Automation System
                </h3>
                <p className="text-sm text-slate/70">
                  Fully configured automation deployed to production, integrated with
                  your systems, tested, and ready for daily use.
                </p>
              </div>

              <div className="bg-pearl border border-steel rounded-lg p-6">
                <h3 className="text-xl font-serif leading-snug text-slate mb-3">
                  Complete Documentation
                </h3>
                <p className="text-sm text-slate/70">
                  User guides, administrator manuals, troubleshooting procedures, and
                  technical documentation covering all workflows and configurations.
                </p>
              </div>

              <div className="bg-pearl border border-steel rounded-lg p-6">
                <h3 className="text-xl font-serif leading-snug text-slate mb-3">
                  Training Materials
                </h3>
                <p className="text-sm text-slate/70">
                  Screen recordings, quick reference guides, and training sessions for
                  users and administrators to operate and maintain the system.
                </p>
              </div>

              <div className="bg-pearl border border-steel rounded-lg p-6">
                <h3 className="text-xl font-serif leading-snug text-slate mb-3">
                  Full System Access
                </h3>
                <p className="text-sm text-slate/70">
                  All code, workflows, configurations, credentials, and admin access
                  transferred to your team. Complete ownership and control.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline & Investment */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-serif leading-tight text-slate mb-6">
                  Timeline
                </h2>
                <p className="text-lg leading-relaxed text-slate mb-4">
                  Typically 4-8 weeks depending on solution complexity and integration
                  requirements.
                </p>
                <ul className="space-y-2 text-base text-slate">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Weeks 1-3: System build and configuration
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Week 4-5: Testing and refinement
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Week 6-8: Training, deployment, handover
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-serif leading-tight text-slate mb-6">
                  Investment
                </h2>
                <p className="text-lg leading-relaxed text-slate mb-4">
                  Fixed-price engagement based on build complexity.
                </p>
                <ul className="space-y-2 text-base text-slate">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Defined scope from blueprint
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Complete ownership of deliverables
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Option for ongoing Support phase
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Next Step */}
        <section className="py-24 px-6 lg:px-8 bg-slate">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-white mb-6">
              Ready to build?
            </h2>
            <p className="text-xl font-sans leading-relaxed text-white mb-8">
              Book a call to discuss your automation project and how the Deliver
              phase turns blueprints into working systems.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-sans font-semibold text-base bg-coral text-slate px-8 py-4 rounded-lg hover:bg-coral-dark transition-all"
            >
              Book Discovery Call
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
