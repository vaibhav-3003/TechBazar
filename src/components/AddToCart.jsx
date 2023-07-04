import React from 'react'
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import CartAmountToggle from './CartAmountToggle';
import { Link } from 'react-router-dom';

const AddToCart = ({product}) => {
    const {id,colors,stock} = product;
    const [color , setColor] = useState(colors[0]);
    const [amount,setAmount]  = useState(1);

    const setDecrease = ()=>{
        amount > 1 ? setAmount(amount-1) : setAmount(1);
    }

    const setIncrease = ()=>{
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    }

  return (
    <div>
      <div className="w-full py-4 flex gap-3 items-center font-semibold">
        Colors :{" "}
        {colors.map((currColor, index) => {
          return (
            <button
              className={
                color === currColor
                  ? `rounded-full p-3`
                  : `rounded-full p-3 opacity-75 hover:opacity-100`
              }
              style={{ backgroundColor: currColor }}
              onClick={() => setColor(currColor)}
              key={index}
            >
              {color === currColor ? (
                <FaCheck className="text-gray-500 text-sm" />
              ) : null}
            </button>
          );
        })}
      </div>
        <CartAmountToggle
          amount={amount}
          setDecrease={setDecrease}
          setIncrease={setIncrease}
        />

        <Link to="/cart">
            <button className='btn bg-orange-500 text-white hover:bg-orange-400'>Add to Cart</button>
        </Link>
    </div>
  );
}

export default AddToCart
