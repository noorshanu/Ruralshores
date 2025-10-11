"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
  

const CEoRsa = () => {
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

  const leftVariants = {
    hidden: { 
      opacity: 0, 
      x: -80,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const rightVariants = {
    hidden: { 
      opacity: 0, 
      x: 80,
      y: 30
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

  const bottomVariants = {
    hidden: { 
      opacity: 0, 
      y: 40
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Content Section */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Left Section - Image and Name */}
            <motion.div 
              className="order-1 lg:order-1"
              variants={leftVariants}
            >
              <div className="max-w-md mx-auto lg:mx-0">
                {/* Profile Image */}
                <div className="relative">
                  <div className="w-full">
                    <Image 
                      src="/founder/neeraj.jpg" 
                      alt="Neeraj Agarwal" 
                      width={430} 
                      height={313} 
                      className="w-full h-full object-cover rounded-t-xl" 
                    />
                  </div>
                </div>

                {/* Name and LinkedIn */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 bg-[#F5F2F3] rounded-b-xl py-2">
                    <h3 className="text-lg font-medium font-makozin text-black">
                      CEO - Neeraj Agarwal
                    </h3>
                    <a 
                      href="https://linkedin.com/in/neeraj-agarwal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1A63BC] hover:text-blue-800 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Section - Descriptive Text Block */}
            <motion.div 
              className="order-2 lg:order-2"
              variants={rightVariants}
            >
              <div className="max-w-2xl">
                <motion.div className="space-y-6">
                  <motion.p 
                    className="text-gray-700 leading-relaxed text-lg"
                    variants={textVariants}
                  >
                    At RuralShores Skills Academy (RSA), we believe in unlocking the potential of India&apos;s youth by bridging the gap between education and employment.
                  </motion.p>
                  
                  <motion.p 
                    className="text-gray-700 leading-relaxed text-lg"
                    variants={textVariants}
                  >
                    Since joining RSA in 2013, after two decades with NIIT Ltd and an education at IIT Delhi, I&apos;ve seen firsthand how skills can transform lives and communities.
                  </motion.p>
                  
                  <motion.p 
                    className="text-gray-700 leading-relaxed text-lg"
                    variants={textVariants}
                  >
                    Over the years, RSA has empowered millions across rural and underserved regions with the tools they need to succeed in today&apos;s economy. Alongside this, we&apos;ve partnered with corporates to build a skilled workforce aligned with business goals.
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Section - Summary Statement */}
         
        </div>
      </div>
      
      <motion.div 
        className="mx-auto bg-[#F5F2F3]"
        variants={bottomVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="text-center container mx-auto px-[60px] py-8">
          <motion.p 
            className="text-2xl text-black leading-relaxed font-medium font-makozin"
            variants={textVariants}
          >
            40 years on, Neeraj&apos;s through-line is clear: leverage technology and education to convert potential into prosperity—whether for industrial plants, enterprise learners, or rural youth.
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}

export default CEoRsa