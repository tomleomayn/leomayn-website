import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://leomayn.com'
  const now = new Date().toISOString().split('T')[0]

  // Core pages — high priority, change frequently
  const corePages = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/applied-ai', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
  ]

  // Service pages
  const servicePages = [
    '/services/diagnose',
    '/services/define',
    '/services/deliver',
    '/services/support',
  ].map(path => ({
    path,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }))

  // Applied AI articles
  const appliedAiPages = [
    '/applied-ai/why-ai-projects-fail',
    '/applied-ai/beyond-hourly-billing',
    '/applied-ai/scale-without-headcount',
    '/applied-ai/operating-architecture',
    '/applied-ai/ai-agents-for-business',
    '/applied-ai/sophistication-gap',
  ].map(path => ({
    path,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }))

  // Tools
  const toolPages = [
    { path: '/ai-planner', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/ai-readiness', priority: 0.8, changeFrequency: 'monthly' as const },
  ]

  // Company / thought leadership pages
  const companyPages = [
    '/approach',
    '/how-we-think',
    '/about',
    '/why-leomayn',
    '/ai-consulting',
    '/security-compliance',
    '/faq',
  ].map(path => ({
    path,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }))

  // Resources
  const resourcePages = [
    '/resources',
    '/resources/claude-code-cheat-sheet',
    '/resources/claude-code-reporting-guide',
    '/resources/ai-vendor-due-diligence',
    '/resources/claude-code-deck-guide',
  ].map(path => ({
    path,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }))

  // Case studies
  const caseStudyPages = [
    '/why-leomayn/case-studies/emsere',
  ].map(path => ({
    path,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }))

  // Legal
  const legalPages = [
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  const allPages = [
    ...corePages,
    ...servicePages,
    ...appliedAiPages,
    ...toolPages,
    ...companyPages,
    ...resourcePages,
    ...caseStudyPages,
    ...legalPages,
  ]

  return allPages.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}
