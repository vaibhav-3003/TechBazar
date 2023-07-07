import { createContext, useContext, useEffect, useReducer } from "react";
import { AppContext } from "./ProductContext";
import reducer from '../reducers/filterReducer';

const FilterContext = createContext();

const initialState = {
    filter_products:[],
    all_products:[],
    grid_view:true,
    sorting_value:"lowest",
    filters:{
        text: ""
    }
}

const FilterContextProvider = ({children})=>{

    const {products} = useContext(AppContext);
    
    const [state,dispatch] = useReducer(reducer,initialState);

    //to set grid view
    const setGridView = ()=>{
        return dispatch({type: 'SET_GRID_VIEW'})
    }
    const setListView = ()=>{
        return dispatch({type: 'SET_LIST_VIEW'})
    }

    const sorting = (event)=>{
        let userValue = event.target.value;
        dispatch({type: 'GET_SORT_VALUE', payload: userValue})
    }

    const updateFilterValue = (event) => {
      let name = event.target.name;
      let value = event.target.value;

      return dispatch({type: 'UPDATE_FILTER_VALUE', payload: {name,value}});
    };

    useEffect(() => {
        dispatch({type: 'FILTER_PRODUCTS'})
    }, [products,state.filters])
    
    useEffect(() => {
      dispatch({ type: "SORTING_PRODUCTS", payload: products });
    }, [state.sorting_value]);
    
    useEffect(()=>{

        dispatch({type: 'LOAD_FILTER_PRODUCTS', payload: products});
    },[products])

    return <FilterContext.Provider value={{...state, setGridView,setListView,sorting,updateFilterValue}}>
        {children}
    </FilterContext.Provider>
}

export {FilterContextProvider,FilterContext}