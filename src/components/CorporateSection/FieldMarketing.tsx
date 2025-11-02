/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

const FieldMarketing = () => {
  const [showHighlights, setShowHighlights] = useState(false)
  const [showMore, setShowMore] = useState(false)

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden" id="field-marketing-impact">
      {/* Decorative background */}
 

      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
        {/* Image with soft frame and corner badge */}
        <div className="relative">
          <div className="relative mx-auto max-w-xl  p-3">
            <div className="relative overflow-hidden rounded-xl">
              <img src="/brush.png" alt="Brush" width={900} height={600} className="h-auto w-full object-cover absolute top-0 left-0 z-[-2]" />
              <Image
                src="/field.png"
                alt="Field marketing team in action"
                width={900}
                height={600}
                className="h-auto w-full object-cover z-10"
                priority
              />
            </div>

            {/* Corner icon badge */}
          
          </div>
        </div>

        {/* Text content */}
        <div className="text-left">
          <h2 className="font-alkes text-4xl font-bold text-[#FF743E] sm:text-5xl">Field Marketing Impact</h2>
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

          <AnimatePresence initial={false}>
            {showMore && (
              <motion.div
                key="more-content"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ type: 'spring', stiffness: 180, damping: 22 }}
                className="mt-4 space-y-4 text-lg leading-relaxed text-gray-700"
              >
                <p>
                  Execution is monitored through geo-tagged reporting, surprise checks, and daily feedback loops,
                  supported by a maker-checker model that keeps performance transparent and reliable. Dashboards and
                  analytics provide brands with clear visibility into campaign reach, lead generation, and customer
                  response, while on-the-job coaching ensures continuous improvement.
                </p>
                <p>
                  At RSA, we help brands win in rural and semi-urban markets by building field teams that do more than
                  promote. They influence, engage, and convert.
                </p>
                <h3 className="pt-2 font-alkes text-2xl font-bold text-gray-900">What We Offer</h3>
                <ul className="list-disc space-y-2 pl-6 text-gray-800">
                  <li>Customized recruitment and training of field teams</li>
                  <li>In-store activations, rural events, and product demonstrations</li>
                  <li>Customer engagement and lead generation campaigns</li>
                  <li>Local-language content and behavior-based training</li>
                  <li>On-ground performance tracking with real-time dashboards</li>
                  <li>Independent audits and feedback loops for compliance and consistency</li>
                </ul>
                <p className="pt-2">
                  With RSA’s Field Marketing Impact, brands go beyond mass outreach to build meaningful, measurable, and
                  lasting connections in real-world markets, driving stronger equity, deeper trust, and sustained growth.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={() => setShowMore((prev) => !prev)}
            aria-expanded={showMore}
            className="mt-6 inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold text-white shadow transition-opacity hover:opacity-90"
            style={{ backgroundImage: 'linear-gradient(180deg, #F76C5E 0%, #DB99A0 100%)' }}
          >
            {showMore ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>

      {/* CTA pill */}
      <div className="mt-14 px-4">
        <div className="mx-auto max-w-5xl rounded-[15px] bg-[#F56D5F] px-6 py-4 text-center text-base font-semibold text-white shadow-md">
          Field Marketing Impact - Ready to expand your rural reach? Let’s design your campaign together.
        </div>
      </div>

      {/* Section subheading */}
      <div className="mt-10 flex justify-center px-4">
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowHighlights((prev) => !prev)}
          aria-expanded={showHighlights}
          className="inline-flex cursor-pointer items-center rounded-lg bg-gradient-to-b  from-[#F76C5E] to-[#fdeceb] p-6  backdrop-blur-sm px-6 py-3  text-[#000000] shadow"
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
            className="mx-4 mt-6 rounded-xl border border-[#f3b2aa]  bg-gradient-to-b   from-[#fdeceb] to-[#F76C5E] p-6 shadow-md backdrop-blur-sm lg:mx-auto lg:max-w-5xl text-black"
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