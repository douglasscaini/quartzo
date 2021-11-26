import { Flex, Text, HStack, Image, Divider } from "@chakra-ui/react";

export function About() {
  return (
    <Flex
      id="about"
      w="100vw"
      h="100%"
      style={{
        scrollSnapAlign: "center",
      }}
    >
      <Flex w="100%" maxW={1680} mx="auto" my="auto" direction="column">
        <Flex justify="center" position="relative" top="-60px">
          <Divider h={82} mx="auto" orientation="vertical" position="absolute" />
        </Flex>

        <HStack w="100%" h="100%" justify="center" spacing="24" mt="12">
          <Flex w={420} h={560} position="relative">
            <Flex
              w={420}
              h={560}
              bgImage={`url("/images/quartzo/jean.jpg")`}
              bgRepeat="no-repeat"
              bgPosition="center"
              bgSize="contain"
              alt="Foto do proprietário"
              borderRadius={4}
              opacity=".9"
            />

            <Image
              src="/images/dots10x.png"
              w={184}
              position="absolute"
              opacity=".5"
              bottom="-84px"
              right="-36px"
              zIndex="-1"
            />

            <Image
              src="/images/dots5x.png"
              w={92}
              position="absolute"
              opacity=".5"
              top="-38px"
              left="-38px"
              zIndex="-1"
            />
          </Flex>

          <Flex w={575} h={560} align="center">
            <Flex direction="column">
              <Text fontSize="5xl" fontWeight="500" lineHeight="shorter" mb="10">
                Sobre a Quartzo
              </Text>

              <Flex position="relative">
                <Divider w={90} top="3" left="-64px" position="absolute" />
              </Flex>

              <Text fontSize="lg" fontWeight="300" align="justify" pl="20">
                Concretizar sonhos. Com muito amor, carinho e dedicação estamos sempre comprometidos
                em fazer do seu dia, o dia mais especial, lindo e incrível! Criamos experiências e
                entregamos memórias, estas mesmas que serão eternamente guardadas através de um
                trabalho moderno, autoral e cheio de sentimento e dedicação. Somos apaixonadamente
                loucos pelo o que fazemos. Nós identificamos com nossos clientes, mergulhamos juntos
                na imensidão dos sentimentos vividos antes e no dia do evento. Nós emocionamos
                juntos, rimos juntos e fazemos que o trabalho entregue seja totalmente personalizado
                traduzindo o perfil de cada um de nossos clientes.
              </Text>
            </Flex>
          </Flex>
        </HStack>
      </Flex>
    </Flex>
  );
}
