import {
  Flex,
  Heading,
  Wrap,
  WrapItem,
  Link,
  VStack,
  Text,
  Divider,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { SwiperSlideComponent } from "../../../components/SwiperSlide";

import { HomeProps } from "../../../pages";

export function Gallery({ photos }: HomeProps) {
  console.log(photos);

  return (
    <Flex id="gallery" w="100%" h="100vh" direction="column">
      <Heading mt="24" mb="24" fontSize="6xl" fontWeight="300" color="#b6effe" mx="auto">
        PORTFOLIO
      </Heading>

      <Flex h="594px" w="100%">
        <SwiperSlideComponent photos={photos} />
      </Flex>

      <Heading fontSize="6xl" fontWeight="300" color="#b6effe">
        HI, MY NAME IS VICTORIA
      </Heading>

      {/* <Wrap spacing="0">
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
      </Wrap> */}
    </Flex>
  );
}
