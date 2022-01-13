import { Flex, Text, Heading, Stack, Icon, HStack, Link } from "@chakra-ui/react";

import { UnderlineLink } from "../../../components/UnderlineLink";

import { FaFacebook, FaInstagram, FaWhatsapp, FaRegEnvelope } from "react-icons/fa";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

export function HomePage() {
  return (
    <Flex w="100%" h="100vh">
      <Flex
        w="45%"
        bgImage={"url('/images/new/woman-one.png')"}
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
          <Flex h="40%" justify="space-between">
            <Stack justify="space-between">
              <Heading fontSize="6xl" fontWeight="300" color="#b6effe">
                VICTORIA GAEVSKAYA
              </Heading>

              <Text maxW={272}>
                Treat yourself and discover your inner beauty in Moscow from 04/24 till 05/11. From
                55$.
              </Text>

              <Link
                w={192}
                style={{
                  textDecoration: "none",
                }}
                _hover={{
                  color: "#b6effe",
                }}
              >
                <Flex align="center">
                  <Heading fontSize="3xl" fontWeight="300">
                    HIRE ME
                  </Heading>

                  <Icon as={BsArrowRight} ml="4" w={6} h={6} />
                </Flex>
              </Link>
            </Stack>

            <Stack py="2" justify="space-between">
              <Link
                _hover={{
                  color: "#b6effe",
                }}
              >
                <Icon as={FaRegEnvelope} w={6} h={6} />
              </Link>

              <Link
                _hover={{
                  color: "#b6effe",
                }}
              >
                <Icon as={FiFacebook} w={6} h={6} />
              </Link>

              <Link
                _hover={{
                  color: "#b6effe",
                }}
              >
                <Icon as={FiInstagram} w={6} h={6} />
              </Link>

              <Link
                _hover={{
                  color: "#b6effe",
                }}
              >
                <Icon as={FaWhatsapp} w={6} h={6} />
              </Link>
            </Stack>
          </Flex>

          <Flex h="60%" align="end" justify="space-between">
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

            <HStack spacing="6">
              <Flex
                w="200px"
                height="240px"
                bgImage={"url('/images/new/woman-two.jpg')"}
                bgPosition="center"
                bgSize="cover"
                bgRepeat="no-repeat"
              />

              <Flex
                w="180px"
                height="220px"
                bgImage={"url('/images/new/woman-three.jpg')"}
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
