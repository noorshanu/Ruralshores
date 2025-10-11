/* eslint-disable react/no-unescaped-entities */
"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const OurPeople = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const leftVariants = {
    hidden: { 
      opacity: 0, 
      x: -60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 80
      }
    }
  };

  const rightVariants = {
    hidden: { 
      opacity: 0, 
      x: 60,
      y: 20
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16">
      <motion.div 
        className="bg-[#F5F2F3] py-10 mb-10"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="text-center">
          <motion.h2 
            className="sm:text-3xl text-xl text-black leading-relaxed font-medium font-makozin"
            variants={titleVariants}
          >
            Our Strength Lies in Our People
          </motion.h2>
        </div>
      </motion.div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Left Section - Team Photo */}
            <motion.div 
              className="order-1 lg:order-1"
              variants={leftVariants}
            >
              <div className="relative">
                <Image
                  src="/coreteam/ourpeople.jpg"
                  alt="Our People - RSA Team"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </motion.div>

            {/* Right Section - Text Content */}
            <motion.div 
              className="order-2 lg:order-2"
              variants={rightVariants}
            >
              <div className="max-w-2xl mx-auto lg:mx-0">
                <motion.div className="space-y-6">
                  <motion.p 
                    className="text-black font-makozin leading-relaxed text-lg"
                    variants={textVariants}
                  >
                    At RSA, every success story starts with people-driven, dependable, and deeply committed.
                  </motion.p>
                  
                  <motion.p 
                    className="text-black font-makozin leading-relaxed text-lg"
                    variants={textVariants}
                  >
                    The team you see here represents just a glimpse of the many who fuel RSA's mission every day.
                  </motion.p>
                  
                  <motion.p 
                    className="text-black font-makozin leading-relaxed text-lg"
                    variants={textVariants}
                  >
                    Their dedication, creativity, and care continue to shape our learners' futures and ours.
                  </motion.p>
                  
                  <motion.p 
                    className="text-black font-makozin leading-relaxed text-lg font-semibold"
                    variants={textVariants}
                  >
                    Here's to the team that makes it all possible.
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default OurPeople