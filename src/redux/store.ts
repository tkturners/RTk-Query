import { Store, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { todosApi } from "../features/api/apiSlice";

export const store: Store = configureStore({
  reducer: {
    counterReducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
