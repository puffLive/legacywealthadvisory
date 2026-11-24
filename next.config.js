/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    // Blog articles are read from disk at request time (for scheduled posts),
    // so ship the Markdown files with the server functions.
    outputFileTracingIncludes: {
      '/*': ['./content/blog/**/*'],
      '/blog': ['./content/blog/**/*'],
      '/blog/[slug]': ['./content/blog/**/*'],
      '/sitemap.xml': ['./content/blog/**/*'],
    },
  },
}

module.exports = nextConfig
