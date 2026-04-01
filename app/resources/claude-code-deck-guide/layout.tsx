import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Building Presentations with Claude Code | Free Setup Guide',
  description:
    'Config, component vocabulary, and the Playwright export pipeline. Everything you need to go from brief to branded PDF deck with Claude Code. Free download.',
  alternates: {
    canonical: '/resources/claude-code-deck-guide',
  },
  openGraph: {
    title: 'Building Presentations with Claude Code | Free Setup Guide',
    description:
      'Config, component vocabulary, and the Playwright export pipeline. Everything you need to go from brief to branded PDF deck with Claude Code.',
    url: 'https://leomayn.com/resources/claude-code-deck-guide',
    siteName: 'Leomayn',
    locale: 'en_GB',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function DeckGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
