import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Resources | Leomayn',
  description: 'Practical guides and tools for people working with and adopting AI. Free to download.',
  alternates: {
    canonical: '/resources',
  },
  openGraph: {
    title: 'Free Resources | Leomayn',
    description: 'Practical guides and tools for people working with and adopting AI. Free to download.',
    url: 'https://leomayn.com/resources',
    siteName: 'Leomayn',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
