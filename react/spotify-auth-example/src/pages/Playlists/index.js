import { useState, useEffect } from "react";
import { Box, Container, Heading } from "@chakra-ui/react";
import { getPlaylists } from "services/spotify";
import { NavBar } from "components/NavBar";
import { Card } from "components/Card"

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
      {playlists.map((info)=>(<Card link={`/tracks/${info.id}`} tittle={info.name} src={info.images[1].url}/>))}
    </Box>

  </Box>;
};

export default Playlists;
