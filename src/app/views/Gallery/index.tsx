import { Flex, Heading } from "@chakra-ui/react";

import { SwiperSlideComponent } from "../../../components/SwiperSlide";

import { HomeProps } from "../../../pages";

export function Gallery({ photos }: HomeProps) {
  return (
    <Flex id="gallery" w="100%" h="105vh" direction="column">
      <Heading mt="16" mb="16" fontSize="6xl" fontWeight="300" color="#b6effe" mx="auto">
        PORTFOLIO
      </Heading>

      <Flex h="100%">
        <SwiperSlideComponent photos={photos} />
      </Flex>
    </Flex>
  );
}
