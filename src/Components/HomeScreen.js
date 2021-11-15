import React from "react";
import FoodMenu from "./FoodMenu";
import TopFoods from "./TopFood";
import PromotionFood from "./PromotionFood";
import "tailwindcss/tailwind.css";
<script
  src="https://kit.fontawesome.com/a076d05399.js"
  crossorigin="anonymous"
></script>;


function HomeScreen(props) {

  return (
    <div >
      <div
        className="mb-2 h-96 bottom-0 w-full pt-4"
        style={{ background: "var(--background-secondary)" }}
      >
        {(props.foodSwitch && <PromotionFood />) || (
          <FoodMenu
            searchTerm={props.searchTerm}
            category={props.currentCategory}
          />
        )}
      </div>
      <TopFoods />
    </div>
  );
}
export default HomeScreen;
