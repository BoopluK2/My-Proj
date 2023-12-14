import React from 'react'

import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='
        w-[350px]
        hover:scale-[1.05]
        hover:duration-[0.6s]

    '>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
        <p className='m-[6px_0px]' >{props.name}</p>
        <div className='
            flex
            gap-[20px]
        '>
            <div className='
                text-[#374151] text-[18px] font-[600]  
            '>
                {props.new_price}
            </div>
            <div className='
                text-[#8c8c8c] text-[18px] font-[500]
                line-through 
            '>
                {props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item