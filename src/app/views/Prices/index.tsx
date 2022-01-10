import {
  Flex,
  Wrap,
  WrapItem,
  Link,
  VStack,
  Text,
  Divider,
  HStack,
  Box,
  Stack,
  Icon,
} from "@chakra-ui/react";

import { FaCity, FaLeaf, FaImage } from "react-icons/fa";
import { ImInstagram, ImWhatsapp, ImFacebook2 } from "react-icons/im";

export function Prices() {
  return (
    <Flex id="gallery" w="100%" h="100vh" direction="column">
      <Flex
        w="100%"
        maxW={1680}
        mx="auto"
        justify="space-between"
        direction="column"
        align="center"
      >
        <Text fontSize="7xl" fontWeight="500" mt="16" mb="16">
          Prices
        </Text>

        <Flex w="100%" justify="space-between" gridGap={20}>
          <Box w="100%" h="500px" border="1px" borderColor="gray.200">
            <Text textAlign="center">Básico</Text>
          </Box>
          <Box w="100%" border="1px" borderColor="gray.200">
            oi
          </Box>
          <Box w="100%" border="1px" borderColor="gray.200">
            oi
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
