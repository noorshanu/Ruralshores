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
    offset: ["start 70%", "end 30%"]
  });

  // Calculate dot position and line progress based on scroll
  const dotY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // Hide moving dot when near static dots (at 0%, 50%, 100% positions)
  const movingDotOpacity = useTransform(
    scrollYProgress, 
    [0, 0.05, 0.15, 0.35, 0.45, 0.65, 0.75, 0.95, 1], 
    [0, 1, 1, 0, 1, 1, 0, 1, 0]
  );

  // Animation variants for timeline items
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const yearVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 12,
        duration: 0.5
      }
    }
  };

  const dotVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
        duration: 0.4
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: 30,
      y: 20
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.6,
        delay: 0.2
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
   
          
          <div ref={containerRef} className="relative min-h-[900px]">
            {/* Animated Timeline Line Background */}
            <div className="absolute left-12 md:left-26 top-0 h-full w-1 bg-gray-200 rounded-full overflow-hidden">
              {/* Animated Progress Line */}
              <motion.div
                style={{ height: lineHeight }}
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#E75B4D] via-[#f66b5e] to-[#E75B4D] rounded-full origin-top"
              />
            </div>
            
            {/* Moving Progress Dot - Smaller and hides when near static dots */}
            <motion.div
              style={{ 
                y: dotY,
                opacity: movingDotOpacity
              }}
              className="absolute left-12 md:left-26 -translate-x-1/2 z-10 pointer-events-none"
            >
              <div className="relative">
                {/* Outer glow ring - smaller */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 rounded-full bg-[#f66b5e] blur-sm"
                />
                {/* Main dot - smaller */}
                <div className="relative h-5 w-5 top-[-8px] left-[2px] rounded-full bg-gradient-to-br from-[#E75B4D] to-[#f66b5e] shadow-md border border-white" />
              </div>
            </motion.div>
            
            {/* Timeline Items */}
            <div className="space-y-24 md:space-y-32">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={itemVariants}
                  className="relative flex flex-col md:flex-row items-center gap-6"
                >
                  {/* Year - Left side */}
                  <motion.div 
                    variants={yearVariants}
                    className="w-24 md:w-28 text-right md:text-left relative z-0"
                  >
                    <motion.div 
                      className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#E75B4D] to-[#f66b5e] bg-clip-text text-transparent"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {item.year}
                    </motion.div>
                  </motion.div>
                  
                  {/* Static Dot - Positioned at center of each item */}
                  <motion.div
                    variants={dotVariants}
                    className="absolute left-12 md:left-26 top-1/2 -translate-y-1/2 h-5 w-5 -translate-x-1/2 z-30"
                  >
                    <div className="relative">
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3
                        }}
                        className="absolute left-[1px] inset-0 rounded-full bg-[#f66b5e] opacity-30"
                      />
                      <div className="relative h-5 w-5 left-[1px] rounded-full bg-gradient-to-br from-[#E75B4D] to-[#f66b5e] shadow-lg border-2 border-white" />
                    </div>
                  </motion.div>
                  
                  {/* Event Card - Right side */}
                  <motion.div
                    variants={cardVariants}
                    className="ml-0 md:ml-12 flex-1 w-full"
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.02,
                        y: -5,
                        boxShadow: "0 20px 40px rgba(231, 91, 77, 0.15)"
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-[#f66b5e]/30 transition-all duration-300 relative overflow-hidden group"
                    >
                      {/* Decorative gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#f66b5e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative z-10">
                        <motion.h3 
                          className="text-3xl md:text-4xl font-alkes font-bold text-black mb-4 group-hover:text-[#E75B4D] transition-colors duration-300"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                        >
                          {item.title}
                        </motion.h3>
                        <motion.p 
                          className="text-gray-700 leading-relaxed text-base md:text-lg"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 }}
                        >
                          {item.description}
                        </motion.p>
                      </div>
                      
                      {/* Corner accent */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#f66b5e]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;