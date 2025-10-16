import React from 'react'
import Banner from '@/components/BlogSection/Banner'
import BlogCards from '@/components/BlogSection/BlogCards'

export default function Page({ searchParams }: { searchParams?: { page?: string } }) {
  const currentPage = Number(searchParams?.page || '1') || 1
  return (
    <div>
      <Banner />
      <BlogCards page={currentPage} perPage={6} />
    </div>
  )
}