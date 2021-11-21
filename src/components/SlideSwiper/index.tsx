import { Flex } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCards } from "swiper";
SwiperCore.use([EffectCards]);

export function SlideSwiper() {
  return (
    <Flex w="35%" h="480px">
      <Swiper effect={"cards"} grabCursor={true} initialSlide={3}>
        <SwiperSlide>
          <Flex
            w="100%"
            h="480px"
            bgImage={`url('/images/quartzo/jean_1.jpg')`}
            bgSize="cover"
            bgPosition="center"
            borderRadius="18px"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="480px"
            bgImage={`url('/images/quartzo/jean_2.jpg')`}
            bgSize="cover"
            bgPosition="center"
            borderRadius="18px"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="480px"
            bgImage={`url('/images/quartzo/jean_3.jpg')`}
            bgSize="cover"
            bgPosition="center"
            borderRadius="18px"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="480px"
            bgImage={`url('/images/quartzo/jean_4.jpg')`}
            bgSize="cover"
            bgPosition="center"
            borderRadius="18px"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="480px"
            bgImage={`url('/images/quartzo/jean_5.jpg')`}
            bgSize="cover"
            bgPosition="center"
            borderRadius="18px"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="480px"
            bgImage={`url('/images/quartzo/jean_6.jpg')`}
            bgSize="cover"
            borderRadius="18px"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="480px"
            bgImage={`url('/images/quartzo/jean_7.jpg')`}
            bgSize="cover"
            bgPosition="center"
            borderRadius="18px"
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
