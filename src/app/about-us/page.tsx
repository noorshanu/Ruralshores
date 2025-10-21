import type { Metadata } from 'next'
import React from 'react'
import Banner from '@/components/Aboutus/Banner'
import AboutInfo from '@/components/Aboutus/AboutInfo'
import NeerajCeo from '@/components/Aboutus/NeerajCeo'
import Roadmap from '@/components/Aboutus/Roadmap'
import Vision from '@/components/Vision'
import FaqRsa from '@/components/Aboutus/FaqRsa'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about RuralShores Skills Academy — our mission, leadership, and journey to empower rural youth and enable businesses.',
  alternates: { canonical: '/about-us' },
  openGraph: { url: '/about-us', images: [{ url: '/aboutus.png' }] },
  keywords: ['About RSA', 'mission', 'leadership', 'rural youth', 'India'],
}

const page = () => {
  return (
    <div>
      <Banner />
      <AboutInfo />
      <NeerajCeo />
      <Roadmap />
      <div>
        <Vision/>
      </div>
      <FaqRsa />
      
    </div>
  )
}

export default page