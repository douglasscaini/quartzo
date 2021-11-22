import { Flex, HStack, Image } from "@chakra-ui/react";

export function Gallery() {
  return (
    <Flex h="100%" style={{ scrollSnapAlign: "center" }} id="gallery" background="#161616">
      <HStack w="100%" maxWidth={1440} mx="auto" my="auto" mt="24" id="photos"></HStack>
    </Flex>
  );
}
