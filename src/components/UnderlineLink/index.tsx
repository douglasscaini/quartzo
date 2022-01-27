import { Link, Text } from "@chakra-ui/react";

type UnderlineLinkProps = {
  text: string;
};

export function UnderlineLink({ text }: UnderlineLinkProps) {
  return (
    <Link
      position="relative"
      _hover={{
        _after: {
          width: "70%",
        },
      }}
      _after={{
        content: `""`,
        width: "0%",
        height: "1px",
        position: "absolute",
        backgroundColor: "#9c9c9c",
        bottom: "-5px",
        transition: "0.3s",
      }}
    >
      <Text>{text}</Text>
    </Link>
  );
}
