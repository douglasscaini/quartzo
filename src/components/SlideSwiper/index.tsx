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
};

export function SlideSwiper({ photos }: SlideSwiperProps) {
  return (
    <Flex w="35%" h="496px">
      <Swiper effect={"cards"} grabCursor={true} initialSlide={3}>
        {photos.map((photo) => (
          <SwiperSlide key={photo.id}>
            <Flex
              w="100%"
              h="496px"
              bgImage={photo.src}
              bgSize="cover"
              bgPosition="center"
              borderRadius="16px"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
