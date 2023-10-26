import React from "react";
import FirstSliderPic from "../../../img/image 5.svg";
import ThirdSliderPic from "../../../img/image 31.svg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const SliderComponent = () => {
    const settings = {
      infinite: true,
      speed: 4000,
      centerMode: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true, // Автоматический переход
      autoplaySpeed: 2000, // Время показа каждого слайда (в миллисекундах)
    };
  
    return (
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src={FirstSliderPic} alt="Slide 1" />
          </div>
          <div>
            <img src={ThirdSliderPic} alt="Slide 2" />
          </div>
          <div>
            <img src={FirstSliderPic} alt="Slide 3" />
          </div>
          <div>
            <img src={ThirdSliderPic} alt="Slide 3" />
          </div>
        </Slider>
      </div>
    );
  };
  
export default SliderComponent;