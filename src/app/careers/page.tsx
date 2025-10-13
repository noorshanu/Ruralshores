import Banner from "@/components/CareersSection/Banner";
import CareerForm from "@/components/CareersSection/CareerForm";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <div className="container mx-auto px-4 py-14">
        <h2 className="text-xl md:text-[26px]  text-black mb-4 font-makozin">
          By 2030, RuralShores Skills Academy will be India’s definitive
          ‘find-train-track’ infrastructure—touching one million learners a
          year, serving 250 corporates, and covering every district in the
          country. More than half our revenue will renew automatically, proving
          that purpose-driven scale can also be predictable and profitable.
        </h2>
      </div>
      <CareerForm />

      <div className="container mx-auto px-10 py-14">
        <h2 className="text-xl md:text-[26px]  text-black mb-4 font-makozin text-center">
        We’re not building an organization. <br />
        We’re building a future — rural, inclusive, skilled, and ready.
        </h2>
      </div>

      <div className="bg-[#f5f5f5] px-4 py-14 mb-12">
        <h2 className="text-xl md:text-[26px]  text-black mb-4 font-makozin text-center">
        Come, be a part of a growing company that offers not just a career, but a chance to transform yourself and others
        </h2>
      </div>
    </div>
  );
};

export default page;
