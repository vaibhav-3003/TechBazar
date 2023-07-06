import { createContext, useContext, useEffect, useReducer } from "react";
import { AppContext } from "./ProductContext";
import reducer from '../reducers/filterReducer';

const FilterContext = createContext();

const initialState = {
    filter_products:[],
    all_products:[],
    grid_view:true,
    sorting_value:"lowest"
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

    const sorting = ()=>{
        dispatch({type: 'GET_SORT_VALUE'})
    }

    useEffect(() => {
      dispatch({type:'SORTING_PRODUCTS', payload:products})
    
    }, [state.sorting_value])
    

    useEffect(()=>{

        dispatch({type: 'LOAD_FILTER_PRODUCTS', payload: products});
    },[products])

    return <FilterContext.Provider value={{...state, setGridView,setListView,sorting}}>
        {children}
    </FilterContext.Provider>
}

export {FilterContextProvider,FilterContext}