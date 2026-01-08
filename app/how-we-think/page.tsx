import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'How We Think - Leomayn',
  description: 'Our philosophy on operational improvement, AI implementation, and creating sustainable leverage in professional services.',
}

export default function HowWeThinkPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-pearl py-24 px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative">
            <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate mb-6">
              How we think
            </h1>
            <p className="text-2xl leading-relaxed text-slate">
              Principles that shape how we approach operational improvement
            </p>

            {/* Decorative Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute -right-4 top-1/2 -translate-y-1/2 w-32 h-32 lg:w-40 lg:h-40 fill-coral opacity-10 pointer-events-none">
              <path d="M15.864,11.249l-4.298,5.751h-1.066l1.056-4h-2.735c-.55,0-.944-.531-.785-1.058l2.139-5.942h3.825l-1.523,4h2.717c.642,0,1.025,.715,.67,1.249Zm7.394,2.424c.482,.748,.742,1.616,.742,2.517,0,1.773-1.033,3.4-2.612,4.179-1.079,2.345-2.979,3.63-5.389,3.63-1.555,0-3.055-.892-4-2.164-.945,1.272-2.445,2.164-4,2.164-2.409,0-4.31-1.285-5.389-3.63C1.032,19.591,0,17.964,0,16.191,0,15.29,.259,14.422,.741,13.674,.221,12.868-.052,11.954-.052,11c0-1.085,.379-2.574,2.096-3.747v-.492c0-1.821,1.314-3.209,3.232-3.542C5.647,1.355,7.128,0,8.948,0,10.085,0,11.216,.453,11.997,1.306c.046-.051,.081-.109,.13-.158C12.873,.408,13.912-.002,15.061,0c1.813,.016,3.289,1.37,3.662,3.22,1.919,.333,3.233,1.721,3.233,3.542v.492c1.717,1.172,2.096,2.662,2.096,3.747,0,.954-.272,1.868-.793,2.674Zm-2.714-.064l.873-.794c.415-.537,.634-1.163,.634-1.815,0-.613-.164-1.521-1.586-2.319l-.51-.287v-1.632c0-1.112-1.11-1.619-2.143-1.619h-1v-1c0-1.032-.62-2.134-1.771-2.144-.557,.018-1.138,.203-1.508,.57-.355,.352-.535,.833-.535,1.431h-2c0-1.477-1.105-2-2.052-2-1.145,0-1.762,1.104-1.762,2.143v1h-1c-1.032,0-2.143,.507-2.143,1.619v1.632l-.51,.287c-1.422,.799-1.586,1.707-1.586,2.319,0,.652,.219,1.279,.634,1.815l.873,.794-.709,.741c-.481,.502-.747,1.156-.747,1.841,0,1.112,.679,2.088,1.728,2.485l.41,.155,.164,.406c.749,1.859,1.959,2.763,3.699,2.763,1.486,0,3-1.514,3-3h2c0,1.486,1.514,3,3,3,1.74,0,2.95-.904,3.699-2.763l.164-.406,.41-.155c1.049-.397,1.728-1.373,1.728-2.485,0-.685-.266-1.338-.747-1.841l-.709-.741Z"/>
            </svg>
          </div>
        </section>

        {/* Operations Before AI */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              Operations before AI
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <p>
                Many AI and automation projects fail because they start with the technology
                and work backwards to the problem. Tools are selected before understanding
                constraints. Transformation is promised without diagnosing what needs fixing.
              </p>
              <p>
                AI is a powerful lever. Without fixing the underlying workflow, it just
                accelerates broken processes. We see companies implementing ChatGPT, Copilot,
                or Claude without enabling teams or understanding what operational problem
                they are solving.
              </p>
              <p>
                The result is predictable: pilot purgatory. Teams run experiments that show
                promise but never scale. Shadow IT emerges. Governance breaks down. Investment
                is wasted.
              </p>
              <p>
                We work differently. We start with how your work actually runs today, identify
                what's broken and what matters, redesign the workflow to remove inefficiencies,
                and only then deploy AI and automation to scale what works.
              </p>
              <p>
                This approach delivers working systems in weeks. Your team owns the result,
                understands how it works, and can maintain it independently.
              </p>
            </div>
          </div>
        </section>

        {/* Complexity is the Enemy */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              Complexity is the enemy
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <p>
                Most operational problems are not technical. They are organisational.
                Unclear ownership, duplicated effort, manual handoffs between systems,
                missing data, inconsistent processes across teams.
              </p>
              <p>
                Adding technology to this creates more complexity. You now have the original
                organisational problem plus integration overhead, tool sprawl, and maintenance
                burden.
              </p>
              <p>
                Our approach strips out complexity before adding anything new. We clarify
                who does what, consolidate duplicated work, remove unnecessary steps, and
                document the simplified process.
              </p>
              <p>
                Then we automate the simple version. Automation on top of simplicity
                compounds. Automation on top of complexity collapses.
              </p>
            </div>
          </div>
        </section>

        {/* Governance is Not Optional */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              Governance is not optional
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <p>
                Many automation projects skip governance because it feels like overhead.
                This is a mistake. Without clear data handling protocols, access controls,
                and audit trails, you create risk that compounds over time.
              </p>
              <p>
                We design governance into the solution from the start. Who can access what
                data? How is sensitive information protected? What gets logged? How do you
                prove compliance?
              </p>
              <p>
                This is not bureaucracy. It is insurance. Systems with clear governance
                scale safely. Systems without it create liability.
              </p>
              <p>
                For firms handling client data, governance is the difference between
                operational leverage and operational risk.
              </p>
            </div>
          </div>
        </section>

        {/* Transfer Capability */}
        <section className="py-24 px-6 lg:px-8 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              Transfer capability
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <p>
                Many consultancies and vendors create dependency by design. Proprietary
                platforms, complex configurations, undocumented customisations. You cannot
                maintain the system without them.
              </p>
              <p>
                We build every solution on platforms you control. Every workflow is documented.
                Every configuration is explained. Your team receives training to maintain and
                improve the system independently.
              </p>
              <p>
                The goal is to make ourselves redundant. You should be able to iterate, modify,
                and extend what we build without coming back to us.
              </p>
              <p>
                When you own the capability, you adapt faster, iterate more frequently, and
                compound improvements over time.
              </p>
            </div>
          </div>
        </section>

        {/* Build for Humans */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-slate mb-8">
              Build for humans
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              <p>
                Automation projects often treat people as an afterthought. The system gets
                built, then training happens, then adoption struggles, then the system fails.
              </p>
              <p>
                We design for human adoption from the start. What does the user experience?
                How do they learn the new workflow? What happens when they make a mistake?
                How do we measure success from their perspective?
              </p>
              <p>
                Change management is not a phase at the end. It is a constraint throughout.
                We build systems that make work easier, clearer, and more valuable.
              </p>
              <p>
                The best automation is invisible. It removes friction without adding complexity.
                People get better outcomes without feeling like they are learning new technology.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 lg:px-8 bg-slate">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-white mb-6">
              See how we apply these principles
            </h2>
            <p className="text-xl font-sans leading-relaxed text-white mb-8">
              Book a 30-minute discovery call. We'll discuss your operational
              challenges and show you how our approach creates sustainable leverage.
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
