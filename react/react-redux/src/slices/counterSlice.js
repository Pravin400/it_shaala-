import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name : "counter",
    initialState: {value : 0},
    reducers : {
        // increment
        increment : (state) =>{}
        // decrement
        //  reset


    }
})

export const counterReducer = counterSlice.reducer;

export const { increment } =counterSlice.actions;