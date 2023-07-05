import React from 'react'
import FeatureProduct from './FeatureProduct'

const GridView = ({products}) => {

  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-20 pb-10'>
      {
        products.map((e)=>{
            return <FeatureProduct key={e.id} {...e} />;
        })
      }
    </div>
  )
}

export default GridView
