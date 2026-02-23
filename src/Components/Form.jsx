import { useEffect, useRef, useState } from "react";
import Input from "./Input";

export default function Form() {
  const inputRef = useRef(null);
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };
  useEffect(() => {
    inputRef.current = setInterval(tick, 1000);

    return () => {
      clearInterval(inputRef.current);
    };
  }, []);

  return (
    <div>
      <Input type={"text"} placeholder={"Enter text"}></Input>
      <h1>{date.toLocaleTimeString()}</h1>
      <button onClick={() => clearInterval(inputRef.current)}>Pause</button>
    </div>
  );
}
