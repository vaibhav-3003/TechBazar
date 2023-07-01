import React, { useContext } from 'react'
import { AppContext } from '../context/ProductContext';
import Product from '../components/Product';

const FeatureProducts = () => {
    const {isLoading,featuredProducts} = useContext(AppContext);
    console.log(featuredProducts);
    return (
      <div className="py-10 bg-orange-100">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <div className='w-11/12 md:w-4/5 mx-auto px-5 py-2'>
          <div className='w-full'>
            <h3 className='text-start text-orange-400 uppercase text-sm mb-2'>Check Now!</h3>
            <h2 className='text-start text-gray-800 font-bold text-3xl mb-4'>Our Feature Services</h2>
          </div>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 items-center lg:grid-cols-3 gap-8 auto-cols-fr'>
            {
              featuredProducts.map((e)=>{
                return <Product key={e.id} {...e} />;
              })
            }

          </div>
        </div>
        )}
      </div>
    );
}

export default FeatureProducts
