import { useState, useEffect } from "react";
import { Box, Container, Heading } from "@chakra-ui/react";
import { getPlaylists } from "services/spotify";
import { NavBar } from "components/NavBar";

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    getPlaylists().then(console.log);
    getPlaylists().then(({items})=> setPlaylists(items));
  }, []);
  console.log(playlists)

  return <Box>
    <NavBar/>
    <Heading>Playlists</Heading>
    <Box>
      {playlists.map((info)=><Box>{info.name}</Box>)}
    </Box>

  </Box>;
};

export default Playlists;
