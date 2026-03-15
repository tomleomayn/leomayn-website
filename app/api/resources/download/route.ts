import { NextResponse } from 'next/server'
import { z } from 'zod'
import { insertResourceLeadAndSign } from '@/lib/supabase'
import { upsertAttioPerson } from '@/lib/attio'

const downloadSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email address'),
  resource_slug: z.string().min(1),
})

// Map slug to storage path
const RESOURCE_MAP: Record<string, string> = {
  'claude-code-cheat-sheet': 'resources/claude-code-cheat-sheet.pdf',
  'claude-code-reporting-guide': 'resources/claude-code-reporting-guide.pdf',
}

const ALLOWED_ORIGINS = [
  'https://leomayn.com',
  'https://www.leomayn.com',
  'http://localhost:3000',
]

export async function POST(request: Request) {
  try {
    const origin = request.headers.get('origin')
    if (origin && !ALLOWED_ORIGINS.includes(origin)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const body = await request.json()
    const result = downloadSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: result.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const { name, email, resource_slug } = result.data

    const storagePath = RESOURCE_MAP[resource_slug]
    if (!storagePath) {
      return NextResponse.json({ error: 'Resource not found' }, { status: 404 })
    }

    // Insert lead + get signed URL
    const { success, signedUrl } = await insertResourceLeadAndSign(
      { email, name, resource_slug },
      storagePath
    )

    if (!success || !signedUrl) {
      return NextResponse.json({ error: 'Download failed' }, { status: 500 })
    }

    // Attio upsert — fire-and-forget
    if (process.env.ATTIO_API_KEY) {
      upsertAttioPerson({
        email,
        name,
        description: `Source: Resource Download (${resource_slug})`,
      }).catch((err) => console.error('Attio error:', err))
    }

    return NextResponse.json({ success: true, downloadUrl: signedUrl })
  } catch (error) {
    console.error('Resource download error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
