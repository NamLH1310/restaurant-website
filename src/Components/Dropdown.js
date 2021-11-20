import { useState, useContext } from 'react'
import { ContextList } from '../Context';
const stylebutton = "w-full h-full py-2 text-left";
const stylecategory = "z-10 relative hover:bg-yellow-500 hover:opacity-80 transform hover:translate-y-1 transition-all duration-500";
function DropDown(props) {
  const { categories } = useContext(ContextList);
  const [dropDown, setDropDown] = useState(false);
  let categoriesToRender = [];
  if (categories) {
    categoriesToRender = categories.map((category) => {
      return (
        <li className={stylecategory} key={category.id} >
          <button className={stylebutton}
            onClick={() => handleClick(category.name)}
          >
            <i className={category.icon}></i>
            {category.name}
          </button>
        </li>
      )
    }
    )
  }
  const handleClick = (category) => {
    // if (props.foodSwitch === 0 && category === props.currentCategory) {
    //   props.setFoodSwitch(1);
    //   props.onChangeCategory("");
    // }
    // else {
    //   props.setFoodSwitch(0);
    //   props.onChangeCategory(category);
    // }
    if (props.currentCategory === "")
      props.setFoodSwitch(0);
    props.onChangeCategory(category);
  };

  return (
    <div>
      {dropDown ? <div className="flex-inital md:w-36 divide-y divide-teal-400 font-semibold category relative z-10 pl-7">
        <h4
          style={{
            background: "var(--primary1)",
            color: "#ffffff",
            textTransform: "uppercase",
          }}
        >
          {" "}
          <button
            onMouseEnter={() => setDropDown(true)}
            onMouseLeave={() => setDropDown(false)}>
            <span className="md:inline-block hidden pt-1">Danh mục</span>
            <i className="fas fa-angle-down ml-1"></i> 
          </button>
        </h4>
        <ul
          onMouseEnter={() => setDropDown(true)}
          onMouseLeave={() => setDropDown(false)}
          className="divide-y font-normal text-xs"
          style={{
            background: "var(--primary4)",
            color: "#ffffff",
            textTransform: "uppercase",
          }}
        >
          {categoriesToRender}
        </ul>
      </div> :
        <button className="md:w-36"
          onMouseEnter={() => setDropDown(true)}
          onMouseLeave={() => setDropDown(false)}>
            <span className="md:inline-block hidden pt-1">Danh mục</span>
          <i className="fas fa-angle-down text-lg ml-1"
            style={{
              color: "#333",
              background: ""
            }}>
          </i>
        </button>
      }
    </div>
  );
}
export default DropDown