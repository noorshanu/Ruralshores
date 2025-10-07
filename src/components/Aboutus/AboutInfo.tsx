import React from "react";

const AboutInfo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="  ">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-800 mb-6 font-makozin">
            About RSA
          </h2>

          <div className="space-y-4  leading-relaxed text-xl font-makozin">
            <p className="text-2xl">
             <strong>RuralShores Skills Academy (RSA) </strong> is India’s most trusted innovator
              in transformative training and audit solutions—empowering
              businesses to enhance both performance and compliance. Our
              integrated approach bridges skill gaps, strengthens frontline
              capabilities, and delivers measurable outcomes across sectors.
            </p>
            <p className="text-2xl">
              Founded in March 2013, RSA began with a clear mission: to bridge
              the urban-rural divide by equipping young people and corporates
              with the skills, confidence, and opportunities to thrive in
              India’s growing economy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
