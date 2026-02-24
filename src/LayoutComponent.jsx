import useWindowWidth from "./hooks/useWindowWidth";

export default function LayoutComponent() {
  const onSmallScreen = useWindowWidth(600);
  return (
    <div>
      <h2>You are on {onSmallScreen ? "small" : "large"} screen</h2>
    </div>
  );
}
