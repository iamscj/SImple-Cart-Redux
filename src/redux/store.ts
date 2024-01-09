import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter";
import itemSlice from "./slices/item";

export const store = configureStore({
  reducer: { counter: counterSlice, items: itemSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
