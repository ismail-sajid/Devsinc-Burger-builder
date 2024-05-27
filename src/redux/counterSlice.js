import { createSlice } from "@reduxjs/toolkit";

const ingredientPrices = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
};

const initialState = {
  value: 3.0,
};

const counterSlice = createSlice({
  name: "price",
  initialState,
  reducers: {
    addIngredient: (state, action) => {
      state.value += ingredientPrices[action.payload];
    },
    subIngredient: (state, action) => {
      state.value -= ingredientPrices[action.payload];
    },
  },
});

export const { addIngredient, subIngredient } = counterSlice.actions;
export default counterSlice.reducer;
