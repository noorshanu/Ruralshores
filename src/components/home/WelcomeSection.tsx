import React from 'react'

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
        <div className=" w-full">
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            
            {/* Left Section - Text Content */}
            <div className="sm:w-1/2 w-full bg-[#f5f2f3] rounded-r-full rounded-br-full px-10 py-10" >
              <div className=''>
                <h1 className="text-4xl sm:text-6xl font-bold text-orange-500 mb-3 font-alkes">
                  Welcome!
                </h1>
                <div className="w-20 h-1 bg-yellow-400"></div>
              </div>
              
              <div className="space-y-2 text-lg text-gray-800 leading-relaxed font-makozin">
                <p>Empowering underserved communities</p>
                <p>and supporting corporate growth with a</p>
                <p>strong presence across India.</p>
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="sm:w-1/2 w-full ">
              <div className="relative">
                <div className="">
                  <img 
                    src="/wel.jpg" 
                    alt="Rural women in discussion" 
                    className="w-full h-[400px] rounded-l-[110px] rounded-bl-[110px] border-l-[7px] border-b-[7px]  border-t-[7px] border-[#f56c5d]"
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