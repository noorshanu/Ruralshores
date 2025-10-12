'use client'

import React, { useState } from 'react'

const CareerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    position: '',
    message: '',
    file: null as File | null
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({
      ...prev,
      file
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section className="pb-16 pt-8 bg-[#f5f5f5] rounded-[50px] mb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
            {/* Left Section - Promotional Text */}
            <div className="order-2 lg:order-1">
              <div className="max-w-lg">
                <p className="text-gray-700 text-2xl leading-relaxed mb-8">
                  Be a Part of a growing company as it offers endless opportunities to not just grow but transform yourselves.
                </p>
                
                <h2 className="text-4xl md:text-6xl font-makozin">
                  <span className="text-gray-800">Your Work <br /> Here </span>
                  <span className="text-[#E75B4D]">Matters</span>
                </h2>
              </div>
            </div>

            {/* Right Section - Application Form */}
            <div className="order-1 lg:order-2">
              <div className="max-w-lg mx-auto lg:mx-0">
                <h3 className="text-2xl font-bold text-gray-800 mb-8">
                  Join our team!
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:border-[#E75B4D] focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:border-[#E75B4D] focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* City Field */}
                  <div>
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:border-[#E75B4D] focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Position Field */}
                  <div>
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:border-[#E75B4D] focus:outline-none transition-colors appearance-none bg-white"
                      required
                    >
                      <option value="">Choose desired position</option>
                      <option value="software-developer">Software Developer</option>
                      <option value="project-manager">Project Manager</option>
                      <option value="hr-specialist">HR Specialist</option>
                      <option value="marketing-coordinator">Marketing Coordinator</option>
                      <option value="business-analyst">Business Analyst</option>
                      <option value="trainer">Trainer</option>
                      <option value="operations-manager">Operations Manager</option>
                      <option value="sales-executive">Sales Executive</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <textarea
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:border-[#E75B4D] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* File Upload Field */}
                  <div>
                    <div className="relative">
                      <input
                        type="file"
                        id="file"
                        name="file"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept=".pdf,.doc,.docx"
                      />
                      <div className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-white flex items-center justify-between">
                        <span className="text-gray-500">
                          {formData.file ? formData.file.name : 'Choose file'}
                        </span>
                        <span className="text-gray-400">
                          {formData.file ? '' : 'No file chosen'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-[#E75B4D] hover:bg-[#D54A3A] text-white font-bold py-3 px-6 rounded-2xl transition-colors duration-300"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareerForm