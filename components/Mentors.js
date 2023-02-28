import { Grid, GridItem } from "@chakra-ui/react";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react";
import { FaLinkedinIn } from "react-icons/fa";

export default function Mentors() {
  const mentors = [
    {
      name: "Parth A.",
      image: "/parthA.jpeg",
      linkedIn: "https://www.linkedin.com/in/htrap94/",
      designation: "AI @ Cactus Labs",
      company: "",
    },
    {
      name: "Dvijesh Bhatt",
      image: "/dvijesh_bhatt.jpeg",
      linkedIn: "https://www.linkedin.com/in/dvijesh-bhatt-76283920/",
      designation: "Senior Product Engineer (AI/ML)",
      company: "Myelin Foundry",
    },
  ];
  return (
    <Box marginBlock={16} id="mentors">
      <Heading marginBlock={"8"}>Mentors</Heading>
      <Grid
        alignItems="center"
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
        gap={4}
        marginBottom={8}
      >
        {mentors.map((dev) => (
          <GridItem key={dev.name}>
            <MentorCard
              url={dev.image}
              name={dev.name}
              link={dev.linkedIn}
              designation={dev.designation}
              company={dev.company}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

function MentorCard(props) {
  return (
    <Center>
      <Box boxShadow="md" rounded="lg" p={6} textAlign={"center"} minW="xs">
        <Avatar size={"2xl"} src={props.url} alt={props.name} mb={4} />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {props.name}
        </Heading>
        <Text textAlign={"center"} px={3} mt={4}>
          {props.designation}
        </Text>

        <Text textAlign={"center"}>{props.company}</Text>

        <Stack mt={8} direction={"row"} spacing={4} justifyContent={"center"}>
          <Button
            fontSize={"md"}
            paddingInline={8}
            rounded={"full"}
            bg={"blue.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
            as={"a"}
            href={props.link}
            leftIcon={<FaLinkedinIn />}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            Connect
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
