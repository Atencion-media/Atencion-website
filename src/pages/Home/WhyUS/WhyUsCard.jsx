import Reveal from "@/utils/Reveal";
import Image from "next/image";
import React from "react";

const WhyUsCard = ({ data, ind }) => {
  const isEven = ind % 2 === 0;
  return (
    <div
      className={`flex flex-col md:flex-row ${
        isEven ? "md:flex-row-reverse" : ""
      } gap-2 items-center justify-between m-2 mb-10`}
    >
      <div className="w-full md:w-[55%]">
        <Reveal>
          <h5 className="text-xl md:text-2xl font-bold tracking-wider text-white">
            {data?.title}
          </h5>
        </Reveal>
        <Reveal>
          <p className="text-sm md:text-lg font-normal tracking-wider text-white my-4">
            {data?.description}
          </p>
        </Reveal>
      </div>
      <div className="w-full md:w-[40%]">
        <div className="flex justify-center items-center">
          {/* <p className="text-[2rem] text-center text-white font-bold outline-4 outline-white mb-[-15px]">
            {ind + 1}
          </p> */}
          <Reveal>
            <Image
              width={400}
              className="w-full object-contain rounded-2xl justify-self-start m-auto"
              height={400}
              src={data?.imageUrl}
              alt="img"
            />
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default WhyUsCard;
