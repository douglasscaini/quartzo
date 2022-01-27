import { Flex, Text, Heading, Stack, Icon, HStack, Link, Button } from "@chakra-ui/react";

import { UnderlineLink } from "../../../components/UnderlineLink";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { RiMessengerLine } from "react-icons/ri";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import { useState } from "react";

const array1 = ["/images/home/image-1.jpg", "/images/home/image-2.jpg", "/images/home/image-3.jpg"];

const array2 = ["/images/home/image-4.jpg", "/images/home/image-5.jpg", "/images/home/image-6.jpg"];

export function HomePage() {
  const [photos, setPhotos] = useState(array1);

  function handleChangePhotos(photosListHome: string[]) {
    setPhotos(photosListHome);
  }

  return (
    <Flex w="100%" h="100vh">
      <Flex
        w="45%"
        bgImage={`url(${photos[0]})`}
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        style={{
          transition: "background-image 1s ease-in-out",
        }}
      />

      <Flex w="55%" px="8" py="16" direction="column">
        <Flex w="100%" justify="space-between" mb="32">
          <UnderlineLink text="Sobre" />
          <UnderlineLink text="Portfolio" />
          <UnderlineLink text="Feedback" />
          <UnderlineLink text="Pacotes" />
          <UnderlineLink text="Minha Conta" />
        </Flex>

        <Flex direction="column" h="100%">
          <Flex h="40%" justify="space-between">
            <Stack justify="space-between">
              <Heading fontSize="6xl" fontWeight="300" color="#b6effe">
                QUARTZO DESIGN
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
              >
                <Flex align="center" color="#b6effe">
                  <Heading fontSize="3xl" fontWeight="300">
                    HIRE ME
                  </Heading>

                  <Icon as={BsArrowRight} ml="4" w={8} h={8} />
                </Flex>
              </Link>
            </Stack>

            <Stack py="2" justify="space-between">
              <Link>
                <Icon as={FiMail} w={6} h={6} />
              </Link>

              <Link>
                <Icon as={RiMessengerLine} w={6} h={6} />
              </Link>

              <Link>
                <Icon as={FaInstagram} w={6} h={6} />
              </Link>

              <Link>
                <Icon as={FaWhatsapp} w={6} h={6} />
              </Link>
            </Stack>
          </Flex>

          <Flex h="60%" align="end" justify="space-between">
            <HStack spacing="8">
              <Flex direction="column" align="center" color="#b6effe">
                <Button
                  fontWeight="300"
                  fontSize="4xl"
                  onClick={() => handleChangePhotos(array1)}
                  bg="transparent"
                  _hover={{
                    bg: "transparent",
                  }}
                >
                  01
                </Button>
                <Icon as={BsArrowLeft} w={8} h={8} />
              </Flex>

              <Flex direction="column" h="100%" align="center" alignSelf="flex-end">
                <Button
                  fontWeight="300"
                  fontSize="2xl"
                  onClick={() => handleChangePhotos(array2)}
                  bg="transparent"
                  _hover={{
                    bg: "transparent",
                  }}
                >
                  02
                </Button>
                <Icon as={BsArrowRight} w={8} h={8} />
              </Flex>
            </HStack>

            <HStack spacing="6">
              <Flex
                w="240px"
                h="320px"
                bgImage={`url(${photos[1]})`}
                bgPosition="center"
                bgSize="cover"
                bgRepeat="no-repeat"
                style={{
                  transition: "background-image 1s ease-in-out",
                }}
              />

              <Flex
                w="240px"
                h="320px"
                bgImage={`url(${photos[2]})`}
                bgPosition="center"
                bgSize="cover"
                bgRepeat="no-repeat"
                style={{
                  transition: "background-image 1s ease-in-out",
                }}
              />
            </HStack>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
