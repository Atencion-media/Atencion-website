import SectionHeading from "@/common/layout/SectionHeading";
import React from "react";
import CaseStudyCard from "./CaseStudyCard";

const CaseStudies = () => {
  return (
    <div className="w-full  p-4 md:p-12 mt-0  md:mt-2">
      <SectionHeading title="Client Case Studies" />
      <h4 className="text-lg text-white font-bold tracking-wider my-4 text-center mx-auto">
        Discover what we did for them
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto ">
        <CaseStudyCard
          image="https://res.cloudinary.com/dlr4rgxrt/image/upload/v1720555227/logo_uwqwmn.png"
          text={{
            category: "Social Atencion",
            title: "Make things float in air",
            description: "Smita Holidays faced difficulties...",
          }}
        />
        <CaseStudyCard
          image="https://res.cloudinary.com/dlr4rgxrt/image/upload/v1720555227/English_Logo_Ellora_Ajanta_page-0001-removebg-preview-1-1_xd4d3d.jpg"
          text={{
            category: "Event Atencion",
            title: "Ajanta Ellora",
            description:
              "The Ajanta Ellora International Festival aimed to expand its online footprint and...",
          }}
        />
        <CaseStudyCard
          image="https://res.cloudinary.com/dlr4rgxrt/image/upload/v1720555228/logo-siec_tunleu.png"
          text={{
            category: "Campus Atencion",
            title: "AECC Study Abroad - Captivating Pune's College Scene",
            description:
              "AECC Study Abroad faced a challenge: how to make a memorable splash in the vibrant college...",
          }}
        />
      </div>
    </div>
  );
};

export default CaseStudies;
