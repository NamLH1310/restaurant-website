import React from "react";
import Slider from "react-slick";
import food1 from "../Assets/ComSuon.jpg";
import food2 from "../Assets/Hamburger.jpg";
import food3 from "../Assets/My_Y.jpg";
import food4 from "../Assets/ComChien.jpg";
import food5 from "../Assets/IceCream.jpg";

export default function Promotion() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full h-[500px] bg-white">
      <Slider {...settings}>
        <div className="h-[460px]">
          <img src={food1} alt="com suon" className="w-full h-full" />
        </div>
        <div className="h-[460px]">
          <img src={food2} alt="com suon" className="w-full h-full" />
        </div>
        <div className="h-[460px]">
          <img src={food3} alt="com suon" className="w-full h-full" />
        </div>
        <div className="h-[460px]">
          <img src={food4} alt="com suon" className="w-full h-full" />
        </div>
        <div className="h-[460px]">
          <img src={food5} alt="com suon" className="w-full h-full" />
        </div>
      </Slider>
    </div>
  );
}
