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
                    <h5 className="p-1 bg-[#83c75d] w-full mx-auto  text-center rounded-2xl border-2 border-primarycolor font-semibold text-lg">
                        Thông tin nhân viên
                    </h5>
                    <div className="pl-10 text-lg font-semibold space-y-3 pt-3">
                        <div className="relative "><i className="fa fa-id-card" /> Mã nhân viên: {employeeID}</div>
                        <div className="inline-block">
                            <i className="fa fa-signature" />Tên nhân viên:
                            <input type="text" className="font-semibold text-lg" onChange={(e) => {setEmployeeName(e.target.value)}} defaultValue={employeeName} />
                        </div>
                        <div>
                            <i className="fa fa-clock" /> Ca làm việc:
                            <input type="text" className="font-semibold text-lg" onChange={(e) => {setEmployeeShifts(e.target.value)}} defaultValue={employeeShifts} />
                        </div>
                        <div>
                            <i className="fa fa-phone" /> Số điện thoại:
                            <input type="text" className="font-semibold text-lg" onChange={(e) => {setEmployeePhoneNumber(e.target.value)}} defaultValue={employeePhoneNumber} />
                        </div>
                    </div>
                    <div className="text-center pt-6">
                        <button onClick={() => { handleInput() }} className="btn bg-primarycolor hover:bg-primarybold font-bold">Xác nhận</button>
                        <button onClick={() => { closeModal() }} className="btn  bg-red-500 hover:bg-red-800 font-bold" >Hủy</button>
                    </div>
                </Modal>)
                }
        </>
    )
}