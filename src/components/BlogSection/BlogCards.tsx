import React from 'react'
import BlogImage from './BlogImage'
import Link from 'next/link'

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

async function fetchPosts(page = 1, perPage = 6): Promise<{ posts: WpPost[]; totalPages: number }> {
  const url = new URL('/wp-json/wp/v2/posts', WP_BASE)
  url.searchParams.set('_embed', '')
  url.searchParams.set('per_page', String(perPage))
  url.searchParams.set('page', String(page))
  url.searchParams.set('_fields', 'id,slug,title,excerpt,date,_links,_embedded')
  const res = await fetch(url.toString(), { next: { revalidate: 300 } })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const posts = await res.json()
  const totalPages = Number(res.headers.get('X-WP-TotalPages') || '1')
  return { posts, totalPages }
}

export default async function BlogCards({ page = 1, perPage = 6 }: { page?: number; perPage?: number }) {
  const { posts, totalPages } = await fetchPosts(page, perPage)
  const stripHtml = (html: string) => html.replace(/<[^>]*>/g, '')
  const decodeEntities = (text: string) =>
    text
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&quot;|&#34;/g, '"')
      .replace(/&apos;|&#39;|&#8217;/g, "'")
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&hellip;|&#8230;/g, '…')
      .replace(/\[(?:&hellip;|&#8230;)\]/g, '…')
      .replace(/\s+/g, ' ')
      .trim()
  const truncate = (text: string, max: number) => (text.length > max ? text.slice(0, max - 1).trimEnd() + '…' : text)

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const featured: string | undefined = post._embedded?.['wp:featuredmedia']?.[0]?.source_url
              const author: string | undefined = post._embedded?.author?.[0]?.name
              const titleText = truncate(decodeEntities(stripHtml(post.title.rendered)), 90)
              const descText = truncate(decodeEntities(stripHtml(post.excerpt.rendered)), 180)
              return (
                <article key={post.id} className="relative overflow-hidden rounded-[12px] bg-white border border-[#B8B8B8] shadow-[0_0_10px_0_rgba(0,0,0,0.15)] transition-shadow duration-300 hover:shadow-[0_0_14px_0_rgba(0,0,0,0.18)]">
                  {/* Blog Tag */}
                  <div className="relative">
                    <div className="absolute right-4 top-4 z-10">
                      <span className="rounded-full bg-[#E75B4D] px-3 py-1 text-sm font-medium text-white">BLOG</span>
                    </div>

                    {/* Featured Image */}
                    <div className="relative h-48 w-full bg-gray-200">
                      <BlogImage src={featured} alt={titleText || 'Blog image'} fill className="object-cover" />

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
                    <h3 className="mb-3 line-clamp-2 text-xl font-bold leading-tight text-gray-800">{titleText}</h3>
                    <p className="mb-4 line-clamp-4 text-sm text-gray-600">{descText}</p>

                    <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-center gap-1 text-sm font-medium text-[#E75B4D] transition-colors hover:text-[#D54A3A]"
                      >
                        READ MORE
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      <span className="text-sm font-medium text-[#E75B4D]">{author || 'RSA'}</span>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-2">
              <Link
                href={`/blog?page=${Math.max(1, page - 1)}`}
                aria-disabled={page === 1}
                className={`rounded-md px-3 py-2 text-sm font-medium ${
                  page === 1 ? 'pointer-events-none opacity-40' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                Previous
              </Link>
              <span className="text-sm text-gray-600">Page {page} of {totalPages}</span>
              <Link
                href={`/blog?page=${Math.min(totalPages, page + 1)}`}
                aria-disabled={page >= totalPages}
                className={`rounded-md px-3 py-2 text-sm font-medium ${
                  page >= totalPages ? 'pointer-events-none opacity-40' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                Next
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}