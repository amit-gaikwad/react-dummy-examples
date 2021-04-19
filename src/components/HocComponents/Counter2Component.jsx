import { Col, Row } from "antd";
import React from "react";
import { withCounter } from "./withCounter";
import PropTypes from "prop-types";
class CounterTwoComponent extends React.Component {
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
        <Col onMouseOver={this.props.handleIncrement}>
          Counter Value: {this.props.counter}
        </Col>
      </Row>
    );
  }
}

CounterTwoComponent.propTypes = {
  handleIncrement: PropTypes.func,
  counter: PropTypes.number,
};

export const CounterTwoContainer = withCounter(CounterTwoComponent);
