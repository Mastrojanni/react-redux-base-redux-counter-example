import { configureStore } from '@reduxjs/toolkit';

// slice
import { sliceCounter } from '../slices/slice-counter';

// create store
export const store = configureStore(
    {
        reducer: {
            stateSliceCounter: sliceCounter.reducer,
        }
    }
);

// export actions
export const sliceCounterActions = sliceCounter.actions;
