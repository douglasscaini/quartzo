import { VStack } from "@chakra-ui/react";

import Head from "next/head";

import { Header } from "../components/Header";
import { HomePage } from "../app/views/HomePage";
import { About } from "../app/views/About";
import { Gallery } from "../app/views/Gallery";
import { Contact } from "../app/views/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Quartzo Design</title>
      </Head>

      <VStack
        h="100vh"
        display="block"
        overflowY="scroll"
        overflowX="hidden"
        style={{
          scrollSnapType: "y mandatory",
          scrollBehavior: "smooth",
        }}
      >
        <Header />

        <HomePage />
        <About />
        <Gallery />
        <Contact />
      </VStack>
    </>
  );
}
