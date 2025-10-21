import type { MetadataRoute } from 'next'

const BASE = 'https://www.ruralshoresskillsacademy.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/about-us',
    '/corporate',
    '/contact-us',
    '/careers',
    '/marketing-as-a-service',
    '/our-team',
    '/success-stories',
    '/faq',
    '/blog',
  ].map((route) => ({ url: `${BASE}${route}`, changeFrequency: 'weekly', priority: route === '' ? 1 : 0.7 }))

  try {
    const res = await fetch(`${BASE}/wp-json/wp/v2/posts?per_page=10&_fields=slug,modified`, { next: { revalidate: 300 } })
    if (res.ok) {
      const posts: Array<{ slug: string; modified: string }> = await res.json()
      const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
        url: `${BASE}/blog/${p.slug}`,
        lastModified: p.modified ? new Date(p.modified) : undefined,
        changeFrequency: 'monthly',
        priority: 0.6,
      }))
      return [...staticRoutes, ...postRoutes]
    }
  } catch {}

  return staticRoutes
}
