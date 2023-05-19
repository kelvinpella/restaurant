import { pizzaData } from "@/common/exportedData";
import ReactSelect from "./ReactSelect";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import CustomTextInput from "./CustomTextInput";
import SelectedPizzaTotalPrice from "./SelectedPizzaTotalPrice";
import SubmitButton from "./SubmitButton";
import { useRouter } from "next/router";

const PizzaSelectionForm = ({pizzaSizes}) => {
  const router = useRouter();
  // common pizza values for any selected pizzaId

  // initial form values
  const initialValues = {
    size: 'small',
    quantity: 1,
    // additionalIngredients: "",
    totalPrice: pizzaSizes.small,
  };
  // validation schema
  const validationSchema = Yup.object({
    size: Yup.string()
      .oneOf(["small", "medium", "large"])
      .required("Size required"),
    quantity: Yup.number()
      .min(1, "Minimum order - 1 pizza")
      .required("quantity required"),
    // additionalIngredients: Yup.string().oneOf([
    //   "doubleingredients",
    //   "extracheese",
    //   "spicysauce",
    //   "garlicsauce",
    // ]),
  });

  //onSubmit i.e adding to cart
  const onSubmit = (values) => {
    console.log(values);
    router.push("/comingsoon");
  };
  // transform to react-select options array
  //  small: { category: "size", label: "small", value: "small", price: 19.9 },
  const getReactSelectOptions = (optionsObject) => {
    return Object.keys(optionsObject).map((key) => ({category:'size',label:key,value:key,price:+optionsObject[key]}) );
  };
  // props for pizza size  dropdown
  const pizzaSizeDropdown = {
    name: "size",
    selectOptions: getReactSelectOptions(pizzaSizes),
    component: ReactSelect,
    selectPlaceholder: "Select size",
    instanceId: "select size",
    defaultValue: getReactSelectOptions(pizzaSizes)[0],
  };
  // // props for additional ingredients dropdown
  // const additionalIngredientsDropdown = {
  //   name: "additionalIngredients",
  //   selectOptions: availableAdditionalIngredients,
  //   component: ReactSelect,
  //   selectPlaceholder: "Select additional ingredients",
  //   instanceId: "select ingredients",
  // };
  return (
    <div className="w-full">
      <h1 className="font-bold text-lg my-2 capitalize">Your selection:</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="w-full md:text-lg lg:pr-4 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-1  gap-3 lg:gap-2 capitalize">
            <Field {...pizzaSizeDropdown} />
            <CustomTextInput
              type="number"
              name="quantity"
              placeholder="add quantity"
            />
            {/* <Field {...additionalIngredientsDropdown} /> */}
          </div>
          {/* <SelectedPizzaTotalPrice /> */}
          <SubmitButton />
        </Form>
      </Formik>
    </div>
  );
};

export default PizzaSelectionForm;
