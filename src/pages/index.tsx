import { VStack } from "@chakra-ui/react";

import Head from "next/head";
import { GetStaticProps } from "next";

import { Header } from "../components/Header";
import { HomePage } from "../app/views/HomePage";
import { Gallery } from "../app/views/Gallery";

import { api } from "../services/api";

type Photos = {
  id: string;
  src: string;
  link: string;
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

      <VStack display="block" overflowX="hidden" spacing="0">
        <Header />
        <HomePage />
        <Gallery photos={photos} />
      </VStack>
    </>
  );
}

// import { Header } from "../components/Header";
// import { About } from "../app/views/About";
// import { Gallery } from "../app/views/Gallery";
// import { Contact } from "../app/views/Contact";
// import { api } from "../services/api";

// export default function Home({ photos }: HomeProps) {
//   return (
//     <>
//       <Head>
//         <title>Quartzo Design</title>
//       </Head>

//       <VStack
//         h="100vh"
//         display="block"
//         overflowY="scroll"
//         overflowX="hidden"
//         style={{
//           scrollBehavior: "smooth",
//         }}
//       >
//         <HomePage />
//         {/* <About /> */}
//         <Gallery photos={photos} />
//         {/* <Contact /> */}
//       </VStack>
//     </>
//   );
// }

type PhotosE = {
  src: string;
};

export const getStaticProps: GetStaticProps = async () => {
  const token =
    "IGQVJYT2doSmRubHA5ZA2tDMk5fbWpHTHZASTFIzX09VMGtCQnJHaE1Nd0Q1YTJmYWI5S1hxN3pyN0c0VHJiRGlvaUd0dS1CbkJ5WFkyTHhhNWtBSjJYSFl4My1JcER4MzR3RUZAfMTVwZAXdFQmdlUTR4TQZDZD";

  const { data } = await api.get(
    `https://graph.instagram.com/me/media?access_token=IGQVJYT2doSmRubHA5ZA2tDMk5fbWpHTHZASTFIzX09VMGtCQnJHaE1Nd0Q1YTJmYWI5S1hxN3pyN0c0VHJiRGlvaUd0dS1CbkJ5WFkyTHhhNWtBSjJYSFl4My1JcER4MzR3RUZAfMTVwZAXdFQmdlUTR4TQZDZD&fields=media_url,media_type,caption,permalink`
  );

  const photos: any = data.data.map((photo: any) => {
    return {
      id: photo.id,
      src: photo.media_url,
      link: photo.permalink,
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
