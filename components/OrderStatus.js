import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
const OrderStatus = ({ orderStatusProps: { orderStatus } }) => {
  return (
    <div className="w-full lg:w-10/12">
      <h2 className="font-bold text-lg my-4">Order status</h2>
      <div className="w-full flex  justify-between capitalize">
        {orderStatus.map(({ name, status, icon }) => {
          return (
            <div
              key={name}
              className={`${status === "awaiting" && "opacity-50"} text-center`}
            >
              {icon}
              <p className="capitalize my-1.5 text-sm md:text-base ">{name}</p>
              <AiFillCheckCircle
                className={`${
                  status !== "fulfilled" && "hidden"
                } text-green-500 text-lg md:text-2xl mx-auto `}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderStatus;
