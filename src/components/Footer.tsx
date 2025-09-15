import React from 'react'

const Footer = () => {
  return (
    <footer className="relative bg-cover bg-center bg-no-repeat py-16" style={{ backgroundImage: 'url(/footerbg.jpg)' }}>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Get in Touch Section */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-xl mb-4">Get in Touch</h3>
            <p className="text-white text-sm leading-relaxed">
              Looking to empower your workforce or collaborate for impact? Contact Us Today - we&apos;re here to build skills, create opportunities, and grow together.
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <span className="text-gray-700 font-bold text-sm">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <span className="text-gray-700 font-bold text-sm">X</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948 0 3.259-.014 3.667-.072 4.947-.2 4.354-2.618 6.782-6.98 6.98-1.281.058-1.689.072-4.948 0-3.259.014-3.667.072-4.947.2-4.358 2.618-6.78 6.98-6.98 1.281-.059 1.69-.073 4.949-.073 4.948zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <span className="text-gray-700 font-bold text-sm">in</span>
              </a>
            </div>
          </div>

          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-xl mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white text-sm hover:text-gray-200 transition-colors">About Us</a></li>
              <li><a href="#" className="text-white text-sm hover:text-gray-200 transition-colors">Team RSA</a></li>
              <li><a href="#" className="text-white text-sm hover:text-gray-200 transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-white text-sm hover:text-gray-200 transition-colors">Visit RuralShores</a></li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-xl mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white text-sm hover:text-gray-200 transition-colors">Frontline Excellence</a></li>
              <li><a href="#" className="text-white text-sm hover:text-gray-200 transition-colors">Training</a></li>
              <li><a href="#" className="text-white text-sm hover:text-gray-200 transition-colors">3P Talent Engine</a></li>
              <li><a href="#" className="text-white text-sm hover:text-gray-200 transition-colors">Employability Readiness</a></li>
              <li><a href="#" className="text-white text-sm hover:text-gray-200 transition-colors">Content Development</a></li>
            </ul>
          </div>

          {/* Others Section */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-xl mb-4">Others</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white text-sm hover:text-gray-200 transition-colors">Careers</a></li>
              <li><a href="#" className="text-white text-sm hover:text-gray-200 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-white text-sm hover:text-gray-200 transition-colors">Blogs</a></li>
              <li><a href="#" className="text-white text-sm hover:text-gray-200 transition-colors">FAQs</a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer