import type { Metadata } from 'next'
import React from 'react'
import Banner from '@/components/MassSection/Banner'
import AboutSection from '@/components/MassSection/AboutSection'
import WhatweOffer from '@/components/MassSection/WhatweOffer'
import OurAproach from '@/components/MassSection/OurAproach'
import WhyRsa from '@/components/MassSection/WhyRsa'

export const metadata: Metadata = {
  title: "Marketing as a Service (MaaS)",
  description:
    "Why RSA's MaaS: end-to-end, multilingual, cost-effective, and scalable marketing delivery with authentic storytelling.",
  alternates: { canonical: '/marketing-as-a-service' },
  openGraph: { url: '/marketing-as-a-service', images: [{ url: '/maasbanner.png' }] },
  keywords: ['MaaS', 'marketing as a service', 'marketing', 'campaigns', 'India'],
}
const page = () => {
  return (
    <div>
      <Banner />    
      <div className="pt-12">
        <AboutSection />
      </div>
      <div className="pt-4">
        <WhatweOffer />
      </div>
      <div className="pt-4">
        <OurAproach />
      </div>
      <div className="pt-4">
        <WhyRsa />
      </div>
      <div className="my-12 py-14 text-center bg-[#F6F1EE]">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-3xl font-makozin  text-[#FF743E]">Smart Marketing, Real Impact, Rural Strength</h2>
         
        </div>
      </div>
    </div>
  )
}

export default page