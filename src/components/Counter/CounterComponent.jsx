import { Button, Col, Input, Row } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setCounter } from "../../Actions/CounterAction";

export class CounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counterValue: this.props.mylatestCounter,
    };
  }
  handleCounterValueChange(event) {
    this.setState({ counterValue: Number(event.target.value) });
  }

  handleSetCounterClick() {
    this.props.mySetCounter(this.state.counterValue);
  }

  render() {
    return (
      <Row>
        <Col span={24}>Counter Operations</Col>
        <Col span={24}>
          {this.props.mylatestCounter}
          <Input
            value={this.state.counterValue}
            onChange={this.handleCounterValueChange.bind(this)}
          ></Input>
          <Button onClick={this.handleSetCounterClick.bind(this)}>
            Set Counter
          </Button>
        </Col>
      </Row>
    );
  }
}

CounterComponent.propTypes = {
  mySetCounter: PropTypes.func.isRequired,
  mylatestCounter: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  return {
    mylatestCounter: state.CounterReducer.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    mySetCounter: (value) => {
      dispatch(setCounter(value));
    },
  };
};

export const ConterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);
