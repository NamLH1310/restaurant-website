import ComChien from "../Assets/ComChien.jpg";
import Carousel from "react-elastic-carousel";
import React, { Component, useState } from "react";
import "tailwindcss/tailwind.css";
import Category from "./Category";
<script
  src="https://kit.fontawesome.com/a076d05399.js"
  crossorigin="anonymous"
></script>;

const stylebutton = "uppercase w-full h-full py-3 text-left";
const stylecategory = "hover:bg-yellow-500 hover:opacity-80";
const listfood = [];
const listfoodtop = [];
for (let i = 0; i < 8; i++) {
  listfood.push(
    <div className="relative bg-gray-50 h-44 ring-1 ring-yellow-400 hover:opacity-90 cursor-pointer food">
      <div className="ml-4 mt-1 font-semibold food-text">
        <h4>Cơm chiên hải sản</h4>
        <h5 className="-mt-1 text-red-600">50.000d</h5>
      </div>
      <div>
        <img src={ComChien} className="h-4/5 w-3/4 mt-2 mx-auto food-img" />
      </div>
      <i
        className="absolute bottom-0 right-0 mr-1 mb-1 fas fa-cart-plus"
        style={{ color: "var(--button-cart" }}
      ></i>
    </div>
  );
}

for (let i = 0; i < 10; i++) {
  listfoodtop.push(
    <div className="SlideContainer h-36 my-1 ">
      <div
        className="relative bg-gray-50 mx-1 w-full h-full ring-1 ring-yellow-400 hover:opacity-90 cursor-pointer food"
        key={i}
      >
        <div className="ml-2 font-semibold food-text">
          <h4>Cơm chiên hải sản</h4>
          <h5 className="-mt-1 text-red-600">50.000d</h5>
        </div>
        <div>
          <img src={ComChien} className="h-24 w-3/4 mx-auto food-img" />
        </div>
        <i
          className="absolute bottom-0 right-0 mr-1 mb-1 fas fa-cart-plus"
          style={{ color: "var(--button-cart" }}
        ></i>
      </div>
    </div>
  );
}

const breakPoints = [{ width: 300, itemsToShow: 5 }];

function HomeScreen(props) {
  const [foodswitch, setFoodswitch] = useState(1);
  const handleClick = () => {
    if (foodswitch === 0) setFoodswitch(1);
    else setFoodswitch(0);
  };
  return (
    <div>
      <div
        className="flex mb-2 mt-2 h-full"
        style={{ background: "var(--background-secondary)" }}
      >
        <div className="flex-intial w-1/6 divide-y divide-teal-400 font-semibold catagory">
          <h4
            style={{
              background: "var(--primary1)",
              color: "#ffffff",
              textTransform: "uppercase",
            }}
            className="py-2"
          >
            {" "}
            <i className="fas fa-align-justify"></i> Danh mục
          </h4>
          <ul
            className="divide-y font-normal text-xs"
            style={{
              background: "var(--primary4)",
              color: "#ffffff",
              textTransform: "uppercase",
            }}
          >
            <li className={stylecategory}>
              <button className={stylebutton} onClick={handleClick}>
                <i className="fas fa-concierge-bell"></i>
                Cơm
              </button>
            </li>

            <li className={stylecategory}>
              <button className={stylebutton} onClick={handleClick}>
                <i className="fas fa-bacon"></i>Bún & Mì
              </button>
            </li>
            <li className={stylecategory}>
              <button className={stylebutton} onClick={handleClick}>
                <i className="fas fa-cookie"></i>Ăn vặt
              </button>
            </li>
            <li className={stylecategory}>
              <button className={stylebutton} onClick={handleClick}>
                <i className="fas fa-hotdog"></i>Món nướng
              </button>
            </li>
            <li className={stylecategory}>
              <button className={stylebutton} onClick={handleClick}>
                <i className="fas fa-cocktail"></i>Thức uống
              </button>
            </li>
            <li className={stylecategory}>
              <button className={stylebutton} onClick={handleClick}>
                <i className="fas fa-apple-alt"></i>Trái cây
              </button>
            </li>
            <li className={stylecategory}>
              <button className={stylebutton} onClick={handleClick}>
                <i className="fas fa-birthday-cake"></i>Bánh
              </button>
            </li>
            <li className={stylecategory}>
              <button className={stylebutton} onClick={handleClick}>
                <i className="fas fa-gifts"></i>Combo
              </button>
            </li>
          </ul>
        </div>
        {(foodswitch && (
          <div className="flex-1 grid grid-cols-2 gap-1 mr-1 ml-1 list-promotion">
            <div>
              <img
                src={ComChien}
                className="h-promotion w-full cursor-pointer"
              />
            </div>
            <div>
              <img
                src={ComChien}
                className="h-promotion w-full cursor-pointer"
              />
            </div>
          </div>
        )) || (
          <div className="flex-1 grid grid-cols-4 gap-2 mr-2 ml-2 list-food">
            {listfood}
          </div>
        )}
      </div>
      {/* Ban chay nhat */}
      <div className="Heading">
        <h2 className="TopSale py-2"> &#9734; BÁN CHẠY NHẤT</h2>
      </div>
      <Carousel
        breakPoints={breakPoints}
        enableAutoPlay
        itemPadding={[2, 0]}
        focusOnSelect={true}
        disableArrowsOnEnd={false}
        autoPlaySpeed={2500}
  
      >
        {listfoodtop}
      </Carousel>
    </div>
  );
}
export default HomeScreen;
