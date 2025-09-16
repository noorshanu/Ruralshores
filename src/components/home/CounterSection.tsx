'use client'
import React from 'react'
import CountUp from 'react-countup'

const CounterSection = () => {
  return (
    <section className="py-36 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          
          {/* States Card */}
          <div className="bg-gray-50 rounded-2xl p-6 text-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2 font-makozin">
                <CountUp 
                  end={20} 
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                />+
              </div>
              <div className="text-lg text-black font-medium font-makozin ">States</div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-yellow-400  rounded-full   transform translate-y-1/2"></div>
          </div>

          {/* Trainers Card */}
          <div className="bg-gray-50 rounded-2xl p-6 text-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2 font-makozin">
                <CountUp 
                  end={120} 
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                />+
              </div>
              <div className="text-lg text-black font-medium font-makozin">Trainers</div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-orange-500 rounded-t-full transform translate-y-1/2"></div>
          </div>

          {/* Trained Card */}
          <div className="bg-gray-50 rounded-2xl p-6 text-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2 font-makozin">
                <CountUp 
                  end={777738} 
                  duration={3}
                  separator=","
                  enableScrollSpy
                  scrollSpyOnce
                />+
              </div>
              <div className="text-lg text-black font-medium font-makozin">Trained</div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-yellow-400 rounded-t-full transform translate-y-1/2"></div>
          </div>

          {/* Placed Card */}
          <div className="bg-gray-50 rounded-2xl p-6 text-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2 font-makozin">
                <CountUp 
                  end={668942} 
                  duration={3}
                  separator=","
                  enableScrollSpy
                  scrollSpyOnce
                />+
              </div>
              <div className="text-lg text-black font-medium font-makozin">Placed</div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-orange-500 rounded-t-full transform translate-y-1/2"></div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CounterSection