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
import { BsGithub, BsDiscord, BsPerson, BsLinkedin } from "react-icons/bs";
import { useState } from "react";

export default function contact() {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    mail: "",
    desc: "",
  });

  const onChange = (e) => {
    setContactDetails({
      ...contactDetails,
      [e.target.name]: e.target.value,
    });
    console.log(contactDetails);
  };

  return (
    <Box
      bg="#02054B"
      color="white"
      borderRadius="lg"
      p={[0, 5, 16]}
      maxW="4xl"
      mx={"auto"}
    >
      <Heading>Registration Form</Heading>
      <Box bg="white" color="#0B0E3F" borderRadius="lg" p={8} m={8}>
        <form>
          <VStack spacing={5}>
            <CustomInput
              label="First Name"
              name="firstName"
              type="text"
              isRequired={true}
              Icon={BsPerson}
              onChange={onChange}
            />
            <CustomInput
              label="Last Name"
              name="lastName"
              type="text"
              isRequired={true}
              Icon={BsPerson}
              onChange={onChange}
            />
            <CustomInput
              label="Email"
              name="email"
              type="email"
              isRequired={true}
              Icon={MdEmail}
              onChange={onChange}
            />
            <CustomInput
              label="Mobile No"
              name="mobile"
              type="text"
              isRequired={true}
              Icon={MdPhone}
              onChange={onChange}
            />
            <CustomInput
              label="College City"
              name="collageCity"
              type="text"
              isRequired={true}
              Icon={MdPhone}
              onChange={onChange}
            />
            <CustomInput
              label="Degree"
              name="degree"
              type="text"
              isRequired={true}
              Icon={MdPhone}
              onChange={onChange}
            />
            <CustomInput
              label="Branch"
              name="branch"
              type="text"
              isRequired={true}
              Icon={MdPhone}
              onChange={onChange}
            />
            <CustomInput
              label="Semester"
              name="semester"
              type="text"
              isRequired={true}
              Icon={MdPhone}
              onChange={onChange}
            />
            <CustomInput
              label="Name on certificate"
              name="nameOnCertificate"
              type="text"
              isRequired={true}
              Icon={MdPhone}
              onChange={onChange}
            />
            <CustomInput
              label="discord Id"
              name="discordId"
              type="text"
              Icon={BsDiscord}
              onChange={onChange}
            />
            <CustomInput
              label="Linked In"
              name="linkedin"
              type="text"
              Icon={BsLinkedin}
              onChange={onChange}
            />
            <CustomInput
              label="Github"
              name="githubLink"
              type="text"
              Icon={BsGithub}
              onChange={onChange}
            />
          </VStack>
          <Button my={8} variant="solid" bg="#02054B" color="white" _hover={{}}>
            Send Message
          </Button>
        </form>
      </Box>
    </Box>
  );
}

function CustomInput({ label, Icon, type, name, onChange, isRequired }) {
  return (
    <FormControl isRequired={isRequired} id={name}>
      <FormLabel>{label}</FormLabel>
      <InputGroup borderColor="#E0E1E7">
        <InputLeftElement
          pointerEvents="none"
          children={<Icon color="gray.800" />}
        />
        <Input type={type} name={name} size="md" onChange={onChange} />
      </InputGroup>
    </FormControl>
  );
}
