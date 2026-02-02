import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Simple in-memory rate limiter
// Note: In serverless, this resets per instance. For production scale,
// consider Vercel KV or Upstash Redis for distributed rate limiting.
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour in milliseconds
const MAX_REQUESTS = 10 // 10 requests per hour per IP

function getClientIP(request: NextRequest): string {
  // Vercel provides the real IP in x-forwarded-for
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim()
  }
  // Fallback for local development
  return request.headers.get('x-real-ip') || '127.0.0.1'
}

function isRateLimited(ip: string): { limited: boolean; remaining: number } {
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
    return { limited: false, remaining: MAX_REQUESTS - 1 }
  }

  if (record.count >= MAX_REQUESTS) {
    return { limited: true, remaining: 0 }
  }

  record.count++
  return { limited: false, remaining: MAX_REQUESTS - record.count }
}

export function middleware(request: NextRequest) {
  // Only rate limit the contact API endpoint
  if (request.nextUrl.pathname === '/api/contact' && request.method === 'POST') {
    const ip = getClientIP(request)
    const { limited, remaining } = isRateLimited(ip)

    if (limited) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: {
            'Retry-After': '3600',
            'X-RateLimit-Limit': String(MAX_REQUESTS),
            'X-RateLimit-Remaining': '0',
          },
        }
      )
    }

    // Add rate limit headers to successful requests
    const response = NextResponse.next()
    response.headers.set('X-RateLimit-Limit', String(MAX_REQUESTS))
    response.headers.set('X-RateLimit-Remaining', String(remaining))
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*',
}
