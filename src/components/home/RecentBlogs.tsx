import React from 'react'
import Image from 'next/image'

const RecentBlogs = () => {
  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-500 mb-3">Recent Blogs Posts</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        {/* Main Content Area */}
        <div className="bg-amber-50 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Section - Visual Content */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-lg">
                  <Image 
                    src="/blog.png" 
                    alt="Person using tablet with blog content" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Section - Text and Call-to-Action */}
            <div className="text-center lg:text-left space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-orange-500">
                From Our Desk- to Yours
              </h3>
              
              <p className="text-lg text-gray-700">
                Discover the Latest Reads!
              </p>
              
              <div className="pt-4">
                <button className="bg-white border border-orange-300 text-orange-500 px-8 py-3 rounded-lg font-medium hover:bg-orange-50 transition-colors duration-300">
                  Know more
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default RecentBlogs