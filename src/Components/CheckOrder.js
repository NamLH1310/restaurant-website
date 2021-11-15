import { ContextList } from "../Context"
import React, { useContext } from "react"
import Order from './oDisplay'

function CheckOrder(props) {
	props.showSearchBar(true)
	props.showDropDown(false)
	let List = useContext(ContextList).oList;
	if (props.searchTerm !== ""){
		const newOrdersList = List.filter((order) => {
		  return Object.values(order).join(" ").toLowerCase().includes(props.searchTerm.toLowerCase());
		})
		List = newOrdersList;
	   }
	return (
		<React.Fragment>
			<div className="container mx-auto py-5" >
				<div className="grid grid-cols-1 my-2 mx-auto" >
					{	List.map(e => {
						return (
							<Order value={e} key={e.id} />
						)
					})
					}
				</div>

			</div>
		</React.Fragment>
	)

}

export default CheckOrder
