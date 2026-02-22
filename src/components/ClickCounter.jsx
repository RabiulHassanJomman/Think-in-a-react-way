/* eslint-disable react-refresh/only-export-components */
import withCounter from "./HOC/withCounter";
const ClickCounter = (props) => {
  const { count, increamentCount } = props;
  return (
    <div>
      <button type="button" onClick={increamentCount}>
        Clicked {count} times
      </button>
    </div>
  );
};

export default withCounter(ClickCounter);