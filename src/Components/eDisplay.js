import {useContext} from 'react'
import {ContextList} from '../Context'


function Employee(emp) {
	// const List = useContext(ContextList)

	return (
		<div className="container my-5 box-border max-w-full min-w-full px-5 mx-5 "  >
			<div className="grid grid-rows-3 grid-flow-col mx-auto border-4 border-solid bg-gray-100">
				<div className="row-span-3 px-3">				<div>Tai khoan nhan vien: { emp.value.id}</div>
					<div>Ho va ten: {emp.value.name}</div>
					<div>Ca lam viec:
					{emp.value.shift.map((e) => { return <span className='px-2'>{e}</span>})}
					</div>
				</div>
				<div className="col-span-2"></div>
				<div className="col-span-2">Dien Thoai: {emp.value.pNumber}</div>
				<div className="row-span-3 "><button
					className='min-h-full min-w-full h-10  text-red-100 transition-colors duration-150 bg-red-500  focus:shadow-outline hover:bg-red-800'
					onClick={() => {}}>Edit</button></div>
			</div>
			
		</div>
	)
}
export default Employee