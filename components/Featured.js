import React from "react";
import pizza1 from "../public/images/pizza1.png";
import pizza2 from "../public/images/pizza2.png";
import pizza3 from "../public/images/pizza3.png";
import pizza4 from "../public/images/pizza4.png";
import Slideshow from "./Slideshow";

const Featured = () => {
  const slideShowImages = [
    {
      name: "pizza 1",
      src: pizza1,
    },
    {
      name: "pizza 3",
      src: pizza3,
    },
    {
      name: "pizza 4",
      src: pizza4,
    },
    {
      name: "pizza 2",
      src: pizza2,
    },
  ];

  return (
    <div className="w-full h-screen pt-28 bg-red-800 px-6 pb-2">
      <Slideshow slideShowImages={slideShowImages}/>
    </div>
  );
};

export default Featured;
