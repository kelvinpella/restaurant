import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between overflow-y-auto bg-gradient-to-b from-red-800 via-red-800 to-white ">
      <Navbar />
      <div className="pt-28 px-2">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
