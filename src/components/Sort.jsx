import React, { useContext } from 'react'
import {BsFillGridFill, BsList} from 'react-icons/bs'
import { FilterContext } from '../context/FilterContext';

const Sort = () => {
  const {grid_view,setGridView,setListView,filter_products} = useContext(FilterContext);

  return (
    <div className="py-4 flex justify-between">
      <div className="flex gap-4">
        <button
          className={
            grid_view
              ? `p-2 bg-gray-800 rounded-md`
              : `p-2 bg-orange-100 rounded-md`
          }
          onClick={setGridView}
        >
          <BsFillGridFill
            className={
              grid_view ? `text-white text-sm` : `text-gray-800 text-sm`
            }
          />
        </button>
        <button
          className={
            !grid_view
              ? `p-2 bg-gray-800 text-white rounded-md`
              : `p-2 bg-orange-100 rounded-md`
          }
          onClick={setListView}
        >
          <BsList className={!grid_view ? `text-white` : `text-gray-800`} />
        </button>
      </div>

      <div>
        <p className='text-md font-semibold'>{`${filter_products.length} Products Available`}</p>
      </div>

      <div>DropDown</div>
    </div>
  );
}

export default Sort
