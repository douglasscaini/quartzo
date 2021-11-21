import { VStack } from "@chakra-ui/react";

import { About } from "../app/pages/About";
import { HomePage } from "../app/pages/HomePage";

export default function Home() {
  return (
    <VStack
      h="100vh"
      display="block"
      style={{ scrollSnapType: "y mandatory", scrollBehavior: "smooth" }}
      overflowY="scroll"
    >
      <HomePage />
      <About />
    </VStack>
  );
}
