import { ContextList } from "../Context"
import React, { useContext } from "react"
import Order from './oDisplay'
import {Redirect} from 'react-router-dom'

function CheckOrder(props) {
	props.showSearchBar(true)
	props.showDropDown(false)
  let List = useContext(ContextList).oList;
  const user = useContext(ContextList).User;
	if (props.searchTerm !== ""){
		const newOrdersList = List.filter((order) => {
		  return Object.values(order).join(" ").toLowerCase().includes(props.searchTerm.toLowerCase());
		})
		List = newOrdersList;
  }
  if (user !== 'Employee') return (<Redirect to='/Default'></Redirect>)
	return (
    <React.Fragment>
      {/* <div className="container mx-auto py-5" >
				<div className="grid grid-cols-1 my-2 mx-auto" >
					{	List.map(e => {
						return (
							<Order value={e} key={e.id} />
						)
					})
					}
				</div>

			</div> */}
      <div className="bg-white w-full pb-20">
      <div>
        <h2 className="text-center font-bold text-3xl text-gray-700 font-sans py-10 pr-20">
          Thông tin đơn hàng
        </h2>
      </div>
      <table className="border-collapse border-[1px] border-gray-900 table-fixed w-5/6 mx-auto pt-5 mb-20">
        <thead>
          <tr>
            <th className="w-2/12 border-collapse border-[1px] border-gray-900 bg-yellow-50 h-10">
              ID
            </th>
            <th className="w-3/12 border-collapse border-[1px] border-gray-900 bg-yellow-50 h-10">
              Họ và tên
            </th>
            <th className="w-2/12 border-collapse border-[1px] border-gray-900 bg-yellow-50 h-10">
              Thành tiền
            </th>
            <th className="w-2/12 border-collapse border-[1px] border-gray-900 bg-yellow-50 h-10">
              Thời gian
            </th>
            <th className="w-2/12 border-collapse border-[1px] border-gray-900 bg-yellow-50 h-10">
              Số điện thoại
            </th>
            <th className="w-2/12 border-collapse border-[1px] border-gray-900 bg-yellow-50 h-10">
              Chỉnh sửa
            </th>
          </tr>
        </thead>
        <tbody className="">
          {List.map((e) => {
            return <Order value={e} key={e.id} />;
          })}
        </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default CheckOrder;
