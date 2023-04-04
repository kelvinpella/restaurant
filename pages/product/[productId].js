import React from "react";
import Image from "next/image";
import Table from "@/components/Table";
import { pizzaData } from "@/common/exportedData";
import PizzaSelectionForm from "@/components/PizzaSelectionForm";

const Product = () => {
  // common pizza values for any selected pizzaId
  const { img, name, availableSizes, description } = pizzaData;
  // Table props of  available pizza sizes
  const availablePizzaSizeProps = {
    tableCaption: "Available Pizza Sizes",
    tableHead: ["size", "price ($)"],
    tableBody: Object.keys(availableSizes).map((key) => availableSizes[key]),
  };
  return (
    <div className="w-full grid grid-cols-2 gap-x-6 py-6 bg-white ">
      <div className="w-full flex items-center justify-center">
        <Image src={img} alt="Pizza Image" className="w-10/12 mx-auto" />
      </div>
      <div className="w-full">
        <h1 className="uppercase text-2xl font-bold my-4">{name}</h1>
        <p className="my-4 w-10/12">{description}</p>
        <Table {...availablePizzaSizeProps} />
        <PizzaSelectionForm />
      </div>
    </div>
  );
};

export default Product;
