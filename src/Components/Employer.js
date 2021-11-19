import { ContextList } from "../Context"
import React, { useContext } from "react"
import Employee from './eDisplay'
import {Redirect} from 'react-router-dom'

function Employer(props) {
	props.showSearchBar(true)
	props.showDropDown(false)
  let employeeList = useContext(ContextList).eList;
  const user = useContext(ContextList).User;
	if (props.searchTerm !== ""){
		const newEmployeesList = employeeList.filter((order) => {
		  return Object.values(order).join(" ").toLowerCase().includes(props.searchTerm.toLowerCase());
		})
		employeeList = newEmployeesList;
	   }
  if(user!=='Employer')return (<Redirect to='/Default'></Redirect>)
	return (
    <React.Fragment>
      {/* <div className="container mx-auto py-5">
        <div className="grid grid-cols-1 my-2 mx-auto">
          {employeeList.map((e) => {
            return <Employee value={e} key={e.id} />;
          })}
        </div>
      </div> */}
      <div className="bg-white w-full">
      <div >
        <h2 className="text-center font-bold text-3xl text-gray-700 font-sans py-10">
          Thông tin nhân viên
        </h2>
      </div>
      <table class="border-collapse border-[1px] border-gray-900 table-fixed w-5/6 mx-auto pt-5 mb-20">
        <thead>
          <tr>
            <th class="w-1/12 border-collapse border-[1px] border-gray-900 bg-yellow-50 h-10">
              EID
            </th>
            <th class="w-3/12 border-collapse border-[1px] border-gray-900 bg-yellow-50 h-10">
              Họ và tên
            </th>
            <th class="w-3/12 border-collapse border-[1px] border-gray-900 bg-yellow-50 h-10">
              Ca làm việc
            </th>
            <th class="w-3/12 border-collapse border-[1px] border-gray-900 bg-yellow-50 h-10">
              Số điện thoại
            </th>
            <th class="w-2/12 border-collapse border-[1px] border-gray-900 bg-yellow-50 h-10">
              Chỉnh sửa
            </th>
          </tr>
        </thead>
        <tbody className="">
          {employeeList.map((e) => {
            return <Employee value={e} key={e.id} />;
          })}
        </tbody>
        </table>
      </div>
    </React.Fragment>
  );
	
}

export default Employer
