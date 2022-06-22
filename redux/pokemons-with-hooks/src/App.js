import { useState, useEffect } from 'react';
import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import { getPokemonsApi } from './services';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemonsApi().then((pokemons) => setPokemons(pokemons));
  }, []);
  console.log(pokemons);

  return (
    <Box>
      <Heading> My Pokemon App</Heading>
      <UnorderedList>
        {pokemons.map((name) => (
          <ListItem>{name}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
}

export default App;
