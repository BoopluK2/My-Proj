import React from 'react'

import new_collection from "../Assets/new_collections";
import Item from '../Item/Item';

const NewCollections = () => {
  return (
    <div className='
        flex
        flex flex-col
        items-center
        gap-[10px]
        h=[90vh]
        bg-gradient-to-b from-[#0248ca44] to-slate-100
    '>
        <h1 className='
            text-sky-500
            text-[50px]
            font-[600]
        '>
            НОВЫЕ КОЛЛЕКЦИИ
        </h1>
        <hr className='
            w-[200px] h-[6px] 
            rounded-[10px] bg-sky-500' />
        <div className="
             grid grid-cols-4 
             mt-[50px] 
             gap-[30px]
             ">
            {new_collection.map((item,i) => {
                return <Item
                key={i} 
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

export default NewCollections