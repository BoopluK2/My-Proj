import React from 'react'

const LoginSignup = () => {
  return (
    <div className='
      w-full
      h-[80vh]
      bg-[#fce3fe]
      pt-[6.25rem]
    '>
        <div className="
          w-[36.25rem]
          h-[650px]
          bg-white
          m-auto
          p-[2.5rem_3.75rem]

        ">
            <h1 className='m-[1.25rem_0rem]'>
              Sing Up
            </h1>
            <div className="
              flex
              flex-col
              gap-[1.8125rem]
              mt-[1.875rem]
            ">
                <input className='
                  h-[4.5rem]
                  w-full
                  pl-[1.25rem]
                  border-solid border-[.125rem] border-[#c9c9c9]
                  outline-none
                  text-[#5c5c5c]
                  text-[1.125rem]
                  rounded-lg

                ' type="text" placeholder='You Name' />
                <input className='
                  h-[4.5rem]
                  w-full
                  pl-[1.25rem]
                  border-solid border-[.125rem] border-[#c9c9c9]
                  outline-none
                  text-[#5c5c5c]
                  text-[1.125rem]
                  rounded-lg
                ' type="email" placeholder='Email Address' />
                <input className='
                  h-[4.5rem]
                  w-full
                  pl-[1.25rem]
                  border-solid border-[.125rem] border-[#c9c9c9]
                  outline-none
                  text-[#5c5c5c]
                  text-[1.125rem]
                  rounded-lg
                ' type="parswword" placeholder='Password' />
            </div>
            <button className='
              w-full
              h-[4.5rem]
              text-white
              bg-[#ff4141]
              mt-[1.875rem]
              border-none
              text-[1.5rem]
              font-[500]
              cursor-pointer

            '>
                Continue
            </button>
            <p className="
              mt-[1.25rem]
              text-[#5c5c5c]
              text-[1.125rem]
              font-medium
            ">
                Already have an account? 
                <span className='
                  text-[#ff4141]
                  font-semibold
                '>
                    Login here
                </span>
            </p>
            <div className="
              flex
              items-center
              mt-[1.5625rem]
              gap-[1.25rem]
              text-[#5c5c5c]
              font-medium
              text-lg
            ">
                <input type="checkbox" name="" id="" />
                <p>
                  By continuing, i agree to the terms of use & privacy policy.
                </p>
            </div>
        </div>
    </div>
  )
}

export default LoginSignup