import {configureStore} from "@reduxjs/toolkit";
import clickerReducer from "~/slices/clickerSlice";
import httpCatReducer from "~/slices/httpCatSlice";

export const store = configureStore({
    reducer: {
        clicker: clickerReducer,
        httpCat: httpCatReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;