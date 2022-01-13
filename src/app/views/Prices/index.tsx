import { Flex, Text, Box, VStack, Stack, Button, Divider } from "@chakra-ui/react";

export function Prices() {
  return (
    <Flex id="prices" w="100%" h="100vh" bgGradient="linear(to-br, #47484A, #1A1C1D)">
      <Flex w="100%" maxW={1680} mx="auto" my="auto" direction="column" align="center">
        <Text fontSize="7xl" fontWeight="500" pb="16">
          Pacotes
        </Text>

        <Flex w="100%" gridGap="16" fontWeight="300">
          <Box
            w="100%"
            transition="all 0.2s ease-in-out"
            border="2px"
            borderColor="transparent"
            _hover={{
              cursor: "pointer",
              border: "2px",
              borderColor: "gray.50",
            }}
            role="group"
          >
            <Flex direction="column" padding="16">
              <VStack spacing="2">
                <Text fontSize="2xl">Pacote Básico</Text>
                <Text fontSize="xl">R$ 90,00</Text>
              </VStack>

              <Divider mt="8" w="100%" />

              <Stack spacing="4" mt="16">
                <Flex justify="space-between">
                  <Text>Photos</Text>
                  <Text>10 fotos em mídia digital</Text>
                </Flex>

                <Flex justify="space-between">
                  <Text>Camera</Text>
                  <Text>Semi-profissional</Text>
                </Flex>

                <Flex justify="space-between">
                  <Text>Resolução</Text>
                  <Text>18MP</Text>
                </Flex>

                <Flex justify="space-between">
                  <Text>Prazo de entrega</Text>
                  <Text>5 dias úteis</Text>
                </Flex>
              </Stack>

              <Button
                mt="16"
                borderRadius="0"
                bg="transparent"
                fontWeight="400"
                border="1px"
                _groupHover={{
                  color: "#121212",
                  bg: "gray.100",
                }}
              >
                AGENDAR
              </Button>
            </Flex>
          </Box>

          <Box
            w="100%"
            transition="all 0.2s ease-in-out"
            _hover={{
              cursor: "pointer",
              border: "2px",
              borderColor: "gray.50",
            }}
            role="group"
          >
            <Flex direction="column" padding="16">
              <VStack spacing="2">
                <Text fontSize="2xl">Pacote Básico</Text>
                <Text fontSize="xl">R$ 90,00</Text>
              </VStack>

              <Divider mt="8" w="100%" />

              <Stack spacing="4" mt="16">
                <Flex justify="space-between">
                  <Text>Photos</Text>
                  <Text>10 fotos em mídia digital</Text>
                </Flex>

                <Flex justify="space-between">
                  <Text>Camera</Text>
                  <Text>Semi-profissional</Text>
                </Flex>

                <Flex justify="space-between">
                  <Text>Resolução</Text>
                  <Text>18MP</Text>
                </Flex>

                <Flex justify="space-between">
                  <Text>Prazo de entrega</Text>
                  <Text>5 dias úteis</Text>
                </Flex>
              </Stack>

              <Button
                mt="16"
                borderRadius="0"
                bg="transparent"
                fontWeight="400"
                border="1px"
                _groupHover={{
                  color: "#121212",
                  bg: "gray.100",
                }}
              >
                AGENDAR
              </Button>
            </Flex>
          </Box>

          <Box
            w="100%"
            transition="all 0.2s ease-in-out"
            _hover={{
              cursor: "pointer",
              border: "2px",
              borderColor: "gray.50",
            }}
            role="group"
          >
            <Flex direction="column" padding="16">
              <VStack spacing="2">
                <Text fontSize="2xl">Pacote Básico</Text>
                <Text fontSize="xl">R$ 90,00</Text>
              </VStack>

              <Divider mt="8" w="100%" />

              <Stack spacing="4" mt="16">
                <Flex justify="space-between">
                  <Text>Photos</Text>
                  <Text>10 fotos em mídia digital</Text>
                </Flex>

                <Flex justify="space-between">
                  <Text>Camera</Text>
                  <Text>Semi-profissional</Text>
                </Flex>

                <Flex justify="space-between">
                  <Text>Resolução</Text>
                  <Text>18MP</Text>
                </Flex>

                <Flex justify="space-between">
                  <Text>Prazo de entrega</Text>
                  <Text>5 dias úteis</Text>
                </Flex>
              </Stack>

              <Button
                mt="16"
                borderRadius="0"
                bg="transparent"
                fontWeight="400"
                border="1px"
                _groupHover={{
                  color: "#121212",
                  bg: "white",
                }}
              >
                AGENDAR
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
