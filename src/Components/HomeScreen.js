import ComChien from "../Assets/ComChien.jpg";
import React, { Component, useState, useContext, useEffect } from "react";
import FoodMenu from "./FoodMenu";
import TopFoods from "./TopFood";
import PromotionFood from "./PromotionFood";
import { ContextList } from "../Context";

import "tailwindcss/tailwind.css";

<script
  src="https://kit.fontawesome.com/a076d05399.js"
  crossorigin="anonymous"
></script>;

const stylebutton = "uppercase w-full h-full py-3 text-left";
const stylecategory = "hover:bg-yellow-500 hover:opacity-80";

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
            <i className="mx-1 fas fa-align-justify"></i> Danh mục
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
                <i className="mx-1 fas fa-concierge-bell"></i>
                Cơm
              </button>
            </li>

            <li className={stylecategory}>
              <button className={stylebutton} onClick={handleClick}>
                <i className="mx-1 fas fa-bacon"></i>Bún & Mì
              </button>
            </li>
            <li className={stylecategory}>
              <button className={stylebutton} onClick={handleClick}>
                <i className="mx-1 fas fa-cookie"></i>Ăn vặt
              </button>
            </li>
            <li className={stylecategory}>
              <button className={stylebutton} onClick={handleClick}>
                <i className="mx-1 fas fa-hotdog"></i>Món nướng
              </button>
            </li>
            <li className={stylecategory}>
              <button className={stylebutton} onClick={handleClick}>
                <i className="mx-1 fas fa-cocktail"></i>Thức uống
              </button>
            </li>
            <li className={stylecategory}>
              <button className={stylebutton} onClick={handleClick}>
                <i className="mx-1 fas fa-apple-alt"></i>Trái cây
              </button>
            </li>
            <li className={stylecategory}>
              <button className={stylebutton} onClick={handleClick}>
                <i className="mx-1 fas fa-birthday-cake"></i>Bánh
              </button>
            </li>
            <li className={stylecategory}>
              <button className={stylebutton} onClick={handleClick}>
                <i className="mx-1 fas fa-gifts"></i>Combo
              </button>
            </li>
          </ul>
        </div>
        {(foodswitch && <PromotionFood /> ) || <FoodMenu />}
      </div>
      {/* Ban chay nhat */}
      <div className="Heading">
        <h2 className="TopSale py-2"> &#9734; BÁN CHẠY NHẤT</h2>
      </div>
      <TopFoods />
    </div>
  );
}
export default HomeScreen;
