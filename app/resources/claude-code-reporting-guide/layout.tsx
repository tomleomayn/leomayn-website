import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Claude Code Does Your Reporting | Free Step-by-Step Guide',
  description:
    'Turn your manual status report into an automated dashboard in 20 minutes. Nine steps, a ready-to-use prompt template, and a worked example. Free PDF.',
  alternates: {
    canonical: '/resources/claude-code-reporting-guide',
  },
  openGraph: {
    title: 'Claude Code Does Your Reporting | Free Step-by-Step Guide',
    description:
      'Turn your manual status report into an automated dashboard in 20 minutes. Nine steps, a prompt template, and a worked example.',
    url: 'https://leomayn.com/resources/claude-code-reporting-guide',
    siteName: 'Leomayn',
    locale: 'en_GB',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ReportingGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
