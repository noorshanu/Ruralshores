import React from 'react'
import BlogImage from '@/components/BlogSection/BlogImage'

const WP_BASE = 'https://www.ruralshoresskillsacademy.com'

async function fetchPost(slug: string) {
  const url = new URL('/wp-json/wp/v2/posts', WP_BASE)
  url.searchParams.set('slug', slug)
  url.searchParams.set('_embed', '')
  const res = await fetch(url.toString(), { next: { revalidate: 300 } })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const arr = await res.json()
  return arr?.[0]
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await fetchPost(slug)
  if (!post) return <div className="container mx-auto px-4 py-20">Not found</div>

  const featured: string | undefined = post._embedded?.['wp:featuredmedia']?.[0]?.source_url
  const contentHtml: string = post.content?.rendered || ''
  // Add client-side fallback to all inline images inside content
  const contentWithFallback = contentHtml.replace(/<img\b([^>]*)>/gi, (m, attrs) => {
    if (/onerror=/i.test(attrs)) return `<img${attrs}>`
    return `<img${attrs} onerror="this.onerror=null;this.src='/blogcard.webp'">`
  })

  return (
    <section className="py-16">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="mb-6 text-3xl font-bold" dangerouslySetInnerHTML={{ __html: post.title?.rendered }} />
        <div className="relative mb-8 h-72 w-full">
          <BlogImage src={featured} alt="Featured image" fill className="rounded-lg object-cover" />
        </div>
        <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: contentWithFallback }} />
      </div>
    </section>
  )
}


