import { useEffect, useState } from "react";
import Image from "next/image";
import { pizzaData } from "@/common/exportedData";
import PizzaSelectionForm from "@/components/Formik/PizzaSelectionForm";
import Table from "@/components/Tables/Table";
import { getPizza } from "@/sanity/sanity.utils";
import { useRouter } from "next/router";
import { isEmpty } from "lodash";

const Product = () => {
  const {
    query: { slug },
  } = useRouter();
  const [pizza, setPizza] = useState({});
  const getProduct = async () => {
    const pizza = await getPizza(slug);
    setPizza(pizza);
  };
  useEffect(() => {
    if (slug) getProduct();
  }, [slug]);

  // common pizza values for any selected pizzaId
  const {
    name = "",
    about = "",
    pizzaSizes = {},
    coverimage: { alt, imageUrl } = {},
  } = pizza;
  const getTableData = () => {
    // convert to array of array values for value and price keys [['small',19.9]]
    const dataArr = Object.keys(pizzaSizes).map((size) => {
      //get values of size and price
      return [size, pizzaSizes[size]];
    });
    return dataArr;
  };

  // Table props of  available pizza sizes
  const availablePizzaSizeProps = {
    tableCaption: "Available Pizza Sizes",
    tableHead: ["size", "price ($)"],
    tableBody: getTableData(),
  };
  return isEmpty(pizza) ? (
    <div className="bg-white w-full h-90vh flex flex-col items-center justify-center ">
      <p className="text-xl text-slate-400">Loading...</p>
    </div>
  ) : (
    <div className="w-full grid auto-cols-auto grid-flow-row lg:grid-cols-2 gap-x-6 py-6 bg-white ">
      <div className="w-10/12 h-56 md:h-96 mx-auto relative self-center">
        <Image src={imageUrl} alt={alt} className="object-contain" fill />
      </div>
      <div className="w-full px-2">
        <h1 className="uppercase text-2xl md:text-4xl font-bold my-4 text-center lg:text-start">
          {name}
        </h1>
        <p className="my-4 w-full md:w-10/12 mx-auto p-2 md:text-xl text-center">
          {about}
        </p>
        <Table {...availablePizzaSizeProps} />
        <PizzaSelectionForm
          pizzaSizes={{
            small: pizzaSizes["small"],
            medium: pizzaSizes["medium"],
            large: pizzaSizes["large"],
          }}
        />
      </div>
    </div>
  );
};

export default Product;
