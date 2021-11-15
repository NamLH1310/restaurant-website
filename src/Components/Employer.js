import { ContextList } from "../Context"
import React, { useContext } from "react"
import Employee from './eDisplay'

function Employer(props) {
	props.showSearchBar(true)
	props.showDropDown(false)
	let employeeList = useContext(ContextList).eList;
	console.log(2,employeeList);
	if (props.searchTerm !== ""){
		const newEmployeesList = employeeList.filter((order) => {
		  return Object.values(order).join(" ").toLowerCase().includes(props.searchTerm.toLowerCase());
		})
		employeeList = newEmployeesList;
	   }

	return (
		<React.Fragment>
			<div className="container mx-auto py-5" >
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
	
}

export default Employer
