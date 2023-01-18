import Image from "next/image";

export default function PokemonDetail({ pokemon }: any) {
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

// specify the list of available pages urls
export const getStaticPaths = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const { results } = await res.json();

  const paths = results.map(({ url }: { url: string }) => {
    const parts = url.split("/");
    const id = parts[parts.length - 2];
    return "/static/" + id;
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { id } }: any) => {
  console.log(id);
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
  const pokemon = await res.json();
  return {
    props: {
      pokemon,
    },
  };
};
