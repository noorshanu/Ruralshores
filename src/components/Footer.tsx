import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

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
                <FaFacebookF className="text-gray-700 text-sm" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <FaTwitter className="text-gray-700 text-sm" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <FaInstagram className="text-gray-700 text-sm" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <FaLinkedinIn className="text-gray-700 text-sm" />
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