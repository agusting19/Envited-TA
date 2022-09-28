import { configureStore } from "@reduxjs/toolkit";
import { eventReducer } from "./reducer";

const store = configureStore({
  reducer: {
    event: eventReducer,
  },
});

export default store;
