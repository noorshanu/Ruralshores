'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Vision = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Our Vision Card */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                type: "spring",
                stiffness: 80,
                damping: 20,
                duration: 1
              }}
              className="relative"
            >
              {/* Icon Circle */}
              <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-10">
              <Image src="/vision.png" alt="Vision" width={125} height={100} />
              </div>
              
              {/* Card */}
              <div className="bg-white rounded-2xl border border-black px-6 py-1 text-center shadow-sm hover:shadow-md transition-shadow duration-300 h-56 flex flex-col justify-center">
                <h3 className="text-3xl font-alkes font-medium text-gray-800 mb-6">
                  Our Vision
                </h3>
                <p className="text-gray-600 font-alkes leading-relaxed text-lg">
                  The world&apos;s most trusted innovator of transformative training services that unlock success for each business.
                </p>
              </div>
            </motion.div>

            {/* Our Mission Card */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                type: "spring",
                stiffness: 80,
                damping: 20,
                duration: 1,
                delay: 0.2
              }}
              className="relative"
            >
              {/* Icon Circle */}
              <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-10">
              <Image src="/mission.png" alt="Vision" width={125} height={100} />
              
              </div>
              
              {/* Card */}
              <div className="bg-white rounded-2xl border border-black px-6 py-1 text-center shadow-sm hover:shadow-md transition-shadow duration-300 h-56 flex flex-col justify-center">
                <h3 className="text-3xl font-alkes font-medium text-gray-800 mb-6">
                  Our Mission
                </h3>
                <p className="text-gray-600 font-alkes leading-relaxed text-lg">
                  Preparing youthful minds for success by fostering lifelong passion for growth
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Vision