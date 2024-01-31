import { configureStore, combineReducers } from "@reduxjs/toolkit";
import linkSlice from "./linkSlice";

const reducer = combineReducers({
  link: linkSlice,
});

const store = configureStore({ reducer });

export default store;
