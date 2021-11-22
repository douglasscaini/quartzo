import { Flex, HStack } from "@chakra-ui/react";
import { SlideSwiper } from "../../../components/SlideSwiper";

import { photosAbout } from "../../../utils/photosAbout";
import { photosAdrielly } from "../../../utils/photosAdrielly";
import { photosLucas } from "../../../utils/photosLucas";
import { photosCamila } from "../../../utils/photosCamila";
import { photosThalia } from "../../../utils/photosThalia";
import { photosAlan } from "../../../utils/photosAlan";
import { photosCarol } from "../../../utils/photosCarol";

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
        justifyContent="space-around"
      >
        <SlideSwiper photos={photosAdrielly} height="380px" />
        <SlideSwiper photos={photosLucas} height="380px" />
        <SlideSwiper photos={photosCamila} height="380px" />
        <SlideSwiper photos={photosThalia} height="380px" />
        <SlideSwiper photos={photosAlan} height="380px" />
        <SlideSwiper photos={photosCarol} height="380px" />
      </HStack>
    </Flex>
  );
}
