/* eslint-disable react/prop-types */
import React from "react";
import { withCounter } from "./WithCounter";
export class CliCkCounter extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { counter: 0 };
  //   }
  //   handleIncrement() {
  //     this.setState((prevState) => {
  //       return { counter: prevState.counter + 1 };
  //     });
  //   }
  render() {
    const { counter, handleIncrement } = this.props;
    return <button onClick={handleIncrement}>Clicked :{counter}</button>;
  }
}

export const ClickCounter2 = withCounter(CliCkCounter);
