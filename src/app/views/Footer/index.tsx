import { Flex, Text, VStack, Heading, HStack, Link, Icon } from "@chakra-ui/react";

import { UnderlineLink } from "../../../components/UnderlineLink";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { RiMessengerLine } from "react-icons/ri";

export function Footer() {
  return (
    <Flex w="100%" h={320} bg="#000000">
      <Flex w="100%" maxW={1600} mx="auto" my="auto" align="center" justify="space-between">
        <Text>Portfolio</Text>
        <Text>Services & Prices</Text>
        <Text>Contact</Text>

        <VStack>
          <Heading color="#b6effe">Quartzo Design</Heading>
        </VStack>

        <HStack spacing="8">
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
        </HStack>

        <Text>+7 985 086-80-40</Text>
      </Flex>
    </Flex>
  );
}
