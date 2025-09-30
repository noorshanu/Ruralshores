import React from 'react'
import Image from 'next/image'

const NeerajCeo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#E75B4D] mb-3">
              Leadership
            </h2>
            <div className="w-16 h-1 bg-[#FFD700] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* CEO Image */}
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/neerajceo.jpg"
                  alt="Neeraj - CEO"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* CEO Information */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Neeraj
              </h3>
              <p className="text-xl text-[#E75B4D] font-semibold mb-6">
                Chief Executive Officer
              </p>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  As the CEO of Rural Shores, Neeraj brings visionary leadership and extensive 
                  experience in community development and social impact initiatives.
                </p>
                <p>
                  Under his guidance, Rural Shores has grown to become a leading organization 
                  in transforming communities through innovative training, monitoring, and 
                  auditing solutions.
                </p>
                <p>
                  His commitment to excellence and sustainable development drives our mission 
                  to create meaningful impact across diverse communities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" ">
            <p className="text-black leading-relaxed text-2xl font-makozin pt-18 pb-8">
            The organization was founded under the leadership of Neeraj Agarwal, an IIT Delhi alumnus with two decades of experience at NIIT Ltd. Since then, RSA has transformed thousands of lives, expanding from just 4 centers in 3 states to a pan-India presence, working across sectors, industries, and communities. 
            </p>
        </div>

   
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