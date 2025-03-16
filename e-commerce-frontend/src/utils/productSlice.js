
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: null,

    reducers: {
        addProduct: (state, action) => {
            return action.payload; 
        },
        removeProduct: ()=>{
           return null;
        }
    }
})

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;