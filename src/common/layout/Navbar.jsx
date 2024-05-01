"use client";
import { navlinks } from "@/constants/data/navlinks";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../../public/logo2.png";
import { MdMenu, MdOutlineRestaurantMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full mx-auto ">
      <Link href="/">
        <div className="rounded-full overflow-hidden mr-2 md:mr-4">
          <Image
            src={logo}
            alt="CodeBucks logo"
            className="w-full h-auto rounded-full"
            height={100}
            width={100}
            style={{ width: "3vw", height: "5vh", objectFit: "contain" }}
            priority
          />
        </div>
      </Link>
      <ul className="flex justify-between items-center gap-5">
        {navlinks?.map((item) => {
          return (
            <li key={item?.id} className=" font-satoshi text-white">
              <Link href={item?.path}>{item?.label}</Link>
            </li>
          );
        })}
      </ul>

      <button className=" rounded-full font-bold py-2 px-6 bg-white">
        Schedule a call
      </button>
    </nav>
  );
};

export default Navbar;
