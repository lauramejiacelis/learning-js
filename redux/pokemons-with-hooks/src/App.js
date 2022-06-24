import { useState, useEffect } from 'react';
import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import { getPokemonsApi } from './services';
import { connect } from 'react-redux';
import { getPokemons } from './redux/pokemons';
import { getPokemonsSelector } from './redux/selectors';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemonsApi().then((pokemons) => setPokemons(pokemons));
  }, []);
  console.log(pokemons);

  return (
    <Box m={10}>
      <Heading> My Pokemon App</Heading>
      <UnorderedList>
        {pokemons.map((name) => (
          <ListItem>{name}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  pokemons: getPokemonsSelector(state),
});

const mapDispatchToProps = {
  getPokemons,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
