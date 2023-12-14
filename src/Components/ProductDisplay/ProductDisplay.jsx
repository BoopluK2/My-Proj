import React, { useContext } from 'react'

import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (prosp) => {

    const {product} = prosp;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className='
        flex
        m-[0rem_10.625rem]
    '>
        <div className="
            flex
            gap-[1.0625rem]

        ">
            <div className="
                flex
                flex-col
                gap-[1rem]
            ">
                <img className='h-[10.1875rem]' src={product.image} alt="" />
                <img className='h-[10.1875rem]' src={product.image} alt="" />
                <img className='h-[10.1875rem]' src={product.image} alt="" />
                <img className='h-[10.1875rem]' src={product.image} alt="" />
            </div>
            <div className="45">
                <img className='w-[36.625rem] h-[43.75rem]' src={product.image} alt="" />

            </div>
        </div>
        <div className="
            flex flex-col
            m-[0rem_4.375rem]
        ">
            <h1 className='
                text-[#3d3d3d]
                text-4xl
                font-bold
            '>
                {product.name}
            </h1>
            <div className="
                flex items-center
                mt-[.8125rem]
                gap-[.3125rem]
                text-[#1c1c1c]
                text-base
            ">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>
                    (122)
                </p>
            </div>
            <div className="
                flex
                m-[2.5rem_opx]
                gap-[1.875rem]
                text-2xl
                font-bold
            ">
                <div className="
                    text-[#818181]
                    line-through
                ">
                    ${product.old_price}
                </div>
                <div className="
                    text-red-500

                ">
                    ${product.new_price}
                </div>
            </div>
            <div className="9">
                Laylo pompa
            </div>
            <div className="">
                <h1 className='
                    mt-[3.4375rem]
                    text-[#656565]
                    text-xl
                    font-semilod
                '>
                    Select Size
                </h1>
                <div className="
                    flex
                    m-[1.875rem_0rem]
                    gap-[1.25rem]
                ">
                    <div className='
                        p-[1.125rem_1.5rem]
                        bg-[#fbfbfb]
                        border-solid border-[1px] border-[#ebebeb]
                        rounded-[.1875rem]
                        cursor-pointer
                    '>
                        S
                    </div>
                    <div className='
                        p-[1.125rem_1.5rem]
                        bg-[#fbfbfb]
                        border-solid border-[1px] border-[#ebebeb]
                        rounded-[.1875rem]
                        cursor-pointer
                    '>
                        M
                    </div>
                    <div className='
                        p-[1.125rem_1.5rem]
                        bg-[#fbfbfb]
                        border-solid border-[1px] border-[#ebebeb]
                        rounded-[.1875rem]
                        cursor-pointer
                    '>
                        L
                    </div>
                    <div className='
                        p-[1.125rem_1.5rem]
                        bg-[#fbfbfb]
                        border-solid border-[1px] border-[#ebebeb]
                        rounded-[.1875rem]
                        cursor-pointer
                    '>
                        XL
                    </div>
                    <div className='
                        p-[1.125rem_1.5rem]
                        bg-[#fbfbfb]
                        border-solid border-[1px] border-[#ebebeb]
                        rounded-[.1875rem]
                        cursor-pointer
                    '>
                        XXL
                    </div>
                </div>
            </div>
            <button className='
                p-[1.25rem_2.5rem]
                w-[12.5rem]
                text-base font-semibold text-white
                bg-[#ff4141]
                mb-[2.5rem]
                border-none
                outline-none
                cursor-pointer
            '
                onClick={()=>{addToCart(product.id)}}
            >
                ADD TO CART
            </button>
            <p className="mt-[.625rem]">
                <span className='
                    font-semibold
                '>
                    Caterogi :
                </span>
                Women, T-Shirt, Crop Top
            </p>
            <p className="mt-[.625rem]">
                <span className='
                    font-semibold
                '>
                    Tags :
                </span>
                Modern, Latest
            </p>
        </div>
    </div>
  )
}

export default ProductDisplay