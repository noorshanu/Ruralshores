"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface MenuItem {
  label: string;
  href?: string;
  dropdown?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Company Overview",
    dropdown: [
      { label: "About Us", href: "/about-us" },
      { label: "Our Team", href: "/our-team" },
      { label: "Success Stories", href: "/success-stories" },
      { label: "Career", href: "/careers" },
    ],
  },
  {
    label: "Corporate",
    dropdown: [
      {
        label: "Brand Assurance Audit",
        href: "/services/brand-assurance-audit",
      },
      {
        label: "Field Marketing Impact",
        href: "/services/field-marketing-impact",
      },
      {
        label: "Frontline Excellence Training",
        href: "/services/frontline-excellence-training",
      },
      {
        label: "Marketing as a Service",
        href: "/services/marketing-as-a-service",
      },
      {
        label: "Third Party Talent Engine",
        href: "/services/third-party-talent-engine",
      },
    ],
  },
  {
    label: "Employability",
    href: "/employability",
  },


  {
    label: "Content",
    href: "/content",
  },

  {
    label: "Insights",
    dropdown: [
      { label: "Blog", href: "/blog" },
      { label: "Faq", href: "/faq" },
   
    ],
  },
];

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 1.5 second delay
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:block sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className=" mx-auto px-4 pb-2 pt-2 sm:px-12">
        

          <div className="flex justify-between items-end ">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center relative">
                {/* Logo Text */}
                <div className="text-2xl font-bold">
                  <Image
                    src="/logo.png"
                    alt="RuralShores"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8 ">
              {menuItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="flex items-center cursor-pointer text-gray-700 hover:text-red-600 transition-colors">
                        <span
                          className={
                            item.label === "Home"
                              ? "text-red-400 border-b-2 border-red-400"
                              : ""
                          }
                        >
                          {item.label}
                        </span>
                        {item.dropdown && (
                          <svg
                            className="ml-1 w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        )}
                      </div>

                      {/* Services Special Dropdown */}
                      {item.label === "Services" &&
                        activeDropdown === item.label && (
                          <div className="absolute top-full left-0 mt-2">
                            <div className="bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50 p-4">
                              {/* Services Header */}

                              {/* Dropdown Menu Items */}
                              <div className="space-y-2">
                                {item.dropdown?.map((dropdownItem, index) => (
                                  <a
                                    key={dropdownItem.label}
                                    href={dropdownItem.href}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors rounded"
                                  >
                                    <div className="flex items-center justify-between">
                                      <span>{dropdownItem.label}</span>
                                      {index === 0 && (
                                        <svg
                                          className="w-4 h-4"
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                          />
                                        </svg>
                                      )}
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                      {/* Regular Dropdown Menu for other items */}
                      {item.dropdown &&
                        activeDropdown === item.label &&
                        item.label !== "Services" && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-full left-0 mt-2 w-46 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50"
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
                  ) : (
                    <a
                      href={item.href}
                      className={`text-gray-700 hover:text-red-600 transition-colors ${
                        item.label === "Home"
                          ? "text-red-400 border-b-2 border-red-400"
                          : ""
                      }`}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}

              {/* Contact Button */}
              <a href="/contact-us" className="bg-red-400 hover:bg-red-500 text-white px-6 py-2 rounded-md transition-colors font-bold">
                Contact us
              </a>
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
              <Image
                src="/logo.png"
                alt="RuralShores"
                width={120}
                height={120}
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={handleMobileMenuToggle}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
            >
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-y-0 right-0 w-80 bg-white shadow-xl z-50"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <div className="text-xl font-bold text-green-800">
                    <Image
                      src="/logo.png"
                      alt="RuralShores"
                      width={120}
                      height={120}
                    />
                  </div>
                  <button
                    onClick={handleMobileMenuToggle}
                    className="p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
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
                            <span
                              className={
                                item.label === "Home" ? "text-red-400" : ""
                              }
                            >
                              {item.label}
                            </span>
                            <svg
                              className={`w-4 h-4 transition-transform ${
                                activeDropdown === item.label
                                  ? "rotate-180"
                                  : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>

                          <AnimatePresence>
                            {activeDropdown === item.label && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="pl-4 space-y-2"
                              >
                                {item.dropdown?.map((dropdownItem) => (
                                  <a
                                    key={dropdownItem.label}
                                    href={dropdownItem.href}
                                    className="block py-2 text-sm text-gray-600 hover:text-red-600 transition-colors font-alkes"
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
                          className={`block py-2 text-gray-700 hover:text-red-600 transition-colors font-alkes${
                            item.label === "Home" ? "text-red-400" : ""
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
                  <button className="w-full bg-red-400 hover:bg-red-500 text-white px-6 py-3 rounded-md transition-colors fon-alkes">
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
  );
};

export default Navbar;
