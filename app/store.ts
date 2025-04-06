import {configureStore} from "@reduxjs/toolkit";
import clickerReducer from "~/slices/clickerSlice";

export const store = configureStore({
    reducer: {
        clicker: clickerReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;