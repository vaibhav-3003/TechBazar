import React, { useContext } from 'react'
import CartItem from '../components/CartItem'

const Cart = () => {
  return (
    <div className='py-20 border'>
      <div className='w-11/12 md:w-4/5 mx-auto py-6 flex flex-col gap-4'>
        <h2 className='text-xl md:text-2xl lg:text-4xl font-bold py-4'>Shopping Cart</h2>
        <CartItem />
      </div>
    </div>
  )
}

export default Cart
