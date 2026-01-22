import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoslice";

export const store = configureStore({
  reducer: {
    todo: todoReducer   // 👈 yahi important
  }
});
