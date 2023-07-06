import React, {useState} from "react";
import "./Slider.scss";

const Slider = ({children, slidesToShow, arrowsScroll }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState('forward');
  
    const totalSlides = React.Children.count(children);
  
    const handleNextSlide = () => {
      setDirection('forward');
      const newCurr =currentSlide + arrowsScroll
      setCurrentSlide(newCurr);
    };
  
    const handlePrevSlide = () => {
      setDirection('backward');
      const newCurr =currentSlide - arrowsScroll
      setCurrentSlide(newCurr);
    }


    return (
    <div className="Slider">
    <div
      className="slider-inner"
      style={{
        transform: `translateX(${direction === 'forward' ? '-' : ''}${currentSlide*(100 / slidesToShow)}%)`,
      }}
    >
      {
      
      React.Children.map(children, (child, index) => (
         <div className="slide" key={index}>{child}</div>
      ))}
    </div>

      {(currentSlide) > 0 && <button className="prev" onClick={handlePrevSlide}>
        {"<"}
      </button>}

      {((currentSlide+slidesToShow) < (totalSlides-1)) && <button className="next" onClick={handleNextSlide}>
        {">"}
      </button>}
  </div>)
}

export default  Slider;