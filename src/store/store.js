import { configureStore, combineReducers } from "@reduxjs/toolkit";
import appReducer from "./appSlice";

const rootReducer = combineReducers({
  app: appReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
