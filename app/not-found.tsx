import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen">
        <section className="bg-pearl py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-9xl font-serif text-coral mb-6">
              404
            </h1>
            <h2 className="text-4xl font-serif text-slate mb-6">
              Page not found
            </h2>
            <p className="text-xl text-slate mb-8">
              The page you are looking for does not exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center font-sans font-semibold text-base bg-coral text-slate px-8 py-4 rounded-md hover:bg-coral-dark transition-all min-w-[220px]"
              >
                Go to Homepage
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center font-sans font-semibold text-base border-2 border-slate text-slate px-8 py-4 rounded-md hover:bg-slate hover:text-white transition-all min-w-[220px]"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
