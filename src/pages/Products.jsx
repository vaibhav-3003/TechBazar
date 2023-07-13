import React from 'react'
import ProductList from '../components/ProductList'
import FilterSection from '../components/FilterSection'
import Sort from '../components/Sort'

const Products = () => {

  return (
    <div className='py-20 w-full'>
      <div className='w-11/12 md:w-4/5 mx-auto flex flex-col lg:flex-row gap-2'>
        <div className='w-full lg:w-1/5'>
          <FilterSection />
        </div>

        <section className='w-full lg:w-4/5'>
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
