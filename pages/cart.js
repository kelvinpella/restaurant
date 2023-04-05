import Table from "@/components/Tables/Table";
import Image from "next/image";
import React from "react";
import pizzaImage from "../public/images/pizza.png";
import CheckoutSummary from "@/components/CheckoutSummary";
const Cart = () => {
  // table data
  const tableData = [
    [
      //fragment as hacky way to prevent error by es-lint 'Missing "key" prop for element in array' when using html element
      <>
        <Image src={pizzaImage} alt="Selected pizza" className="w-40" />
      </>,
      "campagnola",
      "Spicy sauce",
      19.9,
      2,
      39.8,
    ],
  ];
  // selected products will be shown in a table
  const selectedProducts = {
    tableCaption: "selected products",
    tableHead: ["product", "name", "extras", "price ($)", "quantity", "total"],
    tableBody: tableData,
  };
  const checkoutSummary = {
    title: "your order",
    buttonText: "checkout",
  };
  return (
    <div className="w-full grid grid-cols-2 grid-rows-1 grid-flow-col gap-x-6 bg-white p-6 ">
      <div className=" justify-self-end">
        <Table {...selectedProducts} />
      </div>
      <CheckoutSummary {...checkoutSummary} />
    </div>
  );
};

export default Cart;
