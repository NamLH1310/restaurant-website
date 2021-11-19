import { useContext } from 'react'
import { ContextList } from '../Context'


function Order(emp) {
	const List = useContext(ContextList)
	return (
		<div className="container my-5 box-border max-w-full min-w-full px-5 mx-5 "  >

			<div className="grid grid-rows-3 grid-flow-col mx-auto border-2 border-solid bg-gray-100  rounded-2xl">

				<div className="row-span-3 px-3">
					<div>Ma don hang: {emp.value.id}</div>
					<div>Ho va ten: {emp.value.name}</div>
					<div>Thanh tien: {emp.value.cost}
					</div>
				</div>
				<div className="col-span-2">TOO: {emp.value.time}</div>
				<div className="col-span-2">Dien Thoai: {emp.value.pNumber}</div>
				<div className="row-span-3 border-separate"><button
					className='min-h-full min-w-full h-10 rounded-2xl  text-red-100 transition-colors duration-150 bg-red-500  focus:shadow-outline hover:bg-red-800'
					onClick={() => { return List.openModal(3, emp.value.id) }}>Edit</button></div>
			</div>

		</div>
	)
}
export default Order