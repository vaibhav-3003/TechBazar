import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import FormatPrice from '../helper/FormatPrice'

const CartItem = ({data}) => {
    const {cart} = useContext(CartContext);
    console.log(cart);
  return (
    
    <div className="py-8 flex border-t">
      <div className="w-fit flex justify-center items-center rounded-lg shadow-lg">
        <img
          src={data.image}
          alt=""
          className="w-48 rounded-lg bg-cover"
        />
      </div>
      <div className="flex justify-between w-full px-4">
        <div className="flex justify-between w-full flex-wrap">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg">
              <a href="#" className='capitalize font-semibold'>{data.name}</a>
            </h3>
            <p className="text-md w-5 h-5 rounded-full" style={{backgroundColor:data.color}}></p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg">{data.amount}</p>
            {/* <select name="" id="">
              
            </select> */}
            <button className='text-red-500'>Remove</button>
          </div>
          <div>
            <FormatPrice price={data.price}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem
