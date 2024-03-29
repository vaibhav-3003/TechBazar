import React from 'react'
import { Link } from 'react-router-dom';

const Hero = ({heading}) => {
  return (
    <div className="w-full pt-20 pb-5">
      <div className="mx-auto lg:w-4/5 w-11/12 flex flex-col-reverse justify-between md:flex-row">
        <div className="py-5 md:py-20 md:px-5 w-full md:w-1/2">
          <h4 className="text-md uppercase">Welcome to</h4>
          <h1 className="text-5xl font-bold mb-4">{heading}</h1>
          <p className="text-justify mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis non
            ipsam asperiores molestias omnis minima veritatis ratione odit
            aliquid dicta perspiciatis culpa praesentium placeat aperiam
          </p>
          <Link to="/products">
            <button className="btn bg-orange-400 text-white hover:bg-orange-500">
              Shop Now
            </button>
          </Link>
        </div>
        <div className="flex justify-center items-center w-full md:w-1/2 lg:px-5 mx-auto mb-5 md:mb-0">
          <img
            src="./images/hero.jpg"
            alt=""
            className="w-full md:w-1/3 z-10 md:absolute drop-shadow-2xl shadow-2xl shadow-orange-400"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero
