import type { MetadataRoute } from 'next'
import { getPublishedPosts, SITE_URL } from '@/lib/blog'

export const revalidate = 3600

const staticRoutes = [
  '',
  '/about',
  '/services',
  '/services/estate-planning',
  '/services/succession-planning',
  '/services/wealth-protection',
  '/services/planning-advisory',
  '/services/insurance-solutions',
  '/services/life-insurance',
  '/services/critical-illness',
  '/services/disability-insurance',
  '/services/comprehensive-financial-planning',
  '/services/retirement-planning',
  '/services/corporate-insurance-planning',
  '/services/investment-solutions',
  '/services/segregated-funds',
  '/services/investment-funds',
  '/resources/calculators',
  '/resources/calculators/financial-health-score',
  '/resources/calculators/cost-of-waiting',
  '/resources/calculators/insurance-needs',
  '/resources/calculators/critical-illness-needs',
  '/resources/calculators/rrsp-tax-savings',
  '/resources/calculators/disability-needs',
  '/resources/calculators/cpp-oas',
  '/resources/calculators/rrsp-vs-tfsa',
  '/resources/calculators/retirement',
  '/resources/calculators/cash-flow',
  '/guides',
  '/guides/estate-planning-business-owners',
  '/guides/critical-illness-vs-disability-insurance',
  '/guides/pension-options-after-leaving-employer',
  '/guides/rrsp-vs-tfsa-vs-fhsa',
  '/contact',
  '/blog',
  '/privacy-policy',
  '/terms-of-service',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPublishedPosts()
  const latest = posts[0]?.date

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: route === '/blog' && latest ? latest : undefined,
      changeFrequency: (route === '/blog' ? 'daily' : 'monthly') as 'daily' | 'monthly',
      priority: route === '' ? 1 : route === '/blog' ? 0.8 : 0.6,
    })),
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.updated || post.date,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
