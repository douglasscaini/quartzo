import {
  FormControl,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  placeholder: string;
}

export function Input({ name, placeholder, ...rest }: InputProps) {
  return (
    <FormControl>
      <ChakraInput
        id={name}
        name={name}
        placeholder={placeholder}
        focusBorderColor="white"
        variant="filled"
        bgColor="#121212"
        _placeholder={{
          color: "white",
        }}
        _hover={{
          bgColor: "#121212",
        }}
        {...rest}
      />
    </FormControl>
  );
}
