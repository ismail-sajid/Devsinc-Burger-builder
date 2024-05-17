import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "price",
  initialState: {
    value: 3.0,
  },
  reducers: {
    addSalad: (state) => {
      state.value += 0.5;
    },
    addBacon: (state) => {
      state.value += 0.7;
    },
    addCheese: (state) => {
      state.value += 0.4;
    },
    addMeat: (state) => {
      state.value += 1.3;
    },
    subSalad: (state) => {
      state.value -= 0.5;
    },
    subBacon: (state) => {
      state.value -= 0.7;
    },
    subCheese: (state) => {
      state.value -= 0.4;
    },
    subMeat: (state) => {
      state.value -= 1.3;
    },
  },
});
export const {
  addSalad,
  addBacon,
  addCheese,
  addMeat,
  subSalad,
  subBacon,
  subCheese,
  subMeat,
} = counterSlice.actions;
export default counterSlice.reducer;
