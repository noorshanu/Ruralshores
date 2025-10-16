import React from 'react'
import Banner from '@/components/BlogSection/Banner'
import BlogCards from '@/components/BlogSection/BlogCards'

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