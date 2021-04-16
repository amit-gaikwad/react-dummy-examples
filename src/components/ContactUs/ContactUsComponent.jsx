import { Button, Col, Row } from "antd";
import React from "react";
import { connect } from "react-redux";
import { restCounter } from "../../Actions/CounterAction";
import PropTypes from "prop-types";
class ContactUsComponent extends React.Component {
  constructor() {
    super();
  }
  handleResetCounter() {
    this.props.myResetCounter();
  }
  render() {
    var name = "John";
    return (
      <Row>
        Contact Us Page
        <Col span={24}>
          <Button onClick={this.handleResetCounter.bind(this)}>
            Reset Counter :{name.xyz()}
          </Button>
        </Col>
      </Row>
    );
  }
}
ContactUsComponent.propTypes = {
  myResetCounter: PropTypes.func.isRequired,
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    myResetCounter: () => {
      dispatch(restCounter());
    },
  };
};

export const ContactUsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactUsComponent);
