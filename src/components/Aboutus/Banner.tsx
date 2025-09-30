import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <section className="relative min-h-[500px] flex items-center overflow-hidden">
      {/* Background with decorative icons */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/bg-2.jpg')`
        }}
      >
 
       
        
  
      
      </div>

      <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section - Text Content */}
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#E75B4D] mb-4">
            About Us
          </h1>
          <div className="w-16 h-2 bg-[#FFD700] mb-8"></div>
          
          <div className="space-y-2 text-lg md:text-xl text-gray-800 font-medium">
            <p>Training for Transformation,</p>
            <p>Monitoring for Progress,</p>
            <p>Auditing for impact.</p>
          </div>
        </div>

        {/* Right Section - Image with Yellow Frame */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md lg:max-w-lg">
        
            
            {/* Main image */}
            <div className="relative z-0 rounded-lg overflow-hidden">
              <Image
                src="/aboutus.png"
                alt="About Us - Team working together"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner