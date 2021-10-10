
// reducer initial vals
const reducerCounterInitialState = { counter: 0 };

// reducer
export const reducerCounter = ( state=reducerCounterInitialState, action ) => {
    switch ( action.type ) {
        case 'increment':
            return { counter: state.counter + 1 };

        case 'increase':
            return { counter: state.counter + action.payload };

        case 'decrement':
            return { counter: state.counter - 1};

        case 'subtract':
            return { counter: state.counter - action.payload };

        case 'reset':
            return reducerCounterInitialState;

        default:
            return state;
    }
};
