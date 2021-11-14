import React from "react";

const stylebutton = "uppercase w-full h-full py-2 text-left";
const stylecategory = "hover:bg-yellow-500 hover:opacity-80";

function category(statusfood) {
  const handleClick = () => {
    // if (statusfood.foodswitch === 0) statusfood.setFoodswitch(1);
    // else statusfood.setFoodswitch(0);
  };
  return (
    <>
      <div className="flex-inital w-1/6 divide-y divide-teal-400 font-semibold catagory">
      </div>
        <h4
          style={{
            background: "var(--primary1)",
            color: "#ffffff",
            textTransform: "uppercase",
          }}
        >
          {" "}
          <i className="fas fa-align-justify"></i> Danh mục
        </h4>
        <ul
          className="divide-y font-normal text-xs"
          style={{
            background: "var(--primary4)",
            color: "#ffffff",
            textTransform: "uppercase",
          }}
        >
          <li className={stylecategory}>
            <button className={stylebutton} onClick={handleClick}>
              <i className="fas fa-concierge-bell"></i>
              Cơm
            </button>
          </li>

          <li className={stylecategory}>
            <button className={stylebutton} onClick={handleClick}>
              <i className="fas fa-bacon"></i>Bún & Mì
            </button>
          </li>
          <li className={stylecategory}>
            <button className={stylebutton} onClick={handleClick}>
              <i className="fas fa-cookie"></i>Ăn vặt
            </button>
          </li>
          <li className={stylecategory}>
            <button className={stylebutton} onClick={handleClick}>
              <i className="fas fa-hotdog"></i>Món nướng
            </button>
          </li>
          <li className={stylecategory}>
            <button className={stylebutton} onClick={handleClick}>
              <i className="fas fa-cocktail"></i>Thức uống
            </button>
          </li>
          <li className={stylecategory}>
            <button className={stylebutton} onClick={handleClick}>
              <i className="fas fa-apple-alt"></i>Trái cây
            </button>
          </li>
          <li className={stylecategory}>
            <button className={stylebutton} onClick={handleClick}>
              <i className="fas fa-birthday-cake"></i>Bánh
            </button>
          </li>
          <li className={stylecategory}>
            <button className={stylebutton} onClick={handleClick}>
              <i className="fas fa-gifts"></i>Combo
            </button>
          </li>
        </ul>
    </>
  );
}

export default category;
