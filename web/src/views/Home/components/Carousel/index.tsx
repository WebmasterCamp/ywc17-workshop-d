import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';

export const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    className: 'p-2',
  };
  return (
    <div className="p-8 mb-2">
      <Slider {...settings}>
        <div className="h-64 bg-red-500 shadow-md rounded-md">
          <h3>1</h3>
        </div>
        <div className="h-64 bg-blue-500  shadow-md rounded-md">
          <h3>2</h3>
        </div>
        <div className="h-64 bg-yellow-500   shadow-md rounded-md">
          <h3>3</h3>
        </div>
        <div className="h-64 bg-green-500   shadow-md rounded-md">
          <h3>4</h3>
        </div>
        <div className="h-64 bg-orange-500  shadow-md rounded-md">
          <h3>5</h3>
        </div>
        <div className="h-64 bg-red-500 shadow-md rounded-md">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};
