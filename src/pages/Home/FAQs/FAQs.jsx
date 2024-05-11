"use client"
import React from "react";
import Accordion from "./Accordion";

const FAQs = () => {
  return (
    <div className="w-full py-4">
      <h2 className="text-white font-bold tracking-wider text-center mt-4 text-lg">
        Frequently Asked Questions
      </h2>
      <div className="p-4 my-4  rounded-lg w-full md:w-[70%] mx-auto">
      <Accordion
        title="Do you prefer Android or iOS"
        answer="I like to use iOS products"
      />
      <Accordion
        title="Do you prefer writing CSS or Tailwind?"
        answer="I like to use Tailwind"
      />
      <Accordion title="Firebase or Supabase?" answer="I am using Supabase!" />
    </div>
    </div>
  );
};

export default FAQs;
