import React from 'react'
import { useEffect,useContext } from 'react';
import { useParams,Link } from 'react-router-dom'
import { AppContext } from '../context/ProductContext';
import FormatPrice from '../helper/FormatPrice';
import {TbTruckDelivery} from 'react-icons/tb'
import ProductImages from '../components/ProductImages';
import Star from '../components/Star';
import AddToCart from '../components/AddToCart';

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const {id} = useParams();
  const {getSingleProduct,isSingleLoading,singleProduct} = useContext(AppContext);

  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image
  } = singleProduct;

  useEffect(()=>{
    getSingleProduct(`${API}?id=${id}`);
  },[])

  return (
    <div className="pt-20">
      {/* breadcrumbs */}
      <div className="text-md breadcrumbs mb-10 px-5">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>{name}</li>
        </ul>
      </div>

      {isSingleLoading && <h1 className="text-lg text-center">Loading...</h1>}

      <div className="mb-10 w-full">
        <div className="w-11/12 lg:w-4/5 flex flex-col md:flex-row mx-auto">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            {image && <ProductImages images={image}/>}
          </div>
          <div className="p-2 w-full md:w-1/2">
            <div className="w-full mb-4 flex justify center items-center">
              <h2 className="text-3xl font-bold">{name}</h2>
              <span className="badge ml-2">{category}</span>
            </div>
            <div className="w-full">
              <Star stars={stars} reviews={reviews}/>
              <p className="mb-4 font-semibold">
                MRP :
                <del>
                  <FormatPrice price={price + 250000} />
                </del>
              </p>
              <p className="font-semibold text-orange-400 mb-4">
                Deal of the Day : <FormatPrice price={price} />
              </p>
              <p className="text-justify mb-4">{description}</p>

              <div className="w-full flex justify-between mb-4 pt-2 border-b">
                <div className="flex flex-col justify-center items-center">
                  <div className="p-2 w-fit rounded-full bg-gray-200">
                    <TbTruckDelivery className="text-lg font-bold" />
                  </div>
                  <p className="text-sm mt-1">Free Delievery</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="p-2 w-fit rounded-full bg-gray-200">
                    <TbTruckDelivery className="text-lg font-bold" />
                  </div>
                  <p className="text-sm mt-1">30 days of replacement</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="p-2 w-fit rounded-full bg-gray-200">
                    <TbTruckDelivery className="text-lg font-bold" />
                  </div>
                  <p className="text-sm mt-1">Tech Delievered</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="p-2 w-fit rounded-full bg-gray-200">
                    <TbTruckDelivery className="text-lg font-bold" />
                  </div>
                  <p className="text-sm mt-1">2 Year Warranty</p>
                </div>
              </div>

              <p className="py-3">
                Available :{" "}
                {stock > 0 ? (
                  <span className="text-md font-semibold text-green-500">
                    In Stock
                  </span>
                ) : (
                  <span className="text-md font-semibold text-red-500">
                    Not Available
                  </span>
                )}
              </p>

              <p className='py-3 border-b-2 border-gray-800'>
                Brand : <span className="font-semibold">{company}</span>
              </p>
              
              {stock > 0 && <AddToCart product={singleProduct}/> }
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct
