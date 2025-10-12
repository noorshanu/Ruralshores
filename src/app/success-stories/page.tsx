import Banner from '@/components/SuccessSection/Banner'
import ClientTesto from '@/components/SuccessSection/ClientTesto'
import Studentsection from '@/components/SuccessSection/Studentsection'
import React from 'react'

const page = () => {
  return (
    <div>
      <Banner />
      <ClientTesto />
      <div className="pt-12">
        <div className='text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-black mb-4 font-alkes'>Student Testimonials</h2>
        </div>
      <Studentsection />
      </div>
    </div>
  )
}

export default page