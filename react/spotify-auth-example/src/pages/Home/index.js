import { Container, Link } from "@chakra-ui/react";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

const query = new URLSearchParams({
  client_id: CLIENT_ID,
  response_type: "code",
  redirect_uri: REDIRECT_URI,
});

export default () => {
  return (
    <Container>
      <Link
        href={`https://accounts.spotify.com/authorize?${query.toString()}`}
        isExternal
      >
        Login with Spotify
      </Link>
    </Container>
  );
};
