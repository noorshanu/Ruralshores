import React from 'react'
import Banner from '@/components/CorporateSection/Banner'
import FieldMarketing from '@/components/CorporateSection/FieldMarketing'
import BrandAssurance from '@/components/CorporateSection/BrandAssurance'
import FrontlineExcellence from '@/components/CorporateSection/FrontlineExcellence'
import ThirdParty from '@/components/CorporateSection/ThirdParty'

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