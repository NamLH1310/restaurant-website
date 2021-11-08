import {useContext} from 'react'
import {ContextList} from '../Context'


function Employee(emp) {
	const List = useContext(ContextList)
	
	return (
		<div className="container my-5 box-border  w-full px-5 mx-5 "  >
			<div className="grid grid-cols-12 gap-4  mx-auto border-4 border-solid bg-gray-200">
				<div className="grid col-span-9 border-4 rounded-lg border-green-100 grid-rows-3 gap-2 bg-white pt-4">
					<div className="row-span-1  ">
						<div className="mx-auto content-center h-12 mr-12 pl-20"><span className="font-sans font-bold font-black mx-3" > Tai khoan nhan vien: </span>{emp.value.id} </div></div>
					<div className="row-span-1 grid grid-cols-12 gap-2 pl-20">		
											
						<div className=" col-span-6 h-12"><span className="font-sans font-bold font-black mx-3" >  Full name: &nbsp;</span>{emp.value.name}</div>
						<div className="col-span-6 content-center h-12 mx-auto"><span className="font-sans font-bold font-black mx-3" > Shift:</span>
							{emp.value.shift.map((e) => { return <span className='px-2'>{e}</span> })}
							</div>

					</div>
					<div className="row-span-1 h-12">
					
						<div className="pl-20"><span className="font-sans font-bold font-black mx-3" >  Tel: </span>{emp.value.pNumber}</div>
				</div>
				
					
				</div>
				<div className="col-span-3 "><button
					className='rounded-lg min-h-full min-w-full h-10  text-red-100 transition-colors duration-150 bg-red-500  hover:text-grey-200 focus:shadow-outline hover:bg-red-800'
					onClick={() => { return List.openModal(2, emp.value.id) }}><span className=" font-mono saturate-100 text-5xl">Edit</span></button>
				</div>
			</div>
			
		</div>
	)
}
export default Employee