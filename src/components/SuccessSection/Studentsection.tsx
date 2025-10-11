import React from "react";

const Studentsection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#E75B4D] mb-4">
            Student Success Stories
          </h2>
          <div className="w-16 h-1 bg-[#FFD700] mx-auto"></div>
        </div>

        {/* Testimonial Box with Background Image */}
        <div
          className="relative  mx-auto max-w-4xl bg-contain bg-no-repeat bg-center  "
          style={{
            backgroundImage: "url('/Peach-box.png')",
            minHeight: "350px",
          }}
        >
          {/* Content Over Background */}
          <div className="relative z-10 space-y-6">
            <p className="text-base md:text-lg leading-relaxed text-gray-800">
              I could not study further after passing 10th because my
              family&apos;s financial condition was not good. And I had to do
              labor work. But here I got training as an electrician in a short
              period of time. And they gave me a good job so that I became
              financially stable and today I can support my family financially.
            </p>

            <div className="pt-2">
              <p className="font-bold text-gray-900 text-lg md:text-xl">
                Kuntal (Electrician Trade Trainee)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studentsection;
