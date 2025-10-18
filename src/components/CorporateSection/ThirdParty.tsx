"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

const ThirdParty = () => {
  const [showHighlights, setShowHighlights] = useState(false)

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden" id="third-party-talent-engine">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
        {/* Text content - left side */}
        <div className="order-2 text-left lg:order-1">
          <h2 className="font-alkes text-4xl font-bold text-[#E75B4D] sm:text-5xl">Third-Party Talent Engine</h2>
          <div className="mt-2 mb-6 h-2 w-24 bg-[#FFD700]"></div>

          <div className="font-makozin space-y-4 text-lg leading-relaxed text-gray-700">
            <p>
              At RSA, we see talent development as a partnership between youth potential and industry demand. Our
              <span className="font-semibold"> Third-Party Talent Engine – Prepare, Place, Perform</span> – creates a steady pipeline of skilled
              professionals who are job-ready from day one.
            </p>
            <p>
              Launched in 2017, this model has become a trusted workforce solution for corporates where trained
              associates have delivered consistently and even transitioned into full-time roles.
            </p>
          </div>

          <button className="mt-6 inline-flex items-center justify-center rounded-md bg-[#E75B4D] px-6 py-3 font-semibold text-white shadow hover:bg-[#d44a3d] transition-colors">
            Read More
          </button>
        </div>

        {/* Image - right side */}
        <div className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-xl p-3">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/thirdparty.png"
                alt="Third party talent engine"
                width={900}
                height={600}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -right-6 -top-6 rounded-2xl border-4 border-[#F5A79E] bg-white p-4 shadow-md">
              <Image src="/icon1.png" alt="talent icon" width={36} height={36} />
            </div>
          </div>
        </div>
      </div>

      {/* CTA pill */}
      <div className="mt-14 px-4">
        <div className="mx-auto max-w-5xl rounded-full bg-[#F27C6D]/90 px-6 py-4 text-center text-base font-semibold text-white shadow-md">
          Third Party Talent Engine - Need a steady pipeline of job-ready youth? Partner with us today.
        </div>
      </div>

      {/* Key Highlights chip */}
      <div className="mt-10 flex justify-center px-4">
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowHighlights((s) => !s)}
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
            key="thirdparty-highlights"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 180, damping: 22 }}
            className="mx-4 mt-6 rounded-xl border border-[#f3b2aa] bg-gradient-to-b from-[#fdeceb] to-[#ee8c80]/60 p-6 shadow-md backdrop-blur-sm lg:mx-auto lg:max-w-5xl"
          >
            <div className="text-left">
              <h3 className="mb-4 font-alkes text-xl font-bold text-gray-800">Key Highlights:</h3>
              <ul className="space-y-4 pl-5 text-gray-800">
                <li className="list-disc">Prepare-Place-Perform model ensuring job-readiness</li>
                <li className="list-disc">Industry-aligned curricula and assessments</li>
                <li className="list-disc">Placement support with corporate partnerships</li>
                <li className="list-disc">Performance tracking and transition to full-time roles</li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ThirdParty