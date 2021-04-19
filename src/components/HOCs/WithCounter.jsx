import React from "react";

export const withCounter = (OriginalComponent) => {
  class MyCounterComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { counter: 0 };
    }
    handleIncrement() {
      this.setState((prevState) => {
        return { counter: prevState.counter + 1 };
      });
    }
    render() {
      return (
        <OriginalComponent
          counter={this.state.counter}
          handleIncrement={this.handleIncrement.bind(this)}
        ></OriginalComponent>
      );
    }
  }
  return MyCounterComponent;
};
