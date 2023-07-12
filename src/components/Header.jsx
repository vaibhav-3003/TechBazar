import React from 'react'
import { useContext } from 'react';
import { NavLink,Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import FormatPrice from '../helper/FormatPrice';

const Header = () => {
  const {total_item,total_price} = useContext(CartContext)
  // console.log(total_item)
  return (
    <div className="navbar bg-orange-50 shadow-lg absolute z-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-orange-50 rounded-box w-52"
          >
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/products">PRODUCTS</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
            <button className="btn border bg-orange-400 mt-2 rounded-md hover:bg-orange-500 font-semibold md:absolute md:-left-full text-white">
              LOG IN
            </button>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <NavLink to="/">
          <img src="./images/LOGO (1).png" alt="" className="w-36" />
        </NavLink>
      </div>
      <div className="navbar-end mr-5">
        <div>
          <button className="btn bg-orange-400 px-10 rounded-md mr-5 uppercase font-semibold text-white hover:bg-orange-500 absolute -left-full sm:relative sm:left-0">
            Log in
          </button>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {total_item}
              </span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-orange-50 shadow absolute z-50"
          >
            <div className="card-body">
              <span className="font-bold text-lg">{total_item} Items</span>
              <span className="text-info">Subtotal: <FormatPrice price={total_price}/></span>
              <div className="card-actions">
                <Link to="/cart" className='w-full'>
                  <button className="btn bg-orange-400 w-full hover:bg-orange-500 text-white">
                    View cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header
