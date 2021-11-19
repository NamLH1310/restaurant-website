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
  return (
    <div className="bg-gray-50">
      <div className="h-96 bottom-0 w-full ">
        {(props.foodSwitch && <PromotionFood />) || (
          <FoodMenu
            searchTerm={props.searchTerm}
            category={props.currentCategory}
            currentPage={props.currentPage}
            setCurrentPage={props.setCurrentPage}
          />
        )}
      </div>
      <div className="bg-gray-100 mt-36">
        <TopFoods />
      </div>
    </div>
  );
}
export default HomeScreen;
