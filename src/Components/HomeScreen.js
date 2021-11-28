import React from "react";
import FoodMenu from "./FoodMenu";
import TopFoods from "./TopFood";
import PosterFood from "./PosterFood";
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
      <div className="h-auto w-full ">
        {(props.foodSwitch && <PosterFood />) || (
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
