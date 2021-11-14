import { ContextList } from "../Context"
import React, { useContext } from "react"
import Employee from './eDisplay'
import Default from "./Default";

function Employer(props) {
	let employeeList = useContext(ContextList).eList;
	let User = useContext(ContextList).User
	if (props.searchTerm !== ""){
		const newEmployeesList = employeeList.filter((order) => {
		  return Object.values(order).join(" ").toLowerCase().includes(props.searchTerm.toLowerCase());
		})
		employeeList = newEmployeesList;
	}
	if (User === "Employer")
	return (
		
		<React.Fragment>
			<div className="container mx-auto py-5 " >
				<div className="grid grid-cols-1 my-2 mx-auto" >
						{employeeList.map(e => {
								return (
									<Employee value={e} key={ e.id}/>
								)
							})
						}
						
				</div>

			</div>
		</React.Fragment>
		)
	else return(<Default></Default>)
	
}

export default Employer
