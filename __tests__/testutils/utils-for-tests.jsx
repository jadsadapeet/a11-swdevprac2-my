import React from "react";
import { render } from '@testing-library/react'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { bookSlice } from '@/redux/features/bookSlice'

export function renderWithProviders(
    ui,
    {
      preloadedState = { bookSlice: {bookItems: [ {
        nameLastname: "Jane Adison",
        tel: "0925447885",
        venue: "GrandTable",
        bookDate: "2025/05/18"
      }, {
        nameLastname: "James Weston",
        tel: "0827789544",
        venue: "Bloom",
        bookDate: "2025/03/21"
      }]}},
      store = configureStore({
        reducer: { bookSlice: bookSlice.reducer }, preloadedState
      }),
      ...renderOptions
    } = {}
  ) {
      function Wrapper({ children }){
        return <Provider store={store}>{children}</Provider>
      }
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}