import { Flex, Image, HStack, Link } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1440}
      h="24"
      mx="auto"
      align="center"
      justifyContent="space-between"
    >
      <Image src="/images/logo.png" alt="Logo Quartzo Design" htmlWidth={112} />
      <Flex>
        <HStack spacing="6" fontSize="xl">
          <Link>Início</Link>
          <Link>Sobre</Link>
          <Link>Galeria</Link>
          <Link>Contato</Link>
        </HStack>
      </Flex>
    </Flex>
  );
}
