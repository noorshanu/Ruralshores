import React from 'react'
import { FiSearch, FiBriefcase, FiMonitor } from 'react-icons/fi'
import Image from 'next/image'
const Services = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4 font-alkes">Services</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        {/* Services Grid - Desktop Overlapping, Mobile Stacked */}
        <div className="relative  mx-auto">
          {/* Desktop Layout - Hidden on Mobile */}
          <div className="hidden lg:flex justify-center items-center relative">
            {/* Corporate Service - Left */}
            <div className="bg-[#F5F2F3] border-4 border-white hover:border-[#F56D5F] rounded-[91px] px-8 py-12 text-center  flex flex-col justify-center relative z-10 shadow-lg">
              <div className="bg-white rounded-full w-28 h-28 flex items-center justify-center mx-auto mb-6 shadow-md">
                <Image src="/icon1.png" alt="Corporate" width={100} height={100} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 font-alkes">Corporate</h3>
              <p className="text-gray-600 leading-relaxed text-base px-2">
                Ignite your brand&apos;s presence with trained, aligned field teams.
              </p>
            </div>

            {/* Employability Service - Center (Overlapping) */}
            <div className="bg-[#F5F2F3] border-4 border-white hover:border-[#F56D5F] rounded-[91px] px-8 py-12 text-center   flex flex-col justify-center relative z-20 -ml-8 -mr-8 shadow-xl">
              <div className="bg-white rounded-full w-28 h-28 flex items-center justify-center mx-auto mb-6 shadow-md">
                <Image src="/icon1.png" alt="Employability" width={200} height={200} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 font-alkes">Employability</h3>
              <p className="text-gray-600 leading-relaxed text-base px-2">
                Creating confidence capability and career readiness
              </p>
            </div>

            {/* Content Service - Right */}
            <div className="bg-[#F5F2F3] border-4 border-white hover:border-[#F56D5F] rounded-[91px] px-8 py-12 text-center flex flex-col justify-center relative z-30 shadow-lg">
              <div className="bg-white rounded-full w-28 h-28 flex items-center justify-center mx-auto mb-6 shadow-md">
                <Image src="/icon1.png" alt="Content" width={100} height={100} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 font-alkes">Content</h3>
              <p className="text-gray-600 leading-relaxed text-base px-2">
                Content that empowers,engages, and elevates
              </p>
            </div>
          </div>

     
        </div>
      </div>
    </section>
  )
}

export default Services