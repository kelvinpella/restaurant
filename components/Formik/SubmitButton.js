import { useFormikContext } from "formik";
import React from "react";

const SubmitButton = () => {
  // get total price
  const { errors } = useFormikContext();
  const formHasErrors = () => Object.keys(errors).length > 0;
  return (
    <button
      type="submit"
      className="py-2 px-3 bg-red-500 rounded-md text-white disabled:cursor-not-allowed disabled:opacity-50"
      disabled={formHasErrors()}
    >
      Add to Cart
    </button>
  );
};

export default SubmitButton;
