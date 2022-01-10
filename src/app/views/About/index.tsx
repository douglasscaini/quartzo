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

import { FaCity, FaLeaf, FaImage } from "react-icons/fa";
import { ImInstagram, ImWhatsapp, ImFacebook2 } from "react-icons/im";

export function About() {
  return (
    <Flex
      id="gallery"
      w="100%"
      h="100vh"
      direction="column"
      bgImage={"url('/images/about.jpg')"}
      bgPosition="80% 40%"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Flex w="100%" maxW={1680} mx="auto" my="auto" justify="space-between" direction="column">
        <Text fontSize="7xl" fontWeight="500" mb="16">
          About me
        </Text>

        <Stack maxW={520} spacing="8" mb="16">
          <Text>
            I am a central London base freelance photographer, specialising in travel and people
            photography.
          </Text>

          <Text>
            Working on commissions in tge UK and abroad shooting images for magazines, travel guides
            and business publications.
          </Text>

          <Text>
            Clients include Berlitz, Sunday Times Travel, Penguin Random House, Twilio, Kirean Air,
            UCL, Imagination Techologias and National Geographic Traveller.
          </Text>
        </Stack>

        <HStack spacing="8">
          <Icon as={ImFacebook2} w={8} h={8} />
          <Icon as={ImWhatsapp} w={8} h={8} />
          <Icon as={ImInstagram} w={8} h={8} />
        </HStack>
      </Flex>
    </Flex>
  );
}
