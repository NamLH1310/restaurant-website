import { ContextList } from "../Context";
import React, { useContext } from "react";
import TopFoodDisplay from "./TopFoodDisplay";
import Carousel from "react-elastic-carousel";

const breakPoints = [{ width: 300, itemsToShow: 4 }];

function TopFoods(food) {
  let topfoodList = useContext(ContextList).topfoods;
  if (topfoodList === undefined) topfoodList = [];
  return (
    <div className="w-full py-8 bg-gray-50">
      <div className="Heading">
        <h2 className="TopSale py-2"> &#9734; BÁN CHẠY NHẤT</h2>
      </div>
      <Carousel
        breakPoints={breakPoints}
        enableAutoPlay
        itemPadding={[0, 2]}
        focusOnSelect={true}
        disableArrowsOnEnd={false}
        autoPlaySpeed={2500}
      >
        {topfoodList.map((food) => {
          return (
            <div className="SlideContainer h-48" key={food.id}>
              <TopFoodDisplay value={food} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
export default TopFoods;
