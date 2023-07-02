import React from 'react'
import { useEffect,useContext } from 'react';
import { useParams,Link } from 'react-router-dom'
import { AppContext } from '../context/ProductContext';
import FormatPrice from '../helper/FormatPrice';

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
            <Link to='/'>Home</Link>
          </li>
          <li>
            {name}
          </li>
        </ul>
      </div>

      {isSingleLoading && <h1 className='text-lg text-center'>Loading...</h1>}

      <div className='border mb-10 w-full'>
        <div className='w-11/12 lg:w-4/5 flex flex-col border md:flex-row mx-auto'>
          <div className='w-full md:w-1/2'>
            Images
          </div>
          <div className='border py-2 w-full md:w-1/2'>
            <div className='w-full mb-2'>
              <h2 className='text-3xl font-bold'>{name}</h2>
            </div>
            <div className='w-full'>
              <p className='mb-2'>{stars}</p>
              <p className='mb-2'>{reviews}</p>
              <p className='mb-2'>
                MRP:
                <del>
                  <FormatPrice price={price + 250000}/>
                </del> 
              </p>
              <p>
                Deal of the Day : <FormatPrice price={price}/>
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default SingleProduct
