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
        bg-slate-100
        flex 
        justify-around	
        p-[16px] 
        shadow-[0_1px_3px_-2px_black]'>
        <div className="
            flex
            items-center
            gap-[10px]
            
        ">
           <img src={logo} alt="logo" className='
            object-cover
            w-10
            h-10
           ' /> 
           <p className='
                w-30
                h-10
                border-solid border-2 border-sky-500
                rounded-full
                p-1 px-2
                font-bold
              text-[#ff4141]
                text-5
                
            '>
                  App-Shop
            </p>
        </div>
        <ul className="
          flex
          items-center
          list-none
          gap-[50px]
          text-sky-500
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
                <Link to="/" >Одежда</Link> {menu==="shop"?test:""} 
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
                <Link to="/mens">Мужская</Link> {menu==="mens"?test:""} 
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
                <Link to="/womens">Женская</Link> {menu==="womens"?test:""} 
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
                <Link to="/kids">Детская</Link> {menu==="kids"?test:""} 
              </li>
        </ul>
        <div className="
          flex
          itemst-center
          gap-[45px]
        ">
          <Link to="/login">
            <button className='
              h-10
              px-4
              outline-none
              border-4
              border-solid
              rounded-[75px]
              border-sky-500
              text-sky-500
              text-5
              font-[500]
              bg-white
              cursor-pointer
              border-inherit
              active:bg-[#f3f3f3]
            '>Войти</button></Link>
            <Link to="/cart">
              <img src={cart_icon} alt="cart" className='
                object-cover
                w-10 h-10
              ' />
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
