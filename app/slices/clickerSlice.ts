import {createSlice} from "@reduxjs/toolkit";

const clickerSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
        state.value += 1
        }
    }
})

export const { increment } = clickerSlice.actions;

export default clickerSlice.reducer;