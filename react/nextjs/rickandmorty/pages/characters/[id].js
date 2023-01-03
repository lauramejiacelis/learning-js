import Image from "next/image";

export const getStaticPaths = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();

  const paths = data.results.map((character)=> {
    return {
      params: { id: character.id.toString() }
    }
  })

  return {
    paths,
    fallback: false,
  }
};

export const getStaticProps = async (context)=>{
  console.log(context)
  const id = context.params.id;
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  const data = await res.json()

  return {
    props: {character: data}
  }
}

const Details = ({character}) => {
  console.log(character)
  return (
    <div>
      <Image src={character.image} width={200} height={200} alt={`${character.name}`}/>
      <h1>{character.name}</h1>
      <p>{character.status} - {character.species}</p>
      <p>Last known location: </p>
      <p>{character.location.name}</p>
      <p>First seen in: </p>
      <p>{character.origin.name}</p>

    </div>
  );
};

export default Details;
