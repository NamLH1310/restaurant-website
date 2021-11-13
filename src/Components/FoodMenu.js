import { ContextList } from "../Context"
import React, { useContext } from "react"
import Food from './FoodDisplay'

function FoodMenu(props) {
    let foodList = useContext(ContextList).foods;
	if (props.searchTerm !== ""){
		const newFoodList = foodList.filter((food) => {
            console.log(food.name);
		  return food.name.toLowerCase().includes(props.searchTerm.toLowerCase());
		})
		foodList = newFoodList;
	   }
    return (
        <div>
            {(
                    <div className="flex-1 grid grid-cols-5 gap-2 mr-5 ml-5 list-food">
                        {foodList.map(food => {
								return (
									<Food value={food} key={food.id}/>
								)
							})
						}
                    </div>
                )
            }
        </div>
    )
}

export default FoodMenu
