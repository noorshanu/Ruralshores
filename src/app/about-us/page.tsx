import type { Metadata } from 'next'
import React from 'react'
import Banner from '@/components/Aboutus/Banner'
import AboutInfo from '@/components/Aboutus/AboutInfo'
import NeerajCeo from '@/components/Aboutus/NeerajCeo'
import Roadmap from '@/components/Aboutus/Roadmap'
import Vision from '@/components/Vision'
import FaqRsa from '@/components/Aboutus/FaqRsa'
import WhatWeDo from '@/components/Aboutus/WhatWeDo'
import RSACompetitive from '@/components/Aboutus/RSACompetitive'

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
      <div className="bg-white rotate-180  " aria-hidden="true" data-negative="false">
			<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100%"  fill="#f7f3f2" viewBox="0 0 1000 100" preserveAspectRatio="none">
	<path className="bg-white" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
</svg>		</div>
<WhatWeDo />
      <RSACompetitive />
    
      
    </div>
  )
}

export default page