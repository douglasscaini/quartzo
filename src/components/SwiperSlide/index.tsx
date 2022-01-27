import { Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import SwiperCore, { FreeMode, Pagination, Navigation } from "swiper";
SwiperCore.use([FreeMode, Pagination, Navigation]);

import { HomeProps } from "../../pages";

export function SwiperSlideComponent({ photos }: HomeProps) {
  return (
    <Swiper slidesPerView={4} slidesPerGroup={4} spaceBetween={0} freeMode={true} navigation={true}>
      {photos.map((photo) => (
        <SwiperSlide key={photo.id}>
          <Flex
            w="100vw"
            h="100%"
            bgImage={`url(${photo.media_url})`}
            bgRepeat="no-repeat"
            bgPosition="center"
            bgSize="cover"
            cursor="pointer"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
