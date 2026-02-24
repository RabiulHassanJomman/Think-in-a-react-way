import { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loading: false,
        error: "",
        post: action.data,
      };
    case "ERROR":
      return {
        loading: false,
        error: action.error,
        post: "",
      };
  }
};

export default function GetPost2() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const effect = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "SUCCESS", data: json });
      })
      .catch(() => {
        dispatch({ type: "ERROR", error: "There was an error!" });
      });
  };

  useEffect(effect, []);

  return (
    <div>
      <h1>{state.loading ? "Loading" : state.post.title}</h1>
      <p>{state.error || null}</p>
    </div>
  );
}
