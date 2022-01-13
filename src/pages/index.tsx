import { Flex } from "@chakra-ui/react";

import Head from "next/head";
import { GetStaticProps } from "next";

import { HomePage } from "../app/views/HomePage";

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

      <Flex>
        <HomePage />
      </Flex>
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
