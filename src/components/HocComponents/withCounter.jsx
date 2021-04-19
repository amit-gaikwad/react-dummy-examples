import React from "react";

export const withCounter = (OldComponent) => {
  class NewComonent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { counter: 0 };
    }
    handleIncrement() {
      this.setState({ counter: this.state.counter + 1 });
    }

    render() {
      return (
        <OldComponent
          xyz="amit"
          counter={this.state.counter}
          handleIncrement={this.handleIncrement.bind(this)}
        ></OldComponent>
      );
    }
  }
  return NewComonent;
};
