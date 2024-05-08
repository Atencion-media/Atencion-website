import React from "react";
import { FaUsers } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";

const OurServicesCard = () => {
  return (
    <div className="w-full min-h-[450px] min-w-80 p-2 py-8 border-4 border-gray-200 rounded-3xl flex flex-col justify-between items-center">
      <div className="text-center">
        <FaUsers size={50} className="mx-auto text-secondary" />
        <div className="text-white text-2xl font-bold text-center tracking-wid">
          For Clients
        </div>
        <div className="text-white text-sm max-w-sm mt-2">
          *some short descrption*
        </div>
      </div>

      <div>
        <ul className="text-base list-none font-medium">
          <li className="flex justify-start items-center gap-3">
            <FaRegCircleCheck className="text-secondary" />{" "}
            <span>Colleges Sponsorships</span>
          </li>
          <li className="flex justify-start items-center gap-3">
            <FaRegCircleCheck className="text-secondary" />{" "}
            <span>Brand collabrations </span>
          </li>
        </ul>
      </div>

      <button className="rounded-full font-bold py-2 px-16 bg-white text-black hover:bg-secondary">
        Schedule a call
      </button>
    </div>
  );
};

export default OurServicesCard;
