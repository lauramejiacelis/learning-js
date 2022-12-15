import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function PokemonDetail() {
  const {
    query: { id },
  } = useRouter();

  const [pokemon, setPokemon] = useState<any>();

  useEffect(() => {
    if (id) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => res.json())
        .then((pokemon) => setPokemon(pokemon));
    }
  }, [id]);

  if (!pokemon) return "Loading...";

  console.log(pokemon);

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <Image
        src={pokemon?.sprites?.front_default}
        alt="pokemon"
        width="1000"
        height="1000"
        layout="responsive"
      />
    </div>
  );
}
