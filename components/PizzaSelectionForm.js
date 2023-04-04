import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import CustomTextInput from "./Formik/CustomTextInput";
import ReactSelect from "./ReactSelect";
import { pizzaData } from "@/common/exportedData";
import SelectedPizzaTotalPrice from "./SelectedPizzaTotalPrice";
import SubmitButton from "./Formik/SubmitButton";

const PizzaSelectionForm = () => {
  // common pizza values for any selected pizzaId
  const { availableSizes, availableAdditionalIngredients } = pizzaData;
  // initial form values
  const initialValues = {
    size: "small",
    quantity: 1,
    additionalIngredients: "",
    totalPrice: 19.9,
  };
  // validation schema
  const validationSchema = Yup.object({
    size: Yup.string()
      .oneOf(["small", "medium", "large"])
      .required("Size required"),
    quantity: Yup.number()
      .min(1, "Minimum order - 1 pizza")
      .required("quantity required"),
    additionalIngredients: Yup.string().oneOf([
      "doubleingredients",
      "extracheese",
      "spicysauce",
      "garlicsauce",
    ]),
  });

  //onSubmit i.e adding to cart
  const onSubmit = (values) => console.log(values);
  // transform to react-select options array
  const getReactSelectOptions = (optionsObject) => {
    return Object.keys(optionsObject).map((key) => optionsObject[key]);
  };
  // props for pizza size  dropdown
  const pizzaSizeDropdown = {
    name: "size",
    selectOptions: getReactSelectOptions(availableSizes),
    component: ReactSelect,
    selectPlaceholder: "Select size",
    instanceId: "select size",
    defaultValue: getReactSelectOptions(availableSizes)[0],
  };
  // props for additional ingredients dropdown
  const additionalIngredientsDropdown = {
    name: "additionalIngredients",
    selectOptions: availableAdditionalIngredients,
    component: ReactSelect,
    selectPlaceholder: "Select additional ingredients",
    instanceId: "select ingredients",
  };
  return (
    <div className="w-full">
      <h1 className="font-bold text-lg my-2 capitalize">Your selection:</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="w-full pr-4 grid grid-cols-3 grid-rows-1  gap-x-2 capitalize">
            <Field {...pizzaSizeDropdown} />
            <CustomTextInput
              type="number"
              name="quantity"
              placeholder="add quantity"
            />
            <Field {...additionalIngredientsDropdown} />
          </div>
          <SelectedPizzaTotalPrice />
          <SubmitButton/>
        </Form>
      </Formik>
    </div>
  );
};

export default PizzaSelectionForm;
