const array1 = ["/images/home/image-1.jpg", "/images/home/image-2.jpg", "/images/home/image-3.jpg"];
const array2 = ["/images/home/image-4.jpg", "/images/home/image-5.jpg", "/images/home/image-6.jpg"];

import { Flex, Text, Heading, Stack, Icon, HStack, Link } from "@chakra-ui/react";
import { useState } from "react";

import { UnderlineLink } from "../../../components/UnderlineLink";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { RiMessengerLine } from "react-icons/ri";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

export function HomePage() {
    const [photos, setPhotos] = useState<string[]>(array1);

    function handleChangePhotos(photosList: string[]) {
        setPhotos(photosList);
    }

    return (
        <Flex w="100%" h="100vh">
            <Flex
                w="45%"
                bgImage={`url(${photos[0]})`}
                bgPosition="center"
                bgSize="cover"
                bgRepeat="no-repeat"
                transition="background-image 1s ease-in-out"
            />

            <Flex w="55%" px="8" py="16" direction="column">
                <Flex justify="space-between" mb="24">
                    <UnderlineLink text="Sobre" />
                    <UnderlineLink text="Portfolio" />
                    <UnderlineLink text="Feedback" />
                    <UnderlineLink text="Pacotes" />
                    <UnderlineLink text="(49) 99114-7537" />
                </Flex>

                <Flex h="100%" direction="column">
                    <Flex h="35%" justify="space-between">
                        <Stack justify="space-between">
                            <Heading fontSize="4xl" fontWeight="300" color="#b6effe">
                                QUARTZO DESIGN
                            </Heading>

                            <Text maxW={256} fontSize="sm">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry.
                            </Text>

                            <Link
                                w={192}
                                transition="filter 0.2s"
                                style={{
                                    textDecoration: "none",
                                }}
                                _hover={{
                                    filter: "drop-shadow(0 0 0.25rem #b6effe)",
                                }}
                            >
                                <Flex align="center" color="#b6effe">
                                    <Heading fontSize="2xl" fontWeight="300">
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

                    <Flex h="65%" align="end" justify="space-between">
                        <HStack spacing="8">
                            <Flex
                                direction="column"
                                align="center"
                                color="#b6effe"
                                onClick={() => handleChangePhotos(array1)}
                                cursor="pointer"
                                transition="filter 0.2s"
                                _hover={{
                                    filter: "drop-shadow(0 0 0.25rem #b6effe)",
                                }}
                            >
                                <Text fontSize="4xl">01</Text>
                                <Icon as={BsArrowLeft} w={8} h={8} />
                            </Flex>

                            <Flex
                                direction="column"
                                align="center"
                                color="#b6effe"
                                onClick={() => handleChangePhotos(array2)}
                                cursor="pointer"
                                transition="filter 0.2s"
                                _hover={{
                                    filter: "drop-shadow(0 0 0.25rem #b6effe)",
                                }}
                            >
                                <Text fontSize="4xl">02</Text>
                                <Icon as={BsArrowRight} w={8} h={8} />
                            </Flex>
                        </HStack>
                        <HStack spacing="6">
                            <Flex
                                w="220px"
                                h="300px"
                                bgImage={`url(${photos[1]})`}
                                bgPosition="center"
                                bgSize="cover"
                                bgRepeat="no-repeat"
                                style={{
                                    transition: "background-image 1s ease-in-out",
                                }}
                            />

                            <Flex
                                w="220px"
                                h="300px"
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
