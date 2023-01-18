import Image from "next/image";
import Head from "next/head";
import Card from '../../components/Card'

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
    <>
      <Head>
          <title>{character.name}</title>
          <meta name="keywords" content="characters" />
          <link rel="icon" href="/logo.png" />
        </Head>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Card url={character.image} title={character.name} status={character.status} species={character.species} location={character.location.name} origin={character.origin.name} />
        </div>
    </>
    
  );
};

export default Details;
