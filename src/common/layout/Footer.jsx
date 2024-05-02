import React from "react";
import Image from "next/image";
import Link from "next/link";
import image_foot from "../../../public/image_foot.png";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { footerlinks } from "@/constants/data/footerlinks";

const Footer = () => {
  return (
    <div className="md: min-h-80 flex flex-col items-center justify-between text-white bg-black2">
      <div
        className="md: w-full flex flex-row items-center justify-around"
        id="footer-top"
      >
        <div id="left-side" className="md: flex flex-col gap-10">
          <div className=" overflow-hidden mr-2 md:mr-4">
            <Image
              src={image_foot}
              alt="logo"
              className="w-full h-auto "
              height={250}
              width={250}
              style={{ width: "10rem", height: "6rem", objectFit: "contain" }}
              priority
            />
          </div>
          <button className=" rounded-full font-bold py-2 px-6 bg-white text-black">
            Schedule a call
          </button>

          <div className="flex justify-between">
            <Link href="/">
              <FaLinkedin size={40} />
            </Link>
            <Link href="/">
              <RiInstagramFill size={40} />
            </Link>
            <Link href="/">
              <FaTwitter size={40} />
            </Link>
          </div>
        </div>

        {/*------------------ right-side-grid ------------------------------------*/}
        <div className="grid gap-x-12 gap-y-4 grid-cols-3">
          {footerlinks?.map((item) => {
            return (
              <li
                key={item?.id}
                className=" font-satoshi text-white list-none hover:underline"
              >
                <Link href={item?.path}>{item?.label}</Link>
              </li>
            );
          })}
        </div>
      </div>

      {/* -----------------sabse niche wala----------------------------- */}
      <div
        id="footer-bottom"
        className="md: flex items-center justify-around w-full gap-10 "
      >
        <span className="md: text-sm text-white sm:text-center">
          © 2024 Atencion Marketing - All Rights Reserved
        </span>
        <div className="text-sm text-white sm:text-center">
          <span>Terms to use</span>
          <span className="ml-10">Privacy policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
