"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2013",
    title: "Inception",
    description: "RSA launched its operations in collaboration with RuralShores Business Services to provide skill training to rural youth for domestic BPO centers."
  },
  {
    year: "2018", 
    title: "Deepening Focus",
    description: "RSA expanded its partnerships, including with Hindustan Unilever for marketing activations, and developed special training programs to reintegrate trafficked girls into the workforce."
  },
  {
    year: "2023",
    title: "Inclusion & Diversification", 
    description: "We broadened our reach through collaborations with large corporates and NGOs. We launched specialized training centers in Gujarat and initiated programs for vulnerable girls in rural India"
  }
];

const Roadmap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  // Calculate dot position based on scroll progress
  const dotY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#E75B4D] mb-12 text-center">
            Roadmap
          </h2>
          
          <div ref={containerRef} className="relative min-h-[800px]">
            {/* Timeline Line */}
            <div className="absolute left-16 top-0 h-full w-0.5 bg-gray-800" />
            
            {/* Moving Icon */}
            <motion.svg
              aria-hidden="true"
              viewBox="0 0 512 512"
              style={{ y: dotY }}
              className="absolute left-16 -translate-x-1/2 z-20 h-6 w-6 text-[#f66b5e]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"
                fill="currentColor"
              />
            </motion.svg>
            
            {/* Timeline Items */}
            <div className="space-y-20">
              {timelineData.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Year - Left side */}
                  <div className="w-24 text-right ">
                    <div className="text-2xl font-bold text-gray-800 mr-2">
                      {item.year}
                    </div>
                  </div>
                  
                  {/* Static Dot */}
                  <div className="absolute left-16 h-4 w-4 -translate-x-1/2 rounded-full bg-[#f66b5e]" />
                  
                  {/* Event Card - Right side */}
                  <div className="ml-12 flex-1 w-full">
                    <div className="bg-[#f6f3f2] p-6 rounded-xl  ">
                      <h3 className="text-[43px] font-alkes font-bold text-black mb-3">
                        {item.title}
                      </h3>
                      <p className="text-black leading-relaxed text-base" >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;