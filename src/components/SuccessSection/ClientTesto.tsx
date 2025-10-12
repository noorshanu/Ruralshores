'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const ClientTesto = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 'card1',
      image: '/testo/Heenu.png',
      name: 'Heenu Singh',
      text: 'Our partnership with RuralShores Skills Academy as the technical training partner for the Vihaan Skill Training Program has been a truly rewarding experience. The expertise and experience that the Academy brings to the table have played a pivotal role in aligning our training modules with current market demands.'
    },
    {
      id: 'card2',
      image: '/testo/Ruma.png',
      name: 'Ruma Roka',
      text: 'Working with the Deaf community - with children and youth who could not hear and speak threw up a number of on the ground challenges. Students were cut off from all forms of knowledge, skills and learning due to lack of language and comprehension leaving them bereft of any hope for the future. It was then, over 15 years ago that I met Neeraj, and given his expertise in content creation.'
    },
    {
      id: 'card3',
      image: '/testo/Dr-Amar.png',
      name: 'Dr. Amarendra',
      text: 'Our vision has been to ensure all-round development of the rural areas around our plant. As part of our CSR initiatives, we laid the foundation of a skill development center in Jambusar in 2017. The main objective of this project is to increase household income through employment. We collaborated this initiative with RSA for better results. RSA brought this project to a very good state with their experience.'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const getCardClass = (index: number) => {
    const total = testimonials.length
    const prev = (currentIndex - 1 + total) % total
    const next = (currentIndex + 1) % total

    if (index === currentIndex) return 'center'
    if (index === prev) return 'left'
    if (index === next) return 'right'
    return 'hidden-card'
  }

  return (
    <>
      <style jsx>{`
        .card-carousel {
          position: relative;
          height: 400px;
          max-width: 900px;
          margin: 60px auto;
          perspective: 1000px;
        }

        .card {
          position: absolute;
          top: 0;
          left: 50%;
          width: 400px;
          padding: 30px;
          border-radius: 25px;
          transform-style: preserve-3d;
          transform: translateX(-50%) scale(0.85);
          background: #eee;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          text-align: center;
          opacity: 0.5;
          transition: all 0.8s ease;
          z-index: 0;
        }

        .card :global(img) {
          width: 90px !important;
          height: 90px !important;
          border-radius: 50%;
          margin: 0 auto 15px !important;
          object-fit: cover;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          display: block !important;
        }

        .card h3 {
          margin: 10px 0 5px;
          font-size: 1.2rem;
          color: #333;
        }

        .card p {
          font-size: 0.95rem;
          color: #444;
          line-height: 1.4;
        }

        .card.center {
          transform: translateX(-50%) scale(1.1);
          background: #f8c2c2;
          opacity: 1;
          z-index: 3;
        }

        .card.left {
          transform: translateX(-150%) scale(0.85);
          background: #e0e0e0;
          opacity: 0.6;
          z-index: 1;
        }

        .card.right {
          transform: translateX(50%) scale(0.85);
          background: #e0e0e0;
          opacity: 0.6;
          z-index: 1;
        }

        .card.hidden-card {
          opacity: 0;
          z-index: 0;
        }

        @media (max-width: 768px) {
          .card-carousel {
            height: 500px;
            margin: 40px auto;
          }

          .card {
            width: 300px;
            padding: 20px;
          }

          .card.left,
          .card.right {
            display: none;
          }
        }
      `}</style>

      <section className="py-16 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#E75B4D] mb-4">
              Client Testimonials
            </h2>
            <div className="w-16 h-1 bg-[#FFD700] mx-auto"></div>
          </div>

          {/* Card Carousel */}
          <div className="card-carousel">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`card ${getCardClass(index)}`}
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={90}
                    height={90}
                    className="rounded-full"
                  />
                </div>
                <h3>{testimonial.name}</h3>
                <p>{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ClientTesto