import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: [],

  reducers: {
    addProduct: (state, action) => {
      return action.payload;
    },
    removeProduct: () => {
      return [];
    },
  },
});

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
