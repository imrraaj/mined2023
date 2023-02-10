import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

export default function Tracks() {
  return (
    <Box marginBlock={16} id="tracks">
      <Heading marginBlock={"8"}>Tracks</Heading>
      <Grid
        gridAutoRows="1fr"
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={4}
      >
        <GridItem borderWidth={"2px"} borderColor={"blue.400"}>
          <Text padding="16" textAlign={"center"}>
            Paperpal - Future of Academic Writing
          </Text>
        </GridItem>
        <GridItem borderWidth={"2px"} borderColor={"blue.400"}>
          <Text padding="16" textAlign={"center"}>
            Manufacturing
          </Text>
        </GridItem>
        <GridItem borderWidth={"2px"} borderColor={"blue.400"}>
          <Text padding="16" textAlign={"center"}>
            To Be Annouced...
          </Text>
        </GridItem>
        <GridItem borderWidth={"2px"} borderColor={"blue.400"}>
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
    </Box>
  );
}
