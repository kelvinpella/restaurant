import Head from "next/head";
import Featured from "@/components/Featured";
import PizzaList from "@/components/PizzaList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pizza Restaurant in Dar</title>
        <meta name="description" content="Best Pizza shop in town" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList />
    </>
  );
}
