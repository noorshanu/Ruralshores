"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

const BrandAssurance = () => {
  const [showHighlights, setShowHighlights] = useState(false)

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden" id="brand-assurance-audit">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
        {/* Text content - left side */}
        <div className="order-2 text-left lg:order-1">
          <h2 className="font-alkes text-4xl font-bold text-[#E75B4D] sm:text-5xl">Brand Assurance Audit</h2>
          <div className="mt-2 mb-6 h-2 w-24 bg-[#FFD700]"></div>

          <div className="font-makozin space-y-4 text-lg leading-relaxed text-gray-700">
            <p>
              At RSA, we know great plans and creative campaigns can fail in execution when geography, languages, and
              incentives turn brand experience into brand roulette. Our Brand Assurance Audit ensures your brand promise
              is consistently delivered by separating the “make” from the “check.”
            </p>
            <p>
              Trained teams execute, while an independent unit monitors with geo-tagged evidence, keeping operations
              transparent, accurate, and fully aligned with your standards.
            </p>
          </div>

          <button className="mt-6 inline-flex items-center justify-center rounded-md bg-[#E75B4D] px-6 py-3 font-semibold text-white shadow hover:bg-[#d44a3d] transition-colors">
            Read More
          </button>
        </div>

        {/* Image - right side with subtle frame and icon badge */}
        <div className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-xl p-3">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/brandAss.png"
                alt="Brand assurance audit in action"
                width={900}
                height={600}
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            {/* Corner icon badge */}
            <div className="absolute -right-6 -top-6 rounded-2xl border-4 border-[#F5A79E] bg-white p-4 shadow-md">
              <Image src="/file.svg" alt="audit icon" width={36} height={36} />
            </div>
          </div>
        </div>
      </div>

      {/* CTA pill */}
      <div className="mt-14 px-4">
        <div className="mx-auto max-w-5xl rounded-full bg-[#F27C6D]/90 px-6 py-4 text-center text-base font-semibold text-white shadow-md">
          Brand Assurance Audit - Want 100% compliance and transparency? Schedule an Audit360 discussion today.
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
            key="brand-highlights"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 180, damping: 22 }}
            className="mx-4 mt-6 rounded-xl border border-[#f3b2aa] bg-gradient-to-b from-[#fdeceb] to-[#ee8c80]/60 p-6 shadow-md backdrop-blur-sm lg:mx-auto lg:max-w-5xl"
          >
            <div className="text-left">
              <h3 className="mb-4 font-alkes text-xl font-bold text-gray-800">Key Highlights:</h3>
              <ul className="space-y-4 pl-5 text-gray-800">
                <li className="list-disc">Independent monitoring with geo-tagged evidence</li>
                <li className="list-disc">Clear separation of execution and audit</li>
                <li className="list-disc">Improved compliance, transparency, and brand consistency</li>
                <li className="list-disc">Actionable insights to correct deviations fast</li>
              </ul>
              <p className="mt-6 text-gray-900">
                Achieve audit-ready operations and eliminate brand roulette with data-backed validation across markets.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default BrandAssurance