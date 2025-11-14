import React from 'react'
import Image from 'next/image'
const ContactDetails = () => {
  return (
    <div className='max-w-5xl mx-auto py-10'>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone Card */}
            <div className="bg-white rounded-lg shadow-xl p-6 text-center border border-black">
              <div className="w-16 h-16 border border-[#F5C733] rounded-full flex items-center justify-center mx-auto mb-4">
           <Image src="/phone.png" alt="Phone" width={40} height={40} />
              </div>
              <h3 className="text-xl font-bold font-alkes  mb-2">Phone</h3>
              <p className=" font-makozin text-base">0120-4327359</p>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-lg shadow-xl p-8 text-center border border-black">
              <div className="w-16 h-16 border border-[#F5C733] rounded-full flex items-center justify-center mx-auto mb-4">
           <Image src="/location.png" alt="Location" width={40} height={40} />
              </div>
              <h3 className="text-xl font-bold font-alkes  mb-2">Location</h3>
              <p className=" font-makozin text-base">
                B-15, Ground Floor, Sector 2, Noida 201301, Uttar Pradesh, India
              </p>
            </div>

            {/* Email Card */}
                <div className="bg-white rounded-lg shadow-xl p-8 text-center border border-black">
              <div className="w-16 h-16 border border-[#F5C733] rounded-full flex items-center justify-center mx-auto mb-4">
           <Image src="/email.png" alt="Email" width={40} height={40} />
              </div>
              <h3 className="text-xl font-bold font-alkes  mb-2">Email Address</h3>
              <p className=" font-makozin text-base">academy@ruralshores.com</p>
            </div>
          </div>
    </div>
  )
}

export default ContactDetails