// import { configureStore } from "@reduxjs/toolkit";
// import taskReducer from "../src/features/taskslice";

// export const store = configureStore({
//   reducer: {
//     tasks: taskReducer,   // 👈 MUST be "tasks"
//   },
// });


import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './features/taskslice'
const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;


