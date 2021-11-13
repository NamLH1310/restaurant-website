import { ContextList } from "../Context";
import {useContext} from "react";
import FoodDisplay from "./FoodDisplay";

function FoodMenu() {
    let foodList = useContext(ContextList).foods;
    console.log(foodList)
    return (
      <div className="flex-1 grid grid-cols-4 gap-2 mr-2 ml-2 list-food">
        {foodList.map((food) => {
          return <FoodDisplay value={food} key={food.id} />;
        })}
      </div>
    );
}
export default FoodMenu