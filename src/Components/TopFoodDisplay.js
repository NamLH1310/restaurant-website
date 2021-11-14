import React from "react";

function TopFoodDisplay(food) {
  return (
    <div className="relative bg-gray-50 h-44 w-full mt-1 ring-1 ring-yellow-400 hover:opacity-90 cursor-pointer food">
      <div className="ml-4 mt-1 font-semibold food-text">
        <h4>{food.value.name}</h4>
        <h5 className="-mt-1 text-red-600">{food.value.price}</h5>
      </div>
      <div>
        <img
          src={food.value.img}
          alt="com chien"
          className="h-28 w-3/4 mt-2 mx-auto food-img"
        />
      </div>
      <i
        className="absolute bottom-0 right-0 mr-1 mb-1 fas fa-cart-plus"
        style={{ color: "var(--button-cart" }}
      ></i>
    </div>
  );
}
export default TopFoodDisplay;
