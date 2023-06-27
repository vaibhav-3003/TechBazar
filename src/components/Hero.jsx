import React from 'react'

const Hero = ({heading}) => {
  return (
    <div className="w-full py-20">
      <div className='mx-auto w-4/5 flex justify-between'>
        <div className='py-20 px-5 w-1/2'>
          <h4 className='text-md uppercase'>Welcome to</h4>
          <h1 className='text-5xl font-bold mb-4'>{heading}</h1>
          <p className='text-justify mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis non ipsam asperiores molestias omnis minima veritatis ratione odit aliquid dicta perspiciatis culpa praesentium placeat aperiam</p>
          <button className='btn bg-orange-400 text-white hover:bg-orange-500'>Shop Now</button>
        </div>
        <div className='flex justify-center items-center w-1/2'>
            <div className='w-72 h-60 bg-orange-300 absolute ml-64 mb-36'></div>
            <img src="./images/hero.jpg" alt="" className='w-1/3 z-10 absolute'/>
        </div>
      </div>
    </div>
  );
}

export default Hero
