import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const sliderStyle: React.CSSProperties = {
        height: '200px', 
      };
    
      const imageStyle: React.CSSProperties = {
        height: '200px',
        width: '100%',   
        objectFit: 'cover', 
      };
    return (
      <div style={sliderStyle}>
        <Slider {...settings}>
          <div>
          <img src="https://cdn.ke.sportpesa.com/images/9/3/5/1/1539-13-eng-GB/Central-Banner-Virtual.png" alt="Image 1" style={imageStyle} />
          </div>
          <div>
          <img src="https://cdn.betika.com/int_assets/ke/banners/virtual-sports.png" alt="Image 1"  style={imageStyle} />
          </div>
          
        </Slider>
      </div>
    );
  }
}