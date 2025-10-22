import React from 'react'
import Banner from '@/components/EmployabilitySection/Banner'
import AboutSection from '@/components/EmployabilitySection/AboutSection'
import OurAproach from '@/components/EmployabilitySection/OurAproach'
import WhyRsa from '@/components/EmployabilitySection/WhyRsa'
import WhatweOffer from '@/components/EmployabilitySection/WhatweOffer'

const page = () => {
  return (
    <>
    <Banner />
    <AboutSection />
    <OurAproach />
   <WhatweOffer />
    <WhyRsa />
    </>
  )
}

export default page