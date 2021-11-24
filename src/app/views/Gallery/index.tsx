import { Flex, Wrap, WrapItem, Image } from "@chakra-ui/react";

import { photosGallery } from "../../../utils/photosGallery";

export function Gallery() {
  return (
    <Flex
      id="gallery"
      w="100vw"
      h="100%"
      style={{
        scrollSnapAlign: "center",
      }}
    >
      <Wrap w="100vw" h="100vh" spacing="0">
        {photosGallery.map((photo) => (
          <WrapItem key={photo.id}>
            <Image src={photo.src} w="20vw" h="50vh" objectFit="cover" />
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  );
}
