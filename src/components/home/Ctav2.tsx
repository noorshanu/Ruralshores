import React from 'react'
import Link from 'next/link'

const Ctav2 = () => {
  return (
    <section className="py-12 bg-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading - Exact match to your image */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-alkes font-bold text-gray-800 mb-8 leading-relaxed">
            Partner with RSA - Let&apos;s Grow Together.
          </h2>
          
          {/* CTA Button - Matching the coral/salmon color from your image */}
          <Link 
            href="/contact" 
            className="inline-block bg-[#f76c5f] hover:bg-[#FF5252] text-white px-12 py-4 rounded-full text-lg font-alkes font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
          >
            Contact us
          </Link>
        </div>
      </div>
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-4 h-4 bg-orange-400 rounded-full"></div>
        <div className="absolute top-20 right-16 w-3 h-3 bg-red-400 rounded-full"></div>
        <div className="absolute bottom-16 left-20 w-5 h-5 bg-orange-300 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-4 h-4 bg-red-300 rounded-full"></div>
        <div className="absolute top-1/2 left-8 w-2 h-2 bg-orange-400 rounded-full"></div>
        <div className="absolute top-1/3 right-8 w-3 h-3 bg-red-400 rounded-full"></div>
      </div>
    </section>
  )
}

export default Ctav2