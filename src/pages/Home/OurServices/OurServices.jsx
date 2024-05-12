import React from "react";
import SectionHeading from "@/common/layout/SectionHeading";
import OurServicesCard from "./OurServicesCard";
import OurServicesCard2 from "./OurServicesCard2";

const OurServices = () => {
  return (
    <div className="w-full text-white bg-black2 my-16 flex flex-col justify-center items-center p-5">
      <SectionHeading title="Our Services" />
      <h4 className="text-3xl text-white font-bold tracking-wider my-4 text-center mx-auto">
        What we offer
      </h4>
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center my-3 p-4">
        <OurServicesCard />
        <OurServicesCard2 />
      </div>
    </div>
  );
};

export default OurServices;
