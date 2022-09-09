import { Container, Link, Heading, Button } from "@chakra-ui/react";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

const query = new URLSearchParams({
  client_id: CLIENT_ID,
  response_type: "code",
  redirect_uri: REDIRECT_URI,
});

const Home = () => {
  return (
    <Container
      maxW="md"
      height="100vh"
      p={10}
      centerContent={true}
      justifyContent="center"
      gap={5}
    >
      <Heading>Welcome to my App</Heading>
      <Button
        as={Link}
        bgColor="green.400"
        color="white"
        _hover={{ bgColor: "green.600", color: "white" }}
        href={`https://accounts.spotify.com/authorize?${query.toString()}`}
      >
        Login with Spotify
      </Button>
    </Container>
  );
};

export default Home;
