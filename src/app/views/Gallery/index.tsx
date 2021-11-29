import { Flex, Wrap, WrapItem, Image } from "@chakra-ui/react";
import { HomeProps } from "../../../pages";

// import { photos } from "../../../utils/photos";

export function Gallery({ photos }: HomeProps) {
  return (
    <Flex
      id="gallery"
      w="100vw"
      h="100%"
      style={{
        scrollSnapAlign: "center",
      }}
      bg="white"
    >
      <Wrap w="100vw" h="100vh" spacing="0">
        {photos.map((photo) => (
          <WrapItem key={photo.id} w="20vw" h="50vh">
            <Flex
              w="20vw"
              h="50vh"
              bgImage={`url(${photo.src})`}
              bgRepeat="no-repeat"
              bgPosition="center"
              bgSize="contain"
              zIndex="2"
              style={{
                transition: "transform 400ms 0ms easy, z-index 0ms 400ms easy",
              }}
              _hover={{
                cursor: "pointer",
                transform: "scale(1.01)",
                transition: "transform 400ms 0ms easy, z-index 400ms 0ms easy",
                zIndex: "1",
              }}
            />
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  );
}
