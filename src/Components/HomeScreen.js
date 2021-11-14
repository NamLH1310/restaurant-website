import React from "react";
import FoodMenu from "./FoodMenu";
import TopFoods from "./TopFood";
import PromotionFood from "./PromotionFood";
// import { ContextList } from "../Context";

import "tailwindcss/tailwind.css";

<script
  src="https://kit.fontawesome.com/a076d05399.js"
  crossorigin="anonymous"
></script>;

// const stylebutton = "uppercase w-full h-full py-3 text-left";
// const stylecategory = "hover:bg-yellow-500 hover:opacity-80";

function HomeScreen(props) {
  // const categories = useContext(ContextList).categories;
  // const [foodswitch, setFoodswitch] = useState(1);
  // const handleClick = () => {
  //   if (foodswitch === 0) setFoodswitch(1);
  //   else setFoodswitch(0);
  // };
  // let categoriesToRender = [];
  // if (categories) {
  //   categoriesToRender = categories.map((category) => {
  //     return (
  //       <li className={stylecategory} key={category.id}>
  //         <button className={stylebutton} onClick={handleClick}>
  //           <i className={category.icon}></i>
  //           {category.name}
  //         </button>
  //       </li>
  //     );
  //   });
  // }
  return (
    <div>
      <div
        className="flex mb-2 mt-2 h-full"
        style={{ background: "var(--background-secondary)" }}
      >
        {/* <div className="flex-intial w-1/6 divide-y divide-teal-400 font-semibold catagory">
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
            {categoriesToRender}
          </ul>
        </div> */}
        {(props.foodSwitch && <PromotionFood />) || (
          <FoodMenu searchTerm={props.searchTerm}  category ={props.currentCategory}/>
        )}
      </div>
      {/* Ban chay nhat */}
      <div className="Heading">
        <h2 className="TopSale py-2"> &#9734; BÁN CHẠY NHẤT</h2>
      </div>
      <TopFoods/>
    </div>
  );
}
export default HomeScreen;
