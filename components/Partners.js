import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Partners() {
  return (
    <Box marginBlock={16} id="partners">
      <Heading marginBlock={"8"}>Partners</Heading>
      <Grid
        h="auto"
        templateRows={{ sm: "repeat(8, 1fr)", md: "repeat(1, 1fr)" }}
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
        gap={4}
      >
        <GridItem
          cursor={"pointer"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Link href={"https://givemycertificate.com/"} target="_blank">
            <Image src="/GMC_Logo.png" width={32} />
          </Link>
        </GridItem>
        <GridItem cursor={"pointer"}>
          <Image src="https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"></Image>
        </GridItem>
        <GridItem cursor={"pointer"}>
          <Image src="https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"></Image>
        </GridItem>
        <GridItem cursor={"pointer"}>
          <Image src="https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"></Image>
        </GridItem>
      </Grid>
      <Flex justifyContent={"center"} marginBlock={8}>
        <Button
          bgColor={"blue.400"}
          color={"white"}
          _hover={{ bgColor: "blue.600" }}
        >
          Be a Partner
        </Button>
      </Flex>
    </Box>
  );
}
