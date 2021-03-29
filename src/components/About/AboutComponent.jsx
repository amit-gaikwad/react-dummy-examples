import { Button, Col, Row } from "antd";
import React from "react";
import { connect } from "react-redux";
import { decrementCounter } from "../../Actions/CounterAction";
import PropTypes from "prop-types";
class AboutComponent extends React.Component {
  constructor() {
    super();
  }
  handleDecrement() {
    this.props.myDecrementCounter();
  }
  render() {
    return (
      <Row>
        ABout Page
        <Col span={24}>
          <Button onClick={this.handleDecrement.bind(this)}>Decerment</Button>
        </Col>
      </Row>
    );
  }
}

AboutComponent.propTypes = {
  myDecrementCounter: PropTypes.func.isRequired,
};

const mapStateToProps = () => {
  return {};
}; // subscriber
const mapDispatchToProps = (dispatch) => {
  return {
    myDecrementCounter: () => {
      dispatch(decrementCounter());
    },
  };
};

export const AboutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutComponent);
