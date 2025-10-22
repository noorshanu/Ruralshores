"use client"
import React from 'react'
import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Offer = {
  id: string
  title: string
  subtitle: string
  image: string
}

const OFFERS: Offer[] = [
  {
    id: 'graphic',
    title: 'Graphic Design',
    subtitle: 'Creative, motion, and campaign-ready design solutions',
    image: '/digi.jpg',
  },
  {
    id: 'media',
    title: 'Media Strategy & Campaign Management',
    subtitle: 'End-to-end planning and execution',
    image: '/digi.jpg',
  },
  {
    id: 'digital',
    title: 'Digital Presence',
    subtitle: 'Website, SEO, LinkedIn strategies, and online visibility',
    image: '/digi.jpg',
  },
  {
    id: 'content',
    title: 'Content Production',
    subtitle: 'Copy, video, and creative production at scale',
    image: '/digi.jpg',
  },
  {
    id: 'analytics',
    title: 'Analytics & Reporting',
    subtitle: 'Performance tracking and insights',
    image: '/digi.jpg',
  },
]

const WhatweOffer = () => {
  const [slidesPerView, setSlidesPerView] = useState(1)
  const [page, setPage] = useState(0)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onResize = () => {
      if (typeof window === 'undefined') return
      setSlidesPerView(window.innerWidth >= 1024 ? 3 : 1)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const totalPages = useMemo(() => {
    return Math.max(1, OFFERS.length - slidesPerView + 1)
  }, [slidesPerView])

  const goTo = (p: number) => {
    const clamped = Math.max(0, Math.min(totalPages - 1, p))
    setPage(clamped)
  }

  const next = () => goTo(page + 1)
  const prev = () => goTo(page - 1)

  return (
    <section className="py-16 bg-[#F6F1EE]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-alkes font-medium text-gray-900">What we offer</h2>
          <div className="w-24 h-1 bg-[#FFD700] mx-auto mt-3 rounded"></div>
        </div>

        <div className="relative" ref={containerRef}>
          {/* Track */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${(page * 100) / slidesPerView}%` }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              style={{ width: `${(OFFERS.length * 100) / slidesPerView}%` }}
            >
              {OFFERS.map((offer) => (
                <div
                  key={offer.id}
                  className="px-3"
                  style={{ width: `${100 / OFFERS.length}%` }}
                >
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden h-full flex flex-col">
                    <div className="relative w-full aspect-[16/9]">
                      <Image
                        src={offer.image}
                        alt={offer.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 33vw, 100vw"
                      />
                    </div>
                    <div className="px-6 py-6 text-center">
                      <h3 className="text-2xl md:text-3xl font-alkes text-gray-900">{offer.title}</h3>
                      <p className="mt-3 text-base md:text-lg text-gray-600 font-makozin leading-relaxed">
                        {offer.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 w-2 rounded-full transition ${i === page ? 'bg-gray-900' : 'bg-gray-300'}`}
              />
            ))}
          </div>

          <div className="hidden lg:flex absolute inset-y-0 left-0 right-0 items-center justify-between pointer-events-none">
            <button
              onClick={prev}
              className="pointer-events-auto inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow hover:bg-white transition"
              aria-label="Previous"
            >
              <span className="sr-only">Previous</span>
              ‹
            </button>
            <button
              onClick={next}
              className="pointer-events-auto inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow hover:bg-white transition"
              aria-label="Next"
            >
              <span className="sr-only">Next</span>
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatweOffer