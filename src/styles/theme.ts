import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Cinzel",
    body: "Raleway",
  },
  styles: {
    global: {
      body: {
        bg: "#1d1d1d",
        color: "#9c9c9c",
      },
    },
  },
});
