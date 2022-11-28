import Link from "next/link";
import { useEffect, useState } from "react";
import { AppBar, Box, List, ListItem, ListItemIcon, Toolbar, Typography } from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Image from "next/image";
import { ListItemText } from "@mui/material";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then(({ results }) => setPokemons(results));
  }, []);

  return (
    <Box>
      <NavBar/>
      <Typography variant="h5" gutterBottom>
        Pokemons
      </Typography>
      <List>
        {pokemons.map(({ name }) => (
          <Link key={name} href={`/pokemons/${name}`}>
            
            <ListItem>
              <ListItemIcon sx={{ color: '#FFB461' }}>
                <CatchingPokemonIcon/>
              </ListItemIcon>
              <ListItemText>{name} </ListItemText>
              
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
}

export const NavBar = () =>{
  return(
    <AppBar position="static" sx={{ bgcolor: '#FFB461' }} >
      <Toolbar>
        <Image
        src={'https://res.cloudinary.com/lauram2celis/image/upload/v1669671652/pokemon/PokemonsCharacters_pf0esj.png'}
        alt="pokemon"
        height="100"
        width='200'/>
        <Typography variant="h3" component='div'> POKEMON APP </Typography>
      </Toolbar>
    </AppBar>
  )
}
