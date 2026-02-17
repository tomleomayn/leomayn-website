import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Simple in-memory rate limiter
// Note: In serverless, this resets per instance. For production scale,
// consider Vercel KV or Upstash Redis for distributed rate limiting.
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour in milliseconds
const MAX_REQUESTS_CONTACT = 10 // 10 requests per hour per IP for contact form
const MAX_REQUESTS_PLANNER = 5 // 5 requests per hour per IP for planner generate

function getClientIP(request: NextRequest): string {
  // Vercel provides the real IP in x-forwarded-for
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim()
  }
  // Fallback for local development
  return request.headers.get('x-real-ip') || '127.0.0.1'
}

function isRateLimited(ip: string, maxRequests: number): { limited: boolean; remaining: number } {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  // Clean up expired entries periodically
  if (rateLimitMap.size > 10000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (now > value.resetTime) {
        rateLimitMap.delete(key)
      }
    }
  }

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return { limited: false, remaining: maxRequests - 1 }
  }

  if (record.count >= maxRequests) {
    return { limited: true, remaining: 0 }
  }

  record.count++
  return { limited: false, remaining: maxRequests - record.count }
}

// Rate-limited POST routes with their per-IP limits
const RATE_LIMITED_ROUTES: Record<string, number> = {
  '/api/contact': MAX_REQUESTS_CONTACT,
  '/api/planner/generate': MAX_REQUESTS_PLANNER,
}

export function middleware(request: NextRequest) {
  if (request.method !== 'POST') {
    return NextResponse.next()
  }

  const maxRequests = RATE_LIMITED_ROUTES[request.nextUrl.pathname]
  if (!maxRequests) {
    return NextResponse.next()
  }

  const ip = getClientIP(request)
  // Use path-specific key to separate rate limit counters
  const rateLimitKey = `${ip}:${request.nextUrl.pathname}`
  const { limited, remaining } = isRateLimited(rateLimitKey, maxRequests)

  if (limited) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      {
        status: 429,
        headers: {
          'Retry-After': '3600',
          'X-RateLimit-Limit': String(maxRequests),
          'X-RateLimit-Remaining': '0',
        },
      }
    )
  }

  const response = NextResponse.next()
  response.headers.set('X-RateLimit-Limit', String(maxRequests))
  response.headers.set('X-RateLimit-Remaining', String(remaining))
  return response
}

export const config = {
  matcher: '/api/:path*',
}
