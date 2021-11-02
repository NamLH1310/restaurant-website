import { ContextList } from "../Context"
import React, { useContext } from "react"
import Employee from './eDisplay'

function Employer() {
	const eList = useContext(ContextList)
	
	return (
		<React.Fragment>
			<div className="container mx-auto py-5" >
				<div className="grid grid-cols-1 my-2 mx-auto" >
						{eList.eList.map(e => {
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
