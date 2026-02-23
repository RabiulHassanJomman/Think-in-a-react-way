import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "../Contexts/themeContext"
import { useContext } from "react";

export default function Content() {
  const context = useContext(ThemeContext);
  const {theme, switchTheme} = context;
  
  return (
    <div>
      <h1>this is a content</h1>
      <Counter>
        {(count, increamentCount) => {
          return (
            <HoverCounter
              count={count}
              increamentCount={increamentCount}
              theme={theme}
              switchTheme={switchTheme}
            ></HoverCounter>
          );
        }}
      </Counter>
    </div>
  );
}
