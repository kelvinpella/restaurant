import React, { useCallback, useState } from "react";
import {
  AiOutlinePhone,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import NavItems from "./NavItems";
import Image from "next/image";
import pizzaLogo from "../../public/images/pizzalogo.png";
import Menu from "./Menu";
import Link from "next/link";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // putting in callback because we pass it as props to Menu
  const toggleMenu = useCallback(
    () => setIsMenuOpen(!isMenuOpen),
    [isMenuOpen]
  );
  const menuProps = {
    toggleMenu,
  };
  return (
    <div className="w-full fixed top-0 z-50 bg-red-800 ">
      <div className="w-full lg:w-10/12 lg:mx-auto p-2 grid grid-cols-navbarCols grid-rows-1 grid-flow-col items-center gap-x-2 text-white">
        {" "}
        <div className="flex items-center md:pl-6">
          <Link href="/">
            <Image
              src={pizzaLogo}
              alt="pizza logo"
              className="w-12 md:w-20  "
            />
          </Link>
          <div className="grid auto-cols-auto grid-rows-1 grid-flow-col items-center gap-x-2 mx-4">
            <div className="bg-white flex items-center justify-center rounded-full p-2">
              <AiOutlinePhone className="text-xl md:text-4xl text-red-800" />
            </div>
            <div className="uppercase font-bold">
              <p className="text-xs md:text-sm">Order now!</p>
              <p className="text-sm md:text-lg">+255 786 567 876</p>
            </div>
          </div>
        </div>
        {/** hidding because I got no reasonable navItems to show*/}
        <div className="hidden">
          <NavItems />
        </div>
        <div className="flex  justify-between md:justify-self-end text-3xl md:text-4xl md:pr-6 ">
          <div className="relative">
            <AiOutlineShoppingCart />
            <div className="absolute w-4 h-4 md:w-5 md:h-5 -top-2.5 left-6  md:-right-2.5 text-sm md:text-base flex items-center justify-center bg-white p-1 rounded-full text-red-800 font-bold">
              2
            </div>
          </div>
          <div className="md:hidden">
            {!isMenuOpen ? (
              <button onClick={toggleMenu}>
                <AiOutlineMenu />
              </button>
            ) : null}
            {isMenuOpen && <Menu {...menuProps} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
