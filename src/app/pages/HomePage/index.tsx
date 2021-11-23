import { Flex, Text, Stack, Icon, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";

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
      w="100vw"
      h="100%"
      direction="column"
      bgImage={"url('/images/background.jpg')"}
      bgPosition={"50% 45%"}
      bgRepeat="no-repeat"
      style={{
        scrollSnapAlign: "center",
      }}
    >
      <Flex w="100%" maxWidth={1440} mx="auto" my="auto" direction="column">
        <Stack>
          <Text fontSize="5xl" lineHeight="48px">
            Bem-vindos,
          </Text>
          <Text fontSize="7xl" fontWeight="500" lineHeight="96px">
            Meu nome é Jean.
          </Text>
          <Text fontSize="xl">Capturo momentos da vida através das minhas lentes 🤪</Text>
        </Stack>
      </Flex>

      <Flex w="100%" maxWidth={1440} mx="auto" mb="6">
        <Icon as={FiChevronDown} w={8} h={8} animation={animation} />
      </Flex>
    </Flex>
  );
}
