import Reveal from "@/utils/Reveal";
import React from "react";
import { FaUsers } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";

const OurServicesCard = () => {
  return (
    <div className="w-full p-2 py-8 border-4 min-h-[22rem] border-gray-200 rounded-3xl flex flex-col justify-between items-center">
      <div className="text-center">
        <FaUsers size={50} className="mx-auto text-secondary" />
        <Reveal>
          <div className="text-white text-2xl font-bold text-center tracking-wid">
            For Clients
          </div>
        </Reveal>
      </div>

      <div>
        <Reveal>
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
        </Reveal>
      </div>

      <button className="rounded-full font-bold py-2 px-16 bg-white text-black hover:bg-secondary">
        Schedule a call
      </button>
    </div>
  );
};

export default OurServicesCard;
