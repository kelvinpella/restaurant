import Image from "next/image";
import React from "react";
import pizzaImage from "../public/images/pizza.png";
const Pizza = () => {
  return (
    <div className="rounded-md p-2 text-center bg-slate-200 hover:bg-slate-300 cursor-pointer">
      <div className="flex items-center justify-center p-2 md:p-4">
        <Image src={pizzaImage} alt="pizza image" className="w-30" />
      </div>
      <h2 className="my-2 w-full text-red-800 font-bold md:text-lg">
        Fiori Di Zucca
      </h2>
      <p className="my-2 md:my-4 font-bold">$19.99</p>
      <p className="w-full  lg:w-10/12 text-sm md:text-base mx-auto my-2 md:my-4">
        Cillum veniam ullamco elit sit ipsum. Qui culpa deserunt mollit mollit
        voluptate et ut. Exercitation voluptate quis aliquip Lorem amet
        excepteur ea sint aliqua exercitation.
      </p>
    </div>
  );
};

export default Pizza;
