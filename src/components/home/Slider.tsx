'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'

interface SlideData {
  id: number
  title: string
  description: string
  image: string
  imageAlt: string
}

const slides: SlideData[] = [
  {
    id: 1,
    title: "Auditing",
    description: "Thorough evaluations to maintain standards and drive continuous improvement.",
    image: "/train.png",
    imageAlt: "Auditing services"
  },
  {
    id: 2,
    title: "Training",
    description: "Comprehensive training programs to enhance skills and knowledge development.",
    image: "/train.png",
    imageAlt: "Training services"
  },
  {
    id: 3,
    title: "Monitoring",
    description: "Continuous monitoring and evaluation to ensure quality and compliance.",
    image: "/train.png",
    imageAlt: "Monitoring services"
  },
  {
    id: 4,
    title: "Welcome",
    description: "Welcome to our comprehensive range of professional services and solutions.",
    image: "/train.png",
    imageAlt: "Welcome services"
  }
]

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="w-full h-[700px] relative  overflow-hidden">
      {/* Background with pattern */}
      <div className="absolute inset-0 bg-slider">
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-8 h-8 border-2 border-orange-300 rounded-full"></div>
          <div className="absolute top-20 left-32 w-6 h-6 bg-orange-200 rounded-full"></div>
          <div className="absolute top-32 left-16 w-4 h-4 border-2 border-orange-300"></div>
          <div className="absolute top-16 left-48 w-5 h-5 bg-yellow-200 transform rotate-45"></div>
          <div className="absolute top-40 left-24 w-3 h-3 bg-orange-300 rounded-full"></div>
          <div className="absolute top-24 left-64 w-7 h-7 border-2 border-yellow-300 rounded-full"></div>
          <div className="absolute top-36 left-40 w-4 h-4 bg-orange-200 transform rotate-45"></div>
          <div className="absolute top-48 left-56 w-6 h-6 border-2 border-orange-300"></div>
          <div className="absolute top-60 left-32 w-5 h-5 bg-yellow-200 rounded-full"></div>
          <div className="absolute top-72 left-48 w-4 h-4 border-2 border-orange-300 transform rotate-45"></div>
        </div>
      </div>

      {/* Slides container */}
      <div className="relative h-[600px] container mx-auto">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 translate-x-0'
                : index < currentSlide
                ? 'opacity-0 -translate-x-full'
                : 'opacity-0 translate-x-full'
            }`}
          >
            <div className="flex items-center h-full">
              {/* Left side - Text content */}
              <div className="w-1/2 flex items-center justify-center p-12 relative z-10">
                <div className="max-w-2xl">
                  <h1 className="font-alkes text-6xl md:text-7xl font-bold text-[#f26d5a] mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <div className="w-24 h-1 bg-yellow-400 mb-8"></div>
                  <p className="font-alkes text-xl text-gray-800 leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </div>

              {/* Right side - Image */}
              <div className="w-1/2 relative mx-auto">
                {/* Decorative arc */}
            
                
                <div className="relative w-[500px] h-[500px] mx-auto">
                  <Image
                    src={slide.image}
                    alt={slide.imageAlt}
                    fill
                    className=" w-[500px] h-[500px] mx-auto"
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
    
      </div>
              

  

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-20"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-20"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Navigation dots */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-[#f26d5a] scale-125'
                : 'bg-gray-400 hover:bg-gray-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

   
    </div>
  )
}

export default Slider
