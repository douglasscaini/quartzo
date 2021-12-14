import { Flex, Wrap, WrapItem } from "@chakra-ui/react";
import { HomeProps } from "../../../pages";

export function Gallery({ photos }: HomeProps) {
  return (
    <Flex id="gallery" w="100vw" h="100vh">
      <Wrap spacing="0">
        {photos.map((photo) => (
          <WrapItem key={photo.id} w="20vw" h="50vh" overflow="hidden">
            <Flex
              w="100%"
              h="100%"
              bgImage={`url(${photo.src})`}
              bgRepeat="no-repeat"
              bgPosition="center"
              bgSize="cover"
              opacity="0.8"
              cursor="pointer"
              style={{
                transition: "all .5s ease-in-out",
              }}
              _hover={{
                opacity: "0.4",
                transform: "scale(1.1, 1.1)",
              }}
            />
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  );
}
