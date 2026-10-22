import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "./features/bookSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      bookSlice: bookSlice.reducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
