import Image from "next/image";
import React from "react";
import { ImQuotesLeft } from "react-icons/im";

const TestimonialCard = ({ data }) => {
  return (
    <div className="bg-transparent flex flex-col md:flex-row justify-between items-center w-[90%] mx-auto my-8">
      <div className="w-full md:w-[40%] flex justify-center items-center">
        <div className="relative w-[300px] h-[400px]">
          <Image
            src={data?.imageUrl}
            alt="testimonial"
            fill
            // objectFit="cover"
            className="rounded-lg object-contain"
          />
        </div>
      </div>
      <div className="w-full md:w-[50%] text-white mt-3 md:mt-3">
        <ImQuotesLeft className="mb-2 font-extrabold text-3xl" />
        <p className="w-full md:w-[90%] my-3 text-lg">{data?.description}</p>
        <p className="font-semibold text-md">{data?.title}</p>
        <p className="text-slate-400 text-md">{data?.title}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
