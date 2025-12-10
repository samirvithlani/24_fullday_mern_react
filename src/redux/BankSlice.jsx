import { createSlice } from "@reduxjs/toolkit";

const bankSlice = createSlice({
    name:"bank",
    initialState:{
        balance:0
    },
    reducers:{
        depositAction:(state,action)=>{
            //action payload..
            state.balance = state.balance + action.payload
        },
        withdrawAction:()=>{
            //hw
        }
    }
})
export  const {depositAction,withdrawAction} = bankSlice.actions
export default bankSlice.reducer