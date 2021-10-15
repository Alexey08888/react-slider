import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  function getFullscreenElement(){
      return document.fullscreenElement
  }
  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={nextSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={prevSlide} />
      {SliderData.map((slide, index) => {
        return (
        <div
          className={index === current ? "slide active" : "slide"}
          key={index} onClick={getFullscreenElement}>

              {index === current && ( <img src={slide.image} alt="zp image" className="image" />)}
         
        </div>
        )
      })}
    </section>
  );
};

export default ImageSlider;
