"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

const FieldMarketing = () => {
  const [showHighlights, setShowHighlights] = useState(false)

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Decorative background */}
 

      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
        {/* Image with soft frame and corner badge */}
        <div className="relative">
          <div className="relative mx-auto max-w-xl  p-3">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/field.png"
                alt="Field marketing team in action"
                width={900}
                height={600}
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            {/* Corner icon badge */}
          
          </div>
        </div>

        {/* Text content */}
        <div className="text-left">
          <h2 className="font-alkes text-4xl font-bold text-[#E75B4D] sm:text-5xl">Field Marketing Impact</h2>
          <div className="mt-2 mb-6 h-2 w-24 bg-[#FFD700]"></div>

          <div className="font-makozin space-y-4 text-lg leading-relaxed text-gray-700">
            <p>
              Our <span className="font-semibold">Field Marketing Impact</span> program combines local trust with
              data-driven execution so every campaign delivers measurable outcomes.
            </p>
            <p>
              Trained field teams represent your brand with professionalism and consistency, engaging communities
              through live demonstrations, in-store activations, product launches, and grassroots campaigns. Each team
              member is equipped with the right tools to deliver your message effectively.
            </p>
          </div>

          <button className="mt-6 inline-flex items-center justify-center rounded-md bg-[#E75B4D] px-6 py-3 font-semibold text-white shadow hover:bg-[#d44a3d] transition-colors">
            Read More
          </button>
        </div>
      </div>

      {/* CTA pill */}
      <div className="mt-14 px-4">
        <div className="mx-auto max-w-5xl rounded-full bg-[#F27C6D]/90 px-6 py-4 text-center text-base font-semibold text-white shadow-md">
          Field Marketing Impact - Ready to expand your rural reach? Let’s design your campaign together.
        </div>
      </div>

      {/* Section subheading */}
      <div className="mt-10 flex justify-center px-4">
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowHighlights((prev) => !prev)}
          aria-expanded={showHighlights}
          className="inline-flex cursor-pointer items-center rounded-lg bg-[#FEE9E6] px-6 py-3 font-semibold text-[#E75B4D] shadow"
        >
          Key Highlights :
        </motion.button>
      </div>

      {/* Animated highlights card */}
      <AnimatePresence initial={false}>
        {showHighlights && (
          <motion.div
            key="highlights"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 180, damping: 22 }}
            className="mx-4 mt-6 rounded-xl border border-[#f3b2aa] bg-gradient-to-b from-[#fdeceb] to-[#ee8c80]/60 p-6 shadow-md backdrop-blur-sm lg:mx-auto lg:max-w-5xl"
          >
            <div className="text-left">
              <h3 className="mb-4 font-alkes text-xl font-bold text-gray-800">Key Highlights:</h3>
              <ul className="space-y-4 pl-5 text-gray-800">
                <li className="list-disc">Customized field force recruitment and training</li>
                <li className="list-disc">In-store and rural activation campaigns</li>
                <li className="list-disc">Product launches and live demonstrations</li>
                <li className="list-disc">Customer engagement and lead generation activities</li>
                <li className="list-disc">On-ground performance tracking and reporting</li>
              </ul>
              <p className="mt-6 text-gray-900">
                We help brands go beyond Above the Line marketing to establish meaningful connections in real-world
                settings.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default FieldMarketing