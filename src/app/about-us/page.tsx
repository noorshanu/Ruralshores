import React from 'react'
import Banner from '@/components/Aboutus/Banner'
import AboutInfo from '@/components/Aboutus/AboutInfo'
import NeerajCeo from '@/components/Aboutus/NeerajCeo'
import Roadmap from '@/components/Aboutus/Roadmap'
import Vision from '@/components/Vision'

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
      
    </div>
  )
}

export default page