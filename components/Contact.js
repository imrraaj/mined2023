import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";

export default function Contact() {
  return (
    <Box
      bgColor={"gray.50"}
      paddingInline={[4, 32]}
      paddingBlock={[8, 16]}
      borderRadius={5}
      marginInline={"auto"}
      marginBlock={16}
    >
      <Heading marginInline={"auto"} marginBlock={4}>
        Contact Us
      </Heading>
      <Box gap={[16, 4]} display={{ md: "flex" }}>
        <Input
          variant="outline"
          placeholder="Your Name"
          marginBottom={[4, 0]}
        />
        <Input variant="outline" placeholder="Your Email" />
      </Box>
      <Box marginBlock={4}>
        <Input variant="outline" placeholder="Subject" />
      </Box>
      <Box marginBlock={4}>
        <Textarea placeholder="Enter Your Query" />
      </Box>
      <Button
        color={"white"}
        fontWeight={"bold"}
        bgColor={"red.400"}
        _hover={{ bgColor: "red.600" }}
      >
        Submit
      </Button>
    </Box>
  );
}
