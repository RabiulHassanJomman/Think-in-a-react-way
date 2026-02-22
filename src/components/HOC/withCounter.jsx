import React from "react";
// eslint-disable-next-line no-unused-vars
export default function withCounter(OriginalComponent){
  class NewComponent extends React.Component{
    state = {count: 0}
    increamentCount = () => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }

    render() {
      const { count } = this.state;
      return (
        <OriginalComponent
          count={count}
          increamentCount={this.increamentCount}
        />
      );
    }
  }

  return NewComponent;
}