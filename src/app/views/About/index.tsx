import {
  Flex,
  Wrap,
  WrapItem,
  Link,
  VStack,
  Text,
  Divider,
  HStack,
  Stack,
  Icon,
} from "@chakra-ui/react";

import { ImInstagram, ImWhatsapp, ImFacebook2 } from "react-icons/im";

export function About() {
  return (
    <Flex
      id="about"
      w="100%"
      h="100vh"
      bgImage={"url('/images/backgrounds/about.jpg')"}
      bgPosition="80% 40%"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Flex w="100%" maxW={1680} mx="auto" my="auto" direction="column">
        <Text fontSize="7xl" fontWeight="500" mb="16">
          About Me
        </Text>

        <Stack maxW={520} spacing="8" fontSize="lg" fontWeight="300">
          <Text>
            I am a central London based freelance photographer, specialising in travel and people
            photography.
          </Text>

          <Text>
            Working on commissions in the UK and abroad shooting images for magazines, travel guides
            and business publications.
          </Text>

          <Text>
            Clients include Berlitz, Sunday Times Travel, Penguin Random House, Twilio, Korean Air,
            UCL, Imagination Technologies and National Geographic Traveller.
          </Text>
        </Stack>

        <HStack spacing="8" mt="16">
          <Link
            href="https://www.facebook.com/quartzocn/"
            isExternal
            transition="all 0.2s ease-in-out"
            _hover={{
              filter: "brightness(90%)",
            }}
          >
            <Icon as={ImFacebook2} w={8} h={8} />
          </Link>

          <Link
            href="https://api.whatsapp.com/send?phone=554991661452&text=Ol%C3%A1,%20tudo%20bem?"
            isExternal
            transition="all 0.2s ease-in-out"
            _hover={{
              filter: "brightness(90%)",
            }}
          >
            <Icon as={ImWhatsapp} w={8} h={8} />
          </Link>

          <Link
            href="https://www.instagram.com/quartzo_design/"
            isExternal
            transition="all 0.2s ease-in-out"
            _hover={{
              filter: "brightness(90%)",
            }}
          >
            <Icon as={ImInstagram} w={8} h={8} />
          </Link>
        </HStack>
      </Flex>
    </Flex>
  );
}
