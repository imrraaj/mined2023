import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Fonts from "../components/Fonts";
import NextNProgress from "nextjs-progressbar";

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <NextNProgress />
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
