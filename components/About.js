import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Image,
} from "@chakra-ui/react";

export default function About() {
  return (
    <Box>
      <Heading>About the Event</Heading>
      <Box display={["block", "flex"]} gap={4} paddingBlock={8}>
        <Image
          src="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          flex={1}
          borderRadius={"lg"}
          marginBottom={[8, 0]}
        />
        <Box flex={2} fontSize={"lg"}>
          <blockquote>
            <p>
              Our intelligence is what makes us human, and AI is an extension of
              that quality.
            </p>
            <span>Yann LeCun</span>
          </blockquote>
          <Text paddingBlock={4} textIndent={32} textAlign={"justify"}>
            The Center of Excellence in Data Science, CSE department, Institute
            of Technology, Nirma University presents 48 hours long hackathon
            from March 3 to March 5 2023. The hackathon will allow students to
            work on industry-level problems in the domains of Smart Healthcare,
            Applied Machine Learning for Manufacturing Industry, AI & Big Data,
            Computer Vision and Deep Learning, Internet Of Things, Natural
            Language Processing etc.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
