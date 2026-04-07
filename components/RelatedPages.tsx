import Link from 'next/link'

interface RelatedPage {
  href: string
  title: string
  description: string
}

interface RelatedPagesProps {
  pages: RelatedPage[]
  heading?: string
}

export default function RelatedPages({ pages, heading = 'Related' }: RelatedPagesProps) {
  return (
    <section className="bg-pearl border-t border-steel py-16 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-serif text-slate mb-8">{heading}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map(({ href, title, description }) => (
            <Link
              key={href}
              href={href}
              className="group block p-6 bg-white border border-steel rounded-lg hover:border-coral hover:-translate-y-0.5 transition-all duration-200"
            >
              <h3 className="text-lg font-serif text-slate mb-2 group-hover:text-coral transition-colors">
                {title}
              </h3>
              <p className="text-sm font-sans text-slate/70 leading-relaxed">
                {description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
