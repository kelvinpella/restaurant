import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between overflow-y-auto">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
