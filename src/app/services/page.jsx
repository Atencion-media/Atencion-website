import React from "react";
import { cardData } from "@/constants/data/ServiceCardData_Colleges";
import { cardData2 } from "@/constants/data/ServiceCardData_Clients";
import ServiceCard from "./ServiceCard";
import CTACard from "@/pages/Home/OurServices/CTACard";


const ServicePage = () => {
  return (
    <div>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-wide text-white md:text-5xl mt-10 text-center lg:text-6xl">
        Our Services
      </h1>

      <h2 className="text-3xl mt-[50px] text-center font-extrabold text-white">
        For Colleges
      </h2>

      <div className="border-t-4 mt-3 rounded-lg mx-[180px] md:mx-[900px] border-[#C19B5B] ..."></div>

      {/* ---------------------------------------------------------------------------------------------------------------- */}

      {cardData?.map((data, index) => (
        <ServiceCard key={index} imageSrc={data.imageSrc} text={data.text} />
      ))}

      {/* -----------------clients--------------- */}
      <h2 className="text-3xl mt-[90px] text-center font-extrabold text-white">
        For Clients
      </h2>

      <div className="border-t-4 mt-3 rounded-lg mx-[180px] md:mx-[900px] border-[#C19B5B] ..."></div>
      {cardData2?.map((data, index) => (
        <ServiceCard key={index} imageSrc={data.imageSrc} text={data.text} />
      ))}

      {/* ---------------------------------------------- Work With Us -------------------------------------------------- */}
<CTACard/>
      
    </div>
  );
};

export default ServicePage;
