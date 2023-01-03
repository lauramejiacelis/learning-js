import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Characters.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();

  return {
    props: { characters: data.results },
  };
};

const Characters = ({ characters }) => {
  console.log(characters);
  return (
    <>
      <Head>
        <title>Rick and Morty | Characters</title>
        <meta name="keywords" content="characters" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div>
        <h1>All Characters</h1>
        {characters.map((character) => (
          <Link href={`/characters/${character.id}`} key={character.id}>
            <div className={styles.single}>
              <h3>{character.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Characters;
