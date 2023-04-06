import React from "react";
import Link from "next/link";
const NavItems = () => {
  const navLinks = [
    "items to be added soon",
  ];
  return (
    <div className="w-full px-3 md:w-9/12 mx-auto flex flex-col md:flex-row items-end  md:items-center md:justify-center capitalize font-bold  ">
      {navLinks.map((link) => (
        <Link key={link} href='/comingsoon' className="text-lg my-2 md:my-0 hover:text-yellow-500">
          {link}
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
