import React from 'react'

const CounterSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          
          {/* States Card */}
          <div className="bg-gray-50 rounded-2xl p-6 text-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2 font-makozin">20+</div>
              <div className="text-lg text-black font-medium font-makozin ">States</div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-yellow-400 rounded-t-full transform translate-y-1/2"></div>
          </div>

          {/* Trainers Card */}
          <div className="bg-gray-50 rounded-2xl p-6 text-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2 font-makozin">120+</div>
              <div className="text-lg text-black font-medium font-makozin">Trainers</div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-orange-500 rounded-t-full transform translate-y-1/2"></div>
          </div>

          {/* Trained Card */}
          <div className="bg-gray-50 rounded-2xl p-6 text-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2 font-makozin">777,738+</div>
              <div className="text-lg text-black font-medium font-makozin">Trained</div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-yellow-400 rounded-t-full transform translate-y-1/2"></div>
          </div>

          {/* Placed Card */}
          <div className="bg-gray-50 rounded-2xl p-6 text-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2 font-makozin">668,942+</div>
              <div className="text-lg text-black font-medium font-makozin">Placed</div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-orange-500 rounded-t-full transform translate-y-1/2"></div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CounterSection