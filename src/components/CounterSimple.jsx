import React, { useReducer } from 'react'

const initialState = 0;

const reducer = (state, action) => {
  switch(action){
    case 'increment': return state + 1;

    case 'decrement': return state - 1;
  }
}

export default function CounterSimple() {
  const [state1, dispatch1] = useReducer(reducer, initialState);
  const [state2, dispatch2] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <h1>Count1 - {state1}</h1>
        <button onClick={() => dispatch1('increment')}>Increment1</button>
        <button onClick={() => dispatch1('decrement')}>Decrement1</button>
      </div>

      <div>
        <h1>Count2 - {state2}</h1>
        <button onClick={() => dispatch2('increment')}>Increment2</button>
        <button onClick={() => dispatch2('decrement')}>Decrement2</button>
      </div>
    </div>
  )
}
