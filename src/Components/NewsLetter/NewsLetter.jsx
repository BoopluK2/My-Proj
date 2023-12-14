import React from 'react'

const NewsLetter = () => {
  return (
    <div className='
        w-[65%]
        h-[40vh]
        flex
        flex-col
        items-center
        m-auto
        p-[0px_140px]
        mb-[150px]
        mt-[50px]
        bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22]
        gap-[30px]
    '>
        <h1 className='
            text-[#454545]
            text-[55px]
            font-[600]
        '>
            Get Exclusive Ofeers On Your Email
        </h1>
        <p className='
            text-[#454545]
            text-[20px]

        '>
            Subscribe to our newletter and stay updated
        </p>
        <div className='
            flex
            items-center
            justify-center
            bg-white
            w-[730px]
            h-[70px]
            rounded-[80px]
            border-solid border-[1px] border-[#e3e3e3]
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
  )
}

export default NewsLetter