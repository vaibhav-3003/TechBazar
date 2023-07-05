import { createContext, useContext, useEffect, useReducer } from "react";
import { AppContext } from "./ProductContext";
import reducer from '../reducers/filterReducer';

const FilterContext = createContext();

const initialState = {
    filter_products:[],
    all_products:[],
}

const FilterContextProvider = ({children})=>{

    const {products} = useContext(AppContext);

    const [state,dispatch] = useReducer(reducer,initialState);

    useEffect(()=>{
        dispatch({type: 'LOAD_FILTER_PRODUCTS', payload: products});
    },[products])

    return <FilterContext.Provider value={{...state}}>
        {children}
    </FilterContext.Provider>
}

export {FilterContextProvider,FilterContext}