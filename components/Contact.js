// import {
//   Box,
//   Button,
//   Container,
//   Flex,
//   Heading,
//   Input,
//   Textarea,
// } from "@chakra-ui/react";

// export default function Contact() {
//   return (
//     <Box
//       bgColor={"gray.50"}
//       paddingInline={[4, 32]}
//       paddingBlock={[8, 16]}
//       borderRadius={5}
//       marginInline={"auto"}
//       marginBlock={16}
//       id="contact"
//     >
//       <Heading marginInline={"auto"} marginBlock={4}>
//         Contact Us
//       </Heading>
//       <Box gap={[16, 4]} display={{ md: "flex" }}>
//         <Input
//           variant="outline"
//           placeholder="Your Name"
//           marginBottom={[4, 0]}
//         />
//         <Input variant="outline" placeholder="Your Email" />
//       </Box>
//       <Box marginBlock={4}>
//         <Input variant="outline" placeholder="Subject" />
//       </Box>
//       <Box marginBlock={4}>
//         <Textarea placeholder="Enter Your Query" />
//       </Box>
//       <Button
//         color={"white"}
//         fontWeight={"bold"}
//         bgColor={"blue.400"}
//         _hover={{ bgColor: "blue.600" }}
//       >
//         Submit
//       </Button>
//     </Box>
//   );
// }

import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Center,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

export default function contact() {
  return (
    <Center>
      <Flex>
        <Box bg={["#02054B"]} color="white" borderRadius="lg" p={[0, 5, 16]}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 5, md: 5, lg: 20 }}>
              <WrapItem>
                <Box paddingInline={[2, 0]}>
                  <Heading paddingBlock={[2, 0]}>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        justifyContent={"start"}
                        size="md"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{}}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}
                      >
                        Mobile No.
                      </Button>
                      <Button
                        justifyContent={"start"}
                        size="md"
                        variant="ghost"
                        color="#DCE2FF"
                        as={"a"}
                        href={"mailto:sapanmankad@nirmauni.ac.in"}
                        _hover={{}}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}
                      >
                        sapanmankad@nirmauni.ac.in
                      </Button>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          _hover={{}}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Center>
  );
}
