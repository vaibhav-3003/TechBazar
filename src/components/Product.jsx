import React from 'react'
import { Link } from 'react-router-dom';

const Product = (e) => {
    const {id,name,image,price,category} = e;

    const formatPrice = (price)=>{
      return Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2,
      }).format(price / 100); 
    }

  return (
    <Link to={`/singleProduct/${id}`}>
      <div className="card bg-base-100 shadow-xl hover:scale-105 transition-all duration-300">
        <figure>
          <img src={image} alt={category}/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}!</h2>
          <div className="w-full flex justify-between items-center">
            <div className="badge badge-outline">{category}</div>
            <h3 className="text-orange-400">{formatPrice(price)}</h3>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/singleProduct/${id}`}>
              <button className="btn bg-orange-500 hover:bg-orange-400 text-white">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Product
