import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email via Resend
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: 'Leomayn Website <hello@leomayn.com>',
        to: 'hello@leomayn.com',
        replyTo: email,
        subject: `New contact form submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      })
    }

    // If Attio integration is configured, create a lead
    if (process.env.ATTIO_API_KEY && process.env.ATTIO_WEBSITE_LEADS_LIST_ID) {
      try {
        await fetch(`https://api.attio.com/v2/lists/${process.env.ATTIO_WEBSITE_LEADS_LIST_ID}/entries`, {
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
      } catch (attioError) {
        // Log error but don't fail the request
        console.error('Attio integration error:', attioError)
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
