import React, { useContext } from 'react'
import { FilterContext } from '../context/FilterContext'
import { FaCheck } from 'react-icons/fa'

const FilterSection = () => {
  const {
    filters:{text,category,color},
    all_products,
    updateFilterValue
  } = useContext(FilterContext)

  const getUniqueData = (data, field)=>{
    let newValue = data.map((e)=>{
      return e[field];
    });

    
    
    if(field === 'colors'){
      return newValue = ["All",...new Set([].concat(...newValue))];
    }else{
      return newValue = ["All",...new Set(newValue)]
    }

    // console.log(newValue)
  }

  //unique data
  const categoryData = getUniqueData(all_products,"category");

  const companyData = getUniqueData(all_products,"company");

  const colorsData = getUniqueData(all_products,"colors");

  return (
    <div className="w-full h-full py-4 px-3">
      <div className="w-full">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search..."
            autoComplete="off"
            value={text}
            onChange={updateFilterValue}
            className="w-full py-2 px-2 bg-gray-50 outline-none rounded-md shadow-md"
          />
        </form>
      </div>

      <div className="pt-8">
        <h3 className="font-semibold">Category</h3>
        <div className="py-4 flex flex-col gap-1">
          {categoryData.map((e, i) => {
            return (
              <button
                key={i}
                type="button"
                name="category"
                onClick={updateFilterValue}
                value={e}
                className={
                  e === category
                    ? "border-b-2 border-orange-500 text-orange-500 w-fit justify-start py-1 capitalize"
                    : "w-fit justify-start py-1 capitalize"
                }
              >
                {e}
              </button>
            );
          })}
        </div>
      </div>

      <div className="py-4">
        <h3 className="font-semibold w-full mb-4">Company</h3>
        <form action="#">
          <select
            name="company"
            id="company"
            onClick={updateFilterValue}
            className="px-4 py-1 border outline-none rounded-md bg-gray-50 shadow-sm text-md hover:cursor-pointer capitalize w-3/4"
          >
            {companyData.map((e, i) => {
              return (
                <option key={i} value={e} name="company" className="capitalize">
                  {e}
                </option>
              );
            })}
          </select>
        </form>
      </div>

      <div className="py-4">
        <h3 className="font-semibold mb-4">Colors</h3>
        <div className='flex py-1 justify-between items-center'>
          {colorsData.map((currColor, index) => {
            if(currColor.toLowerCase() === 'all'){
              return <button
                value={currColor.toLowerCase()}
                name="color"
                key={index}
                onClick={updateFilterValue}
              >
                All
              </button>;
            }
            return (
              <button
                className={
                  color === currColor
                    ? `rounded-full p-3`
                    : `rounded-full p-3 opacity-75 hover:opacity-100`
                }
                value={currColor}
                name="color"
                style={{ backgroundColor: currColor }}
                key={index}
                onClick={updateFilterValue}
              >
                {color === currColor ? (
                  <FaCheck className="text-gray-500 text-sm" />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FilterSection
