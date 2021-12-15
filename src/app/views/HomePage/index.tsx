import {
  Flex,
  Text,
  Stack,
  Icon,
  HStack,
  Divider,
  Link,
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
      bgImage={"url('/images/background.jpg')"}
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      direction="column"
    >
      <Flex w="100%" maxW={1680} mx="auto" my="auto">
        <Stack ml="48" spacing="8">
          <Text fontSize="7xl" fontWeight="500" pl="10">
            Quartzo Design
          </Text>

          <Divider w={160} />

          <Flex fontSize="sm" fontWeight="300" lineHeight="8" direction="column" pl="10">
            <Text maxW={424} align="justify">
              Uma empresa que concretiza sonhos, cria experiências, emerge sentimentos e paralisa
              momentos!
            </Text>
          </Flex>
        </Stack>
      </Flex>

      <Flex w="100%" maxW={1680} mx="auto" mb="8" align="center" justify="space-between">
        <Icon as={FiChevronDown} w={8} h={8} animation={animation} />

        <HStack fontSize="md" spacing="8">
          <Link href="https://www.facebook.com/quartzocn/" isExternal>
            <Text>Facebook</Text>
          </Link>

          <Link href="https://www.instagram.com/quartzo_design/" isExternal>
            <Text>Instagram</Text>
          </Link>

          <Link
            href="https://api.whatsapp.com/send?phone=554991661452&text=Ol%C3%A1,%20tudo%20bem?"
            isExternal
          >
            <Text>Whatsapp</Text>
          </Link>
        </HStack>
      </Flex>
    </Flex>
  );
}
