import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Col, Row } from "antd";
import {
  decrementCounter,
  increamentCounter,
  resetCounter,
  setCounter,
} from "../Actions/CounterAction";
//import { incrementCounterByOne } from "../Actions/CounterAction";

export function CounterCompnent(props) {
  const handleIncrementByOne = () => {
    props.incrementCounterByOne();
  };
  const handleDecrementByOne = () => {
    props.decrementCounterByOne();
  };
  const resetCounter = () => {
    props.resetCounter();
  };

  const setCounter = () => {
    props.setCounter(100);
  };
  return (
    <Row>
      <Col span={24}>Counter Opertaions</Col>
      <Col span={24}>
        <Button onClick={handleIncrementByOne}>Increment By 1</Button>
        <Button onClick={handleDecrementByOne}>Decrement By 1</Button>
        <Button onClick={resetCounter}>Reset to Zero</Button>
        <Button onClick={setCounter}>Set counter</Button>
      </Col>
    </Row>
  );
}

CounterCompnent.propTypes = {
  incrementCounterByOne: PropTypes.func.isRequired,
  decrementCounterByOne: PropTypes.func.isRequired,
  resetCounter: PropTypes.func.isRequired,
  setCounter: PropTypes.func.isRequired,
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    // incrementCounterByOne: () => {
    //   dispatch(incrementCounterByOne());
    // },
    // incrementCounterByOne: () => dispatch({ type: "INCREMENT_COUNTER" }),
    incrementCounterByOne: () => dispatch(increamentCounter()),
    decrementCounterByOne: () => dispatch(decrementCounter()),
    resetCounter: () => dispatch(resetCounter()),
    setCounter: (value) => dispatch(setCounter(value)),
  };
};

export const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterCompnent);
