import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";


export const Navbar = () => {
  
  const [menu, setMenu] = useState("shop");

  const test = (
    <span className='
                  border-none
                  w-[80%]
                  h-[3px]
                  rounded-[10px]
                  bg-[#ff4141]
    ' />
  )

  


  return (
    <div className='
        flex 
        justify-around	
        p-[16px] 
        shadow-[0_1px_3px_-2px_black]'>
        <div className="
            flex
            items-center
            gap-[10px]
        ">
           <img src={logo} alt="logo" /> 
           <p className='
              text-[#171717] 
                text-[38px]

            '>
                  TOP-Mebel
            </p>
        </div>
        <ul className="
          flex
          items-center
          list-none
          gap-[50px]
          text-[#626262]
          text-[20px]
          font-[500]
        ">
              <li 
                className='className=
                flex
                flex-col
                items-center
                justify-center
                gap-[3px]
                cursor-pointer'
                
                onClick={()=> {setMenu("shop")}}
              >
                <Link to="/" >Shop</Link> {menu==="shop"?test:""} 
              </li>
              <li className='
                flex
                flex-col
                items-center
                justify-center
                gap-[3px]
                cursor-pointer'
                onClick={()=> {setMenu("mens")}}
              >
                <Link to="/mens">Men</Link> {menu==="mens"?test:""} 
              </li>
              <li className='
                flex
                flex-col
                items-center
                justify-center
                gap-[3px]
                cursor-pointer'
                onClick={()=> {setMenu("womens")}}
                >
                <Link to="/womens">Women</Link> {menu==="womens"?test:""} 
              </li>
              <li className='
                flex
                flex-col
                items-center
                justify-center
                gap-[3px]
                cursor-pointer'
                onClick={()=> {setMenu("kids")}}
                >
                <Link to="/kids">Kids</Link> {menu==="kids"?test:""} 
              </li>
        </ul>
        <div className="
          flex
          itemst-center
          gap-[45px]
        ">
          <Link to="/login">
            <button className='
              w-[157px]
              h-[58px]
              outline-none
              border-4
              border-solid
              rounded-[75px]
              border-[#7a7a7a]
              text-[#515151]
              text-[20px]
              font-[500]
              bg-white
              cursor-pointer
              border-inherit
              active:bg-[#f3f3f3]
            '>Login</button></Link>
            <Link to="/cart">
              <img src={cart_icon} alt="cart" />
            </Link>
            <div className='
                w-[22px]
                h-[22px]
                flex
                justify-center
                items-center
                mt-[-5px]
                ml-[-55px]
                rounded-[11px]
                text-[14px]
                bg-red-700
                text-white

              '>0</div>
        </div>
    </div>
  )
}
