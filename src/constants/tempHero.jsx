"use client";
import React from "react";
import { cn } from "@/utils/cn";
import { Boxes } from "@/components/ui/background-boxes";

export function BackgroundBoxesDemo() {
  return (
    <div className="max-h-100 relative w-screen aspect-video  overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      {/* <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" /> */}

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl font-satoshi text-white relative z-20")}>
        Tailwind is Awesome
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Framer motion is the best animation library ngl
      </p>
    </div>
  );
}