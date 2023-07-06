import React, { useContext } from 'react'
import ProductList from '../components/ProductList'
import FilterSection from '../components/FilterSection'
import Sort from '../components/Sort'
import { FilterContext } from '../context/FilterContext'

const Products = () => {

  const {filter_products} = useContext(FilterContext);

  return (
    <div className='py-20 w-full'>
      <div className='w-11/12 md:w-4/5 border mx-auto flex gap-2'>
        <div className='w-1/5 border'>
          <FilterSection />
        </div>

        <section className='w-4/5'>
          <div>
            <Sort />
          </div>
          <div>
            <ProductList />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Products
