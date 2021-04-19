import { Button, Col, Row } from "antd";
import React from "react";
import { withCounter } from "./withCounter";
import PropTypes from "prop-types";
class CounterOneComponent extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { counter: 0 };
  //   }
  //   handleIncrement() {
  //     this.setState({ counter: this.state.counter + 1 });
  //   }

  render() {
    return (
      <Row>
        <Col span={24}>Counter on button Click</Col>
        <Col span={24}>
          {this.props.xyz}
          <Button onClick={this.props.handleIncrement}>Increment</Button>
          Counter Value: {this.props.counter}
        </Col>
      </Row>
    );
  }
}
CounterOneComponent.propTypes = {
  xyz: PropTypes.string,
  counter: PropTypes.number,
  handleIncrement: PropTypes.func,
};

export const CounterOneContainer = withCounter(CounterOneComponent);

//-> withcounter -> CounterOneComponent
