import { Flex, HStack, Text } from "@chakra-ui/react";

export function Gallery() {
  return (
    <Flex
      id="gallery"
      h="100%"
      w="100vw"
      background="#161616"
      style={{
        scrollSnapAlign: "center",
      }}
    >
      <HStack w="100%" maxWidth={1440} mx="auto" my="auto" mt="24" id="photos" wrap="wrap">
        <Flex
          w="32%"
          h="100px"
          bgImage={"url('/images/background.jpg')"}
          bgPosition={"50% 45%"}
          bgRepeat="no-repeat"
        />

        <Flex
          w="33%"
          h="100px"
          bgImage={"url('/images/background.jpg')"}
          bgPosition={"50% 45%"}
          bgRepeat="no-repeat"
        />

        <Flex
          w="33%"
          h="100px"
          bgImage={"url('/images/background.jpg')"}
          bgPosition={"50% 45%"}
          bgRepeat="no-repeat"
        />

        <Flex
          w="33%"
          h="100px"
          bgImage={"url('/images/background.jpg')"}
          bgPosition={"50% 45%"}
          bgRepeat="no-repeat"
        />

        <Text>oi</Text>
      </HStack>
    </Flex>
  );
}
