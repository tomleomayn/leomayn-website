import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Vendor Due Diligence: 7 Providers, 6 Dimensions, 109 Sources | Free Resource',
  description:
    'Seven model providers. Six dimensions each. 109 sourced references. The research your AI vendor probably hasn\'t shared with you. Free PDF download.',
  alternates: {
    canonical: '/resources/ai-vendor-due-diligence',
  },
  openGraph: {
    title: 'AI Vendor Due Diligence: 7 Providers, 6 Dimensions, 109 Sources | Free Resource',
    description:
      'Seven model providers. Six dimensions each. 109 sourced references. The research your AI vendor probably hasn\'t shared with you.',
    url: 'https://leomayn.com/resources/ai-vendor-due-diligence',
    siteName: 'Leomayn',
    locale: 'en_GB',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function VendorDueDiligenceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
