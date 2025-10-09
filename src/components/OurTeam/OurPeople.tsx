/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'

const OurPeople = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
              Our Strength Lies in Our People
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Section - Team Photo */}
            <div className="order-1 lg:order-1">
              <div className="relative">
                <Image
                  src="/coreteam/ourpeople.jpg"
                  alt="Our People - RSA Team"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Right Section - Text Content */}
            <div className="order-2 lg:order-2">
              <div className="max-w-2xl mx-auto lg:mx-0">
                <div className="space-y-6">
                  <p className="text-black font-makozin leading-relaxed text-lg">
                    At RSA, every success story starts with people-driven, dependable, and deeply committed.
                  </p>
                  
                  <p className="text-black font-makozin leading-relaxed text-lg">
                    The team you see here represents just a glimpse of the many who fuel RSA's mission every day.
                  </p>
                  
                  <p className="text-black font-makozin leading-relaxed text-lg">
                    Their dedication, creativity, and care continue to shape our learners' futures and ours.
                  </p>
                  
                  <p className="text-black font-makozin leading-relaxed text-lg font-semibold">
                    Here's to the team that makes it all possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurPeople