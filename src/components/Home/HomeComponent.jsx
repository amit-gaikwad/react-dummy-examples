import { Button, Col, Row } from "antd";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import { incrementCounter } from "../../Actions/CounterAction";
//import { INCREMENT_COUNTER } from "../../Actions/ActionTypes";
import { incrementCounter } from "../../Actions/CounterAction";

class HomeComponent extends React.Component {
  constructor() {
    super();
  }

  handleIncrementCounter() {
    this.props.xyz();
    console.log("increment clicked");
  }

  render() {
    console.log("props of home ciomponent", this.props);
    return (
      <Row>
        Home Page
        <Col span={24}>
          <Button onClick={this.handleIncrementCounter.bind(this)}>
            Incerment Counter
          </Button>
        </Col>
      </Row>
    );
  }
}

HomeComponent.propTypes = {
  xyz: PropTypes.func.isRequired,
};

const mapStateToProps = () => {
  return {};
}; // subscriber | listener

const mapDispatchToProps = (dispatch) => {
  return {
    xyz: () => {
      dispatch(incrementCounter());
    },
  };
}; // publisher | sender

export const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);
