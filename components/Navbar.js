import Link from "next/link";
import React from "react";
import { AiOutlinePhone, AiOutlineShoppingCart } from "react-icons/ai";
import pizzaLogo from "../public/images/pizzalogo.png";
import Image from "next/image";
const Navbar = () => {
  const navLinks = [
    "homepage",
    "products",
    "menu",
    "logo",
    "events",
    "blog",
    "contact",
  ];
  return (
    <div className="w-full fixed top-0 z-50 bg-red-800 py-2 px-8 grid grid-cols-navbarCols grid-rows-1 grid-flow-col items-center gap-x-2 text-white">
      <div className="grid auto-cols-auto grid-rows-1 grid-flow-col items-center gap-x-2">
        <div className="bg-white flex items-center justify-center rounded-full p-2">
          <AiOutlinePhone className="text-4xl text-red-800" />
        </div>
        <div className="uppercase font-bold">
          <p className="text-sm">Order now!</p>
          <p className="text-lg">+255 786 567 876</p>
        </div>
      </div>
      <div className="w-9/12 mx-auto flex items-center justify-between capitalize font-bold">
        {navLinks.map((link) =>
          link === "logo" ? (
            <div key={link} className=" flex h-20 w-20 items-center justify-center">
              <Image src={pizzaLogo}  alt="Pizza logo" />
            </div>
          ) : (
            <Link key={link} href={`/${link}`}>
              {link}
            </Link>
          )
        )}
      </div>
      <div className="relative p-1">
        <AiOutlineShoppingCart className="text-3xl" />
        <div className="absolute w-5 h-5 -top-2.5 -right-2.5 flex items-center justify-center bg-white p-1 rounded-full text-red-800 font-bold">
          2
        </div>
      </div>
    </div>
  );
};

export default Navbar;
