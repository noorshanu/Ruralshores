import React from 'react'
import BlogImage from './BlogImage'

type WpPost = {
  id: number
  slug: string
  title: { rendered: string }
  excerpt: { rendered: string }
  date: string
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url?: string }>
    author?: Array<{ name?: string }>
  }
}

const WP_BASE = 'https://www.ruralshoresskillsacademy.com'

async function fetchPosts(): Promise<WpPost[]> {
  const url = new URL('/wp-json/wp/v2/posts', WP_BASE)
  url.searchParams.set('_embed', '')
  url.searchParams.set('per_page', '6')
  url.searchParams.set('_fields', 'id,slug,title,excerpt,date,_links,_embedded')
  const res = await fetch(url.toString(), { next: { revalidate: 3600 } })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json()
}

export default async function BlogCards() {
  const posts = await fetchPosts()
  const stripHtml = (html: string) => html.replace(/<[^>]*>/g, '')

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const featured: string | undefined = post._embedded?.['wp:featuredmedia']?.[0]?.source_url
              const author: string | undefined = post._embedded?.author?.[0]?.name
              return (
                <article key={post.id} className="relative overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
                  {/* Blog Tag */}
                  <div className="relative">
                    <div className="absolute right-4 top-4 z-10">
                      <span className="rounded-full bg-[#E75B4D] px-3 py-1 text-sm font-medium text-white">BLOG</span>
                    </div>

                    {/* Featured Image */}
                    <div className="relative h-48 w-full bg-gray-200">
                      <BlogImage src={featured} alt="Blog image" fill className="object-cover" />

                      {/* Author initials */}
                      <div className="absolute bottom-0 left-4 translate-y-1/2 transform">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-gray-300">
                          <span className="text-sm font-bold text-gray-600">
                            {(author || 'SA')
                              .split(' ')
                              .map((s) => s[0])
                              .join('')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 pt-8">
                    <h3
                      className="mb-3 text-xl font-bold leading-tight text-gray-800"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    <p className="mb-4 line-clamp-4 text-sm text-gray-600">{stripHtml(post.excerpt.rendered)}</p>

                    <div className="flex items-center justify-between">
                      <a
                        href={`/blog/${post.slug}`}
                        className="flex items-center gap-1 text-sm font-medium text-[#E75B4D] transition-colors hover:text-[#D54A3A]"
                      >
                        READ MORE
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                      <span className="text-sm font-medium text-[#E75B4D]">{author || 'RSA'}</span>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}