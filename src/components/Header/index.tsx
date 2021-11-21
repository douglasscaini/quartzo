import { Flex, Image, HStack, Link } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex as="header" h="24" position="sticky" top="0" left="0" right="0" bottom="0">
      <Flex
        position="fixed"
        top="0"
        left="0"
        right="0"
        justifyContent="space-between"
        maxWidth={1440}
        mx="auto"
      >
        <Image src="/images/logo.png" alt="Logo Quartzo Design" htmlWidth={112} />
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
