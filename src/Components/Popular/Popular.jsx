import React from 'react'

import data_product from "../Assets/data";
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className='
        bg-gradient-to-b from-[#e28a8e] to-slate-100
        flex
        flex flex-col
        items-center
        gap-[10px]
        h=[100vh]
    '>
        <h1 className='
            text-sky-500
            text-[50px]
            font-[600]
        '>
            ПОПУЛЯРНО У ЖЕНЩИН
        </h1>
        <hr className='
            w-[200px] h-[6px] 
            rounded-[10px] bg-sky-500'  />
        <div className='
            mt-[50px]
            flex
            gap-[30px]
        '>
            {data_product.map((item, e) => {
                return <Item 
                key={e} 
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

export default Popular