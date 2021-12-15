import { Flex, Wrap, WrapItem, Link } from "@chakra-ui/react";

import { HomeProps } from "../../../pages";

export function Gallery({ photos }: HomeProps) {
  return (
    <Flex id="gallery" w="100vw" h="100vh">
      <Wrap spacing="0" w="100%" h="100%">
        {photos.map((photo) => (
          <Link key={photo.id} href={photo.permalink} isExternal>
            <WrapItem w="20vw" h="50vh" overflow="hidden">
              <Flex
                w="100%"
                h="100%"
                bgImage={`url(${photo.media_url})`}
                bgRepeat="no-repeat"
                bgPosition="center"
                bgSize="cover"
                cursor="pointer"
                style={{
                  transition: "all .5s ease-in-out",
                }}
                _hover={{
                  opacity: "0.5",
                  transform: "scale(1.1, 1.1)",
                }}
              />
            </WrapItem>
          </Link>
        ))}
      </Wrap>
    </Flex>
  );
}
