import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Fonts from "../components/Fonts";
import NextNProgress from "nextjs-progressbar";
import { DefaultSeo } from "next-seo";

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo
        title="MINeD 2023 Hackathon"
        description="MINeD 2023 Hackathon is organised by Nirma University"
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://https://mined2023.tech/",
          siteName: "MINeD 2023",
        }}
      />
      <NextNProgress />
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
