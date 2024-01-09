import { createSlice } from "@reduxjs/toolkit";

interface ItemType {
  id: string;
  name: string;
  quantity: number;
}

const initState: ItemType[] = [];
// const initState: ItemType[] = [{ id: "1", name: "hi" }];

export const itemSlice = createSlice({
  initialState: initState,
  name: "items",
  reducers: {
    addItem: (state, action) => {
      const { id, name } = action.payload;
      const existingItem = state.find((i) => i.id === id);
      if (existingItem === undefined) {
        state.push({ id, name, quantity: 1 });
      } else {
        existingItem.quantity += 1;
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      return state.filter((i) => i.id !== id);
    },
    removeItemByOne: (state, action) => {
      const id = action.payload;
      console.log("removeItemByOne", id);
      const existingItem = state.find((i) => i.id === id);
      if (existingItem !== undefined) {
        if (existingItem.quantity != 1) {
          existingItem.quantity -= 1;
        } else {
          return state.filter((i) => i.id !== id);
        }
      }
    },
  },
});

export const { addItem, removeItem, removeItemByOne } = itemSlice.actions;
export default itemSlice.reducer;
