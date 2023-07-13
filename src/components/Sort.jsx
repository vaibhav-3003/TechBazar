import React, { useContext } from 'react'
import {BsFillGridFill, BsList} from 'react-icons/bs'
import { FilterContext } from '../context/FilterContext';

const Sort = () => {
  const {grid_view,setGridView,setListView,filter_products,sorting} = useContext(FilterContext);

  return (
    <div className="py-4 flex justify-between items-center px-2">
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
        <p className="text-md font-semibold absolute left-full md:relative md:left-0">{`${filter_products.length} Products Available`}</p>
      </div>

      
      <div>
          <form action="#">
            <select name="sort" id="sort" className='px-5 py-2 border outline-none rounded-md bg-gray-50 shadow-sm text-md font-semibold hover:cursor-pointer'
            onClick={sorting}>
              <option value="lowest">Price(lowest)</option>
              <option value="highest">Price(highest)</option>
              <option value="a-z">Price(a-z)</option>
              <option value="z-a">Price(z-a)</option>
            </select>
          </form>
      </div>
    </div>
    
  );
}

export default Sort
