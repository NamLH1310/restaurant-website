import Modal from 'react-modal'
// import { useState, useContext } from 'react';
import axios from 'axios';


export default function ModalEmployee({
    modalEmployeeOpen,
    setModalEmployeeOpen,
    setEmployee,
    employeeID,
    employeeName,
    setEmployeeName,
    employeePhoneNumber,
    setEmployeePhoneNumber,
    employeeShifts,
    setEmployeeShifts,
}) {
    function closeModal() {
        setModalEmployeeOpen(false);
    }
    // const [editName, setEditName] = useState(selectedEmployee.name);
    // const [editShift, setEditShift] = useState(selectedEmployee.shifts.join(' '));
    // const [editPhoneNumber, setEditPhoneNumber] = useState(selectedEmployee.phone_number);
    function handleInput() {
        // const editedEmployeeData = {
        //     id: selectedEmployee.id,
        //     name: editName,
        //     phone_number: editPhoneNumber,
        //     shifts: editShift.split(' ').map(Number)
        // }
        // console.log(editedEmployeeData);
        axios
            .put(
                `http://127.0.0.1:8000/api/employees/${employeeID}/`, {
                    id: employeeID,
                    name: employeeName,
                    phone_number: employeePhoneNumber,
                    shifts: employeeShifts.split(' ').map(Number)
                }
                )
            .then(res => {
                console.log(res.data)
                setEmployee('');
            }).catch(err => {
                alert(err.respone)
            })
        closeModal();
    }
    console.log(typeof editName);
    return (
        <>
            {
                (<Modal
                    isOpen={modalEmployeeOpen}
                    onRequestClose={closeModal}
                    className="  modal-employee bg-gray-50 h-auto ring-4 ring-gray-400 rounded-2xl "
                    ariaHideApp={false}
                    overlayClassName="overlay"
                >
                    <h5 className="p-1 bg-[#83c75d] w-full mx-auto  text-center rounded-2xl border-2 border-primarycolor font-semibold text-base">
                        Thông tin nhân viên
                    </h5>
                    <div className="">
                    <div className=" pl-6 text-lg font-semibold space-y-3 pt-3 lg:mb-12 md:mb-20 mb-14 lg:h-56">
                        <div className="relative "><i className="fa fa-id-card" /><span className="hidden lg:inline"> Mã nhân viên:</span> {employeeID}</div>
                        <div className="inline-block">
                            <i className="fa fa-signature" /><span className="hidden lg:inline">Tên nhân viên:</span>
                            <input type="text" className="font-semibold text-lg w-10 lg:w-32 sm:ml-2 bg-gray-50 border-b-2 border-primarybold" onChange={(e) => {setEmployeeName(e.target.value)}} defaultValue={employeeName} />
                        </div>
                        <div>
                            <i className="fa fa-clock" /> <span className="hidden lg:inline">Ca làm việc:</span>
                            <input type="text" className="font-semibold text-lg w-10 md:ml-2 lg:ml-6 bg-gray-50 border-b-2 border-primarybold" onChange={(e) => {setEmployeeShifts(e.target.value)}} defaultValue={employeeShifts} />
                        </div>
                        <div>
                            <i className="fa fa-phone" /> <span className="hidden lg:inline">Số điện thoại:</span>
                            <input type="text" className="font-semibold text-lg w-10 lg:w-32 sm:ml-2 bg-gray-50 border-b-2 border-primarybold" onChange={(e) => {setEmployeePhoneNumber(e.target.value)}} defaultValue={employeePhoneNumber} />
                        </div>
                    </div>
                    <div className="text-center flex flex-row justify-center relative">
                        <button onClick={() => { handleInput() }} className="btn bg-primarycolor hover:bg-primarybold md:font-bold ml-4">Xác nhận</button>
                        <button onClick={() => { closeModal() }} className="btn  bg-red-500 hover:bg-red-800 hidden md:inline" >Hủy</button>
                    </div>
                    </div>
                </Modal>)
                }
        </>
    )
}