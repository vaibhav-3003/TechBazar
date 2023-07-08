import React, { useContext } from 'react'
import { FilterContext } from '../context/FilterContext'

const FilterSection = () => {
  const {
    filters:{text,category},
    all_products,
    updateFilterValue
  } = useContext(FilterContext)

  const getUniqueData = (data, field)=>{
    let newValue = data.map((e)=>{
      return e[field];
    });

    newValue = ["All",...new Set(newValue)]
    return newValue
    // console.log(newValue)
  }

  //unique data
  const categoryData = getUniqueData(all_products,"category");

  const companyData = getUniqueData(all_products,"company");

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

      <div className="py-2">
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
                <option key={i} value={e} name="company" className='capitalize'>
                  {e}
                </option>
              );
            })}
          </select>
        </form>
      </div>
    </div>
  );
}

export default FilterSection
