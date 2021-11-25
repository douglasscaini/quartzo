import { Flex, Text, HStack, Image, Divider } from "@chakra-ui/react";

export function About() {
  return (
    <Flex
      id="about"
      w="100vw"
      h="100%"
      style={{
        scrollSnapAlign: "center",
      }}
    >
      <Flex w="100%" maxW={1680} mx="auto" my="auto" direction="column">
        <Flex justify="center" position="relative" top="-60px">
          <Divider h={82} mx="auto" orientation="vertical" position="absolute" />
        </Flex>

        <HStack w="100%" h="100%" justify="center" spacing="24" mt="12">
          <Flex w={420} h={560} position="relative">
            <Image src="/images/quartzo/jean.jpg" alt="Foto do proprietário" borderRadius={4} />

            <Image
              src="/images/dots10x.png"
              w={184}
              position="absolute"
              opacity=".5"
              bottom="-84px"
              right="-36px"
              zIndex="-1"
            />

            <Image
              src="/images/dots5x.png"
              w={92}
              position="absolute"
              opacity=".5"
              top="-38px"
              left="-38px"
              zIndex="-1"
            />
          </Flex>

          <Flex w={575} h={560} align="center">
            <Flex direction="column">
              <Text fontSize="5xl" fontWeight="300" lineHeight="shorter" mb="10">
                Beginning of a photographer's career.
              </Text>

              <Flex position="relative">
                <Divider w={90} top="3" left="-64px" position="absolute" />
              </Flex>

              <Text fontSize="lg" fontWeight="300" align="justify" pl="20">
                The world of design is ruled by diversity, and it’s good. Another question is
                whether to consider a lot of pieces of furniture as trash. That’s it is this
                responsibility — to create things, not junk, — lies on the designer and the
                company-manufacturer. Bad architecture is even more harmful. If you make an ugly,
                uncomfortable and expensive chair, then it will be forgotten very quickly, but if
                you build a terrible building — it will stay for twenty years and make many unhappy.
              </Text>
            </Flex>
          </Flex>
        </HStack>
      </Flex>
    </Flex>
  );
}
