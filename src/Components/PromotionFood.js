import { ContextList } from "../Context";
import React, { useContext } from "react";
import ReactPlayer from "react-player";
import promovideo from "../Assets/Promotionvideo.mp4"

function PromotionFood() {
  let foodList = useContext(ContextList).promotionfoods;
  if (foodList === undefined)
    foodList = []
  return (
    <div className="list-promotion">
      {foodList.map((food) => {
        return (
          <React.Fragment key={food.id}>
            <div className="player-wrapper bg-black py-3">
              {/* <img
                src={food.img}
                alt="com chien"
                className="h-[500px] w-full "
              /> */}
              <ReactPlayer
                className="mx-auto"
                playing={true}
                muted={true}
                loop={true}
                height="100%"
                width="90%"
                url={promovideo}
              />
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
export default PromotionFood;
