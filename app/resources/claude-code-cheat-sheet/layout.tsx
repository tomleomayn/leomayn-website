import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '9 Ways to Teach Claude Code How You Work | Free Cheat Sheet',
  description:
    'From first session to full operating system. Nine techniques pulled from a working system that runs a consulting practice. Free PDF download.',
  alternates: {
    canonical: '/resources/claude-code-cheat-sheet',
  },
  openGraph: {
    title: '9 Ways to Teach Claude Code How You Work | Free Cheat Sheet',
    description:
      'From first session to full operating system. Nine techniques pulled from a working system that runs a consulting practice.',
    url: 'https://leomayn.com/resources/claude-code-cheat-sheet',
    siteName: 'Leomayn',
    locale: 'en_GB',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function CheatSheetLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
