import { configureStore } from "@reduxjs/toolkit"
import permissionReducer from "./permissionReducer";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { rewardsApi } from "./services/rewards";
import { questApi } from "./services/quest";

export const store = configureStore({
  reducer: {
    permission: permissionReducer,
    [rewardsApi.reducerPath]: rewardsApi.reducer,
    [questApi.reducerPath]: questApi.reducer
  },
  middleware: (getDefaultMiddleware) =>    getDefaultMiddleware().concat(rewardsApi.middleware).concat(questApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch);
