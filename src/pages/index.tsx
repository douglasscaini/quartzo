import { Flex } from "@chakra-ui/react";

import Head from "next/head";

import { HomePage } from "../app/views/HomePage";
import { Footer } from "../app/views/Footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>Quartzo Design</title>
            </Head>

            <Flex direction="column" overflowX="hidden">
                <HomePage />
                <Footer />
            </Flex>
        </>
    );
}
