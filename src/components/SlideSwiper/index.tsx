import { Flex } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCards } from "swiper";
SwiperCore.use([EffectCards]);

type Photos = {
  id: number;
  src: string;
};

type SlideSwiperProps = {
  photos: Photos[];
  height: string;
};

export function SlideSwiper({ photos, height }: SlideSwiperProps) {
  return (
    <Flex w="32%" h={height}>
      <Swiper effect={"cards"} grabCursor={true} initialSlide={3}>
        {photos.map((photo) => (
          <SwiperSlide key={photo.id}>
            <Flex
              w="100%"
              h={height}
              bgImage={photo.src}
              bgSize="cover"
              bgPosition="center"
              borderRadius="18px"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
