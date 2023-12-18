import React from 'react'

// import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png"

const Hero = () => {
  return (
    <div className='
        h-[100vh]
        bg-gradient-to-b from-slate-100 to-[#e28a8e]
        flex
    '>
        <div className='
            flex-[1]
            flex
            flex flex-col
            justify-center
            gap-[20px]
            pl-[180px]
            leading-[1.1]
        '>
            <h2 className='
                text-sky-500
                text-[26px]
                font-[500]
            '>Только НОВИНКИ</h2>
            <div>
                <div className='
                   flex
                    flex items-center
                    gap-[20px]
                '>
                    <p className='text-sky-500 text-[100px] font-[700]' >Новый</p>
                </div>
                <p className='text-sky-500 text-[100px] font-[700]'>Коллекции</p>
                <p className='text-sky-500 text-[100px] font-[700]'>Для всех</p>
            </div>
            <div className='
                flex
                flex justify-center
                items-center
                gap-[15px]
                w-[310px]
                h-[70px]
                rounded-[75px]
                mt-[30px]
                bg-sky-500
                text-white
                text-[22px]
                font-[500px]
            ' >
                <div>Последняя Коллекция</div>
                <img src={arrow_icon} alt="arrow" />
            </div>
        </div>
        <div className='
            flex-[1]
            flex
            items-center
            flex justify-center
        '>
            <img src={hero_image} alt="hero" />
        </div>
    </div>
  )
}

export default Hero