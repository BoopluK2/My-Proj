import React from 'react'

import data_product from "../Assets/data";
import Item from "../Item/Item";

const RelatedProducts = () => {
  return (
    <div className='
        flex
        flex-col
        items-center
        gap-[.625rem]
        h-[90vh]
    '>
        <h1 className='
            text-[#171717]
            text-5xl
            font-semibold  
        '>
            Related Products
        </h1>
        < hr className='
            w-[12.5rem] 
            h-[.375rem] 
            rounded-[.625rem]
            bg-[#252525]    
        ' />
        <div className='
            flex
            mt-[50px]
            gap-[30px] 
        '>
            {data_product.map((item, index) => {
                 return <Item 
                    key={index} 
                    id={item.id} 
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                 />
            })}
        </div>
    </div>
  )
}

export default RelatedProducts