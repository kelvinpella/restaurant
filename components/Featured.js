import Image from "next/image";
import React from "react";
import { Carousel } from "react-bootstrap";
import pizza1 from "../public/images/pizza1.png";
const Featured = () => {
  const slideShowImages = [
    {
      name: "pizza 1",
      src: pizza1,
    },
    {
      name: "pizza 2",
      src: "https://www.freeiconspng.com/uploads/pizza-png-24.png",
    },
    {
      name: "pizza 3",
      src: "https://www.freeiconspng.com/uploads/pizza-png-19.png",
    },
    {
      name: "pizza 4",
      src: "https://www.freeiconspng.com/uploads/pizza-png-8.png",
    },

    {
      name: "pizza 5",
      src: "https://www.freeiconspng.com/uploads/pizza-png-15.png",
    },
  ];
  return (
    <div className="w-full h-screen pt-28 bg-red-800 px-6 pb-2">
      <Carousel className="w-full h-full ">
        {slideShowImages.map(({ name, src }) => (
          <Carousel.Item key={name} className="w-full h-full ">
            <Image src={src} fill style={{ objectFit: "contain" }} alt={name} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Featured;
