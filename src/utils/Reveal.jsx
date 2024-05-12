"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({ children, width = "fit-content" }) => {
  const compoentnRef = useRef(null);
  const isView = useInView(compoentnRef, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isView]);
  return (
    <div
      ref={compoentnRef}
      style={{width}}
      className="relative overflow-hidden"

    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: {
            opacity: 1,
            y: 0
          }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      {/* side animation */}
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        transition={{duration:0.5, ease:"easeIn"}}
        initial="hidden"
        animate={slideControls}
        style={{position:"absolute", top:4, bottom:4, right:0 , left:0, background:"var(--secondary)", zIndex:20}}
      ></motion.div>
    </div>
  );
};

export default Reveal;
