import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Deployment Planner | Free Assessment Tool - Leomayn',
  description: 'Score your AI deployment idea against 40 criteria in under 10 minutes. Get a personalised report with risk flags, cost estimates, and a recommended next step.',
  alternates: {
    canonical: '/ai-planner',
  },
  openGraph: {
    title: 'AI Deployment Planner | Free Assessment Tool - Leomayn',
    description: 'Score your AI deployment idea against 40 criteria in under 10 minutes. Get a personalised report with risk flags, cost estimates, and a recommended next step.',
    url: 'https://leomayn.com/ai-planner',
    siteName: 'Leomayn',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function PlannerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
