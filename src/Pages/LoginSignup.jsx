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
            <h1 className='m-[1.25rem_0rem] text-sky-500'>
             Регистрация
            </h1>
            <div className="
              flex
              flex flex-col
              gap-[1.8125rem]
              mt-[1.875rem]
            ">
                <input className='
                  h-[4.5rem]
                  w-full
                  pl-[1.25rem]
                  border-solid border-[.125rem] border-sky-500 border border
                  outline-none
                  text-[#5c5c5c]
                  text-[1.125rem]
                  rounded-lg

                ' type="text" placeholder='Твое имя' />
                <input className='
                  h-[4.5rem]
                  w-full
                  pl-[1.25rem]
                  border-solid border-[.125rem] border-sky-500 border border
                  outline-none
                  text-[#5c5c5c]
                  text-[1.125rem]
                  rounded-lg
                ' type="email" placeholder='Адрес электронной почты' />
                <input className='
                  h-[4.5rem]
                  w-full
                  pl-[1.25rem]
                  border-solid border-[.125rem] border-sky-500 border border
                  outline-none
                  text-[#5c5c5c]
                  text-[1.125rem]
                  rounded-lg
                ' type="parswword" placeholder='Пароль' />
            </div>
            <button className='
              w-full
              h-[4.5rem]
              text-white
              bg-sky-500
              mt-[1.875rem]
              border-none
              text-[1.5rem]
              font-[500]
              cursor-pointer

            '>
                Регистрация
            </button>
            <p className="
              mt-[1.25rem]
              text-sky-500
              text-[1.125rem]
              font-medium
            ">
                У вас уже есть аккаунт?
                <span className='
                  text-[#ff4141]
                  font-semibold
                '>
                    Войти здесь
                </span>
            </p>
            <div className="
              flex
              flex items-center
              mt-[1.5625rem]
              gap-[1.25rem]
              text-sky-500
              font-medium
            ">
                <input type="checkbox" name="" id="" />
                <p>
                Продолжая, я соглашаюсь с условиями использования и политикой конфиденциальности.
                </p>
            </div>
        </div>
    </div>
  )
}

export default LoginSignup