'use client'

import React from 'react'
import Image from 'next/image'

const Clientmarque2 = () => {
  // Extended client list with more logos for better marquee effect
  const clients = [
    { name: 'UNICEF', logo: '/clients/UNICEF_Logo.png' },
    { name: 'PI Foundation', logo: '/clients/PI-Foundation.png' },
    { name: 'Hindustan Unilever', logo: '/clients/Hindustan_Unilever_Logo.png' },
    { name: 'Vihaan', logo: '/clients/Vihaan-e1751274351895.png' },
    { name: 'NSDC', logo: '/clients/NSDC-1.jpg' },
    // Duplicating for better visual effect
    { name: 'UNICEF', logo: '/clients/UNICEF_Logo.png' },
    { name: 'PI Foundation', logo: '/clients/PI-Foundation.png' },
    { name: 'Hindustan Unilever', logo: '/clients/Hindustan_Unilever_Logo.png' },
  ]

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-alkes font-bold text-gray-800 mb-4">
            Our Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Delivering quality from countryside to nationwide.
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>

        {/* First Marquee - Left to Right */}
        <div className="mb-8">
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee-left hover:pause-animation">
              {/* First set */}
              {clients.map((client, index) => (
                <div
                  key={`left-${index}`}
                  className="flex-shrink-0 mx-6 group"
                >
                  <div className="w-40 h-24 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center p-4 group-hover:scale-105 border border-gray-100">
                    <div className="relative w-full h-full">
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        fill
                        className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500 filter group-hover:brightness-110"
                        sizes="(max-width: 768px) 160px, 160px"
                      />
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clients.map((client, index) => (
                <div
                  key={`left-dup-${index}`}
                  className="flex-shrink-0 mx-6 group"
                >
                  <div className="w-40 h-24 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center p-4 group-hover:scale-105 border border-gray-100">
                    <div className="relative w-full h-full">
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        fill
                        className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500 filter group-hover:brightness-110"
                        sizes="(max-width: 768px) 160px, 160px"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Marquee - Right to Left */}
        <div>
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee-right hover:pause-animation">
              {/* First set */}
              {clients.map((client, index) => (
                <div
                  key={`right-${index}`}
                  className="flex-shrink-0 mx-6 group"
                >
                  <div className="w-40 h-24 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center p-4 group-hover:scale-105 border border-gray-100">
                    <div className="relative w-full h-full">
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        fill
                        className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500 filter group-hover:brightness-110"
                        sizes="(max-width: 768px) 160px, 160px"
                      />
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clients.map((client, index) => (
                <div
                  key={`right-dup-${index}`}
                  className="flex-shrink-0 mx-6 group"
                >
                  <div className="w-40 h-24 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center p-4 group-hover:scale-105 border border-gray-100">
                    <div className="relative w-full h-full">
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        fill
                        className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500 filter group-hover:brightness-110"
                        sizes="(max-width: 768px) 160px, 160px"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clientmarque2