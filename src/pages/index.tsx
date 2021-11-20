import { VStack } from "@chakra-ui/react";

import { HomePage } from "../components/Pages/HomePage";
import { About } from "../components/Pages/About";

export default function Home() {
  return (
    <VStack h="100vh" display="block" style={{ scrollSnapType: "y mandatory" }} overflowY="scroll">
      <HomePage />
      <About />
    </VStack>
  );
}
