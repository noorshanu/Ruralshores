'use client'

import React from 'react'
import Marquee from 'react-fast-marquee'
import { MdKeyboardArrowRight } from "react-icons/md";

// JSON data for marquee items
const marqueeData = [
  {
    id: 1,
    text: "Ruralshores Skills Academy in India Today",
    link: "/skills-academy",
    icon: "arrow"
  },
  {
    id: 2,
    text: "Rural Digital Transformation Program",
    link: "/digital-transformation",
    icon: "arrow"
  },
  {
    id: 3,
    text: "Empowering Rural Communities",
    link: "/empowerment",
    icon: "arrow"
  },
  {
    id: 4,
    text: "Skill Development Initiatives",
    link: "/skill-development",
    icon: "arrow"
  },
  {
    id: 5,
    text: "Rural Employment Opportunities",
    link: "/employment",
    icon: "arrow"
  },
  {
    id: 6,
    text: "Technology Training Programs",
    link: "/tech-training",
    icon: "arrow"
  },
  {
    id: 7,
    text: "Rural Innovation Hub",
    link: "/innovation-hub",
    icon: "arrow"
  },
  {
    id: 8,
    text: "Community Development Projects",
    link: "/community-projects",
    icon: "arrow"
  }
]

const MarqueNew = () => {
  return (
    <div className="bg-[#f5f2f3] py-8 mt-4">
      <Marquee 
        speed={40}
        gradient={false}
        pauseOnHover={true}
      >
        {marqueeData.map((item, index) => (
          <div key={item.id} className="mx-4">
            <a 
              href={item.link}
              className="wp-btn-hover bg-blue-600 hover:bg-blue-700 text-white px-6 py-1 rounded-full transition-all duration-400 flex  items-center gap-4  relative overflow-hidden"
            >
              <span className="whitespace-nowrap relative z-10 transition-transform duration-400 font-makozin">{item.text}</span>
              <MdKeyboardArrowRight className="w-4 h-4 relative z-10 transition-all duration-400 transform -translate-x-1 hover:translate-x-2 hover:rotate-5" />
            </a>
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export default MarqueNew