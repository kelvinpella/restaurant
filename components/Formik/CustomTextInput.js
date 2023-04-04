import { pizzaData } from "@/common/exportedData";
import { useField, useFormikContext } from "formik";
import React, { useEffect } from "react";

const CustomTextInput = (props) => {
  const [field, meta] = useField(props);
  // get context and update price when there's quantity and no quantity error
  const { values, setValues } = useFormikContext();

  // common pizza values for any selected pizzaId
  const { availableSizes } = pizzaData;
  const updateTotalPrice = () => {
    if (values.quantity && !meta.error) {
      setValues({
        ...values,
        totalPrice: +(
          values.quantity * availableSizes[values.size].price
        ).toFixed(2),
      });
    }
  };
  useEffect(() => updateTotalPrice(), [values.quantity, meta.error]);

  return (
    <div>
      <input
        className="w-full outline-none py-1.5 px-2.5 rounded-md border capitalize"
        {...field}
        {...props}
      />
      {meta.touched && meta.error && (
        <p className="text-red-500 text-sm text-center my-1.5">{meta.error}</p>
      )}
    </div>
  );
};

export default CustomTextInput;
