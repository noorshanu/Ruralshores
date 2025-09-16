import React from 'react'
import { FiSearch, FiBriefcase, FiMonitor } from 'react-icons/fi'

const Services = () => {
  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4 font-alkes">Services</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        {/* Services Grid - Desktop Overlapping, Mobile Stacked */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop Layout - Hidden on Mobile */}
          <div className="hidden lg:flex justify-center items-center relative">
            {/* Corporate Service - Left */}
            <div className="bg-gray-200 rounded-[3rem] p-10 text-center w-80 h-96 flex flex-col justify-center relative z-10 shadow-lg">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-md">
                <FiSearch className="text-red-400 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 font-alkes">Corporate</h3>
              <p className="text-gray-600 leading-relaxed text-base px-2">
                Ignite your brand's presence with trained, aligned field teams.
              </p>
            </div>

            {/* Employability Service - Center (Overlapping) */}
            <div className="bg-gray-200 rounded-[3rem] p-10 text-center w-80 h-96 flex flex-col justify-center relative z-20 -ml-16 -mr-16 shadow-xl">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-md">
                <FiBriefcase className="text-red-400 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 font-alkes">Employability</h3>
              <p className="text-gray-600 leading-relaxed text-base px-2">
                Creating confidence capability and career readiness
              </p>
            </div>

            {/* Content Service - Right */}
            <div className="bg-gray-200 rounded-[3rem] p-10 text-center w-80 h-96 flex flex-col justify-center relative z-10 shadow-lg">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-md">
                <FiMonitor className="text-red-400 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 font-alkes">Content</h3>
              <p className="text-gray-600 leading-relaxed text-base px-2">
                Content that empowers,engages, and elevates
              </p>
            </div>
          </div>

          {/* Mobile Layout - Visible on Mobile Only */}
          <div className="lg:hidden space-y-8">
            {/* Corporate Service */}
            <div className="bg-gray-200 rounded-3xl p-8 text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FiSearch className="text-red-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4 font-alkes">Corporate</h3>
              <p className="text-gray-700 leading-relaxed">
                Ignite your brand's presence with trained, aligned field teams.
              </p>
            </div>

            {/* Employability Service */}
            <div className="bg-gray-200 rounded-3xl p-8 text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FiBriefcase className="text-red-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4 font-alkes">Employability</h3>
              <p className="text-gray-700 leading-relaxed">
                Creating confidence capability and career readiness
              </p>
            </div>

            {/* Content Service */}
            <div className="bg-gray-200 rounded-3xl p-8 text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FiMonitor className="text-red-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4 font-alkes">Content</h3>
              <p className="text-gray-700 leading-relaxed">
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