import { Flex, HStack, Wrap, WrapItem, Center, Image } from "@chakra-ui/react";

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
      <Wrap w="100vw" h="100vh" spacing="0" zIndex="1">
        {photosGallery.map((photo) => (
          <WrapItem
            key={photo.id}
            w="20vw"
            _hover={{
              opacity: ".7",
              transform: "scale3d(1.05,1.05,1)",
              transition: "all .4s 0s cubic-bezier(.7,0,.3,1)",
              cursor: "pointer",
            }}
          >
            <Image w="20vw" height="50vh" src={photo.src} objectFit="cover" zIndex="1" />
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  );
}
