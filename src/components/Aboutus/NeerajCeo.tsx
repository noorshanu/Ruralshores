import React from 'react'
import Image from 'next/image'
import { BsLinkedin } from 'react-icons/bs'

const NeerajCeo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 bg-[#f5f5f5] rounded-[50px]  h-[330px]">
        <div className="max-w-3xl mx-auto">
      

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
            {/* CEO Image */}
            <div className="relative">
              <div className=" ">
                <Image
                  src="/neerajceo.jpg"
                  alt="Neeraj - CEO"
                  width={500}
                  height={800}
                  className=" rounded-[40px] w-full h-full object-cover -mt-6"
                />
              </div>
            </div>

            {/* CEO Information */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-[50px] font-bold text-black font-makozin mb-4">
                Neeraj Agarwal
              </h3>
              <p className="text-2xl text-[#E75B4D] font-makozin font-medium mb-2 flex items-center gap-2">
               CEO
               <span className="space-y-4 text-gray-700 leading-relaxed">
                 <BsLinkedin className="text-lg -mt-1 text-black" />
               </span>
              </p>
              
          
            </div>
          </div>
        </div>

  

   
      </div>
      <div className=" container mx-auto px-4 ">
            <p className="text-black leading-relaxed text-2xl font-makozin pt-18 pb-8">
            The organization was founded under the leadership of Neeraj Agarwal, an IIT Delhi alumnus with two decades of experience at NIIT Ltd. Since then, RSA has transformed thousands of lives, expanding from just 4 centers in 3 states to a pan-India presence, working across sectors, industries, and communities. 
            </p>
        </div>
      <div className="text-center bg-[#f5f5f5] py-10" >
            <h2 className="text-4xl font-medium text-black font-alkes">
            A Decade of Impact
            </h2>
        </div>
    </section>
  )
}

export default NeerajCeo