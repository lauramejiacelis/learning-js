import { GetServerSideProps } from "next";
import Link from "next/link";
import { Box, List, ListItem, ListItemIcon, Typography } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { ListItemText } from "@mui/material";
import NavBar from "../../components/NavBar";

type HomeProps = {
  pokemons: any[];
};

// Client
export default function Home({ pokemons }: HomeProps) {
  return (
    <Box>
      <NavBar />
      <Typography variant="h5" gutterBottom>
        Pokemons
      </Typography>
      <List>
        {pokemons.map(({ name }) => (
          <Link key={name} href={`/pokemons/${name}`}>
            <ListItem>
              <ListItemIcon sx={{ color: "#FFB461" }}>
                <CatchingPokemonIcon />
              </ListItemIcon>
              <ListItemText>{name} </ListItemText>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
}

// Server
export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const { results } = await res.json();

  return {
    props: {
      pokemons: results,
    },
  };
};
