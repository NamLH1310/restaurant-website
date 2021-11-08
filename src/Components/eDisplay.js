import {useContext} from 'react'
import {ContextList} from '../Context'


function Employee(emp) {
	const List = useContext(ContextList)
	return (
		<div className="container my-5 box-border max-w-full w-full px-5 mx-5 "  >
			<div className="grid grid-cols-12 gap-4 grid-flow-col mx-auto border-4 border-solid bg-gray-200">
				<div className="col-span-9 border-4 border-green-100 grid-rows-3 gap-4 bg-white">
					<div className="row-span-1 content-center ">
						<div className="mx-auto">Tai khoan nhan vien: {emp.value.id} </div></div>
					<div className="row-span-2 px-3 ">		
						<div className="gird grid-cols-2 gap-10">						
						<div className="font-bold col-span-1">Ho va ten: {emp.value.name}</div>
						<div className="col-span-1">Ca lam viec:
							{emp.value.shift.map((e) => { return <span className='px-2'>{e}</span> })}
							</div>
						</div>
					</div>
					<div className="row-span-1 px-3">
					
						<div className="col-span-2">Dien Thoai: {emp.value.pNumber}</div>
				</div>
				
					
				</div>
				<div className="col-span-3 "><button
					className='rounded-lg min-h-full min-w-full h-10  text-red-100 transition-colors duration-150 bg-red-500  focus:shadow-outline hover:bg-red-800'
					onClick={() => { return List.openModal(2, emp.value.id) }}>Edit</button></div>
			</div>
			
		</div>
	)
}
export default Employee