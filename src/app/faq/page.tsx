import type { Metadata } from 'next'
import React from 'react'
import FaqList from '@/components/FaqSection/FaqList'
import Banner from '@/components/FaqSection/Banner'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about RSA\'s programs and services.',
  alternates: { canonical: '/faq' },
  openGraph: { url: '/faq', images: [{ url: '/faq.png' }] },
  keywords: ['faq', 'questions', 'help', 'support'],
}

const page = () => {
  return (
    <div>
      <Banner />
    <FaqList />
    </div>

  )
}

export default page