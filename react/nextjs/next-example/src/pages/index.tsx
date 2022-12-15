import Link from "next/link";
import { useEffect, useState } from "react";
import {  Box, List, ListItem, ListItemIcon,  Typography } from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { ListItemText } from "@mui/material";
import NavBar from '../components/NavBar'

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

