import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {

  const {cart} = useContext(CartContext)

  return (
    <div className='py-20'>
      Cart
    </div>
  )
}

export default Cart
