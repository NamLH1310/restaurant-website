import { ContextList } from "../Context";
import React, { useContext } from "react";

function PromotionFood() {
  let foodList = useContext(ContextList).promotionfoods;
  if (foodList === undefined)
    foodList = []
    console.log(2,foodList);
  return (
    <div className="flex-1 grid grid-cols-1 gap-1 mr-4 ml-4 list-promotion">
      {foodList.map((food) => {
        return (
          <React.Fragment key={food.id}>
            <div>
              <img
                src={food.img}
                alt="com chien"
                className="h-promotion w-full cursor-pointer"
              />
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
export default PromotionFood;
