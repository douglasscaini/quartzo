import { Flex, Wrap, WrapItem, Link, VStack, Text, Divider, HStack, Icon } from "@chakra-ui/react";

import { FaCity, FaLeaf, FaImage } from "react-icons/fa";

export function About() {
  return (
    <Flex id="gallery" w="100%" h="150vh" direction="column">
      <Flex mx="auto" align="center" mt="16" direction="column">
        <Text fontSize="6xl" fontWeight="500">
          O que fazemos?
        </Text>

        <Divider w={160} mt="16" />

        <HStack mt="16" spacing="16" fontWeight="300">
          <VStack spacing="8">
            <Icon as={FaLeaf} w={16} h={16} />
            <Text fontSize="2xl" fontWeight="300" mt="8">
              Natureza
            </Text>
            <Text maxW="300px">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
          </VStack>

          <VStack spacing="8">
            <Icon as={FaCity} w={16} h={16} />
            <Text fontSize="2xl" fontWeight="300" mt="8">
              Urbano
            </Text>
            <Text maxW="300px" align="justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
          </VStack>

          <VStack spacing="8">
            <Icon as={FaImage} w={16} h={16} />
            <Text fontSize="2xl" fontWeight="300" mt="8">
              Paisagens
            </Text>
            <Text maxW="340px" align="justify">
              A fotografia de natureza é um amplo tema fotográfico que visa representar fenómenos ou
              agentes naturais (plantas, animais, paisagens, fenómenos meteorológicos, pequenos
              pormenores, entre outros).
            </Text>
          </VStack>
        </HStack>
      </Flex>
    </Flex>
  );
}
