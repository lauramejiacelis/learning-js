import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Rick and Morty | Home</title>
        <meta name="keywords" content="characters" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad neque
          voluptate beatae ducimus fugiat iste repellendus illum maiores aperiam
          molestiae distinctio similique, eum, culpa dolores explicabo suscipit
          obcaecati nisi consequuntur.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad neque
          voluptate beatae ducimus fugiat iste repellendus illum maiores aperiam
          molestiae distinctio similique, eum, culpa dolores explicabo suscipit
          obcaecati nisi consequuntur.
        </p>

        <Link href="/characters" className={styles.btn}>
          See Rick and Morty Characters
        </Link>
      </main>
    </>
  );
}
