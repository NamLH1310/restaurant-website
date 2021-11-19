import './../App.css';
import avatar from './../Assets/avatar.png'
import chef from './../Assets/chef.png'
import Paypal from './PayPal';
import React,{useContext,useState} from 'react';
import { ContextList } from '../Context';


export default function Payment(props) {
    props.showSearchBar(false)
    props.showDropDown(false)
    const {totalPrice} = useContext(ContextList);
    const invoice = {
        description:'Thanh toan thuc an',
        price: (totalPrice/23000).toFixed(2)
    }
    
    return (

        <div className="container w-8/12 md:mx-auto mx-20 flex flex-col justify-center items-center lg:grid lg:grid-cols-2 mt-16 py-16 rounded-3xl border-2 border-opacity-75 border-gray-400 bg-white">
            <form className="flex flex-col justify-center items-center w-1/2 mx-60">
                <img src={avatar} alt="none" className="w-20" />
                <div className="mt-3 font-display font-bold text-lg text-gray-700 text-center border-2 rounded-full border-primarycolor py-2 px-4">
                    THANH TOÁN 
                </div>
                <div className="relative">
                    <h3 className="mt-5 mb-2 font-display font-bold text-base text-gray-700 text-left">
                        Họ và tên
                    </h3>
                    
                    <input name="Name" type="text" placeholder="Nhập tên của bạn" o className="pl-6 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 text-base" />
                </div>
                <div className="relative">
                    <h3 className="mt-5 mb-2 font-display font-bold text-base text-gray-700 text-left" >
                        Số điện thoại
                    </h3>
                    
                    <input type="text" name="Phonenumber" placeholder="Nhập số điện thoại" className="pl-6 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 text-base" />
                </div>
                <Paypal invoice={invoice}></Paypal>
            </form>
            <img src={chef} alt="chef" className="hidden xl:block w-2/3 hover:scale-105 transition-all duration-500 transform" />
        </div>

    )
}