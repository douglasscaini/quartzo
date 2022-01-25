import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { FreeMode, Pagination, Navigation } from "swiper";
import { Flex } from "@chakra-ui/react";
import { HomeProps } from "../../pages";

// install Swiper modules
SwiperCore.use([FreeMode, Pagination, Navigation]);

export function SwiperSlideComponent({ photos }: HomeProps) {
  console.log(photos);
  return (
    <>
      <Swiper
        slidesPerView={4}
        slidesPerGroup={4}
        spaceBetween={0}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        navigation={true}
      >
        {photos.map((photo) => (
          <SwiperSlide key={photo.id}>
            <Flex
              w="600px"
              h="700px"
              bgImage={`url(${photo.media_url})`}
              bgRepeat="no-repeat"
              bgPosition="center"
              bgSize="contain"
              cursor="pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

{
  /* <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </> */
}
