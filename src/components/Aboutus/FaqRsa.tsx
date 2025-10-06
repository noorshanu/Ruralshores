'use client'
import React, { useState } from 'react'

const FaqRsa = () => {
  const [openIndex, setOpenIndex] = useState(0) // First item is open by default

  const values = [
    {
      title: "RSA succeeds with our growth",
      content: [
        "Each task that we take on strengthens our character and career.",
        "We embrace the Values, Beliefs and Ideals shared below to help us all grow."
      ]
    },
    {
      title: "RSA is building boundless opportunities",
      content: [
        "We create pathways for growth and development that transcend traditional boundaries.",
        "Our commitment to innovation opens doors to unlimited possibilities for all stakeholders."
      ]
    },
    {
      title: "RSA is transformative change",
      content: [
        "We drive meaningful transformation in communities and organizations.",
        "Through our initiatives, we catalyze positive change that creates lasting impact."
      ]
    },
    {
      title: "RSA is a revolution",
      content: [
        "We are revolutionizing the way training, monitoring, and auditing are approached.",
        "Our innovative methods are reshaping industry standards and expectations."
      ]
    },
    {
      title: "RSA's Competitive Edge",
      content: [
        "Our unique approach combines technology with human insight for superior results.",
        "We maintain our competitive advantage through continuous innovation and excellence."
      ]
    }
  ]

  const toggleValue = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header with Icon and Title */}
          <div className="text-center mb-12">
            {/* Circular Icon */}
            <div className="w-20 h-20 mx-auto mb-6 bg-[#E75B4D] rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 font-serif">
              Our Values
            </h2>
          </div>

          {/* Values Accordion */}
          <div className="space-y-4">
            {values.map((value, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg border border-gray-200 transition-all duration-300 ${
                  openIndex === index
                    ? 'shadow-md'
                    : 'hover:shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleValue(index)}
                  className="w-full px-6 py-4 text-left flex items-center gap-4 focus:outline-none"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <div className="w-8 h-8 bg-[#E75B4D] rounded-full flex items-center justify-center">
                        <span className="text-white text-lg font-bold">-</span>
                      </div>
                    ) : (
                      <div className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 text-lg font-bold">+</span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <span
                    className={`font-semibold text-lg ${
                      openIndex === index ? 'text-[#E75B4D]' : 'text-gray-800'
                    }`}
                  >
                    {value.title}
                  </span>
                </button>

                {/* Content */}
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <div className="ml-12">
                      <ul className="space-y-2">
                        {value.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-700 leading-relaxed">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqRsa