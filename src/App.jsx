import ClickComponent from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import DownCounter from "./components/DownCounter";
function App() {
  return (
    <>
      <ClickComponent></ClickComponent>
      <HoverCounter></HoverCounter>
      <DownCounter isLoading={false}></DownCounter>
    </>
  );
}

export default App;
