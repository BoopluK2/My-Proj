import React from 'react'

import logo from "../Assets/logo.png";

const Footer = () => {
  return (
    <div className='
        flex
        flex flex-col
        justify-center
        items-center
        gap-[50px]
    '>
        <div className="
            flex
            flex items-center
            gap-[20px]
            mt-9

        ">
            <img className="object-cover w-10 h-10" src={logo} alt=""
           
            />
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
        <div className="
            flex
            flex flex-col
            items-center
            gap-[30px]
            w-[100%]
            mt-[30px]
            text-sky-500
            text-[20px]
        ">
            <hr className='
                w-[80%]
                border-none
                rounded-[10px]
                h-[3px]
                bg-sky-500
            ' />
            <p>Авторское право @ 2023. Все права защищены.</p>
        </div>
    </div>
  )
}

export default Footer