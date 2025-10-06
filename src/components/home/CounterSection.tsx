'use client'
import React from 'react'
import CountUp from 'react-countup'
import { IoLocationOutline } from 'react-icons/io5'
import { FiUsers } from 'react-icons/fi'
import { PiGraduationCap } from 'react-icons/pi'
import { MdWorkOutline } from 'react-icons/md'

const CounterSection = () => {
  return (
    <section className="py-22 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          
          {/* States Card */}
          <div className="bg-gray-50 rounded-2xl p-6 text-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-bold text-black mb-3 font-makozin">
                <CountUp 
                  end={20} 
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                />+
              </div>
              <div className="flex justify-center items-center gap-2 mb-2">
                <IoLocationOutline className="text-2xl text-gray-700" />
                <div className="text-lg text-black font-medium font-makozin">States</div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-yellow-400  rounded-full   transform translate-y-1/2"></div>
          </div>

          {/* Trainers Card */}
          <div className="bg-gray-50 rounded-2xl p-6 text-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-bold text-black mb-3 font-makozin">
                <CountUp 
                  end={120} 
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                />+
              </div>
              <div className="flex justify-center items-center gap-2 mb-2">
                <FiUsers className="text-2xl text-gray-700" />
                <div className="text-lg text-black font-medium font-makozin">Trainers</div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-orange-500 rounded-t-full transform translate-y-1/2"></div>
          </div>

          {/* Trained Card */}
          <div className="bg-gray-50 rounded-2xl p-6 text-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-bold text-black mb-3 font-makozin">
                <CountUp 
                  end={777738} 
                  duration={3}
                  separator=","
                  enableScrollSpy
                  scrollSpyOnce
                />+
              </div>
              <div className="flex justify-center items-center gap-2 mb-2">
                <PiGraduationCap className="text-2xl text-gray-700" />
                <div className="text-lg text-black font-medium font-makozin">Trained</div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-yellow-400 rounded-t-full transform translate-y-1/2"></div>
          </div>

          {/* Placed Card */}
          <div className="bg-gray-50 rounded-2xl p-6 text-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-bold text-black mb-3 font-makozin">
                <CountUp 
                  end={668942} 
                  duration={3}
                  separator=","
                  enableScrollSpy
                  scrollSpyOnce
                />+
              </div>
              <div className="flex justify-center items-center gap-2 mb-2">
                <MdWorkOutline className="text-2xl text-gray-700" />
                <div className="text-lg text-black font-medium font-makozin">Placed</div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-orange-500 rounded-t-full transform translate-y-1/2"></div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CounterSection