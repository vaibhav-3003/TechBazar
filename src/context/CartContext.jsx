import { createContext, useReducer } from "react";
import reducer from "../reducers/cartReducer";
import { useEffect } from "react";

const CartContext = createContext();

const getLocalCartData = ()=>{
    let localCartData = localStorage.getItem("TechBazarCart");

    const parsedData = JSON.parse(localCartData);
    if(!Array.isArray(parsedData)){
        return [];
    }
    return parsedData
}

const initialState = {
    cart: getLocalCartData(),
    total_item: 0,
    total_price: 0,
    shipping_fee: 5000,
};

const CartProvider = ({children})=>{

    const[state,dispatch] = useReducer(reducer,initialState);

    const addToCart = (id, color, amount, product)=>{
        dispatch({
          type: "ADD_TO_CART",
          payload: { id, color, amount, product },
        });
    };

    const removeItem = (id)=>{
        dispatch({type: "REMOVE_ITEM", payload: {id}});
    }

    const updateAmount = (event,id)=>{
        let value = event.target.value;
        dispatch({type: "UPDATE_AMOUNT", payload: {id,value}})
    }

    // add the data in local storage
    useEffect(()=>{
        dispatch({type: "CART_TOTAL_ITEM"})
        dispatch({type: "CART_TOTAL_PRICE"})
        localStorage.setItem("TechBazarCart",JSON.stringify(state.cart));
    },[state.cart])

    return <CartContext.Provider value={{...state,addToCart,removeItem,updateAmount}}>
        {children}
    </CartContext.Provider>
}

export {CartProvider,CartContext}