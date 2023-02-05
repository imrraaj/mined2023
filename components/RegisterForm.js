import {
  Box,
  Heading,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { MdPhone, MdEmail } from "react-icons/md";
import { BiBuildings } from "react-icons/bi";
import { BsGithub, BsDiscord, BsPerson, BsLinkedin } from "react-icons/bs";
import { useState } from "react";

export default function contact() {
  const [contactDetails, setContactDetails] = useState({});

  const onChange = (e) => {
    setContactDetails({
      ...contactDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactDetails);
    alert("sucess");
  };
  return (
    <Box bg="blue.700" borderRadius="lg" py="16" px="5" maxW="5xl" mx="auto">
      <Heading textAlign="center" mb="8" color="white">
        Registration Form
      </Heading>
      <Box bg="white" color="blue.700" borderRadius="lg" p={8} m={[0, 8]}>
        <form onSubmit={handleSubmit}>
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
              type="tel"
              maxlength={10}
              minlength={10}
              isRequired={true}
              Icon={MdPhone}
              onChange={onChange}
            />
            <CustomInput
              label="College City"
              name="collageCity"
              type="text"
              isRequired={true}
              Icon={BiBuildings}
              onChange={onChange}
            />
            <CustomInput
              label="Degree"
              name="degree"
              type="text"
              isRequired={true}
              onChange={onChange}
            />
            <CustomInput
              label="Branch"
              name="branch"
              type="text"
              isRequired={true}
              onChange={onChange}
            />
            <CustomInput
              label="Semester"
              name="semester"
              type="number"
              maxlength={1}
              minlength={1}
              max={8}
              min={1}
              isRequired={true}
              onChange={onChange}
            />
            <CustomInput
              label="Name on certificate"
              name="nameOnCertificate"
              type="text"
              isRequired={true}
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
          <Button
            type="submit"
            my={8}
            variant="solid"
            bg="blue.700"
            color="white"
            _focus={{}}
            _hover={{}}
          >
            Send Message
          </Button>
        </form>
      </Box>
    </Box>
  );
}

function CustomInput({
  label,
  Icon,
  type,
  name,
  onChange,
  isRequired,
  ...props
}) {
  return (
    <FormControl isRequired={isRequired} id={name}>
      <FormLabel>{label}</FormLabel>
      <InputGroup borderColor="#E0E1E7">
        {Icon && (
          <InputLeftElement
            pointerEvents="none"
            children={<Icon color="gray.800" />}
          />
        )}
        <Input
          type={type}
          name={name}
          size="md"
          onChange={onChange}
          {...props}
        />
      </InputGroup>
    </FormControl>
  );
}
