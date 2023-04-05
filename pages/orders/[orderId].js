import Table from "@/components/Tables/Table";
import React from "react";
import { MdOutlinePayment, MdOutlineDeliveryDining } from "react-icons/md";
import { GiCook, GiReceiveMoney } from "react-icons/gi";
import OrderStatus from "@/components/OrderStatus";
import CheckoutSummary from "@/components/CheckoutSummary";
const Orders = () => {
  // order summary data  will be shown in a table
  const orderSummary = {
    tableCaption: "Order summary",
    tableHead: ["Order Id", "customer", "address", "Total ($)"],
    tableBody: [[1235343434, "Kelvin Pella", "Mbezi Beach, Dsm", 79.0]],
  };
  // order status i.e awaiting,pending,fulfilled
  const orderStatus = [
    {
      name: "payment",
      status: "fulfilled",
      icon: <MdOutlinePayment className="text-3xl mx-auto" />,
    },
    {
      name: "preparing",
      status: "pending",
      icon: <GiCook className="text-3xl mx-auto" />,
    },
    {
      name: "on the way",
      status: "awaiting",
      icon: <MdOutlineDeliveryDining className="text-3xl mx-auto" />,
    },
    {
      name: "delivered",
      status: "awaiting",
      icon: <GiReceiveMoney className="text-3xl mx-auto" />,
    },
  ];

  const checkoutSummary = {
    title: "cart total",
    buttonText: "paid",
  };
  return (
    <div className="w-full grid grid-cols-2 grid-rows-1 gap-x-6 bg-white py-6 px-2">
      <div className="w-full my-4 mx-2">
        <Table {...orderSummary} />
        <OrderStatus orderStatusProps={{ orderStatus }} />
      </div>
      <div>
        <CheckoutSummary {...checkoutSummary} />
      </div>
    </div>
  );
};

export default Orders;
