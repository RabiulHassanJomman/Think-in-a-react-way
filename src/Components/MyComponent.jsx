import { useEffect, useState } from "react";

export default function MyComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  const tick = () => {
    console.log("time updated"); 
    setTime(new Date());
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {clearInterval(interval)}
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        click
      </button>

      <br />
      <br />

      <p>{text}</p>

      <textarea
        name=""
        id=""
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
}
