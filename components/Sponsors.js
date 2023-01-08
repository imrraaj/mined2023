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

export default function Sponsors() {
  return (
    <Box marginBlock={16} id="sponsors">
      <Heading marginBlock={"8"}>Sponsors</Heading>
      <Grid
        h="auto"
        templateRows={{ sm: "repeat(8, 1fr)", md: "repeat(2, 1fr)" }}
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
        gap={4}
      >
        <GridItem
          borderWidth={"2px"}
          borderColor={"blue.400"}
          cursor={"pointer"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image src="/GMC_Logo.png" width={32} />
        </GridItem>
        <GridItem
          borderWidth={"2px"}
          borderColor={"blue.400"}
          cursor={"pointer"}
        >
          <Image src=""></Image>
        </GridItem>
        <GridItem
          borderWidth={"2px"}
          borderColor={"blue.400"}
          cursor={"pointer"}
        >
          <Image src="https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"></Image>
        </GridItem>
        <GridItem
          borderWidth={"2px"}
          borderColor={"blue.400"}
          cursor={"pointer"}
        >
          <Image src="https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"></Image>
        </GridItem>
        <GridItem borderWidth={"2px"} borderColor={"blue.400"}>
          <Text padding="16" textAlign={"center"}>
            To Be Annouced...
          </Text>
        </GridItem>
        <GridItem
          colSpan={{ md: 2 }}
          borderWidth={"2px"}
          borderColor={"blue.400"}
        >
          <Text padding="16" textAlign={"center"}>
            To Be Annouced...
          </Text>
        </GridItem>
        <GridItem borderWidth={"2px"} borderColor={"blue.400"}>
          <Text padding="16" textAlign={"center"}>
            To Be Annouced...
          </Text>
        </GridItem>
      </Grid>
      <Flex justifyContent={"center"} marginBlock={8}>
        <Button
          bgColor={"blue.400"}
          color={"white"}
          _hover={{ bgColor: "blue.600" }}
        >
          Sponsor Us
        </Button>
      </Flex>
    </Box>
  );
}
