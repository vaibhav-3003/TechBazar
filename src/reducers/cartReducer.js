const cartReducer = (state,action)=>{
    switch (action.type) {
        case "ADD_TO_CART":
            let {id,color,amount,product} = action.payload;

            //if existing product is already added then only increase the amount
            let existingProduct = state.cart.find((e)=> e.id === id+color)

            if(existingProduct){

                let updatedProduct = state.cart.map((e)=>{
                    if(e.id === id+color){
                        let newAmount = e.amount + amount;

                        if(newAmount >= e.max){
                            newAmount = e.max;
                        }
                        return {
                            ...e,
                            amount: newAmount
                        }
                    }else{
                        return e;
                    }
                })

                return {
                    ...state,
                    cart:updatedProduct
                }

            }else{
                let cartProductData = {
                    id: id+color,
                    name: product.name,
                    color,
                    amount,
                    image : product.image[0].url,
                    price: product.price,
                    max: product.stock,
                }
    
                return {
                    ...state,
                    cart:[...state.cart,cartProductData]
                }
            }
            
        
        case "REMOVE_ITEM":
            let updatedCart = state.cart.filter((e)=> e.id !== action.payload.id)
            return {
                ...state,
                cart:updatedCart
            }
            
        case "UPDATE_AMOUNT":
            let updatedProduct = state.cart.map((e)=>{
                if(e.id === action.payload.id){
                    let updatedAmount = action.payload.value;

                    return {
                        ...e,
                        amount: updatedAmount
                    }
                }else{
                    return e
                }
            })

            return {
                ...state,
                cart: updatedProduct
            }

        default:
            return state;
    }
}

export default cartReducer