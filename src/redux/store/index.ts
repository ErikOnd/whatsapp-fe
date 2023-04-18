import { configureStore } from "@reduxjs/toolkit";

import { combineReducers } from "@reduxjs/toolkit";

const combinedReducers = combineReducers({});

const store = configureStore({
  reducer: combinedReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;