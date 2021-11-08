import { ContextList } from "../Context"
import React, { useContext } from "react"
import Order from './oDisplay'
import Default from "./Default";

function CheckOrder(props) {
	let List = useContext(ContextList).oList;
	let User = useContext(ContextList).User;
	if (props.searchTerm !== ""){
		const newOrdersList = List.filter((order) => {
		  return Object.values(order).join(" ").toLowerCase().includes(props.searchTerm.toLowerCase());
		})
		List = newOrdersList;
	}
	if (User === 'Employee')
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
	else return (
		<Default></Default>
	)

}

export default CheckOrder
