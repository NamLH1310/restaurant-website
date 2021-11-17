import React, { useState } from "react";
import FoodMenu from "./FoodMenu";
import TopFoods from "./TopFood";
import PromotionFood from "./PromotionFood";
import "tailwindcss/tailwind.css";
<script
  src="https://kit.fontawesome.com/a076d05399.js"
  crossorigin="anonymous"
></script>;

function HomeScreen(props) {
  props.showSearchBar(true);
  props.showDropDown(true);
  console.log(window.innerWidth);
  console.log(props.setCurrentPage, "F");
  return (
    <div>
      <div className="h-96 bottom-0 w-full bg-gray-100" >
        {(props.foodSwitch && <PromotionFood />) || (
          <FoodMenu
            searchTerm={props.searchTerm}
            category={props.currentCategory}
            currentPage={props.currentPage}
            setCurrentPage={props.setCurrentPage}
          />
        )}
      </div>

      <TopFoods />
    </div>
  );
}
export default HomeScreen;
