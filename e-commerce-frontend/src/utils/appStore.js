import { configureStore } from "@reduxjs/toolkit";
import  useReducer from "./userSlice";
import productReducer from "./productSlice"
const appStore= configureStore({
    reducer:{
        user: useReducer,
        products: productReducer,
    }
})

export default appStore;