import React from 'react'
import { FiPhone } from 'react-icons/fi'

const CTA = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Side - Contact Info */}
          <div className="flex items-center gap-3">
            <FiPhone className="text-gray-700 text-2xl" />
            <span className="text-xl md:text-2xl font-semibold text-gray-800">
              Contact us 0120-4327359
            </span>
          </div>

          {/* Right Side - CTA Button */}
          <button className="bg-red-400 hover:bg-red-500 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300 shadow-lg">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA