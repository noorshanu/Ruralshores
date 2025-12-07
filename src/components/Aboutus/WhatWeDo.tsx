import React from 'react'

const WhatWeDo = () => {
  return (
    <section className="pb-16 pt-4 bg-[#f7f3f2]">
      
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-4xl font-alkes font-medium text-black mb-8">
          What We Do
        </h2>

        <ul className="space-y-6 text-xl md:text-2xl text-black">
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black shrink-0" />
            <span className="font-makozin text-[20px]">
              Partner with corporates to deliver field activation, audits, and workforce
              training
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black shrink-0" />
            <span className="font-makozin text-[20px]">
              Provide 360° support through mobilization, training, placement, and
              performance monitoring
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black shrink-0" />
            <span className="font-makozin text-[20px]">
              Train youth and women in job-relevant skills across rural and peri-urban India
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black shrink-0" />
            <span className="font-makozin text-[20px]">
              Design project-based courseware tailored to real-world workplace demands
            </span>
          </li>
        </ul>

        <p className="mt-10 text-xl md:text-[20px] font-makozin text-black leading-relaxed">
          At RSA, we don’t just train individuals, we ignite change. By empowering
          underserved youth and women and strengthening rural outreach through our Checker
          and Maker model, we drive performance, inclusion, and progress where it matters
          most.
        </p>
      </div>
    </section>
  )
}

export default WhatWeDo