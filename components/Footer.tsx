import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="pb-8 border-b border-white/20"></div>
        <div className="grid md:grid-cols-4 gap-12 mt-12">

          {/* Brand Column */}
          <div>
            <div className="inline-flex flex-col mb-4">
              <span className="font-sans font-bold text-white text-xl leading-none uppercase tracking-[0.12em]">
                LEOMAYN
              </span>
              <div className="bg-coral mt-1 h-[3px] w-full" />
            </div>
            <p className="font-sans text-sm text-white/60">
              Operations and AI consulting for improving knowledge work
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-sans text-sm font-bold text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm text-white/60 hover:text-white transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/services/diagnose" className="text-sm text-white/60 hover:text-white transition-colors">
                  Diagnose
                </Link>
              </li>
              <li>
                <Link href="/services/define" className="text-sm text-white/60 hover:text-white transition-colors">
                  Define
                </Link>
              </li>
              <li>
                <Link href="/services/deliver" className="text-sm text-white/60 hover:text-white transition-colors">
                  Deliver
                </Link>
              </li>
              <li>
                <Link href="/services/support" className="text-sm text-white/60 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-sans text-sm font-bold text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/approach" className="text-sm text-white/60 hover:text-white transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="/how-we-think" className="text-sm text-white/60 hover:text-white transition-colors">
                  How We Think
                </Link>
              </li>
              <li>
                <Link href="/why-leomayn" className="text-sm text-white/60 hover:text-white transition-colors">
                  Why Leomayn
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/60 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-sans text-sm font-bold text-white mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-white/60 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="text-sm text-white/60 hover:text-white transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-sm text-white/40 leading-relaxed">
            Registered in England.
            <br />
            Company registration number: 16856146.
            <br />
            © 2026 Leomayn Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
