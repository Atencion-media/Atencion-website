import React from "react";
import Image from "next/image";

const ServiceCard = ({ imageSrc, text }) => {
  return (
    <div className="flex flex-col items-center bg-black2 rounded-3xl shadow mx-auto my-10 hover:bg-gray-100 hover:text-gray-700 hover:border-gray-200  md:flex-row md:max-w-6xl h-[250px] ">
      <Image
        src={imageSrc}
        alt="logo"
        width={500}
        height={500}
        className="object-cover h-48 min-w-96 rounded-t-lg md:rounded-none md:rounded-s-lg"
      />
      <div className="p-16 text-base/7 leading-normal text-left ">
        <p className="font-normal text-white ">{text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
