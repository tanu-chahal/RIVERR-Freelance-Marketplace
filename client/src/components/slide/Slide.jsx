import React from "react";
import "./Slide.scss";
import Slider from "../slider/Slider.jsx";

const Slide = ({children, slidesToShow, arrowsScroll}) => {
  return (
    <div className="Slide">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
