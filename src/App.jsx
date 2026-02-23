import { useCallback, useMemo, useState } from "react";
import Button from "./Button";
import ShowCount from "./Components/ShowCount";
import Title from "./Components/Title";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);

  const incrementByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
  }, []);

  const isEvenOrOdd = useMemo(() => {
    for (var i = 0; i < 1000000000; i++) {
      i;
    }
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <>
      <Title />
      <ShowCount count={count1} title={"Count1"}></ShowCount>
      <Button handleClick={incrementByOne}>IncrementByOne</Button>
      <span>{isEvenOrOdd ? "Even" : "Odd"}</span>
      <hr />

      <ShowCount count={count2} title={"Count2"}></ShowCount>
      <Button handleClick={incrementByFive}>IncrementByFive</Button>
    </>
  );
}

export default App;
