import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import { slider } from "./SliderArray";

const Slider1 = (props) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider className="Slider" {...settings}>
        <div className="slider-div" sx={{ maxWidth: 300 }}>
          <div className="person">
            <div className="person-img">
              <img src={slider[0].img} alt="" />
            </div>
            <div className="person-name-job">
              <h2 className="name-comment">{slider[0].name}</h2>
              <h4 className="job-comment">{slider[0].job}</h4>
            </div>
          </div>
          <div className="card-comment">{slider[0].comment}</div>
        </div>
        <div className="slider-div" sx={{ maxWidth: 300 }}>
          <div className="person">
            <div className="person-img">
              <img src={slider[1].img} alt="" />
            </div>
            <div className="person-name-job">
              <h2 className="name-comment">{slider[1].name}</h2>
              <h4 className="job-comment">{slider[1].job}</h4>
            </div>
          </div>
          <div className="card-comment">{slider[1].comment}</div>
        </div>
        <div className="slider-div" sx={{ maxWidth: 300 }}>
          <div className="person">
            <div className="person-img">
              <img src={slider[2].img} alt="" />
            </div>
            <div className="person-name-job">
              <h2 className="name-comment">{slider[2].name}</h2>
              <h4 className="job-comment">{slider[2].job}</h4>
            </div>
          </div>
          <div className="card-comment">{slider[2].comment}</div>
        </div>
        <div className="slider-div" sx={{ maxWidth: 300 }}>
          <div className="person">
            <div className="person-img">
              <img src={slider[3].img} alt="" />
            </div>
            <div className="person-name-job">
              <h2 className="name-comment">{slider[3].name}</h2>
              <h4 className="job-comment">{slider[3].job}</h4>
            </div>
          </div>
          <div className="card-comment">{slider[3].comment}</div>
        </div>
        <div className="slider-div" sx={{ maxWidth: 300 }}>
          <div className="person">
            <div className="person-img">
              <img src={slider[4].img} alt="" />
            </div>
            <div className="person-name-job">
              <h2 className="name-comment">{slider[4].name}</h2>
              <h4 className="job-comment">{slider[4].job}</h4>
            </div>
          </div>
          <div className="card-comment">{slider[4].comment}</div>
        </div>
        <div className="slider-div" sx={{ maxWidth: 300 }}>
          <div className="person">
            <div className="person-img">
              <img src={slider[5].img} alt="" />
            </div>
            <div className="person-name-job">
              <h2 className="name-comment">{slider[5].name}</h2>
              <h4 className="job-comment">{slider[5].job}</h4>
            </div>
          </div>
          <div className="card-comment">{slider[5].comment}</div>
        </div>
      </Slider>
    </div>
  );
};

export default Slider1;
