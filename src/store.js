import { configureStore } from "@reduxjs/toolkit";
import langSliceReducer from "./slices/langSlice";

const store = configureStore({
  reducer:{
    langSlice:langSliceReducer
  }
  
});

export default store;
