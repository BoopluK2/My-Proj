import React from 'react'

const NewsLetter = () => {
  return (
    <div className=' bg-gradient-to-b from-slate-100 to-slate-100 py-[80px]'>
        <div className='
        rounded-t-[50px]
        w-[65%]
        h-[40vh]
        flex
        flex flex-col
        items-center
        m-auto
        mb-[150px]
        bg-gradient-to-b from-[#e28a8e] to-slate-100
        gap-[30px]
    '>
        <h1 className='
            text-sky-500
            text-[40px]
            font-[600]
            mt-9
        '>
            Получите эксклюзивные предложения на свою электронную почту
        </h1>
        <p className='
            text-[#454545]
            text-[20px]

        '>
            Подпишитесь на нашу рассылку и будьте в курсе
        </p>
        <div className='
            flex
            items-center
            flex justify-center
            bg-white
            w-[730px]
            h-[70px]
            rounded-[80px]
            border-solid border-[1px] border-[#e3e3e3] border border
        '>
            <input className='
                w-[500px]
                ml-[30px]
                border-none
                outline-none
                text-[#616161]
                font-[Poppins]
                text-[16px]     
            ' type="email" placeholder='You Email id' />
            <button className='
                w-[210px]
                h-[70px]
                rounded-[80px]
                bg-black
                text-white
                text-[16px]
                cursor-pointer

            '>
                Subscride
            </button>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter