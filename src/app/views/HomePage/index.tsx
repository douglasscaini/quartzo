import {
  Flex,
  Text,
  Link,
  Icon,
  Image,
  Divider,
  Stack,
  HStack,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";

import { FiChevronDown } from "react-icons/fi";

const arrowIconAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-20px); }
  60% { transform: translateY(-10px); }
`;

export function HomePage() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const animation = prefersReducedMotion ? undefined : `${arrowIconAnimation} 2s infinite`;

  return (
    <Flex
      id="home"
      h="100vh"
      bgImage={"url('/images/backgrounds/home.jpg')"}
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Flex w="100%" maxW={1680} mx="auto" mt="8" mb="8" justify="space-between" direction="column">
        <Flex align="center" justify="space-between">
          <Link href="#home">
            <Image src="/images/logo.png" alt="Logo Quartzo Design" htmlWidth={80} />
          </Link>

          <HStack spacing="8" fontSize="xl">
            <Link href="#home">
              <Text>Início</Text>
            </Link>

            <Link href="#gallery">
              <Text>Galeria</Text>
            </Link>

            <Link href="#about">
              <Text>Sobre</Text>
            </Link>
          </HStack>
        </Flex>

        <Stack ml="48" spacing="8">
          <Text fontSize="7xl" fontWeight="500" pl="10">
            Quartzo Design
          </Text>

          <Divider w={160} />

          <Flex fontSize="md" fontWeight="300" lineHeight="8" pl="10" pt="2">
            <Text maxW={520} align="justify">
              Uma empresa que realiza sonhos, cria experiências, emerge emoções e paralisa momentos!
            </Text>
          </Flex>
        </Stack>

        <Flex justify="space-between">
          <Icon as={FiChevronDown} w={8} h={8} animation={animation} />

          <HStack spacing="8" fontSize="md">
            <Link href="https://www.facebook.com/quartzocn/" isExternal>
              <Text>Facebook</Text>
            </Link>

            <Link
              href="https://api.whatsapp.com/send?phone=554991661452&text=Ol%C3%A1,%20tudo%20bem?"
              isExternal
            >
              <Text>Whatsapp</Text>
            </Link>

            <Link href="https://www.instagram.com/quartzo_design/" isExternal>
              <Text>Instagram</Text>
            </Link>
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  );
}
