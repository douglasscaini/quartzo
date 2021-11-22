import { VStack } from "@chakra-ui/react";

import Head from "next/head";

import { HomePage } from "../app/pages/HomePage";
import { About } from "../app/pages/About";
import { Gallery } from "../app/pages/Gallery";
import { Contact } from "../app/pages/Contact";
import { Footer } from "../app/pages/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Quartzo Design</title>
      </Head>

      <VStack
        h="100vh"
        display="block"
        style={{ scrollSnapType: "y mandatory", scrollBehavior: "smooth" }}
        overflowY="scroll"
      >
        <HomePage />
        <About />
        <Gallery />
        <Contact />
        <Footer />
      </VStack>
    </>
  );
}
