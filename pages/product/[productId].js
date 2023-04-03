import React, { useCallback, useState } from "react";
import Image from "next/image";
import Table from "@/components/Table";
import ReactSelect from "@/components/ReactSelect";
import { pizzaData } from "@/common/exportedData";

const Product = () => {
  // common pizza values for any selected pizzaId
  const {
    img,
    name,
    availableSizes,
    description,
    availableAdditionalIngredients,
  } = pizzaData;
  const [selectedPizza, setSelectedPizza] = useState({
    size: "small",
    quantity: 1,
    additionalIngredients: "",
    totalPrice: 19.9,
  });

  const { quantity, size, totalPrice } = selectedPizza;
  // common function to handle selections
  const handleChange = useCallback(
    (e) => {
      // check if e is from input and update quantity
      if (e?.target) {
        const { name, value } = e.target;
        setSelectedPizza({
          ...selectedPizza,
          [name]: value,
          totalPrice: (value * availableSizes[size].price).toFixed(2),
        });
      } else {
        // destructure selected item
        const { category, value, price = null } = e; // price null because additionalIngredients category doesn't have this property
        // update state and only update price if category is size
        setSelectedPizza({
          ...selectedPizza,
          [category]: value,
          totalPrice:
            category === "size"
              ? (quantity * price).toFixed(2)
              : selectedPizza.totalPrice,
        });
      }
    },
    [selectedPizza]
  );

  // Table props of  available pizza sizes
  const availablePizzaSizeProps = {
    tableCaption: "Available Pizza Sizes",
    tableHead: ["size", "price ($)"],
    tableBody: Object.keys(availableSizes).map((key) => availableSizes[key]),
  };
  // props for pizza size  dropdown
  const pizzaSizeDropdown = {
    selectOptions: Object.keys(availableSizes).map(
      (key) => availableSizes[key]
    ),
    selectPlaceholder: "Select size",
    handleChange,
    instanceId: "select size",
    defaultValue: Object.keys(availableSizes).map(
      (key) => availableSizes[key]
    )[0],
  };
  // props for additional ingredients dropdown
  const additionalIngredientsDropdown = {
    selectOptions: availableAdditionalIngredients,
    selectPlaceholder: "Select additional ingredients",
    handleChange,
    instanceId: "select ingredients",
  };
  const isInvalidQuantity = () => !quantity || quantity < 1;
  return (
    <div className="w-full grid grid-cols-2 gap-x-6 py-6 bg-white">
      <div className="w-full flex items-center justify-center">
        <Image src={img} alt="Pizza Image" className="w-10/12 mx-auto" />
      </div>
      <div className="w-full">
        <h1 className="uppercase text-2xl font-bold my-4">{name}</h1>
        <p className="my-4 w-10/12">{description}</p>
        <Table {...availablePizzaSizeProps} />
        <div>
          <h1 className="font-bold text-lg my-2 capitalize">Your selection:</h1>
          <div className="w-full pr-4 grid grid-cols-3 grid-rows-1 items-center gap-x-2 capitalize ">
            <ReactSelect {...pizzaSizeDropdown} />
            <div>
              <input
                type="number"
                name="quantity"
                onChange={handleChange}
                min={1}
                value={quantity}
                placeholder="Add quantity"
                className={`w-full outline-none py-1.5 px-2.5 rounded-md  ${
                  isInvalidQuantity() ? "border-2 border-red-600" : "border"
                }`}
              ></input>
            </div>
            <ReactSelect {...additionalIngredientsDropdown} />
          </div>{" "}
          <p className="font-bold my-4 text-lg">
            Total Price:
            <span
              className={`text-green-500 mx-2 ${
                isInvalidQuantity() ? "hidden" : "w-full"
              }`}
            >
              ${totalPrice}
            </span>
          </p>
        </div>
        <button
          disabled={isInvalidQuantity()}
          className="py-2 px-3 bg-red-500 rounded-md text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
