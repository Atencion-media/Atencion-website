import SectionHeading from "@/common/layout/SectionHeading";
import React from "react";

const VideoPlayer = () => {
  return (
    <div className="w-full bg-black2 p-4 md:p-12 mt-4 md:mt2">
      <SectionHeading title="Get Started"/>
      <div className="flex item-center justify-center mt-8">

      <div
        id="videoPlayer"
        className="bg-black2 relative rounded-lg overflow-hidden w-[98%] md:w-4/5 lg:w-3/5"
        >
        <iframe
          width="100%"
          height="380"
          src="https://www.youtube.com/embed/j8VJXb2LoMM?autoplay=1&loop=1&controls=0&modestbranding=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          ></iframe>
      </div>
          </div>
    </div>
  );
};

export default VideoPlayer;
