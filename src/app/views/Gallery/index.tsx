import { Flex, Wrap, WrapItem, Image } from "@chakra-ui/react";

import { photos } from "../../../utils/photos";

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
        {photos.map((photo) => (
          <WrapItem key={photo.id}>
            <Image
              src={photo.src}
              w="20vw"
              h="50vh"
              objectFit="cover"
              opacity=".9"
              _hover={{
                cursor: "pointer",
                opacity: "0.5",
              }}
            />
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  );
}
