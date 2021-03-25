import { Col, Row } from "antd";
import React, { Component } from "react";
import { employees } from "../Utils/EmployeeData";
import PropTypes from "prop-types";

export class EmployeeDetailsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { employees: employees, eno: 2 };
  }
  renderEmployeeDetails() {
    const emp = this.state.employees.find((e) => {
      return e.id == this.props.match.params.myEmployeeId;
    });
    return <Col span={24}>Name :{emp.name}</Col>;
  }

  render() {
    // console.log(
    //   "props in Employee Details",
    //   this.props.match.params.myEmployeeId
    // );
    return (
      <Row>
        <Col>Employee Details</Col>
        {this.renderEmployeeDetails()}
      </Row>
    );
  }
}

EmployeeDetailsComponent.propTypes = {
  match: PropTypes.object.isRequired,
};
