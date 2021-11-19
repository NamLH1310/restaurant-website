import Modal from 'react-modal'
import { useState } from 'react';
export default function ModalEmployee({ modalEmployeeOpen, setModalEmployeeOpen, selectedEmployee, setSelectedEmployee }) {
    function closeModal() {
        setModalEmployeeOpen(false);
    }
    const [editName, setEditName] = useState('');
    const [editShift, setEditShift] = useState('');
    const [editPhoneNumber, setEditPhoneNumber] = useState('');
    function handleInput(){
        const newEmployee ={
            id: selectedEmployee.id,
            name: editName,
            pNumber: editPhoneNumber,
            shift: editShift.split(' ').map(Number)
        }
    }
    return (
        <>
            {selectedEmployee ?
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
                        <div className="relative "><i className="fa fa-id-card" /> Mã nhân viên: {selectedEmployee.id}</div>
                        <div clasName="inline-block">
                            <i className="fa fa-signature" />Tên nhân viên:
                            <input type="text" className="font-semibold text-lg" onChange={(e) => { setEditName(e.target.value) }} defaultValue={selectedEmployee.name} />
                        </div>
                        <div>
                            <i className="fa fa-clock" /> Ca làm việc:
                            <input type="text" className="font-semibold text-lg" onChange={(e) => { setEditShift(e.target.value) }} defaultValue={selectedEmployee.shift} />
                        </div>
                        <div>
                            <i className="fa fa-phone" /> Số điện thoại:
                            <input type="number" className="font-semibold text-lg" onChange={(e) => { setEditPhoneNumber(e.target.value) }} defaultValue={selectedEmployee.pNumber} />
                        </div>
                    </div>
                    <div className="text-center pt-6">
                        <button onClick={()=>{handleInput()}}className="btn bg-primarycolor hover:bg-primarybold font-bold">Xác nhận</button>
                        <button onClick={() => { closeModal(); setSelectedEmployee(null); setEditName(''); setEditPhoneNumber(''); setEditShift('') }} className="btn  bg-red-500 hover:bg-red-800 font-bold" >Hủy</button>
                    </div>
                </Modal>)
                : null}
        </>
    )
}