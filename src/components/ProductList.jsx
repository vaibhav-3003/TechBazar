import React from 'react'
import { useContext } from 'react'
import { FilterContext } from '../context/FilterContext'
import GridView from '../components/GridView'
import ListView from '../components/ListView'

const ProductList = () => {

  const { filter_products, grid_view } = useContext(FilterContext);

  if(grid_view){
    return <GridView products={filter_products}/>
  }

  return (
    <ListView products={filter_products}/>
  )
}

export default ProductList
