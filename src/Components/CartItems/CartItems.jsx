import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

import remove_icon from "../Assets/cart_cross_icon.png"

const CartItems = () => {

    const {all_product, cartItems, removeFromCart} = useContext(ShopContext);

  return (
    <div className='
        m-[6.25rem_10.625rem]
    '>
        <div className='
            grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr]
            flex items-center
            gap-[4.6875rem]
            p-[1.25rem_0rem]
            text-[#454545]
            text-lg
            font-semibold
        '>
            <p>Products</p>
            <p>Titel</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
         <hr className='h-[.1875rem] bg-[#e2e2e2] border-[0px]' />
       {all_product.map((e) => {
        if(cartItems[e.id] > 0) {
           return <div>
           <div className='
                grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr]
                items-center
                gap-[4.6875rem]
                p-[1.25rem_0rem]
                text-[#454545]
                text-lg
                font-medium
           '>
               <img src={e.image} alt="" className='
                    h-[3.875rem]

               ' />
               <p>{e.name}</p>
               <p>${e.new_price}</p>
               <button className='
                    w-[4rem]
                    h-[3.125rem]
                    border-solid border-[#ebebeb] border
                    bg-[#fff]
               '>{cartItems[e.id]}</button>
               <p>${e.new_price * cartItems[e.id]}</p>
               <img className='
                    w-[.9375rem]
                    m-[0p_2.5rem]
                    cursor-pointer
               ' src={remove_icon} onClick={() => {removeFromCart(e.id)} } alt="" />
           </div>
           <hr />
       </div>
        }
        return null;
       })}
       <div className='
            flex
            m-[6.25rem_0rem]
       '>
        <div className='
            flex-[1] flex flex-col
                mr-[12.5rem]
                gap-[2.5rem]

        '>
            <h1>Cart Totals</h1>
            <div>
                <div className='
                    flex
                    flex justify-between
                    p-[.9375rem_0rem]
                '>
                    <p>Subtatal</p>
                   <p>${0}</p> 
                </div>
                <hr />
                <div className='
                    flex
                    flex justify-between
                    p-[.9375rem_0rem]
                '>
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className='
                    flex
                    flex justify-between
                    p-[.9375rem_0rem]
                '>
                    <h3>Total</h3>
                    <h3>${0}</h3>
                </div>
            </div>
            <button className='
                w-[16.375rem]
                h-[3.625rem]
                outline-none
                border-none
                bg-[#ff5a5a]
                text-[#fff]
                text-base
                font-semibold
                cursor-pointer
            '>
                PROCEED TO CHECKOUT
            </button>
        </div>
        <div className='
            flex-[1]
            text-base
            font-medium
        '>
            <p className='
                text-[#555]
            '>If you have a promo code, Enter it here</p>
            <div className='
                w-[31.5rem]
                mt-[.9375rem]
                pl-[1.25rem]
                h-[3.625rem]
                bg-[#eaeaea]
            '>
                <input className='
                    border-none
                    outline-none
                    bg-transparent
                    text-base
                    w-[20.625rem]
                    h-[3.125rem]
                    text

                ' type="text" placeholder='promo' />
                <button className='
                    w-[10.625rem]
                    h-[3.625rem]
                    text-base
                    bg-black
                    text-white
                    cursor-pointer

                '>Submit</button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default CartItems