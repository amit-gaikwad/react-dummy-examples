import { Col, Row } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class NewEmployeeListComponent extends Component {
  render() {
    return (
      <Row>
        <Col span={24}>ALl new Employees</Col>
        {this.props.myEmployees.map((e) => {
          return (
            <Col span={24} key={e.emp_email}>
              Name : {e.emp_name}
            </Col>
          );
        })}
      </Row>
    );
  }
}
NewEmployeeListComponent.propTypes = {
  myEmployees: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    myEmployees: state.EmployeeReducer.employees,
  };
};

const mapDispatchToProps = () => {
  return {};
};

export const NewEmployeeListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewEmployeeListComponent);
