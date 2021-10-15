import React, { useRef, useState } from "react";
import { SliderData } from "./SliderData";
//import { FullScreen, useFullScreenHandle } from "react-full-screen";

const ImageSlider = ({ slides }) => {
  //const screen = useFullScreenHandle();

  const [current, setCurrent] = useState(0);
  const imageElem = useRef(null);
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

  return (
    <section className="slider">
     

      <button className="left-arrow" onClick={nextSlide}>
        {" "}
        Предыдущий{" "}
      </button>

      <button className="right-arrow" onClick={prevSlide}>
        {" "}
        Следующий
      </button>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="zp image"
                className="image"
                ref={imageElem}
                onClick={(
                  
                )=>{
                  imageElem.current.requestFullscreen();
                   }}
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
