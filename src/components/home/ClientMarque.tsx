import React from 'react'
import Image from 'next/image'

const ClientMarque = () => {
  const clients = [
    { name: 'UNICEF', logo: '/clients/UNICEF_Logo.png' },
    { name: 'PI Foundation', logo: '/clients/PI-Foundation.png' },
    { name: 'Hindustan Unilever', logo: '/clients/Hindustan_Unilever_Logo.png' },
    { name: 'Vihaan', logo: '/clients/Vihaan-e1751274351895.png' },
    { name: 'NSDC', logo: '/clients/NSDC-1.jpg' },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className=" ">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-red-500 mb-3">Clients</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        {/* Infinite Marquee Animation */}
        <div className="overflow-x-hidden py-4">
          <div className="flex animate-marquee">
            {/* First set of clients */}
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white rounded-lg flex items-center justify-center p-4 mx-4 flex-shrink-0"
                style={{
                  width: '300px',
                  height: '125px',
                  boxShadow: '6px 8px 6px 5px rgba(34.823437500000004, 34.823437500000004, 34.823437500000004, 0.6)'
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain"
                    priority={true}
                  />
                </div>
              </div>
            ))}
            {/* Second set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`duplicate-${index}`}
                className="bg-white rounded-lg flex items-center justify-center p-4 mx-4 flex-shrink-0"
                style={{
                  width: '300px',
                  height: '125px',
                  boxShadow: '6px 8px 6px 5px rgba(34.823437500000004, 34.823437500000004, 34.823437500000004, 0.6)'
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain"
                    priority={true}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientMarque