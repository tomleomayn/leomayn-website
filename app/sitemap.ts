import type { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

const EXCLUDE = new Set([
  '/ai-planner/start',
  '/ai-planner/decline',
  '/not-found',
])

const OVERRIDES: Record<string, { priority?: number; changeFrequency?: ChangeFrequency }> = {
  '/':                    { priority: 1.0, changeFrequency: 'weekly' },
  '/services':            { priority: 0.9, changeFrequency: 'weekly' },
  '/applied-ai':          { priority: 0.9, changeFrequency: 'weekly' },
  '/contact':             { priority: 0.9, changeFrequency: 'monthly' },
  '/ai-planner':          { priority: 0.8, changeFrequency: 'monthly' },
  '/ai-readiness':        { priority: 0.8, changeFrequency: 'monthly' },
  '/privacy':             { priority: 0.3, changeFrequency: 'yearly' },
}

function discoverRoutes(dir: string, base: string = ''): string[] {
  const routes: string[] = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    if (entry.name === 'api' || entry.name === 'd') continue
    if (entry.name.startsWith('[')) continue

    const fullPath = path.join(dir, entry.name)
    const routePath = `${base}/${entry.name}`

    if (fs.existsSync(path.join(fullPath, 'page.tsx'))) {
      routes.push(routePath)
    }

    routes.push(...discoverRoutes(fullPath, routePath))
  }

  return routes
}

function defaultPriority(route: string): number {
  const depth = route.split('/').filter(Boolean).length
  if (depth <= 1) return 0.8
  return 0.7
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://leomayn.com'
  const now = new Date().toISOString().split('T')[0]
  const appDir = path.join(process.cwd(), 'app')

  const homePage = fs.existsSync(path.join(appDir, 'page.tsx')) ? ['/'] : []
  const discovered = [...homePage, ...discoverRoutes(appDir)]
  const routes = discovered.filter(r => !EXCLUDE.has(r))

  return routes.map(route => {
    const override = OVERRIDES[route] ?? {}
    return {
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency: override.changeFrequency ?? 'monthly',
      priority: override.priority ?? defaultPriority(route),
    }
  })
}
