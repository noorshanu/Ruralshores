import React from 'react'
import Image from 'next/image'

const HomeTestimonials = () => {
  const testimonials = [
    {
      name: "Heenu Singh",
      quote: "It has been a journey of shared learning & understanding and clear purpose with the RSA team.",
      image: "/testo/Heenu.png"
    },
    {
      name: "Ruma Roka", 
      quote: "It has been a journey of shared learning & understanding and clear purpose with the RSA team.",
      image: "/testo/Ruma.png"
    },
    {
      name: "Dr. Amarendra",
      quote: "It has been a journey of shared learning & understanding and clear purpose with the RSA team.",
      image: "/testo/Dr-Amar.png"
    }
  ]

  return (
    <div className="bg-white py-16 px-4 relative">
      {/* Social Media Icons */}
      <div className="absolute top-8 right-4 md:right-8 flex flex-col gap-3">
        <div className="w-10 h-10 rounded-full border-2 border-[#E75B4D] bg-white flex items-center justify-center">
          <svg className="w-5 h-5 text-[#E75B4D]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </div>
        <div className="w-10 h-10 rounded-full border-2 border-[#E75B4D] bg-white flex items-center justify-center">
          <svg className="w-5 h-5 text-[#E75B4D]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </div>
      </div>

      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-medium text-[#E75B4D] mb-2">
          Testimonials
        </h2>
        <div className="w-16 h-1 bg-[#FFD700] mx-auto"></div>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-[#F8F8F8] border border-[#E75B4D] rounded-2xl p-6 text-center relative"
            >
              {/* Profile Image */}
              <div className="relative -mt-12 mb-4">
                <div className="w-24 h-24 mx-auto rounded-full border-4 border-white relative">
                  <div className="w-full h-full rounded-full border-2 border-[#E75B4D] overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Name */}
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                {testimonial.name}
              </h3>
              
              {/* Quote */}
              <p className="text-gray-700 italic text-sm leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-white border border-dotted border-gray-400 rounded-lg px-8 py-3 text-gray-800 hover:bg-gray-50 transition-colors">
            Click to see full reviews
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomeTestimonials