import { ContextList } from "../Context";
import { useContext, useState } from "react";
import FoodDisplay from "./FoodDisplay";
import PaginationFood from "./PaginationFood";

function FoodMenu(props) {
  // const add = useContext(ContextList).addCart;
  let foodList = useContext(ContextList).foods;
  const cate=useContext(ContextList).categories
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
      const categoryId = cate.find(e => e.name === props.category).id;
      return food.category.includes(categoryId);
      // return cate[food.category[0]].name===props.category
    });
  }
  //console.log("re-render");
  const indexOfLastPost = props.currentPage * foodsPerPage;
  const indexOfFirstPost = indexOfLastPost - foodsPerPage;
  let currentFoods = foodList;
  if (foodsPerPage < foodList.length)
    currentFoods = foodList.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => props.setCurrentPage(pageNumber);
  //console.log(currentFoods, "page");
  return (
    <div className="flex-col py-4">
      <div className="flex-1 grid grid-cols-4 gap-2 sm:gap-4 mr-4 ml-4 mb-3 list-food h-96">
        {currentFoods.map((food) => {
          return (
            <FoodDisplay
              value={food}
              key={food.id}
              onClick={() => {
                // console.log('debug');
                // return add(food.id);
              }}
            />
          );
        })}
      </div>
      {foodsPerPage < foodList.length ? (
        <div className="w-auto mt-10">
          <PaginationFood
            postsPerPage={foodsPerPage}
            totalPosts={foodList.length}
            paginate={paginate}
          />
        </div>
      ) : null}
    </div>
  );
}
export default FoodMenu;
