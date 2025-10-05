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
                  <h1 className="font-alkes text-6xl md:text-7xl font-bold text-orange-600 mb-6 leading-tight">
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
                 {/* Wave design at bottom */}
                 {/* <div className="absolute bottom-0 w-full overflow-hidden z-80">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#f97316"
            opacity="0.8"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="#f97316"
            opacity="0.6"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="#f97316"
            opacity="0.4"
          />
        </svg>
      </div> */}
  

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
                ? 'bg-orange-500 scale-125'
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
