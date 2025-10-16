'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const FaqList = () => {
  const [openIndex, setOpenIndex] = useState(0) // First item is open by default

  const faqs = [
    {
      question: "Who can Partner with RSA?",
      answer: "Corporates, NGOs, CSR foundations, educational institutions, and government agencies can collaborate with RSA for training, manpower solutions, or community outreach."
    },
    {
      question: "How do you ensure your field teams represent our brand accurately?",
      answer: "Our field teams undergo comprehensive brand training and are equipped with detailed brand guidelines. We conduct regular audits and provide ongoing support to ensure consistent brand representation across all touchpoints."
    },
    {
      question: "How is your audit process different from internal quality checks?",
      answer: "Our audit process is independent, objective, and follows industry best practices. Unlike internal checks, we provide unbiased assessments with detailed reporting and actionable recommendations for continuous improvement."
    },
    {
      question: "What makes your training more effective than traditional classroom sessions?",
      answer: "Our training combines practical hands-on experience with modern learning methodologies. We focus on real-world applications, use interactive tools, and provide personalized learning paths that ensure better retention and skill application."
    },
    {
      question: "How do you ensure the candidates are job-ready before placement?",
      answer: "We implement a comprehensive assessment framework that includes technical skills evaluation, soft skills training, mock interviews, and industry-specific preparation. Each candidate undergoes rigorous screening before placement."
    },
    {
      question: "Who can benefit from your employability programs?",
      answer: "Our employability programs are designed for fresh graduates, career changers, unemployed individuals, and those seeking skill enhancement. We cater to diverse backgrounds and experience levels."
    },
    {
      question: "Can you customize content for different roles or industries?",
      answer: "Yes, we specialize in creating customized training content tailored to specific roles, industries, and organizational requirements. Our content development team works closely with clients to ensure relevance and effectiveness."
    },
    {
      question: "Does RSA have experience working with underserved communities?",
      answer: "Yes, RSA has extensive experience working with underserved and rural communities. We have successfully implemented programs that have transformed thousands of lives across diverse socio-economic backgrounds."
    },
    {
      question: "How does RSA ensure post-placement success?",
      answer: "We maintain ongoing relationships with both candidates and employers. Our post-placement support includes regular follow-ups, additional training if needed, and career guidance to ensure long-term success and satisfaction."
    }
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={index}
                  className={`rounded-[50px] transition-all duration-400 ${
                    isOpen
                      ? 'p-[2px] bg-gradient-to-br from-[#e7d27c] to-[#f76c5e] shadow-[3px_2px_8px_#f76c5e61]'
                      : 'p-px bg-black'
                  }`}
                >
                  <div className="rounded-[50px] bg-white overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-4 text-left flex items-center gap-4 focus:outline-none"
                    >
                  {/* Icon using provided assets */}
                  <div className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0">
                    <Image
                      src={openIndex === index ? '/down.png' : '/green.png'}
                      alt="toggle arrow"
                      width={24}
                      height={24}
                      priority
                    />
                  </div>

                    {/* Question */}
                    <span
                      className={`font-semibold text-lg ${
                        isOpen ? 'text-gray-800' : 'text-gray-700'
                      }`}
                    >
                      {faq.question}
                    </span>
                  </button>

                  {/* Answer */}
                  {isOpen && (
                    <div className="px-6 pb-4">
                      <div className="ml-10">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqList