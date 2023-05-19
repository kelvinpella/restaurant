import React, { useMemo, useEffect, memo, useState } from "react";
import Pizza from "./Pizza";
import { getAllPizza } from "@/sanity/sanity.utils";

const PizzaList = () => {
  const [allPizza, setAllPizza] = useState([]);
  const getPizzas = async () => {
    const pizzas = await getAllPizza();
    setAllPizza(pizzas);
  };
  useEffect(() => {
    getPizzas();
  }, []);

  const pizzas = useMemo(
    () =>
      allPizza.length > 0 ? (
        allPizza.map((pizza) => <Pizza key={pizza._id} pizzaProps={pizza} />)
      ) : (
        <div className="bg-white w-full h-90vh flex flex-col items-center justify-center ">
          <p className="text-xl text-slate-400">Loading...</p>
        </div>
      ),
    [allPizza]
  );
  return (
    <div className="w-full bg-white my-4 p-2 lg:p-6">
      <div className="w-full md:w-11/12 lg:max-w-screen-xl mx-auto">
        <div className="w-full">
          <h1 className="text-2xl md:text-4xl font-bold uppercase my-4 text-center">
            The best pizza in town
          </h1>
          <p className="w-full md:text-lg my-2 text-center">
            Pizzas that are a perfect fusion of artistry and flavor. From our
            hand-tossed crust to our tangy sauce and melty cheese, every bite is
            a burst of satisfaction.
          </p>
        </div>
        <div className="w-full  grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4  gap-3 md:gap-6 my-6">
          {pizzas}
        </div>{" "}
      </div>
    </div>
  );
};

export default memo(PizzaList);
