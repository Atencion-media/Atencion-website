"use client";

import Image from "next/image";
import React from "react";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../../components/ui/3d-card";
import Reveal from "@/utils/Reveal";
import Link from "next/link";

const CaseStudyCard = ({ image, text , href}) => {
  return (
    <CardContainer className="inter-var cursor-pointer" >
      <Link href={`/case-study/${href}`}>
     
      <CardBody className="bg-black2 relative group/card  border-black/[0.1] w-auto lg:w-[25rem] h-auto rounded-xl p-6 border  ">
        <Reveal>
          <CardItem
            translateZ="100"
            rotateX={20}
            rotateZ={-10}
            className="w-full mt-4"
          >
            <Image
              src={image}
              height="1000"
              width="1000"
              className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        </Reveal>
        <div className=" mt-10">
          <Reveal>
            <CardItem
              as="p"
              translateZ="60"
              className="text-secondary text-sm max-w-sm mt-2"
            >
              {text.category}
            </CardItem>
            <CardItem translateZ="50" className="text-xl font-bold text-white">
              {text.tile}
            </CardItem>
          </Reveal>
          <Reveal>
            <CardItem
              as="p"
              translateZ="60"
              className="text-white text-sm max-w-sm mt-2"
            >
              {text.description}
            </CardItem>
          </Reveal>
        </div>
      </CardBody>
      </Link>
    </CardContainer>
  );
};

export default CaseStudyCard;
