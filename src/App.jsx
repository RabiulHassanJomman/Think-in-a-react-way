import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
function App() {
  return (
    <>
      <Counter>
        {(count, increamentCount) => ( <ClickCounter
            count={count}
            increamentCount={increamentCount}
          ></ClickCounter>)
        }
      </Counter>
    </>
  );
}

export default App;
