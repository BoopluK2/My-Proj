import React from 'react'

import exclucive_image from "../Assets/exclusive_image.png"

const Offers = () => {
  return (
    <div className='
        w-auto
        h-[80vh]
        flex
        m-[auto]
        p-[0px_140px]
        bg-gradient-to-b from-slate-100 to-[#0248ca44]
    '>
        <div className="
            flex-[1]
            flex
            flex flex-col
            justify-center
        ">
            <h1 className='
                text-sky-500
                text-[80px]
                font-[600]
            '>
                Эксклюзивный
            </h1>
            <h1 className='
                text-sky-500
                text-[70px]
                font-[600]
                mb-9
            '>
                Предложения для вас
            </h1>
            <p className='
                text-sky-500
                text-[22px]
                font-medium
                mb-7
            '>
                ТОЛЬКО НА ПРОДУКЦИИ БЕСТСЕЛЛЕРОВ
            </p>
            <button className='
                w-[282px]
                h-[70px]
                rounded-[35px]
                bg-sky-500
                border-none
                text-white
                text-[22px]
                font-[500]
                mt-[30px]
                cursor-pointer
            '>
                Проверь сейчас
            </button>
        </div>
        <div className="
            flex-[1]
            flex
            items-center
            flex justify-center
            pt-[50px]
        ">
            <img src={exclucive_image} alt="exclusive" className='object-cover w-[600px] h-[600px]' />
        </div>
    </div>
  )
}

export default Offers