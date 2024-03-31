import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    list:[],
    totalamount:0,
    totalperson:0,
}

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        add:(state,action)=>{
          state.list.push(action.payload)
        },
        remove:(state,action)=>{
            const newstate =  state.list.filter((item)=>item.id !== action.payload)
            state.list = newstate
        },
        setperson: (state,action)=>{
            state.totalperson = action.payload
        },
        addAmount:(state,action)=>{
            state.totalamount = parseInt(state.totalamount) + parseInt(action.payload)
        },
        subAmount:(state,action)=>{
            state.totalamount = parseInt(state.totalamount) - parseInt(action.payload)
        }
    }
})

export const {setperson,add,remove,addAmount,subAmount} = CartSlice.actions;
export default CartSlice.reducer;