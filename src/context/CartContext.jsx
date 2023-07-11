import { createContext, useReducer } from "react";
import reducer from "../reducers/cartReducer";
import { useEffect } from "react";

const CartContext = createContext();

const getLocalCartData = ()=>{
    let localCartData = localStorage.getItem("TechBazarCart");
    if(localCartData === []){
        return [];
    }else{
        return JSON.parse(localCartData);
    }
}

const initialState = {
    cart: getLocalCartData(),
    total_item: "",
    total_amount: "",
    shipping_fee: 50000,
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

    // add the data in local storage
    useEffect(()=>{
        localStorage.setItem("TechBazarCart",JSON.stringify(state.cart));
    },[state.cart])

    return <CartContext.Provider value={{...state,addToCart,removeItem}}>
        {children}
    </CartContext.Provider>
}

export {CartProvider,CartContext}