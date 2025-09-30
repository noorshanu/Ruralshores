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