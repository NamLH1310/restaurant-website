import './../App.css';
import avatar from './../Assets/avatar.png'
import chef from './../Assets/chef.png'
import React,{useContext,useState} from 'react';
import { Link } from 'react-router-dom'
import { ContextList } from '../Context';


export default function LoginForm() {
    const List = useContext(ContextList)
    const [Name, SetName] = useState("Name")
    const [Pass, SetPass] = useState("Pass")
    const [Valid, SetValid] = useState(false);
    
    function handleInput(e) {
        console.log(e)
        console.log(Name)
        console.log(Pass)
    }
    
    return (

        <div className="container w-8/12 md:mx-auto mx-20 flex flex-col justify-center items-center lg:grid lg:grid-cols-2 mt-16 py-16 rounded-3xl border-2 border-opacity-75 border-gray-400 bg-white">
            <form className="flex flex-col justify-center items-center w-1/2 mx-60">
                <img src={avatar} alt="none" className="w-20" />
                <div className="mt-3 font-display font-bold text-lg text-gray-700 text-center border-2 rounded-full border-primarycolor py-2 px-4">
                    TÀI KHOẢN
                </div>
                <div className="relative">
                    <h3 className="mt-5 mb-2 font-display font-bold text-base text-gray-700 text-left">
                        Tên đăng nhập
                    </h3>
                    <i className="fa fa-user absolute text-gray-400 text-base" />
                    <input name="Username" type="text" placeholder="Username" onChange={e=>{SetName(e.target.value)}} className="pl-6 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 text-base" />
                </div>
                <div className="relative">
                    <h3 className="mt-5 mb-2 font-display font-bold text-base text-gray-700 text-left" >
                        Mật khẩu
                    </h3>
                    <i className="fa fa-lock absolute text-gray-400 text-base" />
                    <input type="password" name="password" placeholder="Password" onChange={e=>{SetPass(e.target.value)}} className="pl-6 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 text-base" />
                </div>
                <div id="button" style={{cursor:"pointer"}} onClick={() => { ; handleInput(); SetValid(List.SetUser(Name, Pass)) }} className=" py-2 px-16 bg-primarycolor rounded-full text-white font-bold uppercase text-sm md:text-base mt-4 transform hover:translate-y-1 transition-all duration-500">Validate</div>
                <Link style={{ display: (Valid) ? "block": "none"}} to={() => {
                    console.log(List.User)
                    switch (List.User) {
                        case "Employee":
                            return "/check"
                            //break;
                        case "Employer":
                            return "/Employer"
                            //break;
                        default:
                            return "/"
                            //break;
                    }
                
                }} className="py-2 px-16 bg-primarycolor rounded-full text-white font-bold uppercase text-sm md:text-base mt-4 transform hover:translate-y-1 transition-all duration-500">Đăng nhập</Link>
            </form>
            <img src={chef} alt="chef" className="hidden xl:block w-2/3 hover:scale-105 transition-all duration-500 transform" />
        </div>

    )
}