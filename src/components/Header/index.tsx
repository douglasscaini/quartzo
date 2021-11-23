import { Flex, Image, HStack, Link } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex w="100vw" position="sticky" zIndex="2">
      <Flex
        h="24"
        maxWidth={1440}
        position="fixed"
        mx="auto"
        top="0"
        left="0"
        right="0"
        bottom="0"
        justifyContent="space-between"
      >
        <Link href="#home">
          <Image src="/images/logo.png" alt="Logo Quartzo Design" htmlWidth={112} />
        </Link>

        <HStack spacing="6" fontSize="xl">
          <Link href="#home">Início</Link>
          <Link href="#about">Sobre</Link>
          <Link href="#gallery">Galeria</Link>
          <Link href="#contact">Contato</Link>
        </HStack>
      </Flex>
    </Flex>
  );
}
