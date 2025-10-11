'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const TeamSider = () => {
  const images = [
    '/coreteam/other/img1.jpg',
    '/coreteam/other/img2.jpg',
    '/coreteam/other/img3.jpg',
    '/coreteam/other/img4.jpg',
    '/coreteam/other/img5.jpg',
    '/coreteam/other/img6.jpg',
    '/coreteam/other/img7.jpg'
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          {/* <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Team Gallery
            </h2>
            <div className="w-16 h-1 bg-[#E75B4D] mx-auto"></div>
          </div> */}

          {/* Slider Container */}
          <div className="relative">
            {/* Main Image Display */}
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={images[currentSlide]}
                alt={`Team Image ${currentSlide + 1}`}
                fill
                className="object-cover transition-opacity duration-300"
                priority={currentSlide === 0}
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-300"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-300"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center mt-6 space-x-3">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                    currentSlide === index 
                      ? 'ring-4 ring-[#E75B4D] scale-110' 
                      : 'hover:scale-105 opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Slide Counter */}
            <div className="text-center mt-4">
              <span className="text-sm text-gray-600">
                {currentSlide + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSider