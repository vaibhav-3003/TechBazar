import React, { useContext } from 'react'
import { FilterContext } from '../context/FilterContext'

const FilterSection = () => {
  const {
    filters:{text},
    updateFilterValue
  } = useContext(FilterContext)

  return (
    <div className='w-full h-full py-4'>
      <div className='w-full'>
        <form onSubmit={(e) => e.preventDefault()}>
          <input 
            type="text"
            name="text" 
            placeholder='Search...'
            autoComplete='off'
            value={text}
            onChange={updateFilterValue}
            className='w-full py-2 px-2 bg-gray-50 outline-none rounded-md shadow-md'
          />
        </form>
      </div>
    </div>
  )
}

export default FilterSection
