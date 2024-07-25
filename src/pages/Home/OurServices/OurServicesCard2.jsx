import Reveal from "@/utils/Reveal";
import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";

const OurServicesCard2 = () => {
  return (
    <div className="w-full  min-h-[22rem] p-2 py-8 border-4 border-gray-200 rounded-3xl flex flex-col justify-between items-center">
      <div className="text-center">
        <RiGraduationCapFill size={50} className="mx-auto text-secondary" />
        <Reveal>
          <div className="text-white text-2xl font-bold text-center tracking-wid">
            For Colleges
          </div>
        </Reveal>
      </div>

      <div>
        <ul className="text-base list-none font-medium">
          <Reveal>
            <li className="flex justify-start items-center gap-3">
              <FaRegCircleCheck className="text-secondary" />{" "}
              <span>Colleges Sponsorships</span>
            </li>
          </Reveal>
          <Reveal>
            <li className="flex justify-start items-center gap-3">
              <FaRegCircleCheck className="text-secondary" />{" "}
              <span>Brand collabrations </span>
            </li>
          </Reveal>
        </ul>
      </div>

      <button className="rounded-full font-bold py-2 px-16 bg-white text-black hover:bg-secondary">
        Schedule a call
      </button>
    </div>
  );
};

export default OurServicesCard2;
