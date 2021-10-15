import react, {useState}from 'react';
import { SliderData } from './SliderData';

const ImageSlider = () => {
    return (
        <>
        {SliderData.map((slide,index)=>{
          return (
              <img src ={slide.image} alt="zp image"/>
          )
        })}
        </>
    )
}

export default ImageSlider