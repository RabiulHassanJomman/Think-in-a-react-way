function ClickCounter(props) {
  const { count, increamentCount } = props;
  return (
    <div>
      <button type="button" onClick={increamentCount}>
        Clicked {count} times
      </button>
    </div>
  );
}

export default ClickCounter;
