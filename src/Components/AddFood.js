import Modal from 'react-modal'
import axios from "axios";
import { useState } from 'react';
import { Redirect } from 'react-router-dom';


export default function AddFood({
    modalAddFoodOpen,
    setModalAddFoodOpen,
    categories,
    setProducts
}) {
    const [newFoodName, setNewFoodName] = useState('')
    const [newFoodPrice, setNewFoodPrice] = useState(0)
    const [newFoodImage, setNewFoodImage] = useState('')
    const [newFoodDescription, setNewFoodDescription] = useState('')
    const [selectedNewFoodCategory, setSelectedNewFoodCategory] = useState(0)
    const categoriestoSelect = [...categories]
    categoriestoSelect.pop()
    function closeModal() {
        setNewFoodName('')
        setNewFoodPrice(0)
        setNewFoodImage('')
        setNewFoodDescription('')
        setSelectedNewFoodCategory(0)
        setModalAddFoodOpen(false)
    }
    function handleInput() {
        console.log(newFoodName)
        console.log(newFoodPrice)
        console.log(newFoodImage)
        console.log(newFoodDescription)
        console.log(selectedNewFoodCategory)
        axios.post(
            'http://127.0.0.1:8000/api/products/',
            {
                name: newFoodName,
                price: newFoodPrice,
                quantity: 0,
                img: newFoodImage,
                description: newFoodDescription,
                is_top: false,
                category: [selectedNewFoodCategory + 1, 8]
            }
        ).then(res => {
            console.log(res.data)
            setProducts()
        }).catch(res => {
            alert(res)
        })
        closeModal();
    }
    return (
        <div>
            <Modal
                isOpen={modalAddFoodOpen}
                onRequestClose={closeModal}
                className="  modal-addfood bg-gray-50 h-auto ring-4 ring-gray-400 rounded-2xl "
                ariaHideApp={false}
                overlayClassName="overlay"
            >
                <h5 className="p-1 bg-[#83c75d] w-full mx-auto  text-center rounded-2xl border-2 border-primarycolor font-semibold text-base">
                    Thêm món mới
                </h5>
                <div className="">
                    <div className=" pl-6 text-lg font-semibold space-y-3 pt-3 lg:mb-16 lg:h-56">
                        <div className="block">
                            <i className="fa fa-utensils" /><span className="hidden lg:inline">Tên món ăn</span>
                            <input type="text" className="font-semibold text-lg w-1/2 sm:ml-2 bg-gray-50 border-b-2 border-primarybold" onChange={(e) => setNewFoodName(e.target.value)} />
                        </div>
                        <div>
                            <i className="fa fa-dollar-sign" /> <span className="hidden lg:inline">Giá tiền</span>
                            <input type="number" className="font-semibold text-lg w-1/2 sm:ml-2 bg-gray-50 border-b-2 border-primarybold" onChange={(e) => { setNewFoodPrice(e.target.value) }} />
                        </div>
                        <div className="block">
                            <i className="fa fa-image" /><span className="hidden lg:inline">Hình ảnh</span>
                            <input type="text" className="font-semibold text-lg w-1/2 sm:ml-2 bg-gray-50 border-b-2 border-primarybold" onChange={(e) => { setNewFoodImage(e.target.value) }} />
                        </div>
                        <div className="block">
                            <i className="fa fa-clipboard-list" /><span className="hidden lg:inline">Danh mục</span>
                            <select onChange={(e) => setSelectedNewFoodCategory(e.target.selectedIndex)} className="font-semibold text-lg w-10 lg:w-32 sm:ml-2 bg-gray-50 border-b-2 border-primarybold">
                                {
                                    categoriestoSelect.map(((category) => {
                                        return (
                                            <option key={category.id} value={category.name}> {category.name}</option>
                                        )
                                    }
                                    ))
                                }
                            </select>
                        </div>
                        <div className="block">
                            <i className="fa fa-comment" /><span className="hidden lg:inline">Mô tả món</span>
                            <div>
                                <textarea className="font-semibold text-lg w-10/12 h-20 sm:ml-2 bg-gray-50 border-2 rounded-md border-primarybold" onChange={(e) => { setNewFoodDescription(e.target.value) }} />
                            </div>
                        </div>
                    </div>
                    <div className="text-center flex flex-row justify-center">
                        <button onClick={() => { handleInput() }} className="btn bg-primarycolor hover:bg-primarybold md:font-bold ml-4">Xác nhận</button>
                        <button onClick={() => { closeModal() }} className="btn  bg-red-500 hover:bg-red-800 hidden md:inline" >Hủy</button>
                    </div>
                </div>
            </Modal >
        </div >
    )
}