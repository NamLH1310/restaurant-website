import ComChien from "../Assets/ComChien.jpg";
import Carousel from "react-elastic-carousel";
import React, { useContext, useState } from "react";
import "tailwindcss/tailwind.css";
import FoodMenu from "./FoodMenu";
import { ContextList } from "../Context";

<script
  src="https://kit.fontawesome.com/a076d05399.js"
  crossorigin="anonymous"
></script>;

const stylebutton = "uppercase w-full h-full py-2 text-left";
const stylecategory = "hover:bg-yellow-500 hover:opacity-80";
const listfoodtop = [];


for (let i = 0; i < 10; i++) {
  listfoodtop.push(
    <div className="SlideContainer h-topsale my-1">
      <div className="relative bg-gray-50 mx-1 w-full h-full ring-1 ring-yellow-400 hover:opacity-90 food">
        <div className="ml-2 font-semibold food-text">
          <h4>Cơm chiên hải sản</h4>
          <h5 className="-mt-1 text-red-600">50.000d</h5>
        </div>
        <div>
          <img src={ComChien} className="h-16 w-3/4 mx-auto food-img" alt="Com chien" />
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
  const categories = useContext(ContextList).categories;
  const [foodswitch, setFoodswitch] = useState(1);
  const [currentCategory, setCurrentCategory] = useState("");
  const handleClick = (category) => {
    if (foodswitch === 0 && category === currentCategory){
       setFoodswitch(1);
       setCurrentCategory("");
    }
    else 
    {
      setFoodswitch(0);
      setCurrentCategory(category);
    }
  };
  let categoriesToRender =[];
  if (categories){
    categoriesToRender= categories.map((category) => {
      return (
        <li className={stylecategory} key={category.id}>
          <button className={stylebutton} onClick={() => handleClick(category.name)}>
            <i className={category.icon}></i>
            {category.name}
          </button>
        </li>
      )
    }
    )
  }
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
            {categoriesToRender}
          </ul>
        </div>
        {(foodswitch && (
          <div className="flex-1 grid grid-cols-2 gap-5 mr-5 ml-5 list-promotion">
            <div>
              <img src={ComChien} className="h-promotion w-full my-2" alt="Com chien" />
            </div>
            <div>
              <img src={ComChien} className="h-promotion w-full my-2" alt="Com chien" />
            </div>
          </div>
        )) ||
          <FoodMenu searchTerm = {props.searchTerm} category ={currentCategory} />
        }
      </div>
      {/* Ban chay nhat */}
      <div className="Heading">
        <h2 className="TopSale"> &#9734; BÁN CHẠY NHẤT</h2>
      </div>
      <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={2500}>
        {listfoodtop}
      </Carousel>
    </div>
  );
}
export default HomeScreen;
