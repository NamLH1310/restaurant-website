import ComChien from "../Assets/ComChien.jpg";
import Carousel from "react-elastic-carousel";
import React, { Component, useState } from "react";
import "tailwindcss/tailwind.css";

<script
  src="https://kit.fontawesome.com/a076d05399.js"
  crossorigin="anonymous"
></script>;

const stylebutton = "uppercase w-full h-full py-2 text-left";
const stylecategory = "hover:bg-yellow-500 hover:opacity-80";
const listfood = [];
const listfoodtop = [];
for (let i = 0; i < 10; i++) {
  listfood.push(
    <div className="relative bg-gray-50 h-auto my-1 ring-1 ring-yellow-400 hover:opacity-90 food">
      <div className="ml-2 font-semibold food-text">
        <h4>Cơm chiên hải sản</h4>
        <h5 className="-mt-1 text-red-600">50.000d</h5>
      </div>
      <div>
        <img src={ComChien} className="h-20 w-2/3 mx-auto food-img" />
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
    <div className="SlideContainer h-topsale my-1">
      <div className="relative bg-gray-50 mx-1 w-full h-full ring-1 ring-yellow-400 hover:opacity-90 food">
        <div className="ml-2 font-semibold food-text">
          <h4>Cơm chiên hải sản</h4>
          <h5 className="-mt-1 text-red-600">50.000d</h5>
        </div>
        <div>
          <img src={ComChien} className="h-16 w-3/4 mx-auto food-img" />
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
  const handleClick = (category) => {
    if (foodswitch === 0) setFoodswitch(1);
    else setFoodswitch(0);
    console.log("A");
  };
  return (
    <div>
      <div
        className="flex mb-2"
        style={{ background: "var(--background-secondary)" }}
      >
        <div className="flex-inital w-1/6 divide-y divide-teal-400 font-semibold catagory">
          <h4
            style={{
              background: "var(--primary1)",
              color: "#ffffff",
              textTransform: "uppercase",
            }}
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
          <div className="flex-1 grid grid-cols-2 gap-5 mr-5 ml-5 list-promotion">
            <div>
              <img src={ComChien} className="h-promotion w-full my-2" />
            </div>
            <div>
              <img src={ComChien} className="h-promotion w-full my-2" />
            </div>
          </div>
        )) || (
          <div className="flex-1 grid grid-cols-5 gap-2 mr-5 ml-5 list-food">
            {listfood}
          </div>
        )}
      </div>
      {/* Ban chay nhat */}
      <div className="Heading">
        <h2 class="TopSale"> &#9734; BÁN CHẠY NHẤT</h2>
      </div>
      <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={2500}>
        {listfoodtop}
      </Carousel>
    </div>
  );
}
export default HomeScreen;
