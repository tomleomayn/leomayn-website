import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy - Leomayn',
  description: 'Privacy policy for Leomayn Solutions Ltd - how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-pearl py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] text-slate mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-slate/70">Last updated: January 2026</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-24 px-6 lg:px-8 bg-chalk">
          <div className="max-w-4xl mx-auto space-y-12">

            <div>
              <h2 className="text-3xl font-serif leading-tight text-slate mb-4">
                Introduction
              </h2>
              <p className="text-base leading-relaxed text-slate">
                Leomayn Solutions Ltd operates the website leomayn.com. This page informs you
                of our policies regarding the collection, use, and disclosure of personal
                information we receive from users of the site.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif leading-tight text-slate mb-4">
                Information we collect
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-slate">
                <p>
                  We collect information that you provide directly to us when you:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fill out our contact form</li>
                  <li>Schedule a discovery call</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Communicate with us via email</li>
                </ul>
                <p>
                  This information may include your name, email address, company name,
                  and any other information you choose to provide.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif leading-tight text-slate mb-4">
                How we use your information
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-slate">
                <p>
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Respond to your enquiries and provide customer service</li>
                  <li>Schedule and conduct discovery calls</li>
                  <li>Send you updates about our services (if you opt in)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif leading-tight text-slate mb-4">
                Data storage and security
              </h2>
              <p className="text-base leading-relaxed text-slate">
                We store your personal information securely and take reasonable measures
                to protect it from unauthorized access, disclosure, alteration, or destruction.
                Your information is stored on secure servers and is only accessible by
                authorized personnel.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif leading-tight text-slate mb-4">
                Third-party services
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-slate">
                <p>
                  We use the following third-party services that may collect information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Calendly for scheduling discovery calls</li>
                  <li>Resend for email delivery</li>
                  <li>Attio for customer relationship management</li>
                  <li>Vercel for website hosting</li>
                </ul>
                <p>
                  These services have their own privacy policies governing how they use
                  your information.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif leading-tight text-slate mb-4">
                Your rights
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-slate">
                <p>
                  Under data protection law, you have rights including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The right to access your personal information</li>
                  <li>The right to correct inaccurate information</li>
                  <li>The right to request deletion of your information</li>
                  <li>The right to object to processing of your information</li>
                  <li>The right to data portability</li>
                </ul>
                <p>
                  To exercise any of these rights, please contact us at hello@leomayn.com.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif leading-tight text-slate mb-4">
                Cookies
              </h2>
              <p className="text-base leading-relaxed text-slate">
                We use minimal cookies necessary for the website to function. We do not
                use tracking cookies or third-party analytics that collect personal information
                without your consent.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif leading-tight text-slate mb-4">
                Data retention
              </h2>
              <p className="text-base leading-relaxed text-slate">
                We retain your personal information only for as long as necessary to fulfil
                the purposes for which it was collected, unless a longer retention period is
                required or permitted by law.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif leading-tight text-slate mb-4">
                Changes to this policy
              </h2>
              <p className="text-base leading-relaxed text-slate">
                We may update this privacy policy from time to time. We will notify you of
                any changes by posting the new policy on this page and updating the "Last
                updated" date.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif leading-tight text-slate mb-4">
                Contact us
              </h2>
              <p className="text-base leading-relaxed text-slate">
                If you have any questions about this privacy policy or how we handle your
                personal information, please contact us at:
              </p>
              <p className="text-base leading-relaxed text-slate mt-4">
                <strong>Leomayn Solutions Ltd</strong><br />
                Email: <a href="mailto:hello@leomayn.com" className="text-coral hover:underline">hello@leomayn.com</a>
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
