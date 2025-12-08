//sclice --> action --> reducers

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[]
    },
    reducers:{
        //actions --> js function
        addToCart :(state,action)=>{
            console.log(state) //state --> initailState object state == cart
            console.log(action)
        }

    }
})
//2 param will export
//actions
//reducer object
export const {addToCart} = cartSlice.actions
export default cartSlice.reducer 