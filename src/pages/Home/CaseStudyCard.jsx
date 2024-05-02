"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";

const CaseStudyCard = () => {
  return (
    <CardContainer className="inter-var cursor-pointer">
      <CardBody className="bg-black2 relative group/card  border-black/[0.1] w-auto lg:w-[25rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className=" mt-10">
          <CardItem
            as="p"
            translateZ="60"
            className="text-secondary text-sm max-w-sm mt-2"
          >
            Travel
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-white"
          >
            Make things float in air
          </CardItem>

          <CardItem
            as="p"
            translateZ="60"
            className="text-white text-sm max-w-sm mt-2"
          >
            Smita Holidays faced difficulties in establishing a strong online
            presence, especially on Instagram.
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default CaseStudyCard;
