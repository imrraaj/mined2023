import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import TeamCard from "./TeamCard";

export default function Mentors() {
  const mentors = [
    {
      name: "Parth A.",
      image: "/parthA.jpeg",
      linkedIn: "https://www.linkedin.com/in/htrap94/",
    },
    {
      name: "Dvijesh Bhatt",
      image: "/dvijesh_bhatt.jpeg",
      linkedIn: "https://www.linkedin.com/in/dvijesh-bhatt-76283920/",
    },
  ];
  return (
    <Box marginBlock={16} id="mentors">
      <Heading marginBlock={"8"}>Mentors</Heading>
      <Grid
        h="auto"
        templateRows={{ sm: "repeat(8, 1fr)", md: "repeat(1, 1fr)" }}
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
        gap={4}
        marginBottom={8}
      >
        {mentors.map((dev) => (
          <GridItem>
            <TeamCard
              url={dev.image}
              name={dev.name}
              description={""}
              link={dev.linkedIn}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
