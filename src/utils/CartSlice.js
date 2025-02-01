import { createSlice } from "@reduxjs/toolkit";

const CardSlice = createSlice({
    name : "cart",
    initialState:{
        Items:[],
    },
    reducers:{
        addItem: (state,action)=>{
           state.Items.push(action.payload);
        },
        removeItem: (state)=>{
           state.Items.pop();
        },
        clearCart :(state)=>{
            state.Items.length = 0;
        },
    },
}) ;


export const{addItem, removeItem, clearCart} = CardSlice.actions
export default CardSlice.reducer;