"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../public/logo2.png";
import { motion } from "framer-motion";
const UnleaseCard = () => {
  return (
    <div className="w-full flex justify-center items-center p-12 md:p-12">
      <div className="w-[95%] md:w-4/5 border-solid border-2 border-sky-500 flex justify-between items-center gap-4 p-8 rounded-3xl">
        <div className="w-[45%]">
          <h1 className="text-2xl text-white font-bold tracking-wider mb-4">
            Unleash your brand&apos;s digital & physical dominance with Atención
            Media!
          </h1>
          <p className="my-1 text-white tracking-wide">
            At Atención Media, we craft strategies that catapult your brand to
            the forefront of both digital and physical spaces. From captivating
            social strategies to mesmerizing campaigns, we redefine what it
            means to stand out.
          </p>
          <p className="mt-2 text-white tracking-wide">
            With expertise in campus marketing and outreach, we extend your
            brand&apos;s reach to the next generation of consumers, ensuring
            influence beyond the digital realm.
          </p>
          <div className="mt-2">
            <motion.button className="m-2 rounded-full font-bold py-1 px-6 bg-white hover:bg-black hover:text-white">
              Schedule a call
            </motion.button>
            <motion.button className="text-white rounded-full font-bold py-1 px-6 bg-black2 hover:bg-white hover:text-black">
              Our Work
            </motion.button>
          </div>
        </div>
        <div>
          <Image src={logo} alt="logo" width={380} height={380} />
        </div>
      </div>
    </div>
  );
};

export default UnleaseCard;
