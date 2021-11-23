import {
  Flex,
  Text,
  Box,
  VStack,
  SimpleGrid,
  Input,
  Textarea,
  Button,
  Icon,
  HStack,
  Square,
} from "@chakra-ui/react";

import { FiMail, FiNavigation, FiPhoneCall, FiFacebook, FiInstagram } from "react-icons/fi";
import { AiOutlineWhatsApp } from "react-icons/ai";

export function Contact() {
  return (
    <Flex
      id="contact"
      h="100%"
      w="100vw"
      direction="column"
      style={{
        scrollSnapAlign: "center",
      }}
    >
      <Flex w="100%" maxWidth={1440} mx="auto" my="auto" direction="column">
        <Box
          w="100%"
          my="auto"
          mx="auto"
          maxWidth={990}
          background="#161616"
          borderRadius="18px"
          padding="10"
        >
          <VStack spacing="10">
            <Text fontSize="5xl" fontWeight="500">
              Entre em contato 💬
            </Text>

            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="name" type="text" placeholder="Nome" />
              <Input name="email" type="email" placeholder="E-mail" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Textarea placeholder="Mensagem" />
            </SimpleGrid>

            <Flex>
              <Button>Enviar Mensagem</Button>
            </Flex>
          </VStack>
        </Box>

        <Flex alignItems="center" justifyContent="center" direction="column" mb="4">
          <Text>Fale comigo nas redes sociais</Text>

          <HStack>
            <Square size="40px" bg="tomato" color="white">
              <Icon as={FiFacebook} w={6} h={6} />
            </Square>
            <Square size="40px" bg="purple.700" color="white">
              <Icon as={FiInstagram} w={6} h={6} />
            </Square>
            <Square size="40px" bg="purple.700" color="white">
              <Icon as={AiOutlineWhatsApp} w={6} h={6} />
            </Square>
          </HStack>
        </Flex>

        <Flex mt="8" justifyContent="space-between" gridGap="32">
          <Flex w="100%" h="200px" alignItems="center" justifyContent="center" direction="column">
            <Icon as={FiMail} w={8} h={8} />
            <Text fontSize="lg" mt="4" fontWeight="500">
              E-mail
            </Text>
            <Text fontSize="md" mt="2">
              jean-c-z@hotmail.com
            </Text>
          </Flex>

          <Flex w="100%" h="200px" alignItems="center" justifyContent="center" direction="column">
            <Icon as={FiPhoneCall} w={8} h={8} />
            <Text fontSize="lg" fontWeight="500" mt="4">
              Telefone
            </Text>
            <Text fontSize="md" mt="2">
              (49) 99166-1452
            </Text>
          </Flex>

          <Flex w="100%" h="200px" alignItems="center" justifyContent="center" direction="column">
            <Icon as={FiNavigation} w={8} h={8} />
            <Text fontSize="lg" fontWeight="500" mt="4">
              Endereço
            </Text>
            <Text maxW="300px" fontSize="md" mt="2" textAlign="justify">
              R. Santo Amaro da Imperatriz, n.º 73, Bairro Nossa Senhora Aparecida, Campos Novos -
              SC, 89620-000
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex alignItems="center" justifyContent="center" direction="column" mb="4">
        <Text>© Copyright 2022. Todos os direitos reservados.</Text>
        <Text mx="auto">Feito com ❤️ by Douglas Scaini</Text>
      </Flex>
    </Flex>
  );
}
