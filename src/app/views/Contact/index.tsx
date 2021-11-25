import {
  Flex,
  Text,
  Divider,
  Box,
  VStack,
  SimpleGrid,
  Button,
  Icon,
  HStack,
  Square,
  Link,
  Image,
} from "@chakra-ui/react";

import { Input } from "../../../components/Form/Input";
import { Textarea } from "../../../components/Form/Textarea";

import { FiMail, FiNavigation, FiPhoneCall } from "react-icons/fi";

export function Contact() {
  return (
    <Flex
      id="contact"
      w="100vw"
      h="100%"
      direction="column"
      style={{
        scrollSnapAlign: "center",
      }}
      justify="space-between"
    >
      <Flex w="100%" maxW={1680} mx="auto" mt="24" direction="column">
        <HStack w="100%" h="100%" justify="center" spacing="24">
          <Flex w={420} h={560} direction="column" justify="center">
            <Text fontSize="5xl" fontWeight="500" lineHeight="shorter">
              Vamos conversar.
            </Text>

            <Flex justify="center" position="relative" mt="10">
              <Divider w={160} left="-64px" position="absolute" />
            </Flex>

            <Text fontSize="lg" fontWeight="300" align="justify" mt="10">
              Uma foto - é uma busca pelo que pode entrar na moldura. Quando você limita eventos a
              um quadro - Você altera esses eventos.
            </Text>
          </Flex>
          <Flex w={575} h={560} align="center">
            <Flex direction="column">
              <Box w={575} maxWidth={992} background="#161616" borderRadius="16px" padding="10">
                <VStack spacing="10">
                  <VStack w="100%" spacing="4">
                    <SimpleGrid w="100%" minChildWidth="240px" spacing="4">
                      <Input name="name" type="text" placeholder="Nome" />
                      <Input name="email" type="email" placeholder="E-mail" />
                    </SimpleGrid>

                    <Textarea name="message" placeholder="Mensagem" />
                  </VStack>

                  <Flex justify="end">
                    <Button type="submit" colorScheme="purple">
                      Deixe um recado
                    </Button>
                  </Flex>
                </VStack>
              </Box>
            </Flex>
          </Flex>
        </HStack>

        <HStack justifyContent="space-between" mt="14">
          <Flex w="200px" direction="column" align="center">
            <Icon as={FiMail} w={8} h={8} />
            <Text fontSize="lg" fontWeight="500" mt="4">
              E-mail
            </Text>
            <Text fontSize="md">quartzocn@gmail.com</Text>
          </Flex>

          <Flex w="200px" direction="column" align="center">
            <Icon as={FiPhoneCall} w={8} h={8} />
            <Text fontSize="lg" mt="4" fontWeight="500">
              Telefone
            </Text>
            <Text fontSize="md">(49) 99166-1452</Text>
          </Flex>

          <Flex w="200px" direction="column" align="center">
            <Icon as={FiNavigation} w={8} h={8} />
            <Text fontSize="lg" mt="4" fontWeight="500">
              Localização
            </Text>
            <Text fontSize="md">Campos Novos - SC</Text>
          </Flex>
        </HStack>
      </Flex>
      <Flex alignItems="center" justifyContent="center" direction="column" mx="auto">
        <Text fontSize="sm">© Copyright 2022. Todos os direitos reservados.</Text>
      </Flex>
    </Flex>
  );
}
