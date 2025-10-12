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

        {/* redbox */}
        <div
          className="relative  mx-auto max-w-4xl bg-contain bg-no-repeat bg-center  "
          style={{
            backgroundImage: "url('/Peach-box.png')",
            minHeight: "350px",
          }}
        >
          {/* Content Over Background */}
          <div className="relative z-10 space-y-6 pt-27 px-16">
            <p className="text-base md:text-lg leading-relaxed text-gray-800">
              I could not study further after passing 10th because my
              family&apos;s financial condition was not good. And I had to do
              labor work. But here I got training as an electrician in a short
              period of time. And they gave me a good job so that I became
              financially stable and today I can support my family financially.
            </p>

            <div className="">
              <p className="font-bold text-gray-900 text-lg md:text-xl">
                Kuntal (Electrician Trade Trainee)
              </p>
            </div>
          </div>
        </div>

{/* yellowbox */}
        <div
          className="relative  mx-auto max-w-4xl bg-contain bg-no-repeat bg-center  "
          style={{
            backgroundImage: "url('/Yellow-box.png')",
            minHeight: "350px",
          }}
        >
          {/* Content Over Background */}
          <div className="relative z-10 space-y-6 pt-27 px-16">
            <p className="text-base md:text-lg leading-relaxed text-gray-800">
              I am living in rural area, far from main village. It was a dream
              come true for me to take training in such an advanced and well
              equipped training center. I have never seen a training center with
              such good facilities. I feel very lucky to have the chance to
              train in this center. I will utilize this knowledge of skill, I
              received here.
            </p>

            <div className="">
              <p className="font-bold text-gray-900 text-lg md:text-xl">
                Bharat Parmar (Advance Excel Trainee)
              </p>
            </div>
          </div>
        </div>

               {/* redbox */}
               <div
          className="relative  mx-auto max-w-4xl bg-contain bg-no-repeat bg-center  "
          style={{
            backgroundImage: "url('/Peach-box.png')",
            minHeight: "350px",
          }}
        >
          {/* Content Over Background */}
          <div className="relative z-10 space-y-6 pt-27 px-18">
            <p className="text-base md:text-lg leading-relaxed text-gray-800">
            Before I got training here I was weak in speaking in front of public. But because of the various co-curricular activities conducted here, I can now present myself effectively to others. My personality has changed a lot which has been very useful in my job.This institute has given me training and employment too.
            </p>

            <div className="">
              <p className="font-bold text-gray-900 text-lg md:text-xl">
              Vikash Parmar - (BPO Trade Trainee)
              </p>
            </div>
          </div>
        </div>


        {/* yellowbox */}
        <div
          className="relative  mx-auto max-w-4xl bg-contain bg-no-repeat bg-center  "
          style={{
            backgroundImage: "url('/Yellow-box.png')",
            minHeight: "350px",
          }}
        >
          {/* Content Over Background */}
          <div className="relative z-10 space-y-6 pt-27 px-16">
            <p className="text-base md:text-lg leading-relaxed text-gray-800">
              I am living in rural area, far from main village. It was a dream
              come true for me to take training in such an advanced and well
              equipped training center. I have never seen a training center with
              such good facilities. I feel very lucky to have the chance to
              train in this center. I will utilize this knowledge of skill, I
              received here.
            </p>

            <div className="">
              <p className="font-bold text-gray-900 text-lg md:text-xl">
                Bharat Parmar (Advance Excel Trainee)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studentsection;
