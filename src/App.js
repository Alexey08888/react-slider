import './App.css';
import ImageSlider from './Slider/ImageSlider';
import { SliderData } from './Slider/SliderData';
//import { FullScreen, useFullScreenHandle } from "react-full-screen";

function App() {
  
  return <ImageSlider slides={SliderData}/>
}

export default App;
