import { Flex, Image, Text, HStack, Link } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1440}
      h="24"
      mx="auto"
      mt="4"
      px="4"
      align="center"
      justifyContent="space-between"
    >
      <Image src="/images/logo.png" alt="Logo Quartzo Design" w={100} />
      <Flex gap="20">
        <HStack spacing="4" fontSize="lg">
          <Link>Início</Link>
          <Link>Sobre</Link>
          <Link>Galeria</Link>
          <Link>Contato</Link>
          <Link>Blog</Link>
        </HStack>
      </Flex>
    </Flex>
  );
}
