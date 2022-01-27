import { Flex, Heading, Text, Stack, VStack } from "@chakra-ui/react";

export function About() {
  return (
    <Flex w="100%" h="100vh">
      <Heading mt="20" fontSize="240px" fontWeight="300" color="#262626" position="absolute">
        INSPIRE
      </Heading>

      <Flex w="100%" maxW={1360} mx="auto" mt="32">
        <Flex w="100%">
          <Flex w="50%" direction="column">
            <Stack spacing="8" justify="center">
              <Heading fontSize="6xl" fontWeight="300" color="#b6effe" position="absolute" mt="-16">
                HI, MY NAME IS DOUGLAS
              </Heading>

              <VStack spacing="8" pt="44">
                <Text>
                  I'm a portrait and fashion photographer working in Moscow, St. Petersburg and
                  Riga. The photography is my love and freedom.
                </Text>

                <Text>
                  It is important for me to be in tune with each model. It Helps to show the depth
                  of their inner worlds, sensuality and energy. I believe that true beaty is in
                  simplicity an minimalism.
                </Text>
              </VStack>
            </Stack>

            <Stack spacing="8" mt="16">
              <Heading fontSize="4xl" fontWeight="300" color="#b6effe">
                THE STANDARD LOREM IPSUM PASSAGE
              </Heading>

              <Text>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </Text>

              <Text>Contrary to popular belief, Lorem Ipsum is not simply random text.</Text>

              <Text>
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
                interested.
              </Text>
            </Stack>
          </Flex>

          <Flex w="50%" h="100%">
            <Flex
              w="100%"
              h="95%"
              bgImage={`url('/images/quartzo.jpg')`}
              bgPosition="center"
              bgSize="cover"
              bgRepeat="no-repeat"
            />

            <Heading
              mt="554px"
              fontSize="240px"
              fontWeight="300"
              color="#262626"
              position="absolute"
            >
              CREATE
            </Heading>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
