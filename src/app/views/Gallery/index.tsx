import { Flex, Wrap, WrapItem, Image } from "@chakra-ui/react";
import { HomeProps } from "../../../pages";

// import { photos } from "../../../utils/photos";

export function Gallery({ photos }: HomeProps) {
  return (
    <Flex
      id="gallery"
      w="100vw"
      h="100%"
      style={{
        scrollSnapAlign: "center",
      }}
    >
      <Wrap w="100vw" h="100vh" spacing="0">
        {photos.map((photo) => (
          <WrapItem key={photo.id}>
            <Flex
              w="20vw"
              h="50vh"
              opacity=".9"
              bgImage={`url(${photo.src})`}
              bgRepeat="no-repeat"
              bgPosition="center"
              bgSize="cover"
              _hover={{
                cursor: "pointer",
                opacity: "0.5",
              }}
            />
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  );
}

// function teste (){
//   const {}
// }
// const token =
//   "IGQVJYT2doSmRubHA5ZA2tDMk5fbWpHTHZASTFIzX09VMGtCQnJHaE1Nd0Q1YTJmYWI5S1hxN3pyN0c0VHJiRGlvaUd0dS1CbkJ5WFkyTHhhNWtBSjJYSFl4My1JcER4MzR3RUZAfMTVwZAXdFQmdlUTR4TQZDZD";

// const url = "https://graph.instagram.com/me/media?access_token=";
