import './../App.css';
import avatar from './..//Assets/avatar.png'
import chef from './../Assets/chef.png'
import Paypal from './PayPal';
import React, { useContext, useState } from 'react';
import { ContextList } from '../Context';
import { NotificationManager } from 'react-notifications';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


export default function Payment(props) {
    props.showSearchBar(false)
    props.showDropDown(false)
    const { totalPrice,setCartItems } = useContext(ContextList);
    const invoice = {
        description: 'Thanh toan thuc an',
        price: (totalPrice / 23000).toFixed(2)
    }
    const [name, setName] = useState('')
    const [phoneNumber, setphoneNumber] = useState('')
    const [address, setAddress] = useState('')
    const [validInput, setValidInput] = useState(false)
    const [isSubmit, setisSubmit] = useState(false)
    const [successPayment, setSuccessPayment] = useState(false)
    if (successPayment)
        {
            setCartItems([])
            return (<Redirect to='/'></Redirect>)
        }
    function handleInput() {
        if (name !== '' && address !== '' && phoneNumber !== '') {
            if (!isSubmit) {
                setisSubmit(true)
                setValidInput(true)
            }
            else {
                setValidInput(false)
                setisSubmit(false)
            }
            axios.post('http://127.0.0.1:8000/api/orders/', {
                name: name,
                phone_number: phoneNumber,
                cost: totalPrice,
            })
        }
        else {
            setValidInput(false)
            if (!isSubmit)
                NotificationManager.warning('Vui lòng điền đầy đủ thông tin', 'Thanh toán', 1500)
        }
    }
    
    return (

        <div className="container w-8/12 md:mx-auto mx-20 flex flex-col justify-center items-center lg:grid lg:grid-cols-2 mt-10 py-9 rounded-3xl border-2 border-opacity-75 border-gray-400 bg-white">
            <form className="flex flex-col justify-center items-center w-1/2 mx-60">
                <img src={avatar} alt="none" className="w-20 hover:scale-105 transition-all duration-500 transform" />
                <div className="mt-3 font-display font-bold text-lg text-gray-700 text-center border-2 rounded-full border-primarycolor py-2 px-4">
                    THANH TOÁN
                </div>
                <div className="relative">
                    
                    <h3 className="mt-5 mb-2 font-display font-bold text-base text-gray-700 text-left">
                        Họ và tên
                    </h3>
                    <i className="fa fa-user absolute text-gray-400 text-base" />
                    <input readOnly={validInput} onChange={(e) => setName(e.target.value)} name="Name" type="text" placeholder="Nhập tên của bạn" o className="pl-6 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 text-base" />
                </div>
                <div className="relative">
                    <h3 className="mt-5 mb-2 font-display font-bold text-base text-gray-700 text-left" >
                        Địa chỉ
                    </h3>
                    <i className="fa fa-home absolute text-gray-400 text-base" />
                    <input readOnly={validInput} onChange={(e) => setAddress(e.target.value)} type="text" name="Address" placeholder="Nhập địa chỉ" className="pl-6 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 text-base" />
                </div>
                <div className="relative">
                    <h3 className="mt-5 mb-2 font-display font-bold text-base text-gray-700 text-left" >
                        Số điện thoại
                    </h3>
                    <i className="fa fa-phone absolute text-gray-400 text-base" />
                    <input readOnly={validInput} onChange={(e) => setphoneNumber(e.target.value)} type="number" name="Phonenumber" placeholder="Nhập số điện thoại" className="pl-6 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 text-base" />
                </div>
                <div id="button" style={{ cursor: "pointer" }} onClick={() => { handleInput() }} className=" py-2 px-10 bg-primarycolor rounded-full text-white font-bold uppercase text-sm md:text-base mt-4 transform hover:translate-y-1 transition-all duration-500">
                    {isSubmit ? "Chỉnh sửa" : "Xác nhận"}
                </div>
                <div className="pt-7">
                    {validInput ?
                        <Paypal invoice={invoice} setOrders={()=>{props.setOrders()}} name={name} cost={totalPrice} phoneNumber={phoneNumber} setSuccessPayment={setSuccessPayment}></Paypal>
                        : null}
                </div>
            </form>
            <img src={chef} alt="chef" className="hidden xl:block w-2/3 hover:scale-105 transition-all duration-500 transform" />
        </div>

    )
}