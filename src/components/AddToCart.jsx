import React from 'react'
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const AddToCart = ({product}) => {
    const {id,colors,stock} = product;
    const [color , setColor] = useState(colors[0]);

  return (
    <div className='w-full py-4 flex gap-3 items-center font-semibold'>
      Colors : {colors.map((currColor,index)=>{
        return (
          <button
            className={
              color === currColor
                ? `rounded-full p-3`
                : `rounded-full p-3 opacity-75 hover:opacity-100`
            }
            style={{backgroundColor: currColor}}
            onClick={()=>setColor(currColor)}
            key={index}
          >{color === currColor ? <FaCheck className='text-gray-500 text-sm'/>:null}</button>
        );
      })}
    </div>
  )
}

export default AddToCart
