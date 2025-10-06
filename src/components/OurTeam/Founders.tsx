import React from 'react'

const Founders = () => {
  const founders = [
    {
      name: "Murali Vullaganti",
      image: "/murali-vullaganti.jpg", // You'll need to add this image
      bio: "Murali was formerly Managing Director of Xansa India, responsible for IT and BPO operations, and Regional Director, EDS Asia Pacific. He has been a strategy advisor to a number of IT and ITES companies in India and overseas. He is also Founder and Executive Chairman of PeopleShores Inc., USA, providing technology driven jobs to the economically challenged communities there.",
      linkedin: "https://linkedin.com/in/murali-vullaganti"
    },
    {
      name: "Srinivasan Govindan", 
      image: "/srinivasan-govindan.jpg", // You'll need to add this image
      bio: "G. Srinivasan, Co-Founder & Director, brings over 40 years of experience across corporate finance, strategic consulting, and social entrepreneurship. He has held key roles at Wimco, SRF, and Wipro Finance, and co-founded Dawn Consulting Group. He is also a Partner at CDI Global Inc., a global M&A advisory network, and serves on the Advisory Council of IIMPACT, an NGO educating 60,000 underprivileged girls across India.",
      linkedin: "https://linkedin.com/in/srinivasan-govindan"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Meet the Founders
            </h2>
          </div>

          {/* Founders Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 max-w-lg mx-auto lg:mx-0">
                {/* Profile Image */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-32 h-32">
                    <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                      {/* Placeholder for founder image */}
                      <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
                        <span className="text-4xl font-bold text-gray-600">
                          {founder.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Name and LinkedIn */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-3">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {founder.name}
                    </h3>
                    <a 
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Biography */}
                <div className="text-gray-700 leading-relaxed text-sm">
                  <p>{founder.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Founders