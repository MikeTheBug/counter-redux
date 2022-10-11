import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducer/counter-reducer";

export const store = configureStore({
    reducer: {
        counter : counterReducer
    },
    devTools: process.env.NODE_ENV !== 'production'
})