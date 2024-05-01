"use client";
import Image from "next/image";
import React from "react";
import CName from "../../../public/CName.png";
import logo from "../../../public/logo2.png";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";
import Link from "next/link";
import { myScroll } from "@/utils/myScroll";

const Hero = () => {
  return (
    <div className=" w-full h-auto md:h-[38rem] p-2 md:p-0 mt-6 flex justify-center items-center flex-col">
      <motion.div
        className="m-1"
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.5,
          duration: 1.2,
          type: "spring",
          stiffness: 50,
        }}
      >
        <Image
          src={logo}
          alt="logo"
          width={200}
          height={200}
          style={{ width: "10rem", objectFit: "contain" }}
        />
      </motion.div>
      <motion.div
        className="m-1"
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.5,
          duration: 1.2,
          type: "spring",
          stiffness: 50,
        }}
      >
        <Image
          src={CName}
          alt="Company Name"
          width={650}
          height={650}
          style={{ width: "28rem", objectFit: "contain" }}
        />
      </motion.div>
      <motion.div
        className="m-2 text-white font-bold tracking-widest text-sm md:text-lg "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 2.2 }}
      >
        <h4 className="mx-auto text-center">
          We are what every company craves for
        </h4>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="mt-4 text-[3rem] text-white animate-pulse cursor-pointer"
        onClick={() =>
          myScroll(
            0,
            document.getElementById("videoPlayer").offsetTop + 150,
            "smooth"
          )
        }
      >
        <FaChevronDown />
      </motion.div>
    </div>
  );
};

export default Hero;
