import { configureStore } from "@reduxjs/toolkit";
import  useReducer from "./userSlice";
import authReduce from "./authSlice";
const appStore= configureStore({
    reducer:{
        auth: authReduce,
        user: useReducer,
    }
})

export default appStore;