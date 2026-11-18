import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

import { BLOG_TIMEZONE, type PostMeta } from './blog-shared'

export { SITE_URL, BLOG_TIMEZONE, formatPostDate } from './blog-shared'
export type { PostMeta, PostStatus } from './blog-shared'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export interface Post extends PostMeta {
  html: string
}

/** Today's date in Toronto as YYYY-MM-DD, so posts go live at local midnight. */
export function todayInToronto(now: Date = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: BLOG_TIMEZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now)
}

function normaliseDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  return String(value ?? '').trim()
}

function readPostFile(fileName: string): Post | null {
  const slug = fileName.replace(/\.md$/, '')
  const raw = fs.readFileSync(path.join(BLOG_DIR, fileName), 'utf8')
  const { data, content } = matter(raw)

  const required = ['title', 'date', 'summary', 'category', 'status', 'seoDescription']
  const missing = required.filter((key) => !data[key])
  if (missing.length > 0) {
    console.warn(`[blog] Skipping ${fileName}: missing ${missing.join(', ')}`)
    return null
  }

  const words = content.split(/\s+/).filter(Boolean).length

  return {
    slug,
    title: String(data.title),
    date: normaliseDate(data.date),
    updated: data.updated ? normaliseDate(data.updated) : undefined,
    summary: String(data.summary),
    category: String(data.category),
    status: data.status === 'published' ? 'published' : 'draft',
    seoDescription: String(data.seoDescription),
    image: data.image ? String(data.image) : undefined,
    imageAlt: data.imageAlt ? String(data.imageAlt) : undefined,
    readingMinutes: Math.max(1, Math.round(words / 220)),
    html: marked.parse(content, { async: false }) as string,
  }
}

function readAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md') && !f.startsWith('_'))
    .map(readPostFile)
    .filter((p): p is Post => p !== null)
}

/** A post is live when it is marked published and its date has arrived in Toronto. */
export function isLive(post: PostMeta, today: string = todayInToronto()): boolean {
  return post.status === 'published' && post.date <= today
}

/** Live posts, newest first. Drafts and future-dated posts are left out. */
export function getPublishedPosts(): Post[] {
  const today = todayInToronto()
  return readAllPosts()
    .filter((p) => isLive(p, today))
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.title.localeCompare(b.title)))
}

export function getPostBySlug(slug: string): Post | null {
  return getPublishedPosts().find((p) => p.slug === slug) ?? null
}

export function getRelatedPosts(post: Post, limit = 3): Post[] {
  const others = getPublishedPosts().filter((p) => p.slug !== post.slug)
  const sameCategory = others.filter((p) => p.category === post.category)
  const rest = others.filter((p) => p.category !== post.category)
  return [...sameCategory, ...rest].slice(0, limit)
}

export function toMeta(post: Post): PostMeta {
  // Strip the rendered body so client components only receive what they need.
  const meta: PostMeta & { html?: string } = { ...post }
  delete meta.html
  return meta
}

