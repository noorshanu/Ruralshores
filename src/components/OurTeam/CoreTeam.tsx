import React from 'react'
import Image from 'next/image'

const CoreTeam = () => {
  const teamMembers = [
    {
      name: "Sindhu Girish",
      role: "Rooted in People | Rising in Business",
      description: "Sindhu has been a pillar of strength and strategy. As a trusted HR partner, she not only nurtured people but also pioneered a new business line-setting a benchmark for innovation and ownership.",
      image: "/coreteam/shindu.jpg",
      imageWidth: 260,
      imageHeight: 250,
      linkedin: "https://linkedin.com/in/sindhu-girish"
    },
    {
      name: "Pravin Unde",
      role: "Grassroots Innovator | Skilling Visionary",
      description: "Starting as a field trainer, Praveen transformed classroom challenges into creative solutions. His grounded understanding of learner's needs now powers an entire business line under his leadership.",
      image: "/coreteam/parvin.jpg",
      imageWidth: 260,
      imageHeight: 250,
      linkedin: "https://linkedin.com/in/pravin-unde"
    },
    {
      name: "Snehi Shabnam",
      role: "Creative Strategist | Business Line Leader | Mentor at Heart",
      description: "From penning her first training module to shaping three thriving business lines, Snehi blends creativity with sharp strategic vision. She leads with clarity, driving innovation across both design and delivery. Her leadership inspires teams to push boundaries and deliver with purpose.",
      image: "/coreteam/snehi.jpg",
      imageWidth: 260,
      imageHeight: 250,
      linkedin: "https://linkedin.com/in/pravin-unde"
    },
    {
      name: "Sonal Arora",
      role: "Learning Architect | Creative Powerhouse | Trainer at Heart",
      description: "As a technologist and entrepreneur, Rajiv brings over two decades of experience in driving AI-powered solutions. His expertise spans AI, analytics, and digital transformation, driving efficiency and innovation across multiple business lines.",
      image: "/coreteam/sonal.jpg",
      imageWidth: 260,
      imageHeight: 250,
      linkedin: "https://linkedin.com/in/pravin-unde"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-makozin md:text-3xl font-medium text-black mb-4">
              Meet the Core Team
            </h2>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="relative max-w-md mx-auto lg:mx-0">
                {/* Small Top Box - Image, Name, LinkedIn */}
                <div 
                  className="relative z-20 bg-white rounded-2xl mb-4 w-[260px] mx-auto"
                  style={{ boxShadow: '0px 0px 7px 0px rgba(0,0,0,0.5)' }}
                >
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={member.imageWidth}
                      height={member.imageHeight}
                      className="object-cover  w-full rounded-t-xl"
                      style={{ width: `${member.imageWidth}px`, height: `${member.imageHeight}px` }}
                    />

                    {/* Name and LinkedIn */}
                    <div className="flex items-center justify-center gap-2 bg-[#F5F2F3] w-full rounded-b-2xl py-2">
                      <h3 className="text-lg font-medium font-makozin text-black">
                        {member.name}
                      </h3>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1A63BC] hover:text-blue-800 transition-colors"
                      >
                        <div className="w-4 h-4 bg-[#1A63BC] flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            in
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Large Bottom Box - Role and Description */}
                <div
                  className="bg-[#F5F2F3] rounded-2xl px-4 pt-[110px] shadow-lg relative z-10 -mt-26 pb-8 min-h-[290px]"
                >
                  <div className="text-center font-makozin">
                    {/* Role */}
                    <p className="text-[#E75B4D] font-semibold text-base mb-4">
                      {member.role}
                    </p>
                    {/* Description */}
                    <p className="text-black leading-relaxed text-sm">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoreTeam