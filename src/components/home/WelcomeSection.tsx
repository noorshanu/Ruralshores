import React from 'react'
import Image from 'next/image'

const WelcomeSection = () => {
  return (
    <section className="">
      <div className=" mx-auto ">
        {/* Top Navigation Header */}
        <div className="text-center my-8">
          <div className="inline-flex items-center space-x-4 text-black">
            <span className="font-medium text-[22px] font-alkes">Know Our Roots</span>
         
            <div className=" px-3 py-1">
              <span className="font-bold text-[22px] font-alkes text-[#F66B5E]">@RuralShores &gt;</span>
            </div>
        
          </div>
        </div>

        {/* Main White Container */}
        <div className=" w-full relative">
          <div className="flex flex-col sm:flex-row  w-full items-center">
            
            {/* Left Section - Text Content */}
            <div className="sm:w-[56%] w-full h-[460px] bg-[#f5f2f3] rounded-r-[110px] rounded-br-[110px] px-22 py-16 re" >
              <div className=''>
                <h1 className="text-4xl sm:text-6xl font-bold text-orange-500 mb-2 font-alkes">
                  Welcome!
                </h1>
                <div className="w-20 h-1 bg-yellow-400 ml-4"></div>
              </div>
              
              <div className="space-y-2  text-gray-800 leading-relaxed font-makozin mt-4 text-3xl">
                <p>Empowering underserved communities</p>
                <p>and supporting corporate growth with a</p>
                <p>strong presence across India.</p>
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="sm:w-1/2 w-full absolute right-0 z-20">
              <div className="relative z-20">
                <div className="relative w-full h-[400px]">
                  <Image 
                    src="/wel.jpg" 
                    alt="Rural women in discussion" 
                    fill
                    className="rounded-l-[110px] rounded-bl-[110px] border-l-[7px] border-b-[7px] border-t-[7px] border-[#f56c5d] object-cover"
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