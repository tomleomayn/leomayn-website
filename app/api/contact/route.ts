import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

// Validation schema
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
  email: z.string().email('Invalid email address'),
  company: z.string().max(100, 'Company name too long').optional().default(''),
  message: z.string().min(1, 'Message is required').max(5000, 'Message too long'),
})

// Escape HTML to prevent XSS in email templates
function escapeHtml(text: string): string {
  const htmlEntities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (char) => htmlEntities[char])
}

// Allowed origins for CORS protection
const ALLOWED_ORIGINS = [
  'https://leomayn.com',
  'https://www.leomayn.com',
  'http://localhost:3000', // Local development
]

export async function POST(request: Request) {
  try {
    // Origin validation
    const origin = request.headers.get('origin')
    if (origin && !ALLOWED_ORIGINS.includes(origin)) {
      return NextResponse.json(
        { error: 'Forbidden' },
        { status: 403 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validationResult = contactSchema.safeParse(body)

    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: validationResult.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const { name, email, company, message } = validationResult.data

    // Escape HTML for email template
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeCompany = escapeHtml(company || '')
    const safeMessage = escapeHtml(message)

    // Send email via Resend
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: 'Leomayn Website <website@leomayn.com>',
        to: 'website@leomayn.com',
        replyTo: email,
        subject: `New contact form submission from ${safeName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          ${safeCompany ? `<p><strong>Company:</strong> ${safeCompany}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${safeMessage.replace(/\n/g, '<br>')}</p>
        `,
      })
    }

    // If Attio integration is configured, create a lead
    if (process.env.ATTIO_API_KEY && process.env.ATTIO_WEBSITE_LEADS_LIST_ID) {
      try {
        const attioResponse = await fetch(`https://api.attio.com/v2/lists/${process.env.ATTIO_WEBSITE_LEADS_LIST_ID}/entries`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.ATTIO_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: {
              values: {
                'name': [{ value: name }],
                'email_addresses': [{ email_address: email }],
                ...(company && { 'company': [{ value: company }] }),
                'notes': [{ value: message }],
                'source': [{ value: 'Website Contact Form' }],
              }
            }
          })
        })

        if (!attioResponse.ok) {
          // Log error internally but don't expose details to client
          console.error('Attio API error:', attioResponse.status)
        }
      } catch (attioError) {
        // Log error but don't fail the request
        console.error('Attio integration error')
      }
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
