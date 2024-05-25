import React from "react";
import Image from "next/image";

const ServiceCard = ({ imageSrc, text }) => {
  return (
    <div className="flex flex-col items-center bg-black2 rounded-3xl shadow mx-auto my-10 hover:bg-gray-100 hover:text-gray-700 hover:border-gray-200  md:flex-row md:max-w-6xl h-[300px] ">
      <Image
        src={imageSrc}
        alt="logo"
        width={400}
        height={400}
        className="object-cover h-48 p-5 min-w-200 rounded-t-lg md:rounded-none md:rounded-s-lg"
      />
      <div className="p-16 text-base/7 leading-normal text-left ">
        <p className="font-normal text-white ">{text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
