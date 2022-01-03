import { Flex, Wrap, WrapItem, Link, VStack, Text, Divider, HStack, Icon } from "@chakra-ui/react";

import { HomeProps } from "../../../pages";

export function Gallery({ photos }: HomeProps) {
  console.log(photos);

  return (
    <Flex id="gallery" w="100vw" h="120vh">
      <Wrap spacing="0">
        {photos.map((photo) => (
          <Link key={photo.id} href={photo.permalink} isExternal>
            <WrapItem>
              <Flex
                w="20vw"
                h="50vh"
                bgImage={`url(${photo.media_url})`}
                bgRepeat="no-repeat"
                bgPosition="center"
                bgSize="cover"
                cursor="pointer"
              />
            </WrapItem>
          </Link>
        ))}
      </Wrap>
    </Flex>
  );
}
