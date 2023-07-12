import React, { useContext } from 'react'
import CartItem from '../components/CartItem'
import { CartContext } from '../context/CartContext'
import FormatPrice from '../helper/FormatPrice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, total_price, shipping_fee } = useContext(CartContext);
  return (
    <div className="py-20 border">
      <div className="w-11/12 md:w-4/5 mx-auto py-6 flex flex-col gap-4">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold py-4">
          Shopping Cart
        </h2>
        {cart.map((data) => {
          return <CartItem key={data.id} data={data} />;
        })}
        <hr />

        {/* continue Shopping */}
        <Link to="/products" className='my-4'>
          <button className='btn btn-wide bg-orange-500 text-white hover:bg-orange-400'>Continue Shopping</button>
        </Link>

        {/* order Subtotal */}
        <div className="w-full mt-4 flex justify-end">
          <div className="w-full md:w-3/4 bg-gray-100 rounded-lg px-8 py-4 shadow-lg">
            <div className="w-full">
              <div className="w-full flex justify-between py-5 border-b border-gray-300">
                <h3 className="text-md">Subtotal</h3>
                <p className="text-lg font-semibold">
                  <FormatPrice price={total_price} />
                </p>
              </div>
              <div className="w-full flex justify-between py-5 border-b border-gray-300">
                <h3>Shipping</h3>
                <p className="text-lg font-semibold">
                  <FormatPrice price={shipping_fee} />
                </p>
              </div>
              <div className="w-full flex justify-between py-5">
                <h3 className="text-lg font-semibold">Order total</h3>
                <p className="text-lg font-semibold">
                  <FormatPrice price={shipping_fee + total_price} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart
