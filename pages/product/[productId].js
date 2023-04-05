import React from "react";
import Image from "next/image";
import { pizzaData } from "@/common/exportedData";
import PizzaSelectionForm from "@/components/Formik/PizzaSelectionForm";
import Table from "@/components/Tables/Table";

const Product = () => {
  // common pizza values for any selected pizzaId
  const { img, name, availableSizes, description } = pizzaData;
  const getTableData = () => {
    // convert to array of array values for value and price keys [['small',19.9]]
    const dataArr = Object.keys(availableSizes).map((key) => {
      //get values of size and price
      const { value, price } = availableSizes[key];
      return [value, price];
    });
    return dataArr;
  };

  // Table props of  available pizza sizes
  const availablePizzaSizeProps = {
    tableCaption: "Available Pizza Sizes",
    tableHead: ["size", "price ($)"],
    tableBody: getTableData(),
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
