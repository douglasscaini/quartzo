import { Flex, Text, HStack, Stack, Link } from "@chakra-ui/react";

import { SlideSwiper } from "../../../components/SlideSwiper";

import { photosAbout } from "../../../utils/photosAbout";

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
      <HStack w="100%" maxWidth={1440} mx="auto" justifyContent="space-between">
        <SlideSwiper photos={photosAbout} />

        <Flex w="65%" direction="column">
          <Stack spacing="8" ml="8">
            <Text fontSize="5xl" fontWeight="500">
              Olá 👋
            </Text>

            <Text fontSize="lg" align="justify">
              Nasci em 1997, na cidade de Campos Novos, Santa Catarina. Com meus 18 anos parei para
              pensar: “Eu preciso fazer algo diferente da minha vida. Eu acredito que meu propósito
              na Terra não é isso que eu estou vivendo”. Com isso em mente, comecei a estudar Design
              na Universidade do Oeste de Santa Catarina e obtive muito conhecimento. Aprendi
              técnicas de desenho, criação de identidade visual, edição em softwares, modelagem 3D,
              estratégias de marketing e algo que me chamou muito atenção, a fotografia.
            </Text>

            <Text fontSize="lg" align="justify">
              Na faculdade, o tempo era curto. Os professores ensinavam apenas o básico de cada
              matéria e sempre deixavam “aquele gostinho de quero mais”. Decidi, então, me
              aprofundar na área de fotografia com cursos online e dicas de outros profissionais,
              como o professor Jameson Boscari, que me mostrou a porta de entrada da fotografia, o
              filmmaker Gustavo Bahr e minha colega Vanessa Rizi. Além disso, meus pais, meus amigos
              e várias outras pessoas fizeram eu me tornar quem sou hoje.
            </Text>

            <Text fontSize="lg" align="justify">
              Atualmente sou formado em Design e sou fotógrafo. Criei também a{" "}
              <Link
                href="https://www.instagram.com/quartzo_design/"
                isExternal
                fontWeight="500"
                color="#ff57b2"
              >
                Quartzo Design
              </Link>
              , uma empresa que presta serviço em todo o Sul do Brasil, com 2 anos de mercado,
              especializada em fotografia ao ar livre e que compartilha com você um pouco dos
              cliques que faz em um mundo cheio de loucuras.
            </Text>
          </Stack>
        </Flex>
      </HStack>
    </Flex>
  );
}
