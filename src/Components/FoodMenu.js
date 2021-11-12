import { ContextList } from "../Context"
import React, { useContext } from "react"
import Food from './FoodDisplay'

function FoodMenu(props) {
    const foodList = useContext(ContextList).foods;
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
