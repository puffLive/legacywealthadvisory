'use client'

import * as React from 'react'
import type { PostMeta } from '@/lib/blog-shared'
import { cn } from '@/lib/utils'
import { PostCard } from './post-card'

const ALL = 'All topics'

export function BlogList({ posts }: { posts: PostMeta[] }) {
  const categories = React.useMemo(
    () => [ALL, ...Array.from(new Set(posts.map((p) => p.category))).sort()],
    [posts]
  )
  const [active, setActive] = React.useState(ALL)
  const visible = active === ALL ? posts : posts.filter((p) => p.category === active)

  if (posts.length === 0) {
    return (
      <p className="text-center text-lg text-gray-600 py-12">
        New articles are on the way. Please check back soon.
      </p>
    )
  }

  return (
    <>
      {categories.length > 2 && (
        <div className="flex flex-wrap justify-center gap-2 mb-12" role="group" aria-label="Filter articles by topic">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={active === category}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium border transition-colors',
                active === category
                  ? 'bg-primary-950 border-primary-950 text-white'
                  : 'bg-white border-gray-300 text-primary-950 hover:border-primary-950'
              )}
            >
              {category}
            </button>
          ))}
        </div>
      )}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  )
}
