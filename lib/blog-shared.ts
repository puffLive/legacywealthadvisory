// Client-safe blog helpers and types (no Node APIs).

export const SITE_URL = 'https://www.legacywealthadvisory.ca'
export const BLOG_TIMEZONE = 'America/Toronto'

export type PostStatus = 'published' | 'draft'

export interface PostMeta {
  slug: string
  title: string
  date: string // YYYY-MM-DD, the day the article goes live (Toronto time)
  updated?: string
  summary: string
  category: string
  status: PostStatus
  seoDescription: string
  image?: string
  imageAlt?: string
  readingMinutes: number
}

export function formatPostDate(date: string): string {
  const [y, m, d] = date.split('-').map(Number)
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}
