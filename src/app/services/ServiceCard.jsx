import React from "react";
import Image from "next/image";
import Reveal from "@/utils/Reveal";

const ServiceCard = ({ imageSrc, text }) => {
  return (
    <div
      className="flex flex-col h-[350px] items-center bg-black2 border border-transparent rounded-3xl shadow mx-2 md:mx-auto transition-transform transform hover:shadow-2xl hover:border-[#C19B5B] hover:animate-subtleBounce
      md:flex-row md:max-w-6xl md:h-[300px] my-10  "
    >
      <Reveal>

      <Image
        src={imageSrc}
        alt="logo"
        width={400}
        height={400}
        className="object-contain h-23 p-1 rounded-t-lg md:rounded-none md:rounded-s-lg md:p-5 md:h-48"
        />
        </Reveal>
        <Reveal>

      <div className="p-7 md:p-16 text-base/7 leading-normal text-left ">
        <p className="font-normal text-white">{text}</p>
      </div>
        </Reveal>
    </div>
  );
};

export default ServiceCard;
