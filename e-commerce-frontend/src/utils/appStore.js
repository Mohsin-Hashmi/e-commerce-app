import { configureStore } from "@reduxjs/toolkit";
import  userReducer from "./userSlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
const appStore= configureStore({
    reducer:{
        user: userReducer,
        products: productReducer,
        cart: cartReducer,
    }
})

export default appStore;