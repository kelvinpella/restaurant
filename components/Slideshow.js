import Image from "next/image";
import React, { useMemo } from "react";
import { Carousel } from "react-bootstrap";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
const PreviousIcon = () => {
  return <MdOutlineArrowBackIos className="h-10 md:h-20 w-10 md:w-20 " />;
};
const NextIcon = () => {
  return <MdOutlineArrowForwardIos className="h-10 md:h-20 w-10 md:w-20 " />;
};
const Slideshow = ({ slideShowImages }) => {
  const carousalProps = {
    prevIcon: <PreviousIcon />,
    nextIcon: <NextIcon />,
  };
  const slideImages = useMemo(
    () =>
      slideShowImages.map(({ name, src }) => (
        <Carousel.Item key={name} className="w-full h-full ">
          <Image src={src} fill style={{ objectFit: "contain" }} alt={name} />
        </Carousel.Item>
      )),
    [slideShowImages]
  );
  return (
    <Carousel className="w-full h-full " {...carousalProps}>
      {slideImages}
    </Carousel>
  );
};

export default Slideshow;
