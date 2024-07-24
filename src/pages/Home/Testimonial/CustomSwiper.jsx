"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { Testimonials } from "@/constants/data/Testimonials";
import TestimonialCard from "./TestimonialCard";
import "../../../styles/CustomSwiper.css";
const CustomSwiper = ({
  slidesPerView = 1,
  spaceBetween = 30,
  loop = true,
  delay = 3000,
  className,
  style,
  id,
  data = [],
  navigation = true,
}) => {
  return (
    <div>
      <Swiper
        spaceBetween={spaceBetween}
        loop={loop}
        centeredSlides={true}
        autoplay={{
          delay: delay,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        slidesPerView={"auto"}
        navigation={true}
        id={id}
        style={style}
        modules={[Autoplay, Pagination, Navigation]}
        className={className}
      >
        {Testimonials?.length > 0 &&
          Testimonials?.map((item, ind) => (
            <SwiperSlide key={ind}>
              <TestimonialCard data={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default CustomSwiper;
