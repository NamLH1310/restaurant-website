import { ContextList } from "../Context"
import React, { useContext } from "react"
import Order from './oDisplay'

function CheckOrder() {
	const eList = useContext(ContextList)

	return (
		<React.Fragment>
			<div className="container mx-auto py-5" >
				<div className="grid grid-cols-1 my-2 mx-auto" >
					{	eList.oList.map(e => {
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
