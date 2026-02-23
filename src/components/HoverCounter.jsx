function HoverCounter(props) {
  const { count, increamentCount, theme, switchTheme } = props;
  const style =
    theme === "dark" ? { backgroundColor: "#000000", color: "#ffffff" } : null;
  return (
    <div>
      <h1 style={style} onMouseOver={increamentCount}>
        Hovered {count} times
      </h1>
      <button type="button" onClick={switchTheme}>Switch Theme</button>
    </div>
  );
}

export default HoverCounter;
