import { createSlice } from "@reduxjs/toolkit";

// initial state
const sliceCounterInitialState = { counter: 0 };


// slice counter
export const sliceCounter = createSlice(
    {
        name: 'counter',
        initialState: sliceCounterInitialState,
        
        reducers: {
            increment(state) {
                state.counter++;
            },
            increase(state, action) {
                state.counter += action.payload;
            },
            decrement(state) {
                state.counter--;
            },
            subtract(state, action) {
                state.counter -= action.payload;
            },
            reset(state) {
                state.counter = sliceCounterInitialState.counter;
            },
        }
    }
);
