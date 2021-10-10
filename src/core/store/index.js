import { createStore } from "redux";

// reducers
import { reducerCounter } from '../reducers/reducer-counter';

// create store
export const store = createStore(reducerCounter);
