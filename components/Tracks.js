import {
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Image,
} from "@chakra-ui/react";

export default function Tracks() {
  return (
    <Box marginBlock={16} id="tracks">
      <Heading marginBlock={"8"}>Tracks</Heading>
      <Grid
        gridAutoRows="1fr"
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={4}
        boxShadow="2xl"
      >
        <GridItem p="4">
          <TrackCard
            imageUrl="https://lexica-serve-encoded-images2.sharif.workers.dev/full_jpg/fd25dfdc-c699-4e4b-946c-459405520d52"
            trackName="Paperpal - Future of Academic Writing"
          />
        </GridItem>
        <GridItem p="4">
          <TrackCard
            imageUrl="https://lexica-serve-encoded-images2.sharif.workers.dev/full_jpg/a2c3ab34-800c-492b-aee7-836992478ec8"
            trackName="Manufacturing"
          />
        </GridItem>
        <GridItem p="4">
          <TrackCard
            imageUrl="https://images.unsplash.com/photo-1676676701269-65de47175adf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            trackName="To Be annouced..."
          />
        </GridItem>
      </Grid>
    </Box>
  );
}

function TrackCard({ imageUrl, trackName }) {
  return (
    <Card
      boxShadow="base"
      position="relative"
      borderRadius="md"
      overflow="hidden"
    >
      <Image src={imageUrl}></Image>
      <CardBody
        width="full"
        position="absolute"
        bottom="0"
        py="2.5"
        color="white"
        boxShadow="inset 0 0 1000px black"
      >
        {trackName}
      </CardBody>
    </Card>
  );
}
