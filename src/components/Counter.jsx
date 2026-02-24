import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.action) {
    case "increment":
      return { ...state, count: state.count + action.value };
    case "decrement":
      return { ...state, count: state.count - action.value };
    case "increment2":
      return { ...state, count2: state.count2 + action.value };
    case "decrement2":
      return { ...state, count2: state.count2 - action.value };
  }
};

const initialState = { count: 0, count2: 0 };

export default function Counter() {
  const [{ count, count2 }, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <h1>Count - {count}</h1>
        <button onClick={() => dispatch({action: "increment", value: 1})}>Increment</button>
        <button onClick={() => dispatch({action: "decrement", value: 1})}>Decrement</button>
      </div>

      <div>
        <h1>Count2 - {count2}</h1>
        <button onClick={() => dispatch({action: "increment2", value: 5})}>Increment2</button>
        <button onClick={() => dispatch({action: "decrement2", value: 5})}>Decrement2</button>
      </div>
    </div>
  );
}
