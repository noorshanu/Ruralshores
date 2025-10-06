import React from 'react'
import Image from 'next/image'

const WelcomeSection = () => {
  return (
    <section className="py-8 md:py-0">
      <div className="c">
        {/* Top Navigation Header */}
        <div className="text-center my-6 md:my-8">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-black">
            <span className="font-medium text-lg md:text-[22px] font-alkes">Know Our Roots</span>
         
            <div className=" py-1">
              <span className="font-bold text-lg md:text-[22px] font-alkes text-[#F66B5E]">@RuralShores &gt;</span>
            </div>
        
          </div>
        </div>

        {/* Main White Container */}
        <div className="w-full relative">
          <div className="flex flex-col lg:flex-row w-full items-center">
            
            {/* Left Section - Text Content */}
            <div className="w-full lg:w-[56%] h-auto lg:h-[460px] bg-[#f5f2f3] rounded-none lg:rounded-r-[110px] lg:rounded-br-[110px] px-6 md:px-12 lg:px-22 py-8 md:py-12 lg:py-16" >
              <div className=''>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#f56d5f] mb-2 font-alkes">
                  Welcome!
                </h1>
                <div className="w-16 md:w-20 h-1 bg-yellow-400 ml-2 md:ml-4"></div>
              </div>
              
              <div className="space-y-1 md:space-y-2 text-gray-800 leading-relaxed font-makozin mt-4 text-lg md:text-2xl lg:text-3xl">
                <p>Empowering underserved communities</p>
                <p>and supporting corporate growth with a</p>
                <p>strong presence across India.</p>
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="w-full lg:w-1/2 relative lg:absolute lg:right-0 z-20 mt-6 lg:mt-0">
              <div className="relative z-20">
                <div className="relative w-full h-[300px] md:h-[400px]">
                  <Image 
                    src="/wel.jpg" 
                    alt="Rural women in discussion" 
                    fill
                    className="rounded-lg lg:rounded-l-[110px] lg:rounded-bl-[110px] border-2 lg:border-l-[7px] lg:border-b-[7px] lg:border-t-[7px] lg:border-r-0 border-[#f56c5d] object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection