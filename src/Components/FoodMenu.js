import { ContextList } from "../Context";
import { useContext } from "react";
import FoodDisplay from "./FoodDisplay";
function FoodMenu(props) {
  let foodList = useContext(ContextList).foods;
  if (foodList === undefined) foodList = []
  if (props.searchTerm !== "") {
    let newFoodList = foodList.filter((food) => {
      return food.name.toLowerCase().includes(props.searchTerm.toLowerCase());
    })
    foodList = newFoodList
  }
  if (props.category !== 'Tất cả') {
    foodList = foodList.filter((food) => {
      return food.category === props.category;
    })
  }
  console.log(foodList);
  return (
    <div className="flex-1 grid grid-cols-4 gap-2 mr-6 ml-2 list-food">
      {foodList.map((food) => {
        return <FoodDisplay value={food} key={food.id} />;
      })}
    </div>
  );

}
export default FoodMenu