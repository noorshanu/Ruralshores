import React from 'react'
import Image from 'next/image'

const Studentsection = () => {
  return (
    <>
      <style jsx>{`
        .testimonial-container {
          position: relative;
          background-color: #F8F8F8;
          border: 3px solid #F08070;
          border-radius: 15px;
          border-top-right: none;
          padding: 30px 25px 25px 25px;
          margin: 40px auto;
          max-width: 800px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .quote-marks {
          position: absolute;
          top: 15px;
          left: 20px;
          font-size: 60px;
          color: #F08070;
          font-family: serif;
          line-height: 1;
          z-index: 1;
        }

        .testimonial-content {
          position: relative;
          z-index: 2;
          padding-left: 40px;
        }

        .testimonial-text {
          font-size: 16px;
          line-height: 1.6;
          color: #333333;
          margin-bottom: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .testimonial-attribution {
          margin-top: 15px;
        }

        .testimonial-name {
          font-weight: bold;
          color: #333333;
          font-size: 18px;
          margin: 0;
        }

        .testimonial-role {
          color: #333333;
          font-size: 16px;
          margin: 0;
          font-weight: normal;
        }

        @media (max-width: 768px) {
          .testimonial-container {
            margin: 20px;
            padding: 25px 20px 20px 20px;
          }

          .quote-marks {
            font-size: 45px;
            top: 12px;
            left: 15px;
          }

          .testimonial-content {
            padding-left: 30px;
          }

          .testimonial-text {
            font-size: 14px;
          }

          .testimonial-name {
            font-size: 16px;
          }

          .testimonial-role {
            font-size: 14px;
          }
        }
      `}</style>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#E75B4D] mb-4">
              Student Success Stories
            </h2>
            <div className="w-16 h-1 bg-[#FFD700] mx-auto"></div>
          </div>

          {/* Testimonial Box */}
          <div className="testimonial-container">
            <div className="quote-marks">"</div>
            <div className="testimonial-content">
              <p className="testimonial-text">
                I could not study further after passing 10th because my family's financial condition was not good. And I had to do labor work. But here I got training as an electrician in a short period of time. And they gave me a good job so that I became financially stable and today I can support my family financially.
              </p>
              <div className="testimonial-attribution">
                <p className="testimonial-name">Kuntal</p>
                <p className="testimonial-role">(Electrician Trade Trainee)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Studentsection