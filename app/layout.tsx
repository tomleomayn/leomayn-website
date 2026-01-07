import type { Metadata } from 'next'
import { DM_Serif_Display, Manrope, JetBrains_Mono } from 'next/font/google'
import GoogleTagManager from '@/components/GoogleTagManager'
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
  return (
    <html lang="en" className={`${dmSerif.variable} ${manrope.variable} ${jetbrainsMono.variable}`}>
      <body>
        <GoogleTagManager />
        {children}
      </body>
    </html>
  )
}
