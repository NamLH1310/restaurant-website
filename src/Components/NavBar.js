import './../App.css';
import React,{useContext,useRef} from 'react';
import logo from './../Assets/logo.png'
import {Link} from 'react-router-dom'
import {ContextList} from '../Context'
export default function NavigationBar(props) {
  const Cart = useContext(ContextList).Cart;
  const User = useContext(ContextList).User;
  const Logout = useContext(ContextList);
  const inputEl = useRef("");
  const getSearchTerm = () =>{
    props.searchKeyWord(inputEl.current.value);
  }
    return(
    <div className="w-full flex flex-col h-34">
      <div className="w-full h-6 bg-gray-800">
        <ul className="text-xs text-gray-200">
          <li className=" float-right font-extralight pb-2 pr-9 pt-2"><Link to="./sign-in">Nhân viên</Link></li>
        </ul>
      </div>
      <div className="w-full h-28 bg-gray-200 text-black flex flex-row md:flex-row">
        <img className="object-contain h-28" alt="asdsad" src={logo} />
        <div className="flex flex-grow flex-col h-28 pt-4 space-y-4 items-center">
          <div className="text-sm font-bold text-gray-700 space-x-16">
              <Link to="/" className="border-b-2 hover:border-black duration-1000 mx-auto" onClick={() => { return Logout.logOut() }}>{(User === "Employer" | User === "Employee") ? "ĐĂNG XUẤT":"TRANG CHỦ"}</Link>
              {/* <Link to="/" className="hidden md:inline border-b-2 hover:border-black duration-1000">KHUYẾN MÃI</Link>
              <Link to="/" className="hidden md:inline border-b-2 hover:border-black duration-1000">TIN TỨC</Link>
              <Link to="/" className="hidden md:inline border-b-2 hover:border-black duration-1000">GIỚI THIỆU</Link> */}
          </div>
          <div className="container flex justify-center items-center px-4 sm:px-6 lg:px-8">
            <div className="relative"> <input type="text" className="h-10 sm:w-80 w-40 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none" placeholder="Tìm kiếm..." value ={props.term} onChange={getSearchTerm} ref={inputEl}/>
              <div className="absolute top-2 right-3"> <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> </div>
            </div>
          </div>
        </div>
        <div className="flex-shrink h-28 pr-8 pt-16">
            <button style={{ visibility: (User === "") ? "visible" :"hidden"}} className="relative bg-primarycolor hover:bg-primarybold text-white text-xs font-bold py-2 px-4 rounded">
          {Cart.length} món - {Cart.reduce( (total,food) =>{return total + food.price},0)} VNĐ
          </button>
        </div>
      </div>
      <div className="w-full h-1 bg-gray-600"></div>
    </div>
    )
    
}