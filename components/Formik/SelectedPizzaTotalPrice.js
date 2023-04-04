import { useFormikContext } from "formik";
import React from "react";

// create separate component so as to use useFormikcontext
const SelectedPizzaTotalPrice = () => {
  // get total price
  const { values: {totalPrice} } = useFormikContext();
  return (
    <p className="font-bold my-4 text-lg">
      Total Price:
      <span className="text-green-500 mx-2">${totalPrice}</span>
    </p>
  );
};

export default SelectedPizzaTotalPrice;
