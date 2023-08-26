import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    changeItems: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);

      item ? (item.quantity = action.payload.quantity) : state.products.push(action.payload);
    },
    delItem: (state, action) => {
      state.products = state.products.filter((item) => item.id !== action.payload);
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

export const { changeItems, delItem, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
