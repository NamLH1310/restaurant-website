import Modal from "react-modal";

function closeModal(setEmployeeData, setEmployeeModalOpen) {
  setEmployeeData(null);
  setEmployeeModalOpen(false);
}

function EmployeeModalProfile({ employeeData, setEmployeeData, employeeModalOpen, setEmployeeModalOpen }) {
  return (
    <Modal
      isOpen={employeeModalOpen}
      onRequestClose={() => closeModal(setEmployeeData, setEmployeeModalOpen)}
      className="modal-cart"
      overlayClassName="overlay"
      ariaHideApp={false}
    >

    </Modal>
  )
}

export default EmployeeModalProfile;