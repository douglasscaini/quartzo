import { Textarea as ChakraTextarea } from "@chakra-ui/react";

type TextareaProps = {
  name: string;
  placeholder: string;
};

export function Textarea({ name, placeholder }: TextareaProps) {
  return (
    <ChakraTextarea
      name={name}
      placeholder={placeholder}
      focusBorderColor="white"
      variant="filled"
      resize="none"
      height="96px"
      bgColor="#121212"
      _placeholder={{
        color: "white",
      }}
      _hover={{
        bgColor: "#121212",
      }}
    />
  );
}
