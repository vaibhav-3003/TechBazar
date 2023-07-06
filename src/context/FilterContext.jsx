import { createContext, useContext, useEffect, useReducer } from "react";
import { AppContext } from "./ProductContext";
import reducer from '../reducers/filterReducer';

const FilterContext = createContext();

const initialState = {
    filter_products:[],
    all_products:[],
    grid_view:false
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

    useEffect(()=>{

        dispatch({type: 'LOAD_FILTER_PRODUCTS', payload: products});
    },[products])

    return <FilterContext.Provider value={{...state, setGridView,setListView}}>
        {children}
    </FilterContext.Provider>
}

export {FilterContextProvider,FilterContext}