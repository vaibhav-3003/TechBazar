import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = () => {
    const {cart} = useContext(CartContext);
    console.log(cart);
  return (
    <div className="py-8 flex border-t">
      <div className="w-fit flex justify-center items-center rounded-lg">
        <img
          src="./images/logo.png"
          alt=""
          className="w-48 rounded-lg bg-cover"
        />
      </div>
      <div className="flex justify-between w-full px-4">
        <div className="flex justify-between w-full flex-wrap">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg">
              <a href="#">{cart["name"]}</a>
            </h3>
            <p className="text-md">Color</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg">Quantity</p>
            <p>Remove</p>
          </div>
          <div>
            <p className="text-lg">Price</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem
