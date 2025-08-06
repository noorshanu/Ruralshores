'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface MenuItem {
  label: string
  href?: string
  dropdown?: MenuItem[]
}

const menuItems: MenuItem[] = [
  { label: 'Home', href: '/' },
  { 
    label: 'Company Overview', 
    dropdown: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Mission', href: '/mission' },
      { label: 'Leadership', href: '/leadership' }
    ]
  },
  { 
    label: 'Services', 
    dropdown: [
      { label: 'Corporate', href: '/services/corporate' },
      { label: 'Employability', href: '/services/employability' },
      { label: 'Content', href: '/services/content' }
    ]
  },
  { 
    label: 'Insights', 
    dropdown: [
      { label: 'Blog', href: '/blog' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Research', href: '/research' }
    ]
  }
]

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label)
  }

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:block sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="text-2xl font-bold text-green-800">
                  RuralShores
                  <div className="text-sm text-brown-600">
                    <div>Countryside</div>
                    <div>Nationwide</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.dropdown ? (
                    <div
                      className="flex items-center cursor-pointer text-gray-700 hover:text-red-600 transition-colors"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <span className={item.label === 'Home' ? 'text-red-600 border-b-2 border-red-600' : ''}>
                        {item.label}
                      </span>
                      {item.dropdown && (
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className={`text-gray-700 hover:text-red-600 transition-colors ${
                        item.label === 'Home' ? 'text-red-600 border-b-2 border-red-600' : ''
                      }`}
                    >
                      {item.label}
                    </a>
                  )}

                  {/* Services Special Section */}
                  {item.label === 'Services' && (
                    <div className="absolute top-full left-0 mt-2">
                      <div className="text-center">
                        <div className="font-normal text-lg text-black mb-0">
                          Services
                        </div>
                        <svg width="300" height="30" viewBox="0 0 300 30" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <filter id="shadow" x="-10%" y="-10%" width="140%" height="140%">
                              <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000"/>
                            </filter>
                          </defs>
                          <path 
                            d="M10 30 Q 10 10 30 10 L 270 10 Q 290 10 290 30" 
                            stroke="#f1f1f1" 
                            strokeWidth="1" 
                            fill="none"
                            filter="url(#shadow)"
                          />
                          <line 
                            x1="149" 
                            y1="9" 
                            x2="149.8" 
                            y2="70" 
                            stroke="#f1f1f1"
                            strokeWidth="1"
                            filter="url(#shadow)"
                          />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50"
                    >
                      <div className="py-1">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors"
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}

              {/* Contact Button */}
              <button className="bg-red-400 hover:bg-red-500 text-white px-6 py-2 rounded-md transition-colors">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="lg:hidden sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Mobile Logo */}
            <div className="flex-shrink-0">
              <div className="text-xl font-bold text-green-800">
                RuralShores
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={handleMobileMenuToggle}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
            >
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-y-0 right-0 w-80 bg-white shadow-xl z-50"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <div className="text-xl font-bold text-green-800">
                    RuralShores
                  </div>
                  <button
                    onClick={handleMobileMenuToggle}
                    className="p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Mobile Menu Items */}
                <div className="flex-1 px-4 py-6 space-y-4">
                  {menuItems.map((item) => (
                    <div key={item.label}>
                      {item.dropdown ? (
                        <div>
                          <button
                            onClick={() => handleDropdownToggle(item.label)}
                            className="flex items-center justify-between w-full text-left py-2 text-gray-700 hover:text-red-600 transition-colors"
                          >
                            <span className={item.label === 'Home' ? 'text-red-600' : ''}>
                              {item.label}
                            </span>
                            <svg
                              className={`w-4 h-4 transition-transform ${
                                activeDropdown === item.label ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          
                          <AnimatePresence>
                            {activeDropdown === item.label && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="pl-4 space-y-2"
                              >
                                {item.dropdown?.map((dropdownItem) => (
                                  <a
                                    key={dropdownItem.label}
                                    href={dropdownItem.href}
                                    className="block py-2 text-sm text-gray-600 hover:text-red-600 transition-colors"
                                  >
                                    {dropdownItem.label}
                                  </a>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <a
                          href={item.href}
                          className={`block py-2 text-gray-700 hover:text-red-600 transition-colors ${
                            item.label === 'Home' ? 'text-red-600' : ''
                          }`}
                        >
                          {item.label}
                        </a>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Contact Button */}
                <div className="p-4 border-t border-gray-200">
                  <button className="w-full bg-red-400 hover:bg-red-500 text-white px-6 py-3 rounded-md transition-colors">
                    Contact us
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleMobileMenuToggle}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
            />
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}

export default Navbar