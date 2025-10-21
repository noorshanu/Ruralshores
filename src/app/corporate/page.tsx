import type { Metadata } from 'next'
import React from 'react'
import Banner from '@/components/CorporateSection/Banner'
import FieldMarketing from '@/components/CorporateSection/FieldMarketing'
import BrandAssurance from '@/components/CorporateSection/BrandAssurance'
import FrontlineExcellence from '@/components/CorporateSection/FrontlineExcellence'
import ThirdParty from '@/components/CorporateSection/ThirdParty'

export const metadata: Metadata = {
  title: 'Corporate Services',
  description:
    'End-to-end workforce and marketing solutions for corporates: field marketing, brand assurance, frontline excellence, and third-party audits.',
  alternates: { canonical: '/corporate' },
  openGraph: { url: '/corporate', images: [{ url: '/corporate.png' }] },
  keywords: ['corporate services', 'field marketing', 'brand assurance', 'frontline'],
}

const page = () => {
  return (
    <>
      <Banner />
      <FieldMarketing />
      <BrandAssurance />
      <FrontlineExcellence />
      <ThirdParty />
    </>
  )
}

export default page