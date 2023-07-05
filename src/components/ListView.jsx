import React from 'react'
import FormatPrice from '../helper/FormatPrice';
import { Link } from 'react-router-dom';

const ListView = ({products}) => {
  return (
    <div className='grid grid-cols-1 gap-8 pt-20 pb-10'>
      {
        products.map((e)=>{
          const {id,name,image,price,description} = e;

          return (
            <div className="flex gap-4 shadow-md">
              <div className="w-2/5 h-full flex justify-center items-center">
                <figure>
                  <img src={image} alt={name} className='w-full h-full bg-cover'/>
                </figure>
              </div>
              <div className="w-3/5 p-4 flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 pb-3 justify-start">
                  {name}!
                </h3>
                <p className="text-orange-500 font-semibold pb-3 justify-start">
                  <FormatPrice price={price} />
                </p>
                <p className="justify-start pb-5">
                  {description.slice(0, 99)}...
                </p>
                
                <Link className='w-full flex justify-end'>
                  <button className="btn bg-orange-500 hover:bg-orange-400 justify-end text-white">Buy Now</button>
                </Link>
                
              </div>
            </div>
          );
        })
      }
    </div>
  )
}

export default ListView
