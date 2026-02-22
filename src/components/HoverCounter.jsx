/* eslint-disable react-refresh/only-export-components */
import withCounter from "./HOC/withCounter";

const HoverCounter = (props) =>{
  const {count, increamentCount} = props;

  return(
    <div>
      <h1 onMouseOver={increamentCount}>Hovered {count} times</h1>
    </div>
  )
}

export default withCounter(HoverCounter);  