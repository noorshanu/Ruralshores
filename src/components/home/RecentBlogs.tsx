import React from 'react'
import Image from 'next/image'

const RecentBlogs = () => {
  return (
    <section className="py-2 ">
      <div className=" mx-auto ">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#F76C5E] mb-3">Recent Blogs Posts</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        {/* Main Content Area */}
        <div className="bg-[#f5f2f3] py-2 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Section - Visual Content */}
            <div className="w-full">
              <div className="relative w-full h-[450px] rounded-r-3xl overflow-hidden">
                <Image 
                  src="/blog.jpg" 
                  alt="Person using tablet with blog content" 
                  fill
                  className="object-cover"
                  priority={true}
                />
              </div>
            </div>

            {/* Right Section - Text and Call-to-Action */}
            <div className="text-center lg:text-left space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-[#F76C5E]">
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