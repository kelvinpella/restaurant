import React from "react";

const CheckoutSummary = () => {
  const checkoutSummary = [
    { item: "subtotal", value: "$78.00" },
    { item: "discount", value: "$0.00" },
    { item: "total", value: "$78.00" },
  ];
  return (
    <div className="max-w-lg max-h-80 py-6 px-10 bg-yellow-600 capitalize font-bold text-lg">
      <h1 className="uppercase font-bold text-xl my-3 text-center">your order</h1>
      <div>
        {checkoutSummary.map(({ item, value }) => (
          <div key={item} className="flex items-center  my-2">
            <span className="">{item}:</span>
            <span className="mx-2 text-white ">{value}</span>
          </div>
        ))}
      </div>
      <button className="uppercase py-2 px-2.5 w-full my-4  bg-yellow-400 rounded-md">
        checkout
      </button>
    </div>
  );
};

export default CheckoutSummary;
