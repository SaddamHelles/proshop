import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Slider from "../Slider/Slider";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";
import img1 from "../../images/img1.PNG";
import img12 from "../../images/img12.PNG";
import img13 from "../../images/img13.PNG";

export const MySwiper = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <Slider UrlImage={img1} />
      </SwiperSlide>
      <SwiperSlide>
        <Slider UrlImage={img12} />
      </SwiperSlide>
      <SwiperSlide>
        <Slider UrlImage={img13} />
      </SwiperSlide>
    </Swiper>
  );
};
