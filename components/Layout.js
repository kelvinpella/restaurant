import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between overflow-y-auto bg-gradient-to-b from-red-800 via-red-800 to-white ">
      <Head>
        <title>Pizza Restaurant in Dar</title>
        <meta name="description" content="Best Pizza shop in town" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="pt-16 md:pt-24 lg:pt-28 px-2">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
