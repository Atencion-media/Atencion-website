import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";

const OurServicesCard2 = () => {
  return (
    <div className="w-full  min-h-[22rem] p-2 py-8 border-4 border-gray-200 rounded-3xl flex flex-col justify-between items-center">
      <div className="text-center">
        <RiGraduationCapFill size={50} className="mx-auto text-secondary" />
        <div className="text-white text-2xl font-bold text-center tracking-wid">
          For Colleges
        </div>
        <div className="text-white text-sm max-w-sm mt-2">
          *some short descrption*
        </div>
      </div>

      <div>
        <ul className="text-base list-none font-medium">
          <li className="flex justify-start items-center gap-3">
            <FaRegCircleCheck className="text-secondary" />{" "}
            <span>Social Media Atencion</span>
          </li>
          <li className="flex justify-start items-center gap-3">
            <FaRegCircleCheck className="text-secondary" />{" "}
            <span>Campus Atencion</span>
          </li>
          <li className="flex justify-start items-center gap-3">
            <FaRegCircleCheck className="text-secondary" />{" "}
            <span>Email Atencion</span>
          </li>
          <li className="flex justify-start items-center gap-3">
            <FaRegCircleCheck className="text-secondary" />{" "}
            <span>Event Atencion</span>
          </li>
        </ul>
      </div>

      <button className="rounded-full font-bold py-2 px-16 bg-white text-black hover:bg-secondary">
        Schedule a call
      </button>
    </div>
  );
};

export default OurServicesCard2;
