import React from "react";
import Image from "next/image";

const Founders = () => {
  const founders = [
    {
      name: "Murali Vullaganti",
      image: "/founder/Murali-Vullaganti.png", // You'll need to add this image
      bio: "Murali was formerly Managing Director of Xansa India, responsible for IT and BPO operations, and Regional Director, EDS Asia Pacific. He has been a strategy advisor to a number of IT and ITES companies in India and overseas. He is also Founder and Executive Chairman of PeopleShores Inc., USA, providing technology driven jobs to the economically challenged communities there.",
      linkedin: "https://linkedin.com/in/murali-vullaganti",
    },
    {
      name: "Srinivasan Govindan",
      image: "/founder/sern.png", // You'll need to add this image
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Meet the Founders
            </h2>
          </div>

          {/* Founders Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <div key={index} className="relative max-w-md mx-auto lg:mx-0">
                {/* Small Top Box - Image, Name, LinkedIn */}
                <div className="relative z-20 bg-white rounded-2xl p-6 shadow-lg mb-4 w-[350px] mx-auto">
                  <div className="flex flex-col items-center text-center">
                
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      width={96}
                      height={96}
                      className="w-24 h-24 rounded-full border-2 border-gray-200 overflow-hidden bg-gray-200 mb-4"
                    />

                    {/* Name and LinkedIn */}
                    <div className="flex items-center justify-center gap-2">
                      <h3 className="text-lg font-bold text-gray-800">
                        {founder.name}
                      </h3>
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
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
                  className="bg-[#F8F8F8] rounded-3xl p-8 shadow-lg relative z-10 -mt-8 pt-12"
                  style={{ boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}
                >
                  <div className="text-gray-700 leading-relaxed text-sm text-left">
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
