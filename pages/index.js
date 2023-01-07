import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Organizers from "../components/Organizers";
import { Container } from "@chakra-ui/react";
import Tracks from "../components/Tracks";
import Sponsors from "../components/Sponsors";
import Faqs from "../components/Faqs";
import Contact from "../components/Contact";
// import VideoCarousel from "../components/Videos";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>MINeD 2023 Hackathon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW={"container.xl"} marginInline="auto">
        <Navbar />
        <Banner />
        <Organizers />
        <Tracks />
        <Sponsors />
        <Faqs />
        <Contact />
        <Footer />
      </Container>
    </>
  );
}

// Videos on home page
