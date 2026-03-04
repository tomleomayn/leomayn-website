'use client'

import Link from 'next/link'
import { useRef } from 'react'

interface ServiceCardProps {
  number: string
  title: string
  subtitle: string
  description: string
  href: string
  features: string[]
}

export default function ServiceCard({ number, title, subtitle, description, href, features }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="relative bg-pearl border border-steel rounded-lg p-8 hover:border-coral hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
    >
      {/* Spotlight overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(247, 201, 192, 0.12), transparent 40%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 w-16 h-16 bg-coral rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <span className="text-xl font-serif text-slate">{number}</span>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-serif leading-snug text-slate mb-1">{title}</h3>
            <p className="text-sm font-sans text-slate/60 uppercase tracking-wider">{subtitle}</p>
          </div>
        </div>

        <p className="text-base font-sans leading-relaxed text-slate mb-6">
          {description}
        </p>

        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <svg className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-sans text-slate">{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          href={href}
          className="inline-flex items-center justify-center font-sans font-semibold text-base bg-pearl border-2 border-slate text-slate px-6 py-3 rounded-lg hover:bg-slate hover:text-white transition-all w-full"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}
