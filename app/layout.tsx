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
  title: 'Fix work, then scale with AI | Leomayn',
  description: 'We help service organisations remove delivery friction to free up capacity, reduce rework, and improve margins.',
  icons: {
    icon: '/favicon-192.svg',
  },
  openGraph: {
    title: 'Fix work, then scale with AI | Leomayn',
    description: 'We help service organisations remove delivery friction to free up capacity, reduce rework, and improve margins.',
    url: 'https://leomayn.com',
    siteName: 'Leomayn',
    locale: 'en_GB',
    type: 'website',
    images: [{
      url: 'https://leomayn.com/logo/logo-social-1200x630.png',
      width: 1200,
      height: 630,
      alt: 'Leomayn - Workflow redesign and AI implementation',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fix work, then scale with AI | Leomayn',
    description: 'We help service organisations remove delivery friction to free up capacity, reduce rework, and improve margins.',
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
    "logo": "https://leomayn.com/images/leomayn-logo.png",
    "description": "Workflow redesign and AI implementation for service organisations",
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
