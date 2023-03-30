import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Pizza Restaurant in New York</title>
        <meta name="description" content="Best Pizza shop in town" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline text-red-500">
          Hello world!
        </h1>
      </main>
    </>
  );
}
