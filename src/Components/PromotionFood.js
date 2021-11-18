import { ContextList } from "../Context";
import React, { useContext } from "react";

function PromotionFood() {
  let foodList = useContext(ContextList).promotionfoods;
  if (foodList === undefined)
    foodList = []
  return (
    <div className="list-promotion">
      {foodList.map((food) => {
        return (
          <React.Fragment key={food.id}>
            <div>
              <img
                src={food.img}
                alt="com chien"
                className="h-[450px] w-full"
              />
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
export default PromotionFood;
