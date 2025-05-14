"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from 'next/image';
import google from "@/components/Brand/Image/google.png"
import factual from "@/components/Brand/Image/factual.png"
import airbnb from "@/components/Brand/Image/airbnb.png"
import chase from "@/components/Brand/Image/chase.png"
import logitech from "@/components/Brand/Image/logitech.png"
import matrix from "@/components/Brand/Image/matrix.png"

const AutoSwiper = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={6}
      loop={true}
      speed={3000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      modules={[Autoplay]}
      allowTouchMove={true}
      style={{
        "--swiper-autoplay-transition-timing-function": "linear",
      }}
    >
      <SwiperSlide>
        <div className="">
          <Image  src={google} alt='image' className=''/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="">
          <Image  src={factual} alt='image' className=''/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="">
          <Image  src={airbnb} alt='image' className=''/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="">
          <Image  src={chase} alt='image' className=''/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="">
          <Image  src={logitech} alt='image' className=''/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="">
          <Image  src={logitech} alt='image' className=''/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="">
          <Image  src={matrix} alt='image' className=''/>
        </div>
      </SwiperSlide>
      
    </Swiper>
  );
};

export default AutoSwiper;
