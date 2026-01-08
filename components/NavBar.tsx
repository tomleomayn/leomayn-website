'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-steel">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex flex-col group">
            <span className="font-sans font-bold text-slate text-2xl leading-none uppercase tracking-[0.12em] transition-opacity group-hover:opacity-70">
              LEOMAYN
            </span>
            <div className="bg-coral mt-1 h-[3px] w-full transition-all group-hover:h-[4px]" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Services Dropdown */}
            <div className="relative group ml-4">
              <Link
                href="/services"
                className={`text-sm font-sans flex items-center gap-1 ${isActive('/services') || pathname?.startsWith('/services/') ? 'text-slate font-semibold border-b-2 border-coral pb-1' : 'text-slate/70 hover:text-slate'}`}
              >
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-[1px] w-48 bg-white border border-steel rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="/services/diagnose" className="block px-4 py-2 text-sm font-sans text-slate/70 hover:text-slate hover:bg-chalk">
                  Diagnose
                </Link>
                <Link href="/services/define" className="block px-4 py-2 text-sm font-sans text-slate/70 hover:text-slate hover:bg-chalk">
                  Define
                </Link>
                <Link href="/services/deliver" className="block px-4 py-2 text-sm font-sans text-slate/70 hover:text-slate hover:bg-chalk">
                  Deliver
                </Link>
                <Link href="/services/support" className="block px-4 py-2 text-sm font-sans text-slate/70 hover:text-slate hover:bg-chalk">
                  Support
                </Link>
              </div>
            </div>

            <Link
              href="/approach"
              className={`text-sm font-sans ${isActive('/approach') ? 'text-slate font-semibold border-b-2 border-coral pb-1' : 'text-slate/70 hover:text-slate'}`}
            >
              Our Approach
            </Link>

            <Link
              href="/how-we-think"
              className={`text-sm font-sans ${isActive('/how-we-think') ? 'text-slate font-semibold border-b-2 border-coral pb-1' : 'text-slate/70 hover:text-slate'}`}
            >
              How We Think
            </Link>

            <Link
              href="/why-leomayn"
              className={`text-sm font-sans ${isActive('/why-leomayn') ? 'text-slate font-semibold border-b-2 border-coral pb-1' : 'text-slate/70 hover:text-slate'}`}
            >
              Why Leomayn
            </Link>

            <Link href="/contact" className="inline-flex items-center justify-center font-sans font-semibold text-sm bg-slate text-white px-6 py-3 rounded-lg hover:bg-slate-light transition-all whitespace-nowrap">
              Book Discovery Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link href="/" className="block py-2 text-sm font-sans text-slate">Home</Link>
            <Link href="/services" className="block py-2 text-sm font-sans text-slate">Services</Link>
            <Link href="/approach" className="block py-2 text-sm font-sans text-slate">Our Approach</Link>
            <Link href="/how-we-think" className="block py-2 text-sm font-sans text-slate">How We Think</Link>
            <Link href="/why-leomayn" className="block py-2 text-sm font-sans text-slate">Why Leomayn</Link>
            <Link href="/contact" className="block py-2 text-sm font-sans text-coral font-semibold">Book Discovery Call</Link>
          </div>
        )}
      </div>
    </nav>
  )
}
