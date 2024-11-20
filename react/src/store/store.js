import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSclice"; // Correct the import

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
