import Banner from "@/components/CareersSection/Banner";
import CareerForm from "@/components/CareersSection/CareerForm";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <div className="container mx-auto px-4 py-14">
        <h2 className="text-xl md:text-2xl  text-black mb-4 font-makozin">
          By 2030, RuralShores Skills Academy will be India’s definitive
          ‘find-train-track’ infrastructure—touching one million learners a
          year, serving 250 corporates, and covering every district in the
          country. More than half our revenue will renew automatically, proving
          that purpose-driven scale can also be predictable and profitable.
        </h2>
      </div>
      <CareerForm />
    </div>
  );
};

export default page;
