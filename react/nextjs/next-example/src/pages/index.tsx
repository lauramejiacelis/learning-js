import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then(({ results }) => setPokemons(results));
  }, []);

  return (
    <div>
      <h1>Pokemons</h1>
      <ul>
        {pokemons.map(({ name }) => (
          <Link key={name} href={`/pokemons/${name}`}>
            <li>{name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
