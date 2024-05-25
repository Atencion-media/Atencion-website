import React from "react";
import Image from "next/image";
import { cardData } from "@/constants/data/ServiceCardData_Colleges";
import { cardData2 } from "@/constants/data/ServiceCardData_Clients";
import ServiceCard from "./ServiceCard";
// import { IMG_URL } from "@/constants/data/imageConstants";
import wws from "../../../public/work.png";

const ServicePage = () => {
  return (
    <div>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-wide text-white md:text-5xl mt-10 text-center lg:text-6xl">
        Our Services
      </h1>

      <h2 className="text-3xl mt-[50px] text-center font-extrabold text-white">
        For Colleges
      </h2>

      <div className="border-t-4 mt-3 rounded-lg mx-[900px] border-[#C19B5B] ..."></div>

      {/* ---------------------------------------------------------------------------------------------------------------- */}

      {cardData?.map((data, index) => (
        <ServiceCard key={index} imageSrc={data.imageSrc} text={data.text} />
      ))}

      {/* -----------------clients--------------- */}
      <h2 className="text-3xl mt-[90px] text-center font-extrabold text-white">
        For Clients
      </h2>

      <div className="border-t-4 mt-3 rounded-lg mx-[900px] border-[#C19B5B] ..."></div>
      {cardData2?.map((data, index) => (
        <ServiceCard key={index} imageSrc={data.imageSrc} text={data.text} />
      ))}

      {/* ---------------------------------------------- Work With Us -------------------------------------------------- */}

      <div className="flex border border-[#C19B5B] rounded-3xl my-32 pt-4 flex-col md:flex-row gap-2 md:gap-10 mx-56 min-h-96 justify-between text-white">
        <div className="flex items-center justify-center w-full md:w-[50%]">
          <Image
            src={wws}
            height={300}
            width={300}
            // className=" rounded-lg w-[80%]"
            className="object-cover  rounded-t-lg md:rounded-none md:rounded-s-lg"
            alt="sponsor-img"
          />
        </div>
        <div className="m-auto p-12 md:mr-12 w-full md:w-[50%]">
          <h1 className="font-bold text-2xl ">Work With Us</h1>
          <p>
            We are commited to working with you collaboratively to understand
            your goals and create a strategy that will achieve them.
          </p>
          <button className=" rounded-full font-bold py-2 px-6 bg-[#C19B5B] text-white my-6">
            Schedule a call
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
