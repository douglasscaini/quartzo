import {
  Flex,
  Heading,
  Grid,
  GridItem,
  Link,
  Text,
  HStack,
  Stack,
  Icon,
  VStack,
} from "@chakra-ui/react";

export function About() {
  return (
    <Flex w="100%" h="100vh">
      <Heading mt="24" fontSize="250px" fontWeight="300" color="#262626" position="absolute">
        INSPIRE
      </Heading>
      <Flex w="100%" maxW={1360} mx="auto" mt="32">
        <Flex w="100%" justify="space-between">
          <Flex w="50%" h="100%" margin="auto" direction="column">
            <Stack w="100%" spacing="8" justify="center">
              <Heading fontSize="6xl" fontWeight="300" color="#b6effe" position="absolute">
                HI, MY NAME IS VICTORIA
              </Heading>

              <Text pt="48">
                I'm a portrait and fashion photographer working in Moscow, St. Petersburg and Riga.
                The photography is my love and freedom.
              </Text>

              <Text>
                It is important for me to be in tune with each model. It Helps to show the depth of
                their inner worlds, sensuality and energy. I believe that true beaty is in
                simplicity an minimalism.
              </Text>
            </Stack>

            <Stack spacing="8" mt="16">
              <Heading fontSize="4xl" fontWeight="300" color="#b6effe">
                I LOOK FOR INSPIRATION EVERYWHERE:
              </Heading>
              <Text>
                I like art, especialy films of such director as Trier, Ozon, Noé and Balabanov
              </Text>
              <Text>I'm also used to shoot on filme and collect old cameras</Text>
              <Text>
                I study psycology and have a degree in conflictology that helps me see yey to eye
                with models
              </Text>
            </Stack>
          </Flex>

          <Flex bg="red" w="50%">
            <Flex
              w="100%"
              h="95%"
              bgImage={`url('/images/new/woman-one.png')`}
              bgPosition="center"
              bgSize="cover"
              bgRepeat="no-repeat"
            />
            <Heading
              mt="500px"
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
