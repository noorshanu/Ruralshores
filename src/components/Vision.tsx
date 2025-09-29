import React from 'react'
import Image from 'next/image'

const Vision = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Our Vision Card */}
            <div className="relative">
              {/* Icon Circle */}
              <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-10">
              <Image src="/vision.png" alt="Vision" width={125} height={100} />
              </div>
              
              {/* Card */}
              <div className="bg-white rounded-2xl border-2 border-black p-8 pt-12 text-center shadow-sm hover:shadow-md transition-shadow duration-300 h-64 flex flex-col justify-center">
                <h3 className="text-2xl font-alkes font-bold text-gray-800 mb-6">
                  Our Vision
                </h3>
                <p className="text-gray-600 font-alkes leading-relaxed text-lg">
                  The world&apos;s most trusted innovator of transformative training services that unlock success for each business.
                </p>
              </div>
            </div>

            {/* Our Mission Card */}
            <div className="relative">
              {/* Icon Circle */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
              <Image src="/mission.png" alt="Vision" width={125} height={100} />
              
              </div>
              
              {/* Card */}
              <div className="bg-white rounded-2xl border-2 border-black p-8 pt-12 text-center shadow-sm hover:shadow-md transition-shadow duration-300 h-64 flex flex-col justify-center">
                <h3 className="text-2xl font-alkes font-bold text-gray-800 mb-6">
                  Our Mission
                </h3>
                <p className="text-gray-600 font-alkes leading-relaxed text-lg">
                  Preparing youthful minds for success by fostering lifelong passion for growth
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Vision