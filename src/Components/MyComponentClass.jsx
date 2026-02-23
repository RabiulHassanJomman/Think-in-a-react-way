import { Component } from "react";

export default class MyComponentClass extends Component {
  state = {
    time: new Date(),
    count: 0,
  };

  componentDidMount() {
    setInterval(this.tick, 1000);
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(){
    document.title = `Clicked ${this.state.count} times`;
  }

  tick = () => {
    this.setState({ time: new Date() });
  };

  render() {
    const { time } = this.state;
    return (
      <div>
        <p>Time {time.toLocaleTimeString()} </p>
        <button onClick={() => this.setState((prevState) => ( {count: prevState.count + 1}))}>click</button>
      </div>
    );
  }
}
