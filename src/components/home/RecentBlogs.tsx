import React from 'react'
import Image from 'next/image'

const RecentBlogs = () => {
  return (
    <section className="py-6 ">
      <div className=" mx-auto ">
        {/* Section Title */}
        <div className="text-center mb-12 max-w-sm mx-auto">
          <h2 className="text-4xl font-alkes font-medium text-[#F76C5E] mb-2">Recent Blogs Posts</h2>
          <div className="w-18 h-1 bg-yellow-400 ml-11  "></div>
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
            <div className="text-center lg:text-left space-y-4">
              <h3 className="text-3xl text-center sm:text-4xl font-bold font-makozin text-[#F76C5E]">
                From Our Desk- to Yours
              </h3>
              
              <p className="text-xl font-makozin text-black text-center ">
                Discover the Latest Reads!
              </p>
              
              <div className="pt-4 flex justify-center  ">
                <button className="bg-transparent text-xl font-medium font-makozin border border-[#F76C5E] text-black  px-8 py-1 rounded-lg  hover:bg-orange-50 transition-colors duration-300">
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