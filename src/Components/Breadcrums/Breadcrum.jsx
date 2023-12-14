import React from 'react'

import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrum = (props) => {

    const {product} = props;

  return (
    <div className="
      flex
      items-center
      gap-[.5rem]
      text-[#5e5e5e]
      text-[1rem]
      m-[3.75rem_10.625rem]
      capitalize
    ">
      HOME <img src={arrow_icon} alt="" />
      SHOP <img src={arrow_icon} alt="" />
      {product.category} <img src={arrow_icon} alt="" />
      {product.name}
    </div>
  )
}

export default Breadcrum