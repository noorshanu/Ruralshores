import React from 'react'
import Image from 'next/image'

const WhyRsa = () => {
  return (
    <section className="py-16 bg-[#F6F1EE]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-alkes font-medium text-gray-900">Why Choose RSA&apos;s MaaS?</h2>
          <div className="w-24 h-1 bg-[#FFD700] mx-auto mt-3 rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <div className="relative w-full max-w-3xl mx-auto lg:mx-0">
            <div className="relative">
              <Image
                src="/whyrsa.png"
                alt="Why Choose RSA's MaaS"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Right: Copy */}
          <div>
            <h3 className="text-xl md:text-2xl font-alkes-bold text-gray-900">For Your Business:</h3>
            <ul className="mt-6 space-y-4 text-base md:text-lg text-gray-900">
              <li className="flex gap-3">
                <span className="mt-3 h-2 w-2 rounded-full bg-gray-900 shrink-0"></span>
                <span>
                  <span className="font-alkes-bold">End-to-end marketing</span> solutions tailored for corporates, startups, foundations, and government institutions
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-3 h-2 w-2 rounded-full bg-gray-900 shrink-0"></span>
                <span>
                  <span className="font-alkes-bold">Multilingual execution</span> that resonates across diverse markets and demographics
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-3 h-2 w-2 rounded-full bg-gray-900 shrink-0"></span>
                <span>
                  <span className="font-alkes-bold">Cost-effective delivery</span> without compromising on quality or creativity
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-3 h-2 w-2 rounded-full bg-gray-900 shrink-0"></span>
                <span>
                  <span className="font-alkes-bold">Scalable campaigns</span> that grow with your business needs
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-3 h-2 w-2 rounded-full bg-gray-900 shrink-0"></span>
                <span>
                  <span className="font-alkes-bold">Authentic storytelling</span> rooted in real experiences and cultural understanding
                </span>
              </li>
            </ul>

            <div className="mt-8">
              <button className="inline-block px-8 py-3 rounded-lg bg-[#E75B4D] text-white text-lg font-makozin shadow-md hover:opacity-90 transition">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyRsa