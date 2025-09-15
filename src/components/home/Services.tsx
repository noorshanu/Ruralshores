import React from 'react'

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-500 mb-2">Services</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Corporate Service */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="mb-6">
              <img src="/icon1.png" alt="Corporate Icon" className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Corporate</h3>
            <p className="text-gray-600 leading-relaxed">
              Ignite your brand&apos;s presence with trained, aligned field teams.
            </p>
          </div>

          {/* Employability Service */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="mb-6">
              <img src="/icon1.png" alt="Employability Icon" className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Employability</h3>
            <p className="text-gray-600 leading-relaxed">
              Creating confidence capability and career readiness
            </p>
          </div>

          {/* Content Service */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="mb-6">
              <img src="/icon1.png" alt="Content Icon" className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Content</h3>
            <p className="text-gray-600 leading-relaxed">
              Content that empowers, engages, and elevates
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Services