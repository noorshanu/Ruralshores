import type { Metadata } from 'next'
import React from 'react'
import Banner from '@/components/BlogSection/Banner'
import BlogCards from '@/components/BlogSection/BlogCards'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights, updates, and stories from RuralShores Skills Academy.',
  alternates: { canonical: '/blog' },
  openGraph: { url: '/blog', images: [{ url: '/blogbanner.png' }] },
  keywords: ['blog', 'insights', 'news', 'updates'],
}

export default async function Page({ searchParams }: { searchParams?: Promise<{ page?: string }> }) {
  const sp = (await searchParams) || {}
  const currentPage = Number(sp.page || '1') || 1
  return (
    <div>
      <Banner />
      <BlogCards page={currentPage} perPage={6} />
    </div>
  )
}