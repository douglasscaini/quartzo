import { Flex, Text, Heading, Stack, Icon, HStack } from "@chakra-ui/react";

import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { UnderlineLink } from "../../../components/UnderlineLink";

export function HomePage() {
  return (
    <Flex w="100%" h="100vh">
      <Flex
        w="45%"
        bgImage={"url('/images/new/home1.png')"}
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
      />

      <Flex w="55%" px="8" py="16" direction="column">
        <Flex w="100%" justify="space-between" mb="36">
          <UnderlineLink text="About me" />
          <UnderlineLink text="Portfolio" />
          <UnderlineLink text="Feedback" />
          <UnderlineLink text="Prices" />
          <UnderlineLink text="+7 985 086-80-40" />
        </Flex>

        <Flex direction="column" h="100%">
          <Flex h="50%">
            <Stack w="100%" spacing="8">
              <Heading fontSize="7xl" fontWeight="300" color="#b6effe">
                VICTORIA GAEVSKAYA
              </Heading>
              <Text maxW="270">
                Treat yourself and discover your inner beauty in Moscow from 04/24 till 05/11. From
                55$.
              </Text>
              <Flex color="#b6effe" fontSize="2xl" align="center">
                <Heading fontWeight="300">HIRE ME</Heading>
                <Icon as={BsArrowRight} ml="4" />
              </Flex>
            </Stack>

            <Flex direction="column" justify="space-between" py="4">
              <Icon as={FaFacebook} w={6} h={6} />
              <Icon as={FaInstagram} w={6} h={6} />
              <Icon as={FaWhatsapp} w={6} h={6} />
              <Icon as={FaWhatsapp} w={6} h={6} />
            </Flex>
          </Flex>

          <Flex h="50%" align="end" justify="space-between">
            <HStack spacing="8">
              <Flex direction="column" color="#b6effe" align="center">
                <Heading fontWeight="300" fontSize="4xl">
                  01
                </Heading>
                <Icon as={BsArrowLeft} w={8} h={8} />
              </Flex>
              <Flex direction="column" fontSize="4xl" align="center">
                <Heading fontWeight="300" fontSize="2xl">
                  02
                </Heading>
                <Icon as={BsArrowRight} w={8} h={8} />
              </Flex>
            </HStack>
            <HStack spacing="8">
              <Flex
                w="160px"
                height="192px"
                bgImage={"url('/images/new/home1.png')"}
                bgPosition="center"
                bgSize="cover"
                bgRepeat="no-repeat"
              />

              <Flex
                w="160px"
                height="192px"
                bgImage={"url('/images/new/home1.png')"}
                bgPosition="center"
                bgSize="cover"
                bgRepeat="no-repeat"
              />
            </HStack>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
