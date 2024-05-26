"use client"
import Image from "next/image";
import React from "react";
import logo from "../../../../public/logo2.png";
import { motion } from "framer-motion";

const UnleaseCard = () => {
  return (
    <motion.div id="aboutus" initial={{opacity:0, y:80}} animate={{opacity:1, y:0}} transition={{delay:3, duration:2}} className="w-full flex justify-center items-center p-4 md:p-12 mt-0  md:mt-2">
      <div className="w-full md:w-[95%] border-solid border-2 border-sky-500 flex flex-col-reverse md:flex-row justify-between items-center gap-4 p-4 md:p-8 rounded-3xl">
        {/* Content section */}
        <div className="w-full md:w-[55%]">
          <h1 className="text-xl md:text-2xl text-white font-bold tracking-wider mb-4">
            Unleash your brand&apos;s digital & physical dominance with Atención
            Media!
          </h1>
          <p className="my-1 text-white tracking-wide text-sm md:text-lg">
            At Atención Media, we craft strategies that catapult your brand to
            the forefront of both digital and physical spaces. From captivating
            social strategies to mesmerizing campaigns, we redefine what it
            means to stand out.
          </p>
          <p className="mt-2 text-white tracking-wide text-sm md:text-lg">
            With expertise in campus marketing and outreach, we extend your
            brand&apos;s reach to the next generation of consumers, ensuring
            influence beyond the digital realm.
          </p>
          <div className="mt-4 flex flex-col md:flex-row">
            <motion.button className="m-2 rounded-full font-bold py-1 px-6 bg-white hover:bg-black hover:text-white">
              Schedule a call
            </motion.button>
            <motion.button className="m-2 text-white rounded-full font-bold py-1 px-6 bg-black2 hover:bg-white hover:text-black">
              Our Work
            </motion.button>
          </div>
        </div>
         {/* Image section */}
         <div className="w-full md:w-[40%] mb-4 md:mb-0 flex items-center justify-center">
          <Image src={logo} alt="logo" width={380} height={380} className="w-[12rem] md:w-[20rem]"/>
        </div>
      </div>
    </motion.div>
  );
};

export default UnleaseCard;
