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
