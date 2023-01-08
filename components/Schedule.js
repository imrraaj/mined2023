import {
  Box,
  Card,
  CardBody,
  CardHeader,
  CheckboxIcon,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Schedule() {
  return (
    <Box>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab
            fontSize={"lg"}
            color={"blue.400"}
            fontWeight={"bold"}
            border={"2px"}
          >
            Day 1
          </Tab>
          <Tab
            fontSize={"lg"}
            color={"blue.400"}
            fontWeight={"bold"}
            border={"2px"}
          >
            Day 2
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text fontWeight={"semibold"}>To be annouced!!</Text>
          </TabPanel>
          <TabPanel>
            <Text fontWeight={"semibold"}>To be annouced!!</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
