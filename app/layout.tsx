import type { Metadata } from 'next'
import { DM_Serif_Display, Manrope, JetBrains_Mono } from 'next/font/google'
import GoogleTagManager from '@/components/GoogleTagManager'
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
  title: 'Leomayn - Fix Work, Then Scale with AI',
  description: 'We redesign knowledge work to remove bottlenecks, reduce repetitive work, and fix error-prone processes. Then we use automation and AI to free up humans to focus on work which creates real value.',
  icons: {
    icon: '/favicon-192.svg',
  },
  openGraph: {
    title: 'Leomayn - Fix Work, Then Scale with AI',
    description: 'We redesign knowledge work to remove bottlenecks, reduce repetitive work, and fix error-prone processes.',
    url: 'https://leomayn.com',
    siteName: 'Leomayn',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leomayn - Fix Work, Then Scale with AI',
    description: 'We redesign knowledge work to remove bottlenecks, reduce repetitive work, and fix error-prone processes.',
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
    "description": "Operations and AI consulting for knowledge work",
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
      </body>
    </html>
  )
}
