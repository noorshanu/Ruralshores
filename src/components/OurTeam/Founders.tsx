import React from "react";
import Image from "next/image";

const Founders = () => {
  const founders = [
    {
      name: "Murali Vullaganti",
      image: "/founder/Murali-Vullaganti.png",
      imageWidth: 204,
      imageHeight: 200,
      bio: "Murali was formerly Managing Director of Xansa India, responsible for IT and BPO operations, and Regional Director, EDS Asia Pacific. He has been a strategy advisor to a number of IT and ITES companies in India and overseas. He is also Founder and Executive Chairman of PeopleShores Inc., USA, providing technology driven jobs to the economically challenged communities there.",
      linkedin: "https://linkedin.com/in/murali-vullaganti",
    },
    {
      name: "Srinivasan Govindan",
      image: "/founder/sern.png",
      imageWidth: 172,
      imageHeight: 191,
      bio: "G. Srinivasan, Co-Founder & Director, brings over 40 years of experience across corporate finance, strategic consulting, and social entrepreneurship. He has held key roles at Wimco, SRF, and Wipro Finance, and co-founded Dawn Consulting Group. He is also a Partner at CDI Global Inc., a global M&A advisory network, and serves on the Advisory Council of IIMPACT, an NGO educating 60,000 underprivileged girls across India.",
      linkedin: "https://linkedin.com/in/srinivasan-govindan",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-makozin md:text-3xl font-medium text-black mb-4">
              Meet the Founders
            </h2>
          </div>

          {/* Founders Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <div key={index} className="relative max-w-md mx-auto lg:mx-0">
                {/* Small Top Box - Image, Name, LinkedIn */}
                <div 
                  className="relative z-20 bg-white rounded-2xl mb-4 w-[260px] mx-auto"
                  style={{ boxShadow: '0px 0px 7px 0px rgba(0,0,0,0.5)' }}
                >
                  <div className="flex flex-col items-center text-center">
                
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      width={founder.imageWidth}
                      height={founder.imageHeight}
                      className="object-cover mb-4"
                      style={{ width: `${founder.imageWidth}px`, height: `${founder.imageHeight}px` }}
                    />

                    {/* Name and LinkedIn */}
                    <div className="flex items-center justify-center gap-2 bg-[#F5F2F3] w-full rounded-b-2xl py-2">
                      <h3 className="text-lg font-medium font-makozin text-black">
                        {founder.name}
                      </h3>
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1A63BC] hover:text-blue-800 transition-colors"
                      >
                        <div className="w-4 h-4 bg-[#1A63BC]  flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            in
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Large Bottom Box - Biography */}
                <div
                  className="bg-[#F5F2F3] rounded-2xl px-4 pt-[110px] shadow-lg relative z-10 -mt-26 pb-8 min-h-[290px]"
                 
                >
                  <div className="text-black leading-relaxed text-sm text-center font-makozin">
                    <p>{founder.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;
