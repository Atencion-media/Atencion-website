import SectionHeading from "@/common/layout/SectionHeading";
import Image from "next/image";
import React from "react";
import { WhyUsData } from "@/constants/data/WhyUsData";
import WhyUsCard from "./WhyUsCard";
const WhyUs = () => {
  return (
    <div className="w-full p-4 md:p-12 mt-4 md:mt2 ">
      <SectionHeading title="Why Us?" />
      <h2 className="text-white font-bold tracking-wider text-center mt-4 text-lg">Our Superpowers!</h2>

    {
        WhyUsData && WhyUsData?.map((item, ind)=>{
            return (
                <WhyUsCard key={ind} data={item} ind={ind}/>
            )
        })
    }
      
    </div>
  );
};

export default WhyUs;
