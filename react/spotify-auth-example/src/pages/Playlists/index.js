import { useState, useEffect } from "react";
import { Container } from "@chakra-ui/react";
import { getPlaylists } from "services/spotify";

const Playlists = () => {
  const [playlists, setPlaylists] = useState();

  useEffect(() => {
    getPlaylists().then(console.log);
  }, []);

  return <Container>Playlists</Container>;
};

export default Playlists;
