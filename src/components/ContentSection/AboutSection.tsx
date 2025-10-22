import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 ">
        {/* Left: Illustration */}
        <div className="relative w-full max-w-xl mx-auto lg:mx-0">
          <div className="relative ">
            <Image
              src="/Maas-1.png"
              alt="Marketing as a Service"
              width={700}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Right: Copy */}
        <div >
          <p className="text-base md:text-xl font-makozin leading-relaxed mt-14">
            At <span className="font-bold">RSA, Marketing</span> as a Service (<span className="font-bold">MaaS</span>) blends rural talent with industry expertise to deliver end-to-end, impactful, and scalable marketing solutions. We empower organizations with cost-effective outreach while creating meaningful opportunities for rural youth. Backed by 13 centers across 9 states, 12 languages, and 3,000+ trained professionals, our Maker-Checker model ensures accuracy, authenticity, and measurable business results. Trusted by corporates, startups, foundations, and government institutions, MaaS bridges the demand-supply gap with
          </p>

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

export default AboutSection