import React, { useMemo } from "react";
import Pizza from "./Pizza";

const PizzaList = () => {
  // temporarily create 10 pizza
  const pizzaArray = Array(10).fill(true);
  const allPizza = useMemo(
    () =>
      pizzaArray.map((pizza, index) => (
        <Pizza key={index} pizzaProps={{ pizza }} />
      )),
    [pizzaArray]
  );
  return (
    <div className="w-full bg-white my-4 p-6">
      <div className="w-full">
        <h1 className="text-4xl font-bold uppercase my-4 text-center">
          The best pizza in town
        </h1>
        <p className="w-full my-2 text-center">
          Irure elit amet ut magna cillum minim veniam laboris. Ad Lorem do eu
          in cupidatat id elit sit consectetur. Deserunt sit Lorem cupidatat
          proident aute quis non voluptate.
        </p>
      </div>
      <div className="w-10/12 mx-auto grid grid-cols-5 place-items-center gap-6 my-6">
        {allPizza}
      </div>
    </div>
  );
};

export default PizzaList;
