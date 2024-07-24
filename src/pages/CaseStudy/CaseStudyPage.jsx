"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IMG_URL } from "@/constants/data/imageConstants";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { clientData } from "@/constants/data/caseStudyData";
import CTACard from "../Home/OurServices/CTACard";
const CaseStudyPage = () => {
  const [index, setIndex] = useState(0);
  const handleSrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleNext = () => {
    if (index < clientData.length - 1) {
      setIndex(index + 1);
    }
    handleSrollToTop();
  };
  const handlePrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
    handleSrollToTop();
  };
  return (
    <div className="mt-20 md:mt-12 text-white">
      <div className="flex flex-col items-center">
        <Image
          className="rounded-lg w-2/4 md:w-1/3"
          height={150}
          width={150}
          src={clientData[index]?.logo_url}
          alt="client-logo"
        />
        <h1 className="pt-4 text-3xl font-bold">
          {clientData[index]?.client_name}
        </h1>
      </div>

      <div className="pt-14 p-10 w-full md:w-[80%] md:mx-auto">
        <div className="mt-10 ">
          <h1 className="font-bold text-2xl my-3">The Problem</h1>
          <p>{clientData[index]?.problem_statement}</p>
        </div>
        <div className="mt-10">
          <h1 className="font-bold text-2xl my-3">The Solution</h1>
          <p>{clientData[index]?.solution}</p>
        </div>
        <div className="mt-10">
          <h1 className="font-bold text-2xl my-3">KPI</h1>
          <p>{clientData[index]?.KPI}</p>
        </div>

        <div className="flex mt-10 items-center mx-auto justify-between  flex-col md:flex-row ">
          <Image
            src={IMG_URL}
            height={150}
            width={150}
            className="rounded-lg w-[60%] my-4 md:w-[45%] "
            alt="sponsor-img"
          />
          <Image
            src={IMG_URL}
            height={150}
            width={150}
            className="rounded-lg w-[60%] my-4 md:w-[45%]"
            alt="sponsor-img"
          />
        </div>
      </div>
      <div className="flex justify-between pt-10 font-bold text-xl mx-24 gap-5 md:mx-40">
        <button className="flex gap-2" onClick={handlePrevious}>
          <FaLongArrowAltLeft />
          Previous
        </button>
        <button className="flex gap-2" onClick={handleNext}>
          Next <FaLongArrowAltRight />
        </button>
      </div>

      <CTACard />
    </div>
  );
};

export default CaseStudyPage;
