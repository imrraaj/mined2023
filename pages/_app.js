import "../styles/globals.css";
import { ChakraProvider, Text } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Fonts from "../components/Fonts";
import NextNProgress from "nextjs-progressbar";
import { DefaultSeo } from "next-seo";
import CountDownTimer from "../components/Timer";
import NoSSR from "../components/NoSSR";
const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});

export default function App({ Component, pageProps }) {
  const dateTimeForHackathon = new Date("03/03/2023 09:00:00").getTime();
  // const dateTimeForHackathon = new Date("24 Feb 2023 00:12:00").getTime();

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
      <Text align="center" py="4" bgColor="blue.200">
        Registration closes on <b>February 28, midnight.</b> Get yourself
        registered as soon as possible.
      </Text>
      <Component {...pageProps} />
      <CountDownTimer targetDate={dateTimeForHackathon} />
    </ChakraProvider>
  );
}
