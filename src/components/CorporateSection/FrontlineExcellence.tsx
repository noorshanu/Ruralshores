"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

const FrontlineExcellence = () => {
  const [showHighlights, setShowHighlights] = useState(false)

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
        {/* Image - left side with soft frame */}
        <div className="relative order-1">
          <div className="relative mx-auto max-w-xl p-3">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/frontline.png"
                alt="Frontline training session"
                width={900}
                height={600}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          
          </div>
        </div>

        {/* Text content - right side */}
        <div className="order-2 text-left">
          <h2 className="font-alkes text-4xl font-bold text-[#E75B4D] sm:text-5xl">Frontline Excellence Training</h2>
          <div className="mt-2 mb-6 h-2 w-24 bg-[#FFD700]"></div>

          <div className="font-makozin space-y-4 text-lg leading-relaxed text-gray-700">
            <p className="font-semibold text-gray-900">Empower Your Frontline. Elevate Your Results.</p>
            <p>
              At RSA, we recognize that frontline managers are the prime link between strategy and execution. Our
              Frontline Excellence Training equips these managers to become confident leaders who inspire teams,
              resolve challenges quickly, and deliver measurable results.
            </p>
            <p>
              We begin with on-ground KPI diagnostics to uncover the real drivers and build targeted capability
              journeys.
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
          Frontline Excellence Training - Ready to transform your frontline managers into high-impact leaders? Let’s build the journey .
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

      <AnimatePresence initial={false}>
        {showHighlights && (
          <motion.div
            key="frontline-highlights"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 180, damping: 22 }}
            className="mx-4 mt-6 rounded-xl border border-[#f3b2aa] bg-gradient-to-b from-[#fdeceb] to-[#ee8c80]/60 p-6 shadow-md backdrop-blur-sm lg:mx-auto lg:max-w-5xl"
          >
            <div className="text-left">
              <h3 className="mb-4 font-alkes text-xl font-bold text-gray-800">Key Highlights:</h3>
              <ul className="space-y-4 pl-5 text-gray-800">
                <li className="list-disc">On-ground KPI diagnostics and capability mapping</li>
                <li className="list-disc">Manager coaching to decision-ready leadership</li>
                <li className="list-disc">Practical toolkits for daily team huddles and problem-solving</li>
                <li className="list-disc">Behavioral change anchored by measurable outcomes</li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default FrontlineExcellence