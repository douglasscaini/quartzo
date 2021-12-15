import { VStack } from "@chakra-ui/react";

import Head from "next/head";
import { GetStaticProps } from "next";

import { Header } from "../components/Header";
import { HomePage } from "../app/views/HomePage";
import { Gallery } from "../app/views/Gallery";

import { api } from "../services/api";

type Photos = {
  id: string;
  media_url: string;
  permalink: string;
};

export type HomeProps = {
  photos: Photos[];
};

export default function Home({ photos }: HomeProps) {
  return (
    <>
      <Head>
        <title>Quartzo Design</title>
      </Head>

      <VStack
        h="100vh"
        display="block"
        overflowX="hidden"
        spacing="0"
        style={{
          scrollBehavior: "smooth",
        }}
      >
        <Header />
        <HomePage />
        <Gallery photos={photos} />
      </VStack>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get(
    `/me/media?access_token=${process.env.INSTAGRAM_API_KEY}&fields=id,media_url,permalink`
  );

  const photos = data.data.map((photo: Photos) => {
    return {
      id: photo.id,
      media_url: photo.media_url,
      permalink: photo.permalink,
    };
  });

  if (photos.length > 10) {
    photos.length = 10;
  }

  return {
    props: { photos },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
