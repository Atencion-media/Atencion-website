"use client";
import { navlinks } from "@/constants/data/navlinks";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../../../public/logo2.png";
import { MdMenu, MdOutlineRestaurantMenu } from "react-icons/md";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { menuSlide, slide } from "./animation";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [active, setActive] = useState(pathname);
  console.log("yash", active);
  useEffect(() => {
    if (isOpen) setIsOpen(false);
    setActive(pathname); // Update active link when pathname changes
  }, [pathname]);
  return (
    <>
      <header className="sticky top-4 left-0 z-50 w-[95%] md:w-full lg:w-4/5 mx-auto p-2 flex items-center justify-between rounded-full  bg-white bg-opacity-20 backdrop-blur-lg">
        <nav className="flex justify-between items-center w-full mx-auto px-3 md:px-0">
          <Link href="/">
            <div className="rounded-full overflow-hidden mr-2 md:mr-4">
              <Image
                src={logo}
                alt="CodeBucks logo"
                className="w-full h-auto rounded-full"
                height={150}
                width={150}
                style={{ width: "2.2rem", objectFit: "contain" }}
                priority
              />
            </div>
          </Link>
          <ul className=" hidden md:flex justify-between items-center gap-5  ">
            {navlinks?.map((item) => {
              return (
                <li key={item?.id} className=" font-satoshi text-white">
                  <Link href={item?.path}>{item?.label}</Link>
                </li>
              );
            })}
          </ul>

          <motion.button className="hidden md:block rounded-full font-bold py-2 px-6 bg-white hover:bg-beigepl">
            Schedule a call
          </motion.button>
          <div
            className="block md:hidden text-white"
            onClick={(prev) => setIsOpen(!isOpen)}
          >
            {isOpen ? <MdOutlineRestaurantMenu /> : <MdMenu />}
          </div>

          {/* res navbar */}
        </nav>
      </header>
      {isOpen && (
        <motion.div
          variants={menuSlide}
          initial="initial"
          animate="enter"
          exit="exit"
          className="fixed top-[4.2rem] right-4 z-50 bg-white bg-opacity-20 backdrop-blur-lg p-4 w-[95%] mx-auto min-h-[50%] rounded-2xl flex justify-center items-center"
        >
          <nav>
            <ul className="flex-col gap-3">
              {navlinks?.map((item) => {
                return (
                  <motion.li
                    key={item?.id}
                    className={`m-2 text-bold  tracking-wide  ${
                      active === item?.path
                        ? "text-orange-500 text-lg"
                        : "text-white"
                    }`}
                    whileHover={{ scale: 1.1, color: "#FF9900", originX: 0 }}
                  >
                    <Link
                      href={item?.path}
                      className="flex items-center justify-start gap-2"
                    >
                      {item?.icon} {item?.label}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </nav>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
