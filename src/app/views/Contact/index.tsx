import {
  Flex,
  Text,
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

import { FiMail, FiNavigation, FiPhoneCall, FiFacebook, FiInstagram } from "react-icons/fi";
import { AiOutlineWhatsApp } from "react-icons/ai";

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
      justifyContent="space-between"
    >
      <Flex w="100%" maxWidth={1440} mx="auto" mt="32" direction="column">
        <Box
          w="100%"
          mx="auto"
          maxWidth={992}
          background="#161616"
          borderRadius="16px"
          padding="10"
        >
          <VStack spacing="10">
            <Text fontSize="5xl" fontWeight="500">
              Entre em contato 💬
            </Text>

            <VStack w="100%" spacing="4">
              <SimpleGrid w="100%" minChildWidth="240px" spacing="4">
                <Input name="name" type="text" placeholder="Nome" />
                <Input name="email" type="email" placeholder="E-mail" />
              </SimpleGrid>

              <Textarea name="message" placeholder="Mensagem" />
            </VStack>

            <Button type="submit" colorScheme="purple">
              Enviar Mensagem
            </Button>
          </VStack>
        </Box>

        {/* <VStack mt="10" spacing="4">
          <Text fontSize="lg">Fale comigo nas redes sociais...</Text>

          <HStack spacing="4">
            <Link href="https://www.facebook.com/quartzodesign1622/" isExternal>
              <Square size="48px" bgColor="#4267B2" borderRadius="4px">
                <Icon as={FiFacebook} w={8} h={8} />
              </Square>
            </Link>

            <Link href="https://www.instagram.com/quartzo_design/" isExternal>
              <Square size="48px" bgColor="#C13584" borderRadius="4px">
                <Icon as={FiInstagram} w={8} h={8} />
              </Square>
            </Link>

            <Link
              href="https://api.whatsapp.com/send?phone=554991661452&text=Ol%C3%A1,%20tudo%20bem?"
              isExternal
            >
              <Square size="48px" bgColor="#25D366" borderRadius="4px">
                <Icon as={AiOutlineWhatsApp} w={8} h={8} />
              </Square>
            </Link>
          </HStack>
        </VStack> */}

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
            <Image src="/images/qrcode.png" w="120px" />

            <Text fontSize="md">Fale comigo no Whats</Text>
          </Flex>
        </HStack>
      </Flex>

      <Flex alignItems="center" justifyContent="center" direction="column" mx="auto" mb="2">
        <Text fontSize="sm">© Copyright 2022. Todos os direitos reservados.</Text>
        <Text fontSize="sm">
          Feito com ❤️ by {""}
          <Link href="https://www.linkedin.com/in/douglasscaini/">Douglas Scaini</Link>
        </Text>
      </Flex>
    </Flex>
  );
}
