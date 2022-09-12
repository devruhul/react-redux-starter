import React, { useReducer } from 'react';

const initializeCount = {
    count: 0,
    clicks: 0
}

const countReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            };

        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            };

        // reset count value to 0
        case 'RESET':
            return { count: 0 };

        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(countReducer, initializeCount)

    return (
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })} >Increase</button>
            {/* when value is negative want o disable the button */}
            <button disabled={state.count < 1} onClick={() => dispatch({ type: 'DECREMENT' })} >Decrease</button>
            <button disabled={state.count === 0} onClick={() => dispatch({ type: 'RESET' })} >Reset</button>
        </div>
    );
};

export default Counter;