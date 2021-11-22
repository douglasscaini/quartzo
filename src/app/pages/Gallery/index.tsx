import { Flex, HStack } from "@chakra-ui/react";
import { SlideSwiper } from "../../../components/SlideSwiper";

import { photosAbout } from "../../../utils/photosAbout";

export function Gallery() {
  return (
    <Flex
      id="gallery"
      h="100%"
      w="100vw"
      background="#161616"
      direction="column"
      style={{
        scrollSnapAlign: "center",
      }}
    >
      <HStack
        w="100%"
        h="100%"
        maxWidth={1440}
        mx="auto"
        mt="20"
        mb="5"
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <SlideSwiper photos={photosAbout} height="380px" />
        <SlideSwiper photos={photosAbout} height="380px" />
        <SlideSwiper photos={photosAbout} height="380px" />
        <SlideSwiper photos={photosAbout} height="380px" />
        <SlideSwiper photos={photosAbout} height="380px" />
        <SlideSwiper photos={photosAbout} height="380px" />
      </HStack>
    </Flex>
  );
}
