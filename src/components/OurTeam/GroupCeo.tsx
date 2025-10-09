/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import Image from "next/image";

const GroupCeo = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Section - Text Description */}
            <div className="order-2 lg:order-1">
              <div className="max-w-2xl">
                <p className="text-black font-makozin leading-relaxed text-lg mb-2">
                  Tarun Singhal is a high-energy, entrepreneurially minded
                  growth leader and ecosystem influencer with over three decades
                  of experience in integrated sales and operations across global
                  markets. He excels at building deep, trusted relationships and
                  has a proven track record of growing products and services
                  from zero to multi-million dollar revenues, achieving up to
                  75% market share in India.
                  <br />
                 <br />
                  A master at forging lasting ties with CXOs and senior
                      influencers across telecom, government, industrials, energy,
                      banking, hospitality, and IT services, Tarun has transformed
                      cost centers into profit centers through   innovations like   &quot;Marketing as a Service" amongst many. 
                </p>
                
                {isExpanded && (
                  <>
                    <p className="text-black font-makozin leading-relaxed text-lg mb-8">
                   
                    He has also scaled
                      Global Capability Centers in India for UK, European, and US
                      businesses employing tens of thousands. 
                    </p>
                    <p className="text-black font-makozin leading-relaxed text-lg mb-8">His career spans
                      leadership roles at Mobile Systems International (acquired by
                      Ericsson), CA Technologies, Oracle, Perot Systems, HCL, and
                      Sopra Steria. Honored as an Honorary Professor at Amity
                      University, a Distinguished Alumni of Indian Navy School, and
                      a Chevening Scholar from Alliance Manchester Business School,
                      Tarun brings vision, passion, and influence to every role.
                    </p>
                    <p className="text-black font-makozin leading-relaxed text-lg mb-8"> At
                      RuralShores, he is co-creating an inclusive, innovative, and
                      impactful future.
                    </p>
                  </>
                )}

                {/* Read More Button */}
                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="bg-gradient-to-r from-[#E75B4D] to-[#C44A3A] hover:from-[#D54A3A] hover:to-[#B03A2A] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {isExpanded ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>

            {/* Right Section - Image and Caption */}
            <div className="order-1 lg:order-2">
              <div className="max-w-md mx-auto lg:mx-0">
                {/* Profile Image */}
                <div className="relative ">
                  <div className="  mx-auto">
                    {/* Placeholder for Tarun Singhal's image */}
                    <Image
                      src="/founder/tarun.jpg"
                      alt="Tarun Singhal"
                      width={384}
                      height={323}
                      className="w-full h-full object-cover rounded-t-xl"
                    />
                  </div>
                </div>

                {/* Caption */}
                <div className="flex items-center justify-center gap-2 bg-[#F5F2F3] rounded-b-xl py-2">
                  <h3 className="text-lg font-medium font-makozin text-gray-800">
                    Group CEO - Tarun Singhal
                  </h3>
                  <a
                    href="https://linkedin.com/in/tarun-singhal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupCeo;
