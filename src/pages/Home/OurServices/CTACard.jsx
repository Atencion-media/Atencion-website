import Image from 'next/image'
import React from 'react'
import wws from "../../../../public/work.png";
const CTACard = () => {
  return (
    <div className="flex border border-[#C19B5B] rounded-3xl my-32 pt-4 flex-col md:flex-row gap-2 justify-between  w-[98%] md:w-[80%] mx-auto text-white">
    <div className="flex items-center justify-center w-full md:w-[50%]">
      <Image
        src={wws}
        height={300}
        width={300}
        // className=" rounded-lg w-[80%]"
        className="object-cover  rounded-t-lg md:rounded-none md:rounded-s-lg"
        alt="sponsor-img"
      />
    </div>
    <div className="m-auto p-12 md:mr-12 w-full md:w-[50%]">
      <h1 className="font-bold text-2xl ">Work With Us</h1>
      <p>
        We are commited to working with you collaboratively to understand
        your goals and create a strategy that will achieve them.
      </p>
      <button className=" rounded-full font-bold py-2 px-6 bg-[#C19B5B] text-white my-6">
        Schedule a call
      </button>
    </div>
  </div>
  )
}

export default CTACard