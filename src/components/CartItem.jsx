import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import FormatPrice from '../helper/FormatPrice'

const CartItem = ({data}) => {
    const {removeItem} = useContext(CartContext);
    
    const quantity = [];
    for(let i = 1; i < data.max;i++){
      quantity.push(i);
    }
    
    const updateAmount = ()=>{

    }

  return (
    <div className="py-8 flex border-t">
      <div className="w-fit flex justify-center items-center rounded-lg shadow-lg">
        <img src={data.image} alt="" className="w-48 rounded-lg bg-cover" />
      </div>
      <div className="flex justify-between w-full px-4">
        <div className="flex justify-between w-full flex-wrap">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg">
              <p className="capitalize font-semibold">
                {data.name}
              </p>
            </h3>
            <p
              className="text-md w-5 h-5 rounded-full"
              style={{ backgroundColor: data.color }}
            ></p>
          </div>
          <div className="flex flex-col gap-2">
            <select name="" id="" className='px-3 py-2 rounded-md focus:ring-2 focus:ring-orange-500 outline-none border hover:cursor-pointer'
            onClick={updateAmount}>
              {quantity.map((e, i) => {
                return <option key={i} value={e} selected={data.amount===e}>{e}</option>;
              })}
            </select>
            
            <button className="text-red-500"
            onClick={()=> removeItem(data.id)}>Remove</button>
          </div>
          <div>
            <FormatPrice price={data.price * data.amount} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem
