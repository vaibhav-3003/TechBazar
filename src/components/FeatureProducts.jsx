import React, { useContext } from 'react'
import { AppContext } from '../context/ProductContext';


const FeatureProducts = () => {
    const {isLoading,featuredProducts} = useContext(AppContext);
  return (
    <div className="py-20 border w-full bg-orange-100">
      
    </div>
  );
}

export default FeatureProducts
