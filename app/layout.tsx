import type { Metadata } from 'next'
import { DM_Serif_Display, Manrope, JetBrains_Mono } from 'next/font/google'
import GoogleTagManager from '@/components/GoogleTagManager'
import CookieBanner from '@/components/CookieBanner'
import SchemaMarkup from '@/components/SchemaMarkup'
import './globals.css'

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const manrope = Manrope({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://leomayn.com'),
  title: 'AI Consulting and Managed AI Agents | Leomayn',
  description: 'We help ambitious businesses do more with AI. We design, build, and manage AI agents that get real work done.',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon-192.svg',
  },
  openGraph: {
    title: 'AI Consulting and Managed AI Agents | Leomayn',
    description: 'We help ambitious businesses do more with AI. We design, build, and manage AI agents that get real work done.',
    url: 'https://leomayn.com',
    siteName: 'Leomayn',
    locale: 'en_GB',
    type: 'website',
    images: [{
      url: 'https://leomayn.com/logo/logo-social-1200x630.png',
      width: 1200,
      height: 630,
      alt: 'Leomayn - AI agents designed, built, and managed',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Consulting and Managed AI Agents | Leomayn',
    description: 'We help ambitious businesses do more with AI. We design, build, and manage AI agents that get real work done.',
    images: ['https://leomayn.com/logo/logo-social-1200x630.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Leomayn",
    "legalName": "Leomayn Limited",
    "url": "https://leomayn.com",
    "logo": "https://leomayn.com/logo/logo-horizontal.svg",
    "description": "We design, build, and manage AI agents that get real work done",
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "name": "Tom Jones"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GB"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "hello@leomayn.com"
    },
    "sameAs": [
      "https://www.linkedin.com/in/thomasallanjones/"
    ],
    "taxID": "16856146"
  }

  return (
    <html lang="en" className={`${dmSerif.variable} ${manrope.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link href="/webfonts/uicons-regular-straight.css" rel="stylesheet" />
        <SchemaMarkup data={organizationSchema} />
      </head>
      <body>
        <GoogleTagManager />
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
