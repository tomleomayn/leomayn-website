import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Leomayn',
  description: 'Book a 30-minute discovery call or send us a message. We respond to all enquiries within one business day.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
