import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RemoveScroll } from "react-remove-scroll";
import NavItems from "./NavItems";
const Menu = ({ toggleMenu }) => {
  return (
    <RemoveScroll>
      <div className="h-screen fixed inset-0">
        <div onClick={toggleMenu} className="h-full w-full bg-black/50" />
        <div className="absolute top-0 right-0 w-10/12 h-full z-10 p-2 bg-gradient-to-r from-transparent to-red-900">
          <button
            onClick={toggleMenu}
            className="w-full flex items-center justify-end p-2 mb-2"
          >
            <AiOutlineClose className="text-3xl" />
          </button>
          <NavItems />
        </div>
      </div>
    </RemoveScroll>
  );
};

export default Menu;
