import { ContextList } from "../Context";
import { useContext, useState } from "react";
import FoodDisplay from "./FoodDisplay";
import PaginationFood from "./PaginationFood";

function FoodMenu(props) {
  const add = useContext(ContextList).addCart;
  let foodList = useContext(ContextList).foods;
  const [currentPage, setCurrentPage] = useState(1);
  const [foodsPerPage] = useState(8);
  if (foodList === undefined) foodList = [];
  if (props.searchTerm !== "") {
    let newFoodList = foodList.filter((food) => {
      return food.name.toLowerCase().includes(props.searchTerm.toLowerCase());
    });
    foodList = newFoodList;
  }
  if (props.category !== "Tất cả") {
    foodList = foodList.filter((food) => {
      return food.category === props.category;
    });
  }
  console.log(foodList)
  const indexOfLastPost = currentPage * foodsPerPage;
  const indexOfFirstPost = indexOfLastPost - foodsPerPage;
  let currentFoods = foodList
  if (foodsPerPage < foodList.length)
    currentFoods = foodList.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log(currentPage, "page");
  return (
    <div className="flex-col ">
      <div className="flex-1 grid grid-cols-4 gap-2 sm:gap-4 mr-4 ml-4 list-food h-96">
        {currentFoods.map((food) => {
          return (
            <FoodDisplay
              value={food}
              key={food.id}
              onClick={() => {
                console.log('debug');
                return add(food.id);
              }}
            />
          );
        })}
      </div>
      {foodsPerPage < foodList.length ?
        <div className="w-full">
          <PaginationFood
            postsPerPage={foodsPerPage}
            totalPosts={foodList.length}
            paginate={paginate}
          />
        </div>
        : null
      }
    </div>
  );
}
export default FoodMenu;
