import { Flex, Image, HStack, Link } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      h="24"
      maxW={1680}
      mx="auto"
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      align="center"
      justify="space-between"
      zIndex="1"
    >
      <Link href="#home">
        <Image src="/images/logo.png" alt="Logo Quartzo Design" htmlWidth={80} />
      </Link>

      <HStack spacing="8" fontSize="xl" fontWeight="300">
        <Link href="#home">Início</Link>
        <Link href="#gallery">Galeria</Link>
      </HStack>
    </Flex>
  );
}

{
  /* <Flex w="100vw" position="sticky" zIndex="2">
      <Flex
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
      >
        <Link href="#home">
          <Image src="/images/logo.png" alt="Logo Quartzo Design" htmlWidth={80} />
        </Link>

        <HStack spacing="8" fontSize="xl" fontWeight="300">
          <Link href="#home">Início</Link>
          <Link href="#gallery">Galeria</Link>
        </HStack>
      </Flex>
    </Flex> */
}
