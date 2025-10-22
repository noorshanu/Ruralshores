import React from 'react'
import Image from 'next/image'

const OurAproach = () => {
  return (
    <section className="py-16 bg-white">
            <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-alkes font-medium text-gray-900">What we offer</h2>
          <div className="w-24 h-1 bg-[#FFD700] mx-auto mt-3 rounded"></div>
        </div>
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="relative w-full max-w-3xl mx-auto lg:mx-0">
          <div className="relative rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/ourapr.jpg"
              alt="Team reviewing analytics on laptop"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* Right: Copy */}
        <div>
          <p className="text-base md:text-xl font-makozin text-gray-900 leading-relaxed">
            We don’t just deliver marketing services — we deliver marketing services with purpose. Our deep integration within rural
            communities, combined with industry-leading training programs, creates a workforce that is not only skilled and passionate
            but also brings invaluable cultural insights and authentic voices to your brand narrative.
          </p>

          <h3 className="mt-8 text-xl md:text-2xl font-alkes-bold text-gray-900">
            When you choose RSA’s MaaS, you’re investing in:
          </h3>

          <ul className="mt-6 space-y-4 text-base md:text-lg text-gray-900">
            <li className="flex gap-3">
              <span className="mt-3 h-2 w-2 rounded-full bg-gray-900 shrink-0"></span>
              <span>
                <span className="font-alkes-bold">Future-ready professionals</span> equipped with cutting-edge marketing skills
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-3 h-2 w-2 rounded-full bg-gray-900 shrink-0"></span>
              <span>
                <span className="font-alkes-bold">Measurable business value</span> through impactful, relevant, and scalable outcomes
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-3 h-2 w-2 rounded-full bg-gray-900 shrink-0"></span>
              <span>
                <span className="font-alkes-bold">Authentic local insights</span> that strengthen your brand narrative and resonance
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
    </section>
  )
}

export default OurAproach