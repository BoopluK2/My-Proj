import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'

import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  
  const {all_product} = useContext(ShopContext);
  console.log({all_product});
  return (
    <div className='1'>
      <img className='
        block
        m-[30px_auto]
        w-[82%]

      ' src={props.banner} alt="" />
      <div className="
        flex
        justify-between
        m-[0px_170px]
        items-center
      ">
        <p className='font-[600]'>
          <span className='font-[600]'>Showing 1-12</span> out of 36 products
        </p>
        <div className="
          flex
          items-center
          justify-between
          p-[10px_20px]
          rounded-[40px]
          border-solid border-[1px] border-[#888]
        ">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="
        m-[20px_170px]
        grid grid-cols-4
        gap-y-[80px]
      ">
          {all_product.map((item, index) => {
            if(props.category === item.category){
              return <Item 
                key={index} 
                id={item.id} 
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            }else{
              return null;
            }
          })}
        </div>
        <div className='
          flex
          justify-center
          items-center
          m-[150px_auto]
          w-[233px]
          h-[69px]
          rounded-[75px]
          bg-[#ededed]
          text-[#787878]
          text-[18px]
          font-[500]
        '>
          Explore More
        </div>
    </div>
  )
}

export default ShopCategory