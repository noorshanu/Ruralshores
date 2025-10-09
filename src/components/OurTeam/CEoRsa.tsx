import React from 'react'
import Image from 'next/image'
  

const CEoRsa = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left Section - Image and Name */}
            <div className="order-1 lg:order-1">
              <div className="max-w-md mx-auto lg:mx-0">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                    {/* Placeholder for Neeraj Agarwal's image */}
             <Image src="/founder/neeraj.jpg" alt="Neeraj Agarwal" width={500} height={460} />
                  </div>
                </div>

                {/* Name and LinkedIn */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <h3 className="text-xl font-bold text-gray-800">
                      CEO - Neeraj Agarwal
                    </h3>
                    <a 
                      href="https://linkedin.com/in/neeraj-agarwal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Descriptive Text Block */}
            <div className="order-2 lg:order-2">
              <div className="max-w-2xl">
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    At RuralShores Skills Academy (RSA), we believe in unlocking the potential of India&apos;s youth by bridging the gap between education and employment.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Since joining RSA in 2013, after two decades with NIIT Ltd and an education at IIT Delhi, I&apos;ve seen firsthand how skills can transform lives and communities.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Over the years, RSA has empowered millions across rural and underserved regions with the tools they need to succeed in today&apos;s economy. Alongside this, we&apos;ve partnered with corporates to build a skilled workforce aligned with business goals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Summary Statement */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-xl text-gray-800 leading-relaxed font-medium">
                40 years on, Neeraj&apos;s through-line is clear: leverage technology and education to convert potential into prosperity—whether for industrial plants, enterprise learners, or rural youth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CEoRsa