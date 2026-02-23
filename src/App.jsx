import { useState } from "react";
import MyComponent from "./Components/MyComponent";

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className="app"> {show && <MyComponent></MyComponent>} </div>
      <button onClick={() => setShow((prevShow) => !prevShow )}>{show ? "hide" : "show"} </button>
    </>
  );
}

export default App;
