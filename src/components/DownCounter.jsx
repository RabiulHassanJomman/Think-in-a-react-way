/* eslint-disable react-refresh/only-export-components */
import withLoading from "./HOC/withLoading";

const DownCounter = () => {
  return <div>
    <h1>this is not loading</h1>
  </div>
}

export default withLoading(DownCounter);