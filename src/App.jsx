import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import HoverCounter from "./components/HoverCounter";
function App() {
  return (
    <>
      <Counter>
        {(count, increamentCount) => (
          <ClickCounter
            count={count}
            increamentCount={increamentCount}
          ></ClickCounter>
        )}
      </Counter>

      <Counter>
        {(count, increamentCount) => (
          <HoverCounter
            count={count}
            increamentCount={increamentCount}
          ></HoverCounter>
        )}
      </Counter>
    </>
  );
}

export default App;
