import { Flex, Text, Stack } from "@chakra-ui/react";

import { Header } from "../components/Header";

export default function Home() {
  return (
    <Flex w="100vw" direction="column" overflowX="hidden">
      <Flex
        w="100vw"
        h="100vh"
        bgImage={"url('/images/background.jpg')"}
        bgPosition={"50% 45%"}
        bgRepeat="no-repeat"
        direction="column"
      >
        <Header />

        <Flex w="100%" maxWidth={1440} mx="auto" my="auto" px="4" direction="column">
          <Stack spacing="2">
            <Text fontSize="5xl" lineHeight="48px">
              Bem vindo,
            </Text>
            <Text fontSize="7xl" fontWeight="500" lineHeight="74px">
              Meu nome é Jean
            </Text>
            <Text fontSize="lg" lineHeight="36px">
              Capturo momentos da vida através das minhas lentes 🤪
            </Text>
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  );
}
