import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Deployment Planner | Leomayn',
  description:
    'Answer seven questions about your firm and receive a personalised AI deployment report with prioritised workflow recommendations and business case numbers.',
  alternates: {
    canonical: '/planning-for-ai-deployment/start',
  },
  robots: {
    index: false,
  },
}

export default function WizardLayout({ children }: { children: React.ReactNode }) {
  // Clean layout — no NavBar/Footer during wizard for focused experience
  return <>{children}</>
}
