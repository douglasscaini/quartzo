import { Flex, Text, Stack } from "@chakra-ui/react";

import { Header } from "../../Header";

export function HomePage() {
  return (
    <Flex
      h="100%"
      style={{ scrollSnapAlign: "center" }}
      direction="column"
      bgImage={"url('/images/background.jpg')"}
      bgPosition={"50% 45%"}
      bgRepeat="no-repeat"
    >
      <Header />

      <Flex w="100%" maxWidth={1440} mx="auto" my="auto" px="4">
        <Stack spacing="2">
          <Text fontSize="5xl" lineHeight="48px">
            Bem-vindos,
          </Text>
          <Text fontSize="7xl" fontWeight="500" lineHeight="72px">
            Meu nome é Jean.
          </Text>
          <Text fontSize="md" lineHeight="32px">
            Capturo momentos da vida através das minhas lentes 🤪
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
}
