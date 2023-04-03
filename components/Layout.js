import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between overflow-y-auto bg-red-800">
      <Navbar />
      <div className="pt-28 px-2">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
