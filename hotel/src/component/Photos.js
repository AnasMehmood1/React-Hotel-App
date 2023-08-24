
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

import "./Photostyle.css"


const Photos = () => {
  return (
    <>
      <div className="section-2">
    <div className="heading-container-1">
       <h1>Photos</h1>
       <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
    </div>
    <Swiper
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/image/slider-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/image/slider-2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/image/slider-3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/image/slider-4.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/image/slider-5.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/image/slider-6.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/image/slider-7.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>

    </>
  )
}

export default Photos
