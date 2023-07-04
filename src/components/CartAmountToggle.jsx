import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const CartAmountToggle = ({amount,setIncrease,setDecrease}) => {
  return (
    <div className="py-4 flex gap-6 items-center mb-4">
      <button className="p-1 rounded-full bg-red-500"
      onClick={()=>setDecrease(amount)}>
        <AiOutlineMinus className="text-white text-xl" />
      </button>
      <p className='text-xl font-bold'>{amount}</p>
      <button className="p-1 rounded-full bg-green-500"
      onClick={()=>setIncrease(amount)}>
        <AiOutlinePlus className="text-white text-xl" />
      </button>
    </div>
  );
}

export default CartAmountToggle
