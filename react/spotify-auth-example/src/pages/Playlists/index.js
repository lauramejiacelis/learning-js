import { useState, useEffect } from "react";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import { getPlaylists } from "services/spotify";
import { NavBar } from "components/NavBar";
import { Card } from "components/Card"
import { FlexView } from "components/FlexView"

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    getPlaylists().then(console.log);
    getPlaylists().then(({items})=> setPlaylists(items));
  }, []);
  console.log(playlists)

  return <Box>
    <NavBar/>
    <Heading textAlign={'center'} pt={10}>Playlists</Heading>
    <FlexView data={playlists.map((info)=>(<Card borderRadius={'10%'} link={`/tracks/${info.id}`} tittle={info.name} src={info.images[1].url}/>))} />
  </Box>;
};

export default Playlists;
